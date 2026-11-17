import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { COLLECTIONS } from "@/config/brand";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const col = COLLECTIONS.find((c) => c.slug === slug);
  if (!col) return { title: "Collection Not Found" };
  return {
    title: `${col.name} — AMNA AZAM`,
    description: col.description,
  };
}

export default async function CollectionPage({ params }: Props) {
  const { slug } = await params;
  const col = COLLECTIONS.find((c) => c.slug === slug);
  if (!col) notFound();

  return (
    <>
      {/* Header */}
      <div className="bg-[#F8F5F0] border-b border-[#E5DDD5] py-14 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle at 50% 100%, #591C2B 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-[11px] text-[#242222]/40 hover:text-[#242222] uppercase tracking-[1.5px] mb-5 transition-colors"
          >
            <ArrowLeft size={11} /> All Collections
          </Link>
          <span className="eyebrow justify-center block mb-3">Collection</span>
          <h1
            className="font-display font-bold"
            style={{ fontSize: "clamp(36px,5vw,64px)", letterSpacing: "-1.5px" }}
          >
            {col.name}
          </h1>
          <p className="text-[#242222]/50 text-sm mt-3 max-w-sm mx-auto">{col.description}</p>
        </div>
      </div>

      <div className="container-luxury py-12">
        {/* Empty state */}
        <div className="text-center py-28 border border-dashed border-[#E5DDD5]">
          <div className="text-4xl mb-5 opacity-20">✿</div>
          <h2 className="font-display font-semibold text-[22px] text-[#242222]/60 mb-2">
            New Pieces Arriving Soon
          </h2>
          <p className="text-[13.5px] text-[#242222]/40 max-w-xs mx-auto leading-relaxed mb-8">
            We&apos;re handpicking pieces for the {col.name} collection. Follow us on Instagram for the first look.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Link href="/shop" className="btn btn-primary">
              Browse Other Collections
            </Link>
            <a
              href="https://www.instagram.com/amnaazam.1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Follow on Instagram
            </a>
          </div>
        </div>

        {/* Other collections */}
        <div className="mt-16 pt-12 border-t border-[#E5DDD5]">
          <h3 className="font-display font-semibold text-[18px] mb-6 text-[#242222]">
            Explore Other Collections
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {COLLECTIONS.filter((c) => c.slug !== col.slug).slice(0, 5).map((other) => (
              <Link
                key={other.slug}
                href={`/collections/${other.slug}`}
                className="group border border-[#E5DDD5] bg-white p-4 hover:shadow-luxury hover:-translate-y-0.5 transition-all duration-300"
              >
                <h4 className="text-[12.5px] font-semibold text-[#242222] group-hover:text-[#591C2B] transition-colors leading-tight mb-1">
                  {other.name}
                </h4>
                <span className="text-[10px] text-[#B49A68] font-semibold tracking-[1px] uppercase flex items-center gap-1 group-hover:gap-2 transition-all">
                  View <ArrowLeft size={8} className="rotate-180" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
