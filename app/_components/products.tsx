"use client";

import React from "react";
import ProductItem from "./product-item";

const productItems: { title: string }[] = [
  {
    title: "Car Plaque-Christopher/Singly Carded",
  },
  {
    title: "Car Crucifix/Metal with Magnet/Packed 12's (7330)",
  },
  {
    title: "Glass Votive Light Holder/Someone Special (38758)",
  },
  {
    title: "Crystal Block/Votive Holder/Divine Mercy (50602)",
  },
  {
    title: "Olive Wood Crucifix/5 inch/Resin Corpus (10650)",
  },
  {
    title: "Decorated Red Ceramic Christmas/Noel (38785)",
  },
  {
    title: "My Very First Christmas Book/Paperback (43192)",
  },
  {
    title: "Book - My Little Story of Christmas (43196)",
  },
  {
    title: "Paperback Book/The Nativity Story/Glitter",
  },
];

function Products() {
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 container mx-auto">
      {productItems
        .map((p) => ({
          ...p,
          slug: p.title
            .toLocaleLowerCase()
            .replaceAll(" ", "_")
            .replaceAll("/", "-"),
        }))
        .map((product) => (
          <ProductItem
            key={product.slug}
            slug={product.slug}
            title={product.title}
          />
        ))}
    </div>
  );
}

export default Products;
