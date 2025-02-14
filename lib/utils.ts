import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatAmount(amount: number): string {
  if (amount < 1000) {
    return amount.toString();
  }

  const abbreviated = amount / 1000;

  return `${abbreviated}k`;
}
