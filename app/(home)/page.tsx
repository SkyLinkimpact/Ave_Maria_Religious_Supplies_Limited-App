import Products from "./products";
import LandingCaorusel from "./landing-carousel";
import Categories from "./categories";

export default function Home() {
  return (
    <main className="flex flex-col gap-8">
      <LandingCaorusel />

      <div className="container flex flex-col gap-6">
        <Products />

        <Categories />
      </div>
    </main>
  );
}
