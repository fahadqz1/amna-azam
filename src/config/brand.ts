export const BRAND = {
  name: "AMNA AZAM",
  tagline: "Haute Couture & Luxury Pret",
  description: "Premium Pakistani Eastern fashion for the modern woman",
  instagram: "https://www.instagram.com/amnaazam.1",
  instagramHandle: "@amnaazam.1",
  whatsapp: "923216726422",
  whatsappDisplay: "03216726422",
  email: "hello@amnaazam.com",
  currency: "PKR",
  currencySymbol: "PKR",
  deliveryFee: 250,
  freeDeliveryThreshold: 5000,
  phone: "+92 321 6726422",
  address: "Lahore, Pakistan",
  returns: "7-day easy returns",
  adminEmail: "admin@amnaazam.com",
} as const;

export const COLLECTIONS = [
  { name: "Bridal Couture",   slug: "bridal-couture",   description: "Exquisite bridal lehengas, ghararas and couture ensembles" },
  { name: "Wedding Wear",     slug: "wedding-wear",     description: "Elegant wedding guest and shaadi season outfits" },
  { name: "Mehndi Dresses",   slug: "mehndi-dresses",   description: "Vibrant, embellished mehndi ceremony ensembles" },
  { name: "Baraat Collection",slug: "baraat-collection", description: "Luxurious baraat day outfits for every occasion" },
  { name: "Walima Collection",slug: "walima-collection", description: "Graceful pastel and ivory walima day dresses" },
  { name: "Party Wear",       slug: "party-wear",       description: "Refined party-ready formal ensembles" },
  { name: "Luxury Formal",    slug: "luxury-formal",    description: "Premium heavy embroidered formal suits" },
  { name: "Luxury Pret",      slug: "luxury-pret",      description: "Everyday luxury pret for the discerning woman" },
  { name: "Unstitched",       slug: "unstitched",       description: "Premium unstitched fabric collections" },
  { name: "Ready to Wear",    slug: "ready-to-wear",    description: "Beautifully stitched ready-to-wear ensembles" },
  { name: "Festive Collection",slug: "festive-collection",description: "Celebratory eid and festive season collections" },
] as const;

export const SIZES = ["XS", "S", "M", "L", "XL", "XXL", "Custom"] as const;

export const ORDER_STATUSES = ["Pending", "Processing", "Shipped", "Delivered", "Cancelled", "Returned"] as const;

export const PAYMENT_METHODS = ["Cash on Delivery", "Bank Transfer", "Online Payment"] as const;

export const PAYMENT_STATUSES = ["Pending", "Received", "Verified", "Failed", "Refunded"] as const;

export const NAV_LINKS = [
  { label: "New Arrivals",    href: "/collections/new-arrivals" },
  { label: "Collections",    href: "/shop" },
  { label: "Bridal",         href: "/collections/bridal-couture" },
  { label: "Wedding Edit",   href: "/collections/wedding-wear" },
  { label: "Luxury Formal",  href: "/collections/luxury-formal" },
  { label: "Luxury Pret",    href: "/collections/luxury-pret" },
  { label: "Shop All",       href: "/shop" },
] as const;
