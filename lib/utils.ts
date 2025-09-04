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

export function toTitleCase(str: string) {
  return str.replace(/\b[\w'-]+\b/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();
  });
}
