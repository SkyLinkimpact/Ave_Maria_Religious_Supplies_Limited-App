import { Products } from "@/lib/types";
import { useEffect, useState } from "react";

export default function useProducts(page = 1, category: string | null = null) {
  const [products, setProducts] = useState<Products>();
  const [isProductsLoading, setIsProductsLoading] = useState(true);

  useEffect(() => {
    setIsProductsLoading(true);
    getProducts(page, category)
      .then(setProducts)
      .finally(() => {
        setIsProductsLoading(false);
      });
  }, [page, category]);

  return { products, isProductsLoading };
}

const getProducts = async (page = 1, categorySlug: string | null = null) => {
  let uri = `${process.env.NEXT_PUBLIC_BACKEND_API}/products`;

  if (categorySlug) uri = `${uri}/categories/${categorySlug}`;

  uri = `${uri}?page=${page}`;

  const res = await fetch(uri);

  const data: Products = await res.json();

  return data;
};
