import { ReactNode, Suspense } from "react";

function ProductsRootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <Suspense>{children}</Suspense>;
}

export default ProductsRootLayout;
