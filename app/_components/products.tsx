"use client";

import React, { useEffect, useState } from "react";
import ProductItem from "./product-item";
import { Products as Product } from "@/lib/types";

function Products() {
  const [products, setProducts] = useState<Product>();

  useEffect(() => {
    getProducts().then((p) => setProducts(p));
  }, []);

  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
      {products?.data.slice(0, 5).map((product) => (
        <ProductItem
          image={product.images[0][0]}
          price={product.price}
          key={product.slug}
          slug={product.slug}
          title={product.title}
        />
      ))}
    </div>
  );
}

const getProducts = async (page = 1, categorySlug: string | null = null) => {
  let uri = `${process.env.NEXT_PUBLIC_BACKEND_API}/products`;

  if (categorySlug) uri = `${uri}/categories/${categorySlug}`;

  uri = `${uri}?page=${page}`;

  const res = await fetch(uri);

  const data: Product = await res.json();

  return data;
};

export default Products;
