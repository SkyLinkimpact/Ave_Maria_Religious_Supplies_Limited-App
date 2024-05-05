import { z } from "zod";
import { LoginRequestSchema } from "./schemas";

export type LoginRequest = z.infer<typeof LoginRequestSchema>;

export type Category = {
  id: string;
  title: string;
  slug: string;
  createdAt: string;
};

type PaginatedResponse<T> = {
  data: T[];
  meta: {
    current_page: number;
    last_page: number;
    total: number;
  };
};

export type Product = {
  id: string;
  title: string;
  description: string;
  slug: string;
  price: number;
  inventory: number;
  category: Category;
  createdAt: string;
  images: string[];
  awsLink?: string;
};

export type Products = PaginatedResponse<Product>;
