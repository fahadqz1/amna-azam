import Link from "next/link";
import { MessageCircle, Mail, MapPin } from "lucide-react";
import InstagramIcon from "@/components/ui/InstagramIcon";
import { BRAND, COLLECTIONS } from "@/config/brand";

export default function Footer() {
  return (
    <footer className="bg-[#242222] text-[#F8F5F0]">
      {/* Top section */}
      <div className="container-luxury pt-16 pb-12 border-b border-white/8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/">
              <span className="block font-display text-2xl font-bold tracking-[6px] uppercase text-white leading-none">
                {BRAND.name}
              </span>
              <span className="block text-[8.5px] tracking-[3px] uppercase text-[#B49A68] mt-1 font-semibold">
                {BRAND.tagline}
              </span>
            </Link>
            <p className="text-[12.5px] text-white/45 leading-[1.9] mt-4 max-w-[260px]">
              Premium Pakistani Eastern fashion crafted for the modern woman. Each piece tells a story of heritage, luxury and timeless elegance.
            </p>
            <div className="flex gap-2.5 mt-5">
              <a
                href={BRAND.instagram}
                target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 border border-white/12 flex items-center justify-center text-white/50 hover:bg-[#B49A68] hover:border-[#B49A68] hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon size={14} />
              </a>
              <a
                href={`https://wa.me/${BRAND.whatsapp}`}
                target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 border border-white/12 flex items-center justify-center text-white/50 hover:bg-[#25D366] hover:border-[#25D366] hover:text-white transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle size={14} />
              </a>
            </div>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-[9.5px] font-bold tracking-[2.5px] uppercase text-white/80 mb-5">Collections</h4>
            <ul className="flex flex-col gap-2.5">
              {COLLECTIONS.slice(0, 7).map((col) => (
                <li key={col.slug}>
                  <Link
                    href={`/collections/${col.slug}`}
                    className="text-[12.5px] text-white/50 hover:text-[#B49A68] transition-colors duration-300"
                  >
                    {col.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-[9.5px] font-bold tracking-[2.5px] uppercase text-white/80 mb-5">Customer Care</h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Track Your Order", href: "/track-order" },
                { label: "Size Guide",        href: "/size-guide" },
                { label: "Returns & Exchanges",href: "/returns" },
                { label: "Shipping Policy",   href: "/shipping" },
                { label: "FAQs",              href: "/faqs" },
                { label: "Contact Us",        href: "/contact" },
                { label: "About Us",          href: "/about" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[12.5px] text-white/50 hover:text-[#B49A68] transition-colors duration-300">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[9.5px] font-bold tracking-[2.5px] uppercase text-white/80 mb-5">Get In Touch</h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2.5 text-[12.5px] text-white/50">
                <MessageCircle size={12} className="text-[#B49A68] mt-0.5 flex-shrink-0" />
                {BRAND.whatsappDisplay}
              </li>
              <li className="flex items-start gap-2.5 text-[12.5px] text-white/50">
                <InstagramIcon size={12} className="text-[#B49A68] mt-0.5 flex-shrink-0" />
                {BRAND.instagramHandle}
              </li>
              <li className="flex items-start gap-2.5 text-[12.5px] text-white/50">
                <Mail size={12} className="text-[#B49A68] mt-0.5 flex-shrink-0" />
                {BRAND.email}
              </li>
              <li className="flex items-start gap-2.5 text-[12.5px] text-white/50">
                <MapPin size={12} className="text-[#B49A68] mt-0.5 flex-shrink-0" />
                {BRAND.address}
              </li>
            </ul>
            <div className="mt-5 p-4 border border-white/8 bg-white/3">
              <p className="text-[9.5px] font-bold tracking-[2px] uppercase text-[#B49A68] mb-1">Store Hours</p>
              <p className="text-[12px] text-white/45">Mon–Sat, 10am–8pm PKT</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="container-luxury py-5 flex flex-col sm:flex-row items-center justify-between gap-3 flex-wrap">
        <p className="text-[11px] text-white/30">
          © {new Date().getFullYear()} {BRAND.name}. All rights reserved. Lahore, Pakistan.
        </p>
        <div className="flex items-center gap-4 flex-wrap">
          {["Privacy Policy","Terms & Conditions","Returns"].map((l) => (
            <Link
              key={l}
              href={`/${l.toLowerCase().replace(/[^a-z]+/g, "-")}`}
              className="text-[11px] text-white/30 hover:text-[#B49A68] transition-colors"
            >
              {l}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          {["Cash on Delivery","Bank Transfer","WhatsApp Orders"].map((m) => (
            <span key={m} className="text-[10px] text-white/30 border border-white/10 px-3 py-1">
              {m}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
