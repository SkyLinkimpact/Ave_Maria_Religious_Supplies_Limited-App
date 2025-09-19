"use client";

import useCategories from "@/hooks/useCategories";
import { Category } from "@/lib/types";
import Link from "next/link";

function CategoryItem({
  category,
  isDefault,
}: Readonly<{ category: Omit<Category, "createdAt">; isDefault?: boolean }>) {
  return (
    <div className="relative h-56 w-full rounded-md border-slate-300 border">
      <Link
        className="absolute inset-0 z-10"
        href={isDefault ? "/products" : `/products?category=${category.slug}`}
      />

      <section className="p-2 font-semibold text-center bg-secondary text-secondary-foreground absolute bottom-0 h-20 w-full flex flex-col items-center justify-center rounded-b-md">
        {category.title}
      </section>
    </div>
  );
}

export default function Categories() {
  const { categories, isLoading } = useCategories();

  if (isLoading)
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 8 })
          .map((_, index) => `#${index}-product-category-loader`)
          .map((l) => (
            <div
              key={l}
              className="h-56 w-full animate-pulse rounded-md border-slate-300 border bg-slate-200"
            />
          ))}
      </div>
    );

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <CategoryItem
        category={{ id: "all", title: "All", slug: "all" }}
        key={"all"}
        isDefault
      />
      {categories?.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  );
}
