import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Category } from "@/lib/types";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function CategoriesFilterFab({
  categories,
}: Readonly<{ categories: Category[] }>) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet onOpenChange={setIsOpen} open={isOpen}>
      <SheetTrigger asChild>
        <Button
          size="icon"
          className="rounded-full fixed bottom-4 right-4 md:hidden z-50 opacity-80"
        >
          <SlidersHorizontal />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="flex flex-col">
        <SheetHeader>
          <SheetTitle className="text-lg font-bold mb-4">Categories</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-2 flex-1 overflow-y-scroll">
          <Link
            href="/products"
            className={cn(
              "p-4 hover:bg-primary hover:text-white hover:font-semibold duration-150 ease-in transition-all"
            )}
            onClick={() => setIsOpen(false)}
          >
            All
          </Link>
          {categories?.map((cat) => (
            <Link
              key={cat.id}
              href={`/products?category=${cat.slug}`}
              className={cn(
                "p-4 hover:bg-primary hover:text-white hover:font-semibold duration-150 ease-in transition-all"
              )}
              onClick={() => setIsOpen(false)}
            >
              {cat.title}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
