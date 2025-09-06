import Image from "next/image";
import { Product } from "@/lib/types";
import { formatCurrency } from "@/lib/utils";
import { Suspense } from "react";

export default async function ProductItemPage(
  props: Readonly<{
    params: Promise<{ slug: string }>;
  }>
) {
  const params = await props.params;
  const product = await getProduct(params.slug);
  return (
    <Suspense>
      <div className="grid md:grid-cols-2 gap-4 place-content-center place-items-center container m-auto">
        <div className="h-80 relative w-full object-contain object-center">
          <Image
            src={product.images[0]}
            alt={`${product.title} image`}
            fill
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-2xl">{product.title}</h2>
          <p>{product.description}</p>
          <p className="font-semibold text-lg">
            {formatCurrency(product.price)}
          </p>
        </div>
      </div>
    </Suspense>
  );
}

const getProduct = async (productSlug: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API}/products/${productSlug}`
  );

  const data: Product = await res.json();

  return data;
};
