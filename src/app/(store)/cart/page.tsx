import Link from "next/link";
import { ShoppingBag, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Your Cart — AMNA AZAM",
};

export default function CartPage() {
  return (
    <>
      <div className="bg-[#F8F5F0] border-b border-[#E5DDD5] py-10 text-center">
        <h1 className="font-display font-bold" style={{ fontSize: "clamp(28px,4vw,44px)", letterSpacing: "-1px" }}>
          Your Shopping Bag
        </h1>
      </div>

      <div className="container-luxury py-section max-w-3xl mx-auto">
        <div className="text-center py-24 border border-dashed border-[#E5DDD5]">
          <ShoppingBag size={36} className="mx-auto text-[#242222]/20 mb-4" />
          <h2 className="font-display font-semibold text-[20px] text-[#242222]/50 mb-2">Your bag is empty</h2>
          <p className="text-[13px] text-[#242222]/35 mb-8">Start exploring our collections and add pieces you love.</p>
          <Link href="/shop" className="btn btn-primary btn-lg">
            Explore Collections
            <ArrowRight size={14} className="ml-2" />
          </Link>
        </div>
      </div>
    </>
  );
}
