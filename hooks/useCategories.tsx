import { Category } from "@/lib/types";
import { useEffect, useState } from "react";

export default function useCategories() {
  const [categories, setCategories] = useState<Category[] | undefined>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_API}/categories`,
          {
            next: { revalidate: 60 * 60 * 50 },
          }
        );
        if (!res.ok) throw new Error("Failed to fetch categories");
        const data: Category[] = await res.json();
        setCategories(data);
      } catch (err) {
        setError((err as Error).message);
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, isLoading, error };
}
