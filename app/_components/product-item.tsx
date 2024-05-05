import Link from "next/link";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";

export type ProductItemType = {
  title: string;
  slug: string;
  image: string;
  price: number;
};

function ProductItem({ title, slug, image, price }: ProductItemType) {
  return (
    <Card>
      <CardContent>
        <div className="flex flex-col gap-4 w-full py-6 rounded-md justify-between">
          <div className="h-40 w-full border object-fill object-center relative">
            <Image src={image} alt="image" fill objectFit="contain" />
          </div>

          <h3 className="font-bold text-md uppercase">{title}</h3>

          <p>{formatCurrency(price)}</p>
          <Link
            href={`products/${slug}`}
            className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          >
            Details
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

export default ProductItem;
