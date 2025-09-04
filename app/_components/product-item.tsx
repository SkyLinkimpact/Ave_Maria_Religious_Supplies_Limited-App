import Link from "next/link";
import Image from "next/image";
import { cn, formatCurrency } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type ProductItemType = {
  title: string;
  slug: string;
  image: string;
  price: number;
};

function ProductItem({ title, slug, image, price }: Readonly<ProductItemType>) {
  return (
    <div className="h-96 w-full flex flex-col border rounded-md divide-y">
      <div className="w-full relative flex-1">
        <Image
          src={image}
          alt={title}
          fill
          objectFit="contain"
          className="object-center rounded-t-md"
        />
      </div>
      <div className="h-2/5 w-full p-4 flex flex-col justify-between">
        <h5 className="capitalize line-clamp-2">{title}</h5>
        <div className="w-full">
          <p>{formatCurrency(price)}</p>
          <Link
            className={cn(
              buttonVariants({ variant: "default", size: "sm" }),
              "w-full"
            )}
            href={`/products/${slug}`}
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
