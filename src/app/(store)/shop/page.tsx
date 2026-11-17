import Link from "next/link";
import { ArrowRight, SlidersHorizontal } from "lucide-react";
import { COLLECTIONS } from "@/config/brand";

export const metadata = {
  title: "Shop All — AMNA AZAM",
  description: "Browse the complete AMNA AZAM collection — bridal couture, luxury pret, formal wear and more.",
};

export default function ShopPage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-[#F8F5F0] border-b border-[#E5DDD5] py-12 text-center">
        <span className="eyebrow justify-center">Explore</span>
        <h1
          className="font-display font-bold mt-3"
          style={{ fontSize: "clamp(32px,5vw,56px)", letterSpacing: "-1px" }}
        >
          Shop All Collections
        </h1>
        <p className="text-[#242222]/50 text-sm mt-3 max-w-sm mx-auto">
          Discover handcrafted luxury Pakistani fashion for every occasion.
        </p>
      </div>

      <div className="container-luxury py-12">
        {/* Collections grid as entry points */}
        <div className="mb-12">
          <h2 className="font-display font-semibold text-[20px] mb-6 text-[#242222]">Browse by Collection</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {COLLECTIONS.map((col) => (
              <Link
                key={col.slug}
                href={`/collections/${col.slug}`}
                className="group border border-[#E5DDD5] bg-white p-5 hover:shadow-luxury-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <h3 className="text-[13px] font-semibold text-[#242222] group-hover:text-[#591C2B] transition-colors mb-1 leading-tight">
                  {col.name}
                </h3>
                <p className="text-[11.5px] text-[#242222]/45 leading-relaxed line-clamp-2 mb-3">
                  {col.description}
                </p>
                <span className="text-[10.5px] font-semibold tracking-[1px] uppercase text-[#B49A68] flex items-center gap-1 group-hover:gap-2 transition-all">
                  Explore <ArrowRight size={9} />
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Empty state for products */}
        <div className="border-t border-[#E5DDD5] pt-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display font-semibold text-[20px] text-[#242222]">All Products</h2>
            <div className="flex items-center gap-2 text-[12px] text-[#242222]/50 border border-[#E5DDD5] px-4 py-2">
              <SlidersHorizontal size={12} />
              Filters
            </div>
          </div>

          <div className="text-center py-24 border border-dashed border-[#E5DDD5]">
            <div className="text-3xl mb-4 opacity-30">✿</div>
            <h3 className="font-display font-semibold text-[20px] text-[#242222]/60 mb-2">
              New Collection Coming Soon
            </h3>
            <p className="text-[13px] text-[#242222]/40 max-w-xs mx-auto leading-relaxed mb-6">
              Our team is adding products to the store. Check back soon or browse by collection above.
            </p>
            <Link href="/" className="btn btn-primary">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
