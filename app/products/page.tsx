"use client";

import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import ProductItem from "../_components/product-item";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";
import { cn, toTitleCase } from "@/lib/utils";
import useProducts from "@/hooks/useProducts";
import { Skeleton } from "@/components/ui/skeleton";
import useCategories from "@/hooks/useCategories";

const PAGE_SIZE = 15;

function ProductLoading() {
  return (
    <div className="h-96 w-full flex flex-col border rounded-md">
      <Skeleton className="flex-1" />
      <div className="h-2/5 w-full p-4 flex flex-col justify-between">
        <Skeleton className="w-full h-2/6" />
        <Skeleton className="w-2/6 h-4" />
        <Skeleton className="w-full h-10 rounded-md" />
      </div>
    </div>
  );
}

function ProductsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const page = parseInt(searchParams.get("page") ?? "1", 10);
  const category = searchParams.get("category");
  const { categories } = useCategories();
  const { products, isProductsLoading } = useProducts(page, category);

  const updatePage = (newPage: number) => {
    const params = new URLSearchParams(searchParams);
    if (newPage > 1) {
      params.set("page", newPage.toString());
    } else {
      params.delete("page");
    }
    router.push(`/products?${params.toString()}`);
  };

  const nextPageHandler = () => updatePage(page + 1);
  const prevPageHandler = () => updatePage(page - 1);

  if (!products && !isProductsLoading) {
    return <div>Error loading products. Please try again.</div>; // Basic error fallback
  }

  return (
    <div className="container grid md:grid-cols-[auto_1fr] gap-4 h-full">
      <div className="hidden md:flex flex-col gap-2 w-60 border-r h-full overflow-y-scroll">
        <Link
          href="/products"
          className={cn(
            "p-4 hover:bg-primary hover:text-white hover:font-semibold duration-150 ease-in transition-all",
            !category && "text-primary font-semibold uppercase"
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

      <div className="flex flex-col gap-6 h-full overflow-y-scroll pb-8">
        <h1 className="text-lg md:text-3xl">
          Products {category && `(${toTitleCase(category)})`}
        </h1>

        {isProductsLoading ? (
          <div className="grid md:grid-cols-3 gap-4">
            {Array.from({ length: PAGE_SIZE }).map(() => {
              const uniqueKey = `loading-product-${Math.random().toString(36).slice(2, 9)}`;
              return <ProductLoading key={uniqueKey} />;
            })}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-4">
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
        )}

        {products && products.meta.total > PAGE_SIZE && (
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  isActive={page !== 1}
                  onClick={prevPageHandler}
                  className="cursor-pointer"
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext
                  isActive={page !== products.meta.last_page}
                  onClick={nextPageHandler}
                  className="cursor-pointer"
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </div>
  );
}

export default ProductsPage;
