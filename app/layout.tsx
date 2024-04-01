import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ave Maria Religious Supplies Limited",
  description: "Ave Maria Religious Supplies Limited",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-background grid grid-rows-[auto_1fr] h-screen w-screen`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
