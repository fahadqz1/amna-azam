"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Search, Heart, ShoppingBag, Menu, X, ChevronDown } from "lucide-react";
import { BRAND, NAV_LINKS, COLLECTIONS } from "@/config/brand";
import { cn } from "@/lib/utils";

interface HeaderProps {
  cartCount?: number;
  wishlistCount?: number;
}

export default function Header({ cartCount = 0, wishlistCount = 0 }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [megaMenu, setMegaMenu] = useState<string | null>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (searchOpen) setTimeout(() => searchRef.current?.focus(), 100);
  }, [searchOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* ANNOUNCE BAR */}
      <div className="bg-[#242222] text-[#F8F5F0] overflow-hidden h-9 flex items-center">
        <div
          className="flex items-center gap-0 whitespace-nowrap"
          style={{ animation: "marquee 32s linear infinite" }}
        >
          {[
            `✦ Free delivery on orders above PKR 5,000`,
            `✦ New Festive Collection — Shop Now`,
            `✦ Handcrafted luxury Eastern fashion`,
            `✦ 7-day easy returns`,
            `✦ WhatsApp: ${BRAND.whatsappDisplay}`,
            `✦ Free delivery on orders above PKR 5,000`,
            `✦ New Festive Collection — Shop Now`,
            `✦ Handcrafted luxury Eastern fashion`,
            `✦ 7-day easy returns`,
            `✦ WhatsApp: ${BRAND.whatsappDisplay}`,
          ].map((item, i) => (
            <span key={i} className="text-[10.5px] tracking-[1.5px] uppercase font-medium px-8 opacity-80">{item}</span>
          ))}
        </div>
      </div>

      {/* MAIN HEADER */}
      <header
        className={cn(
          "sticky top-0 z-50 bg-[#F8F5F0]/94 backdrop-blur-md border-b border-[#E5DDD5]",
          "transition-shadow duration-300",
          scrolled && "shadow-[0_4px_32px_rgba(36,34,34,.08)]"
        )}
      >
        <div className="container-luxury">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center h-[68px] gap-4">

            {/* NAV (left) */}
            <nav className="hidden lg:flex items-center">
              {NAV_LINKS.map((link) => (
                <div
                  key={link.href}
                  className="relative group"
                  onMouseEnter={() => link.label === "Collections" ? setMegaMenu("collections") : setMegaMenu(null)}
                  onMouseLeave={() => setMegaMenu(null)}
                >
                  <Link
                    href={link.href}
                    className="text-[10.5px] font-semibold tracking-[1.5px] uppercase text-[#242222]/65 hover:text-[#242222] px-3.5 py-2 block relative transition-colors duration-300 after:absolute after:bottom-1.5 after:left-3.5 after:w-0 after:h-px after:bg-[#242222] after:transition-[width] after:duration-300 hover:after:w-[calc(100%-28px)]"
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </nav>

            {/* LOGO (center) */}
            <Link href="/" className="text-center group">
              <span className="block font-display text-2xl font-bold tracking-[6px] uppercase text-[#242222] leading-none transition-colors duration-300 group-hover:text-[#591C2B]">
                {BRAND.name}
              </span>
              <span className="block text-[8.5px] tracking-[3px] uppercase text-[#B49A68] mt-0.5 font-semibold">
                {BRAND.tagline}
              </span>
            </Link>

            {/* ACTIONS (right) */}
            <div className="flex items-center justify-end gap-1">
              <button
                onClick={() => setSearchOpen(true)}
                className="w-11 h-11 flex items-center justify-center text-[#242222]/65 hover:text-[#242222] hover:bg-[#EAD9D7] rounded transition-all duration-300"
                aria-label="Search"
              >
                <Search size={17} strokeWidth={1.5} />
              </button>

              <Link
                href="/account/wishlist"
                className="w-11 h-11 flex items-center justify-center text-[#242222]/65 hover:text-[#242222] hover:bg-[#EAD9D7] rounded transition-all duration-300 relative"
                aria-label="Wishlist"
              >
                <Heart size={17} strokeWidth={1.5} />
                {wishlistCount > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-[#591C2B] text-white text-[8px] font-bold rounded-full flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              <Link
                href="/cart"
                className="w-11 h-11 flex items-center justify-center text-[#242222]/65 hover:text-[#242222] hover:bg-[#EAD9D7] rounded transition-all duration-300 relative"
                aria-label="Shopping bag"
              >
                <ShoppingBag size={17} strokeWidth={1.5} />
                {cartCount > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-[#242222] text-white text-[8px] font-bold rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>

              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden w-11 h-11 flex items-center justify-center text-[#242222]/65 hover:text-[#242222] rounded transition-all duration-300"
                aria-label="Menu"
              >
                <Menu size={20} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>

        {/* MEGA MENU (Collections) */}
        {megaMenu === "collections" && (
          <div
            className="absolute top-full left-0 right-0 bg-[#F8F5F0] border-b border-[#E5DDD5] shadow-[0_12px_40px_rgba(36,34,34,.12)] z-40"
            onMouseEnter={() => setMegaMenu("collections")}
            onMouseLeave={() => setMegaMenu(null)}
          >
            <div className="container-luxury py-8">
              <div className="grid grid-cols-5 gap-6">
                {COLLECTIONS.slice(0, 10).map((col) => (
                  <Link
                    key={col.slug}
                    href={`/collections/${col.slug}`}
                    className="group block p-3 hover:bg-[#EAD9D7] transition-colors duration-200"
                  >
                    <div className="text-[11px] font-semibold uppercase tracking-[1px] text-[#242222] group-hover:text-[#591C2B] transition-colors mb-1">
                      {col.name}
                    </div>
                    <div className="text-[11px] text-[#242222]/50 leading-relaxed line-clamp-2">
                      {col.description}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* MOBILE NAV */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[9000] lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileOpen(false)}
          />
          <div
            className="absolute left-0 top-0 bottom-0 w-80 max-w-[90vw] bg-[#F8F5F0] flex flex-col overflow-y-auto"
            style={{ animation: "slideIn .3s cubic-bezier(.25,.46,.45,.94)" }}
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#E5DDD5]">
              <span className="font-display text-xl font-bold tracking-[4px] uppercase">{BRAND.name}</span>
              <button onClick={() => setMobileOpen(false)} className="w-9 h-9 flex items-center justify-center rounded border border-[#E5DDD5] text-[#242222]/60">
                <X size={16} />
              </button>
            </div>
            <nav className="flex-1 py-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between px-6 py-4 text-[12.5px] font-semibold tracking-[1.5px] uppercase text-[#242222]/70 border-b border-[#E5DDD5] hover:text-[#242222] hover:pl-8 transition-all duration-200"
                >
                  {link.label}
                  <ChevronDown size={12} className="-rotate-90 opacity-40" />
                </Link>
              ))}
              <div className="px-6 pt-4">
                <p className="text-[9px] font-semibold tracking-[2px] uppercase text-[#B49A68] mb-3">Collections</p>
                {COLLECTIONS.map((col) => (
                  <Link
                    key={col.slug}
                    href={`/collections/${col.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2.5 text-[12px] text-[#242222]/60 hover:text-[#242222] transition-colors"
                  >
                    {col.name}
                  </Link>
                ))}
              </div>
            </nav>
            <div className="p-6 border-t border-[#E5DDD5] flex flex-col gap-2.5">
              <a
                href={`https://wa.me/${BRAND.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold btn-block"
              >
                WhatsApp Us
              </a>
              <Link href="/track-order" onClick={() => setMobileOpen(false)} className="btn btn-secondary btn-block">
                Track Order
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* SEARCH OVERLAY */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-[9001] bg-[#F8F5F0]/98 backdrop-blur-sm flex flex-col items-center justify-start pt-24 px-5"
          style={{ animation: "fadeIn .2s ease" }}
        >
          <button
            onClick={() => setSearchOpen(false)}
            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full border border-[#E5DDD5] text-[#242222]/50 hover:text-[#242222] transition-colors"
          >
            <X size={16} />
          </button>
          <p className="eyebrow mb-6 text-[10px]">Search</p>
          <div className="w-full max-w-2xl">
            <input
              ref={searchRef}
              type="text"
              placeholder="Search dresses, collections, occasions…"
              className="w-full border-b-2 border-[#242222] bg-transparent text-[28px] font-display font-light text-[#242222] placeholder:text-[#242222]/25 outline-none py-3 tracking-tight"
            />
          </div>
          <p className="text-[11.5px] text-[#242222]/40 mt-6">
            Try searching for "bridal lehenga", "mehndi dress", or "festive pret"
          </p>
        </div>
      )}
    </>
  );
}
