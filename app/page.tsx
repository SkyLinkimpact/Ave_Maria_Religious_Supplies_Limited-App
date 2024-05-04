import Link from "next/link";
import Products from "./_components/products";
import { Category } from "@/lib/types";

export default async function Home() {
  const categories = await getCategories();

  return (
    <main className="flex flex-col h-full gap-6">
      <div className="md:h-[600px] h-[300px] w-full bg-gray-200 flex items-center justify-center font-bold">
        Welcome to Ave Maria Religious Supplies LTD
      </div>
      <Products />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-slate-200">
        <div
          key={"all"}
          className="h-40 flex items-center justify-center bg-blue-400 gap-4 rounded-lg relative"
        >
          <Link
            href={`/products`}
            className="font-bold absolute inset-0 top-[40%] text-center"
          >
            All
          </Link>
        </div>
        {categories.map((category) => (
          <div
            key={category.id}
            className="h-40 flex items-center justify-center bg-blue-400 gap-4 rounded-lg relative"
          >
            <Link
              href={`/products?category=${category.slug}`}
              className="font-bold absolute text-center inset-0 top-[40%]"
            >
              {category.title}
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}

const getCategories = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/categories`);

  const data: Category[] = await res.json();

  return data;
};
