import Link from "next/link";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import logo from "@/app/_assets/logo.webp";

export type ProductItemType = {
  title: string;
  slug: string;
};

function ProductItem({ title, slug }: ProductItemType) {
  return (
    <Card>
      <CardContent>
        <div className="flex flex-col gap-4 w-full py-6 rounded-md">
          <div className="md:h-40 w-full p-3 border">
            <Image
              src={logo}
              sizes="(max-height: 150px)"
              className="object-cover object-center"
              alt="image"
            />
          </div>

          <h3 className="font-bold text-md uppercase">{title}</h3>
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
