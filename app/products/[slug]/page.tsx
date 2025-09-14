import Image from "next/image";
import { Product } from "@/lib/types";
import { cn, formatCurrency } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import AmazonIcon from "@/app/_assets/amazon-icon.png";
import Link from "next/link";

export default async function ProductItemPage(
  props: Readonly<{
    params: Promise<{ slug: string }>;
  }>
) {
  const params = await props.params;
  const product = await getProduct(params.slug);
  return (
    <div className="flex flex-col items-center pt-12">
      <div className="grid md:grid-cols-2 gap-4 place-content-center place-items-center container">
        <div className="h-80 relative w-full object-center">
          <Image
            src={product.images[0]}
            alt={`${product.title} image`}
            fill
            objectFit="contain"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-2xl">{product.title}</h2>
          <p>{product.description}</p>
          <p className="font-semibold text-lg">
            {formatCurrency(product.price)}
          </p>
          {product.awsLink && (
            <Link
              href={product.awsLink}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "icon" })
              )}
            >
              <Image
                src={AmazonIcon}
                alt="Amazon icon"
                width={16}
                height={16}
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

const getProduct = async (productSlug: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API}/products/${productSlug}`
  );

  const data: Product = await res.json();

  return data;
};
