import Link from "next/link";
import { ArrowRight } from "lucide-react";
import InstagramIcon from "@/components/ui/InstagramIcon";
import { BRAND, COLLECTIONS } from "@/config/brand";
import NewsletterForm from "@/components/store/NewsletterForm";

/* ------------------------------------------------------------------ */
/* Collection gradient map — used for editorial cards                  */
/* ------------------------------------------------------------------ */
const COLLECTION_GRADIENTS: Record<string, { bg: string; text: string; accent: string }> = {
  "bridal-couture":    { bg: "linear-gradient(145deg,#C9A8A0 0%,#E8D0C5 55%,#D8B8AA 100%)", text: "#3A1A14", accent: "#8A3028" },
  "wedding-wear":      { bg: "linear-gradient(155deg,#D8C8B0 0%,#EDE0CC 55%,#CDB898 100%)", text: "#2C1A08", accent: "#7A5A2C" },
  "mehndi-dresses":    { bg: "linear-gradient(145deg,#C8A030 0%,#E8C860 55%,#B88820 100%)", text: "#2A1E00", accent: "#6A4800" },
  "baraat-collection": { bg: "linear-gradient(155deg,#5A2A38 0%,#8A3A50 55%,#6A2838 100%)", text: "#F8E8D0", accent: "#D8A878" },
  "walima-collection": { bg: "linear-gradient(145deg,#A8C8B8 0%,#D8EDDF 55%,#B8D8C8 100%)", text: "#1A2E22", accent: "#3A6848" },
  "party-wear":        { bg: "linear-gradient(155deg,#2C2050 0%,#483878 55%,#382860 100%)", text: "#F0E8F8", accent: "#C8A8E8" },
  "luxury-formal":     { bg: "linear-gradient(145deg,#591C2B 0%,#8A2A3E 55%,#6A2030 100%)", text: "#F8F0E8", accent: "#D8A870" },
  "luxury-pret":       { bg: "linear-gradient(155deg,#E8D8C0 0%,#F5EAD8 55%,#DCCA9A 100%)", text: "#2A2010", accent: "#6A4820" },
  "unstitched":        { bg: "linear-gradient(145deg,#C0B0A0 0%,#DDD0C0 55%,#B8A890 100%)", text: "#2A2018", accent: "#5A4028" },
  "ready-to-wear":     { bg: "linear-gradient(155deg,#A8B8D0 0%,#D0DCF0 55%,#B0C0E0 100%)", text: "#181E2E", accent: "#2A3A60" },
  "festive-collection":{ bg: "linear-gradient(145deg,#B49A68 0%,#D8BC80 55%,#A88A50 100%)", text: "#2A2010", accent: "#6A4810" },
};

/* ------------------------------------------------------------------ */
/* Featured collections for the editorial cards grid                   */
/* ------------------------------------------------------------------ */
const FEATURED_COLLECTIONS = [
  "bridal-couture",
  "mehndi-dresses",
  "walima-collection",
  "luxury-formal",
  "luxury-pret",
  "festive-collection",
];

/* ------------------------------------------------------------------ */
/* Brand values                                                        */
/* ------------------------------------------------------------------ */
const VALUES = [
  { icon: "✦", title: "Handcrafted Excellence", body: "Every stitch is placed by master artisans trained in centuries-old embroidery traditions." },
  { icon: "✦", title: "Premium Fabrics", body: "We source only the finest chiffons, raw silks, organzas and velvets from certified mills." },
  { icon: "✦", title: "Bespoke Tailoring", body: "Custom sizing available for every piece — because luxury should fit like it was made for you." },
  { icon: "✦", title: "7-Day Returns", body: "Shop with absolute confidence. If it's not perfect, we make it right — no questions asked." },
];

export default function HomePage() {
  const featuredCols = COLLECTIONS.filter((c) => FEATURED_COLLECTIONS.includes(c.slug));

  return (
    <>
      {/* ============================================================ */}
      {/* HERO                                                          */}
      {/* ============================================================ */}
      <section
        className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
        style={{
          background: "linear-gradient(165deg,#140E0C 0%,#1E1210 25%,#2A1810 50%,#1A1008 75%,#100C08 100%)",
        }}
      >
        {/* Decorative gold grain overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(ellipse 80% 60% at 50% 40%, rgba(180,154,104,.18) 0%, transparent 70%),
                              radial-gradient(ellipse 40% 40% at 20% 80%, rgba(89,28,43,.22) 0%, transparent 60%),
                              radial-gradient(ellipse 40% 40% at 80% 20%, rgba(180,154,104,.12) 0%, transparent 60%)`,
          }}
        />

        {/* Thin horizontal rule accent */}
        <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-[#B49A68]/40 to-transparent" />

        <div className="relative z-10 container-luxury text-center px-5 py-24">
          <div className="eyebrow text-[#B49A68] justify-center mb-8" style={{ fontSize: "9px", letterSpacing: "4px" }}>
            <span className="w-6 h-px bg-[#B49A68] inline-block" />
            New Collection 2025
            <span className="w-6 h-px bg-[#B49A68] inline-block" />
          </div>

          <h1
            className="font-display font-bold text-[#F8F5F0] leading-[0.88] mb-6"
            style={{ fontSize: "clamp(52px,9vw,120px)", letterSpacing: "-2px" }}
          >
            Elegance,
            <br />
            <em className="italic font-light" style={{ color: "#D8C3A5" }}>Woven Into</em>
            <br />
            Every Occasion
          </h1>

          <p className="text-[#F8F5F0]/55 text-[14.5px] max-w-md mx-auto leading-relaxed mb-10 font-light tracking-wide">
            Luxury Pakistani fashion crafted for the woman who carries culture with grace.
            From bridal couture to everyday pret — dressed for every chapter.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/shop"
              className="btn btn-gold btn-lg px-10 tracking-[2px] text-[11px]"
              style={{ letterSpacing: "2.5px" }}
            >
              Explore The Collection
            </Link>
            <Link
              href="/collections/bridal-couture"
              className="btn btn-ghost btn-lg px-10 tracking-[2px] text-[11px] border-[#F8F5F0]/20 text-[#F8F5F0]/75 hover:text-[#F8F5F0] hover:border-[#F8F5F0]/40"
              style={{ letterSpacing: "2.5px" }}
            >
              Bridal Couture
              <ArrowRight size={14} className="ml-2" />
            </Link>
          </div>

          {/* Trust marks */}
          <div className="flex items-center justify-center gap-6 mt-14 flex-wrap">
            {["Free Delivery Over PKR 5,000", "7-Day Returns", "Handcrafted in Pakistan", "COD Available"].map((t) => (
              <span key={t} className="text-[#F8F5F0]/30 text-[10px] tracking-[1.5px] uppercase flex items-center gap-1.5">
                <span className="text-[#B49A68] text-[8px]">✦</span> {t}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F8F5F0] to-transparent" />
      </section>

      {/* ============================================================ */}
      {/* EDITORIAL COLLECTIONS GRID                                   */}
      {/* ============================================================ */}
      <section className="py-section bg-[#F8F5F0]">
        <div className="container-luxury">
          <div className="text-center mb-14">
            <span className="eyebrow justify-center">The Collections</span>
            <h2 className="font-display font-bold mt-3" style={{ fontSize: "clamp(32px,5vw,56px)", letterSpacing: "-1px" }}>
              Dressed for Every Occasion
            </h2>
            <p className="text-[#242222]/50 text-sm mt-3 max-w-sm mx-auto">
              From wedding season to festive celebrations — find your perfect ensemble.
            </p>
          </div>

          {/* Large 3-col grid: first card is 2-span */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredCols.map((col, i) => {
              const gradient = COLLECTION_GRADIENTS[col.slug] ?? { bg: "#EAD9D7", text: "#242222", accent: "#591C2B" };
              const isLarge = i === 0 || i === 5;
              return (
                <Link
                  key={col.slug}
                  href={`/collections/${col.slug}`}
                  className={`group relative overflow-hidden block ${isLarge ? "lg:col-span-2 aspect-[16/9]" : "aspect-[4/5]"}`}
                >
                  {/* Gradient background */}
                  <div
                    className="absolute inset-0 transition-transform duration-700 ease-luxury group-hover:scale-105"
                    style={{ background: gradient.bg }}
                  />

                  {/* Decorative pattern */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `radial-gradient(circle at 30% 70%, ${gradient.text}22 0%, transparent 50%),
                                        radial-gradient(circle at 70% 30%, ${gradient.accent}44 0%, transparent 50%)`,
                    }}
                  />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-7 lg:p-9">
                    {/* Floral ornament */}
                    <div className="text-2xl mb-3 opacity-60" style={{ color: gradient.accent }}>
                      ✿
                    </div>
                    <span
                      className="block text-[9px] font-bold tracking-[2.5px] uppercase mb-2 opacity-70"
                      style={{ color: gradient.text }}
                    >
                      Collection
                    </span>
                    <h3
                      className="font-display font-bold leading-tight mb-2"
                      style={{
                        fontSize: isLarge ? "clamp(28px,3.5vw,44px)" : "clamp(22px,2.5vw,32px)",
                        color: gradient.text,
                      }}
                    >
                      {col.name}
                    </h3>
                    <p
                      className="text-[12.5px] leading-relaxed mb-5 max-w-xs opacity-70 font-light"
                      style={{ color: gradient.text }}
                    >
                      {col.description}
                    </p>
                    <span
                      className="inline-flex items-center gap-2 text-[10.5px] font-semibold tracking-[1.5px] uppercase group-hover:gap-4 transition-all duration-300"
                      style={{ color: gradient.accent }}
                    >
                      Explore <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link href="/shop" className="btn btn-secondary btn-lg">
              View All Collections
              <ArrowRight size={14} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* BRAND PROMISE STRIP                                          */}
      {/* ============================================================ */}
      <section className="bg-[#242222] py-12 overflow-hidden">
        <div
          className="flex items-center gap-0 whitespace-nowrap"
          style={{ animation: "marquee 40s linear infinite" }}
        >
          {Array.from({ length: 3 }).map((_, set) =>
            ["Bridal Couture", "Wedding Wear", "Mehndi Dresses", "Luxury Pret", "Festive Collection", "Walima Edit", "Party Wear", "Ready to Wear"].map((item) => (
              <span key={`${set}-${item}`} className="text-[11px] tracking-[3px] uppercase font-medium px-10 text-[#F8F5F0]/40 flex items-center gap-4">
                <span className="text-[#B49A68] text-[7px]">✦</span>
                {item}
              </span>
            ))
          )}
        </div>
      </section>

      {/* ============================================================ */}
      {/* BRAND STORY / ABOUT                                          */}
      {/* ============================================================ */}
      <section className="py-section bg-[#F8F5F0]">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Visual column */}
            <div className="relative">
              <div
                className="aspect-[3/4] w-full max-w-sm mx-auto lg:mx-0"
                style={{
                  background: "linear-gradient(155deg,#2A1810 0%,#3D2218 40%,#591C2B 100%)",
                  boxShadow: "24px 24px 0 0 #EAD9D7, 28px 28px 0 0 #E5DDD5",
                }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center">
                  <div className="text-4xl mb-4 opacity-50 text-[#D8C3A5]">✿</div>
                  <span className="font-display italic text-[#D8C3A5]/60 text-[28px] font-light leading-tight">
                    "Where tradition meets timeless elegance"
                  </span>
                  <div className="mt-6 w-16 h-px bg-[#B49A68]/40" />
                  <span className="mt-4 text-[10px] tracking-[2px] uppercase text-[#B49A68]/60">
                    — Amna Azam
                  </span>
                </div>
              </div>
              {/* Gold accent dot */}
              <div className="absolute -bottom-6 -right-6 w-28 h-28 border-2 border-[#B49A68]/20 rounded-full hidden lg:block" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#D8C3A5]/20 hidden lg:block" />
            </div>

            {/* Text column */}
            <div>
              <span className="eyebrow">Our Story</span>
              <h2
                className="font-display font-bold mt-4 mb-6"
                style={{ fontSize: "clamp(32px,4vw,52px)", letterSpacing: "-1px", lineHeight: "1.05" }}
              >
                Rooted in Heritage,
                <br />
                <em className="italic font-light text-[#591C2B]">Crafted for Today</em>
              </h2>
              <p className="text-[#242222]/60 text-[14.5px] leading-[1.9] mb-5">
                AMNA AZAM was born from a love of Pakistani craft — the intricate zardozi, the delicate kiran, the hand-woven magic that only master craftspeople understand. We set out to bring that artistry to the modern woman who cherishes her roots without compromising on contemporary elegance.
              </p>
              <p className="text-[#242222]/60 text-[14.5px] leading-[1.9] mb-8">
                Every piece in our collection is thoughtfully designed, carefully sourced and finished by artisans who have spent decades perfecting their craft. When you wear AMNA AZAM, you wear a story.
              </p>
              <Link href="/about" className="btn btn-primary btn-lg">
                Read Our Story
                <ArrowRight size={14} className="ml-2" />
              </Link>
            </div>
          </div>

          {/* Values row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20 pt-16 border-t border-[#E5DDD5]">
            {VALUES.map((v) => (
              <div key={v.title}>
                <span className="text-[#B49A68] text-sm mb-3 block">{v.icon}</span>
                <h4 className="font-display font-semibold text-[18px] mb-2 text-[#242222]">{v.title}</h4>
                <p className="text-[13px] text-[#242222]/50 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* ALL COLLECTIONS LIST                                         */}
      {/* ============================================================ */}
      <section className="py-section-sm bg-[#EAD9D7]/30">
        <div className="container-luxury">
          <div className="text-center mb-10">
            <span className="eyebrow justify-center">Browse</span>
            <h2 className="font-display font-bold mt-3" style={{ fontSize: "clamp(28px,4vw,44px)", letterSpacing: "-1px" }}>
              All Collections
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
            {COLLECTIONS.map((col) => {
              const g = COLLECTION_GRADIENTS[col.slug] ?? { bg: "#EAD9D7", text: "#242222", accent: "#591C2B" };
              return (
                <Link
                  key={col.slug}
                  href={`/collections/${col.slug}`}
                  className="group block p-5 border border-[#E5DDD5] bg-white hover:shadow-luxury-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    className="w-8 h-8 mb-3 rounded-sm"
                    style={{ background: g.bg }}
                  />
                  <h3 className="text-[13px] font-semibold text-[#242222] group-hover:text-[#591C2B] transition-colors leading-tight mb-1">
                    {col.name}
                  </h3>
                  <span className="text-[11px] text-[#242222]/40 flex items-center gap-1 group-hover:gap-2 transition-all">
                    Shop <ArrowRight size={9} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* INSTAGRAM CTA                                                */}
      {/* ============================================================ */}
      <section
        className="py-section relative overflow-hidden"
        style={{ background: "linear-gradient(155deg,#140E0C 0%,#1E1410 50%,#2A1810 100%)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(180,154,104,.14) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 container-luxury text-center">
          <div className="mb-5">
            <InstagramIcon size={28} className="mx-auto text-[#B49A68] mb-4" />
          </div>
          <span className="eyebrow text-[#B49A68] justify-center text-[9px] tracking-[4px]">Follow Us</span>
          <h2
            className="font-display font-bold text-[#F8F5F0] mt-3 mb-4"
            style={{ fontSize: "clamp(32px,5vw,60px)", letterSpacing: "-1px" }}
          >
            {BRAND.instagramHandle}
          </h2>
          <p className="text-[#F8F5F0]/45 text-sm mb-8 max-w-xs mx-auto leading-relaxed">
            Behind the scenes, new arrivals and styling inspiration — follow the journey.
          </p>
          <a
            href={BRAND.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold btn-lg"
          >
            <InstagramIcon size={15} className="mr-2" />
            Follow on Instagram
          </a>
        </div>
      </section>

      {/* ============================================================ */}
      {/* NEWSLETTER                                                   */}
      {/* ============================================================ */}
      <section className="py-section bg-[#F8F5F0]">
        <div className="container-luxury">
          <div className="max-w-2xl mx-auto text-center">
            <span className="eyebrow justify-center">Stay Connected</span>
            <h2
              className="font-display font-bold mt-3 mb-4"
              style={{ fontSize: "clamp(28px,4vw,48px)", letterSpacing: "-1px" }}
            >
              Join the AMNA AZAM Circle
            </h2>
            <p className="text-[#242222]/50 text-sm mb-8 leading-relaxed">
              Be the first to know about new collections, exclusive offers, bridal event invitations, and styling tips from our design team.
            </p>
            <NewsletterForm />
            <p className="text-[11px] text-[#242222]/30 mt-4">
              No spam, ever. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* WHATSAPP CTA BANNER                                          */}
      {/* ============================================================ */}
      <section className="bg-[#591C2B] py-10">
        <div className="container-luxury flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <p className="text-[#F8F5F0]/90 font-display text-[22px] font-semibold">
              Need help choosing the perfect outfit?
            </p>
            <p className="text-[#F8F5F0]/55 text-[13px] mt-1">
              Chat directly with our stylists on WhatsApp — we reply within hours.
            </p>
          </div>
          <a
            href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent("Assalamu Alaikum! I need styling help from AMNA AZAM.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold btn-lg flex-shrink-0"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
