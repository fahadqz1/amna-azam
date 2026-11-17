import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { BRAND } from "@/config/brand";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(amount: number): string {
  return `${BRAND.currencySymbol} ${amount.toLocaleString("en-PK")}`;
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-PK", {
    year: "numeric", month: "long", day: "numeric",
  });
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function generateOrderNumber(): string {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const random = Math.floor(Math.random() * 90000 + 10000);
  return `AA-${year}${month}${day}-${random}`;
}

export function getDiscountPercentage(price: number, discountedPrice: number): number {
  if (!discountedPrice || discountedPrice >= price) return 0;
  return Math.round(((price - discountedPrice) / price) * 100);
}

export function truncate(str: string, length: number): string {
  if (str.length <= length) return str;
  return str.slice(0, length) + "…";
}

export function buildWhatsAppMessage(params: {
  type: "order" | "enquiry" | "general";
  productName?: string;
  orderNumber?: string;
  price?: number;
}): string {
  const base = `https://wa.me/${BRAND.whatsapp}?text=`;
  if (params.type === "enquiry" && params.productName) {
    const msg = encodeURIComponent(
      `Assalamu Alaikum!\n\nI am interested in "${params.productName}"${params.price ? ` (${formatPrice(params.price)})` : ""}.\n\nCould you please share more details? Thank you!`
    );
    return base + msg;
  }
  if (params.type === "order" && params.orderNumber) {
    const msg = encodeURIComponent(
      `Assalamu Alaikum!\n\nI would like to confirm my order: ${params.orderNumber}\n\nThank you!`
    );
    return base + msg;
  }
  return base + encodeURIComponent("Assalamu Alaikum! I need help with AMNA AZAM.");
}

export const PROVINCES = [
  "Punjab", "Sindh", "KPK", "Balochistan",
  "Islamabad (Capital)", "Azad Kashmir", "Gilgit-Baltistan",
];
