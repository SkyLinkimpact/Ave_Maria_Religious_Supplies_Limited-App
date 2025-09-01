"use client";

import { Category, Products } from "@/lib/types";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import ProductItem from "../_components/product-item";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

function ProductsPage() {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const router = useRouter();
  const category = searchParams.get("category");
  const [categories, setCategories] = useState<Category[]>();
  const [products, setProducts] = useState<Products>();

  const nextPage = () => {
    if (products !== undefined) {
      let route = "products";
      const nextPage = parseInt(page ?? "1") + 1;

      if (nextPage <= products.meta.last_page)
        route = `${route}?page=${nextPage}`;

      if (category) {
        if (nextPage <= products.meta.last_page) {
          route = `${route}&category=${category}`;
        } else {
          route = `${route}?category=${category}`;
        }
      }

      router.push(route);
    }
  };

  const prevPage = () => {
    if (products !== undefined) {
      let route = "products";
      const currPage = parseInt(page ?? "1") - 1;

      if (currPage > 0) route = `${route}?page=${currPage}`;

      if (category) {
        if (currPage > 0) {
          route = `${route}&category=${category}`;
        } else {
          route = `${route}?category=${category}`;
        }
      }

      router.push(route);
    }
  };

  useEffect(() => {
    getCategories().then((c) => setCategories(c));
  }, []);

  useEffect(() => {
    getProducts(parseInt(page ?? "1"), category).then((p) => setProducts(p));
  }, [page, category]);

  return (
    <Suspense fallback={<>Loading</>}>
      <div className="grid md:grid-cols-[auto_1fr] gap-4 h-full">
        <div className="hidden md:flex flex-col gap-2 w-60 border-r">
          <Link
            key={"all"}
            href={`/products`}
            className={cn(
              "p-4 hover:bg-primary hover:text-white hover:font-semibold duration-150 ease-in transition-all"
            )}
          >
            All
          </Link>
          {categories?.map((cat) => (
            <Link
              key={cat.id}
              href={`/products?category=${cat.slug}`}
              className={cn(
                "p-4 hover:bg-primary hover:text-white hover:font-semibold duration-150 ease-in transition-all",
                category === cat.slug && "text-primary font-semibold uppercase"
              )}
            >
              {cat.title}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-6">
          <h1 className="text-lg md:text-3xl">
            Products{" "}
            {category && `(${category.replace("-", " ").toLocaleUpperCase()})`}
          </h1>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {products?.data.map((p) => (
              <ProductItem
                image={p.images[0]}
                slug={p.slug}
                title={p.title}
                price={p.price}
                key={p.id}
              />
            ))}
          </div>

          {products && products.meta.total > 15 && (
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    isActive={parseInt(page ?? "1") !== 1}
                    onClick={prevPage}
                    className="cursor-pointer"
                  />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext
                    isActive={parseInt(page ?? "1") !== products.meta.last_page}
                    onClick={nextPage}
                    className="cursor-pointer"
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </div>
      </div>
    </Suspense>
  );
}

const getCategories = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/categories`, {
    next: { revalidate: 60 * 60 * 50 },
  });

  const data: Category[] = await res.json();

  return data;
};

const getProducts = async (page = 1, categorySlug: string | null = null) => {
  let uri = `${process.env.NEXT_PUBLIC_BACKEND_API}/products`;

  if (categorySlug) uri = `${uri}/categories/${categorySlug}`;

  uri = `${uri}?page=${page}`;

  const res = await fetch(uri, {
    next: { revalidate: 60 * 60 * 10 },
  });

  const data: Products = await res.json();

  return data;
};

export default ProductsPage;
