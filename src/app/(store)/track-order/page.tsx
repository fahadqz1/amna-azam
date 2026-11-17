"use client";
import { useState } from "react";
import { Search, Package, Truck, CheckCircle, Clock } from "lucide-react";

export default function TrackOrderPage() {
  const [orderNumber, setOrderNumber] = useState("");
  const [searched, setSearched] = useState(false);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (orderNumber.trim()) setSearched(true);
  }

  return (
    <>
      <div className="bg-[#F8F5F0] border-b border-[#E5DDD5] py-14 text-center">
        <span className="eyebrow justify-center">Track</span>
        <h1 className="font-display font-bold mt-3" style={{ fontSize: "clamp(32px,5vw,56px)", letterSpacing: "-1px" }}>
          Track Your Order
        </h1>
        <p className="text-[#242222]/50 text-sm mt-3 max-w-sm mx-auto">
          Enter your order number to see the latest status of your delivery.
        </p>
      </div>

      <div className="container-luxury py-section max-w-xl mx-auto">
        <form onSubmit={handleSearch} className="flex gap-0 mb-10">
          <input
            type="text"
            value={orderNumber}
            onChange={(e) => setOrderNumber(e.target.value)}
            placeholder="e.g. AA-20250101-12345"
            className="input flex-1 border-r-0"
          />
          <button type="submit" className="btn btn-primary px-6" style={{ borderRadius: 0 }}>
            <Search size={16} />
          </button>
        </form>

        {searched && (
          <div className="border border-[#E5DDD5] p-8 text-center">
            <div className="text-3xl mb-4 opacity-30">✦</div>
            <h3 className="font-display font-semibold text-[18px] text-[#242222]/60 mb-2">
              Order not found
            </h3>
            <p className="text-[13px] text-[#242222]/40 leading-relaxed">
              We couldn't find order <strong>{orderNumber}</strong>. Please double-check the order number from your confirmation message.
            </p>
          </div>
        )}

        {!searched && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
            {[
              { icon: Clock, label: "Pending", desc: "Order received" },
              { icon: Package, label: "Processing", desc: "Being prepared" },
              { icon: Truck, label: "Shipped", desc: "On its way" },
              { icon: CheckCircle, label: "Delivered", desc: "With you!" },
            ].map(({ icon: Icon, label, desc }) => (
              <div key={label} className="border border-[#E5DDD5] p-4 text-center">
                <Icon size={18} className="mx-auto text-[#B49A68] mb-2" />
                <p className="text-[12px] font-semibold text-[#242222]">{label}</p>
                <p className="text-[11px] text-[#242222]/40">{desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
