import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(data: number) {
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "GBP",
  }).format(data);
}
