export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

// ── DATABASE TYPES ────────────────────────────────────────────────────
export interface Product {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  price: number;
  discounted_price: number | null;
  fabric: string | null;
  embroidery_details: string | null;
  care_instructions: string | null;
  collection_id: string | null;
  collection?: Collection;
  sku: string | null;
  status: "draft" | "published" | "archived";
  featured_image: string | null;
  images?: ProductImage[];
  variants?: ProductVariant[];
  created_at: string;
  updated_at: string;
}

export interface ProductImage {
  id: string;
  product_id: string;
  url: string;
  alt: string | null;
  position: number;
  created_at: string;
}

export interface ProductVariant {
  id: string;
  product_id: string;
  size: string;
  colour: string;
  sku: string;
  price: number | null;
  stock_quantity: number;
  is_available: boolean;
  created_at: string;
}

export interface Collection {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  image_url: string | null;
  position: number;
  is_active: boolean;
  created_at: string;
}

export interface Order {
  id: string;
  order_number: string;
  customer_name: string;
  customer_email: string | null;
  customer_phone: string;
  shipping_address: ShippingAddress;
  items: OrderItem[];
  subtotal: number;
  shipping_charge: number;
  discount_amount: number;
  coupon_code: string | null;
  total_amount: number;
  payment_method: string;
  payment_status: string;
  order_status: string;
  notes: string | null;
  tracking_number: string | null;
  tracking_url: string | null;
  courier: string | null;
  created_at: string;
  updated_at: string;
}

export interface OrderItem {
  id: string;
  order_id: string;
  product_id: string;
  variant_id: string | null;
  product_title: string;
  variant_description: string;
  quantity: number;
  unit_price: number;
  total_price: number;
  image_url: string | null;
}

export interface ShippingAddress {
  name: string;
  phone: string;
  line1: string;
  line2?: string;
  city: string;
  province: string;
  postal_code?: string;
  country: string;
}

export interface Customer {
  id: string;
  email: string;
  full_name: string | null;
  phone: string | null;
  created_at: string;
  total_orders?: number;
  total_spent?: number;
}

export interface Coupon {
  id: string;
  code: string;
  description: string | null;
  discount_type: "percentage" | "fixed";
  discount_value: number;
  minimum_order: number;
  max_uses: number | null;
  used_count: number;
  is_active: boolean;
  expires_at: string | null;
  created_at: string;
}

export interface StoreSettings {
  id: string;
  key: string;
  value: Json;
  updated_at: string;
}

// ── CART TYPES ────────────────────────────────────────────────────────
export interface CartItem {
  product: Product;
  variant: ProductVariant;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  coupon?: Coupon | null;
}

// ── API RESPONSE TYPES ────────────────────────────────────────────────
export interface ApiResponse<T = unknown> {
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  count: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// ── CHECKOUT TYPES ────────────────────────────────────────────────────
export interface CheckoutFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  address2?: string;
  city: string;
  province: string;
  postalCode?: string;
  orderNotes?: string;
  paymentMethod: "cod" | "bank_transfer" | "online";
  couponCode?: string;
}

// ── ADMIN TYPES ───────────────────────────────────────────────────────
export interface DashboardStats {
  totalRevenue: number;
  totalOrders: number;
  pendingOrders: number;
  deliveredOrders: number;
  cancelledOrders: number;
  totalProducts: number;
  totalCustomers: number;
}

export interface ProductFormData {
  title: string;
  slug: string;
  description: string;
  price: number;
  discountedPrice?: number;
  fabric?: string;
  embroideryDetails?: string;
  careInstructions?: string;
  collectionId?: string;
  status: "draft" | "published";
  variants: VariantFormData[];
}

export interface VariantFormData {
  size: string;
  colour: string;
  sku: string;
  price?: number;
  stockQuantity: number;
}
