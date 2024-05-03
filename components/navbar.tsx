import Image from "next/image";
import logo from "@/app/_assets/logo.webp";
import { Button } from "./ui/button";
import { Menu, Search } from "lucide-react";
import Link from "next/link";
import { Input } from "./ui/input";

export function Navbar() {
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

          {/* <Link href="/login" className="md:flex gap-2 hidden">
          <Lock className="size-6" />
          Login/Register
        </Link> */}
          <div className="hidden md:block space-x-4">
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
