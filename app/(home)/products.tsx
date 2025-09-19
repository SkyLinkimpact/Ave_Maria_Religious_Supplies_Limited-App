"use client";

import ProductItem from "../_components/product-item";
import useProducts from "@/hooks/useProducts";

function Products() {
  const { products } = useProducts();

  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products?.data.slice(0, 4).map((product) => (
        <ProductItem
          image={product.images[0]}
          price={product.price}
          key={product.slug}
          slug={product.slug}
          title={product.title}
        />
      ))}
    </div>
  );
}

export default Products;
