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
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import useCategories from "@/hooks/useCategories";

export function Navbar() {
  const { categories } = useCategories();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full px-4 py-2 border-b-2 border-primary">
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
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href="/">Home</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] max-h-72 overflow-y-scroll gap-4">
                      <li>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                          asChild
                        >
                          <Link href="/products">All</Link>
                        </NavigationMenuLink>
                        {categories?.map((category) => (
                          <NavigationMenuLink
                            key={category.id}
                            className={navigationMenuTriggerStyle()}
                            asChild
                          >
                            <Link href={`/products?category=${category.slug}`}>
                              {category.title}
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href="/about_us">About Us</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href="/orphanage">Orphanage</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href="/contact_us">Contact Us</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Nav button */}
          <Sheet onOpenChange={setIsMobileMenuOpen} open={isMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="size-6" />
              </Button>
            </SheetTrigger>

            <SheetContent>
              <SheetHeader>
                <SheetTitle className="sr-only">Edit profile</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-2">
                <Link
                  href="/"
                  className="p-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/products"
                  className="p-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Products
                </Link>
                <Link
                  href="/about_us"
                  className="p-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/contact_us"
                  className="p-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
