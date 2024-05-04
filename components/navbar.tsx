"use client";

import Image from "next/image";
import logo from "@/app/_assets/logo.webp";
import { Button } from "./ui/button";
import { Menu, Search } from "lucide-react";
import Link from "next/link";
import { Input } from "./ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { Category } from "@/lib/types";
import { useEffect, useState } from "react";

const getCategories = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/categories`);

  const data: Category[] = await res.json();

  return data;
};

export function Navbar() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    getCategories().then((data) => setCategories(data));
  }, []);

  return (
    <div className="w-full px-4 py-2 border-b border-primary shadow-md shadow-primary/70">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <Image
            src={logo}
            height={80}
            alt={"Ave Maria Religious Supplies Limited"}
          />
        </Link>

        <div className="w-full max-w-sm hidden md:block relative group">
          <Input placeholder="Search" className="pr-8" />
          <Search className="size-6 absolute right-2 top-0 translate-y-1/3 pointer-events-none text-muted group-focus-within:text-primary" />
        </div>
        <div className="flex items-center gap-4">
          {/* Cart Button */}
          {/* <Button variant="ghost" size="icon" className="relative">
          <Badge className="absolute top-0 -left-3 text-bold text-white">
            1
          </Badge>
          <ShoppingCart className="size-6" />
        </Button> */}
          <div className="hidden md:flex gap-x-4 items-center">
            {/* <Link href="/login" className="md:flex gap-2 hidden">
          <Lock className="size-6" />
          Login/Register
        </Link> */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base font-normal">
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-32 flex flex-col">
                      <Link href="/products" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          All
                        </NavigationMenuLink>
                      </Link>
                      {categories.map((category) => (
                        <Link
                          key={category.id}
                          href={`/products?category=${category.slug}`}
                          legacyBehavior
                          passHref
                        >
                          <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                          >
                            {category.title}
                          </NavigationMenuLink>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Link href="/about_us">About Us</Link>
            <Link href="/contact_us">Contact Us</Link>
          </div>

          {/* Mobile Nav button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="size-6" />
          </Button>
        </div>
      </div>
    </div>
  );
}
