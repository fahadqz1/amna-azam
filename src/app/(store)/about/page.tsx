import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BRAND } from "@/config/brand";

export const metadata = {
  title: "About Us — AMNA AZAM",
  description: "The story behind AMNA AZAM — luxury Pakistani fashion rooted in heritage and crafted for the modern woman.",
};

export default function AboutPage() {
  return (
    <>
      <div className="bg-[#F8F5F0] border-b border-[#E5DDD5] py-14 text-center">
        <span className="eyebrow justify-center">Our Story</span>
        <h1 className="font-display font-bold mt-3" style={{ fontSize: "clamp(36px,5vw,64px)", letterSpacing: "-1.5px" }}>
          About AMNA AZAM
        </h1>
      </div>

      <div className="container-luxury py-section max-w-3xl mx-auto">
        <div className="prose-luxury">
          <p className="text-[16px] text-[#242222]/70 leading-[2] mb-6">
            AMNA AZAM was born from a deep love of Pakistani craft and a belief that every woman deserves to feel like royalty on her most special occasions. Our journey began in the heart of Lahore — a city whose streets hum with centuries of artisanal tradition.
          </p>
          <p className="text-[15px] text-[#242222]/60 leading-[2] mb-6">
            From the delicate hand-laid zardozi of a bridal lehenga to the crisp hand-block prints of a summer pret suit, every piece in our collection is a testament to the mastery of our artisans. We work directly with craftspeople from Faisalabad, Multan and Karachi, ensuring that the traditions of Pakistani textile art live on in every thread.
          </p>
          <p className="text-[15px] text-[#242222]/60 leading-[2] mb-10">
            We believe luxury should be accessible — not just in price, but in experience. That is why we offer personalised styling advice, custom sizing on every piece, and a shopping experience as curated as the clothes themselves.
          </p>
        </div>
        <div className="flex gap-4 flex-wrap">
          <Link href="/shop" className="btn btn-primary btn-lg">
            Shop the Collection <ArrowRight size={14} className="ml-2" />
          </Link>
          <Link href="/contact" className="btn btn-secondary btn-lg">
            Get in Touch
          </Link>
        </div>
      </div>
    </>
  );
}
