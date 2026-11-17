"use client";
import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { BRAND } from "@/config/brand";

export default function WhatsAppFloat() {
  const [show, setShow] = useState(false);
  const [bubbleOpen, setBubbleOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => { setShow(true); setBubbleOpen(true); }, 4000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-7 right-7 z-[1500] flex flex-col items-end gap-2.5">
      {bubbleOpen && (
        <div
          className="bg-white border border-[#E5DDD5] shadow-[0_4px_24px_rgba(36,34,34,.12)] px-4 py-3 max-w-[220px] flex items-start gap-2.5"
          style={{ borderRadius: "14px 14px 2px 14px", animation: "fadeUp .3s ease" }}
        >
          <span className="text-[12.5px] font-medium text-[#242222] leading-relaxed">
            Need help? Chat with us!
          </span>
          <button
            onClick={() => setBubbleOpen(false)}
            className="text-[#242222]/40 hover:text-[#242222] flex-shrink-0 mt-0.5"
          >
            <X size={12} />
          </button>
        </div>
      )}
      <a
        href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent("Assalamu Alaikum! I need help with AMNA AZAM.")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_4px_24px_rgba(37,211,102,.4)] hover:scale-110 hover:shadow-[0_6px_32px_rgba(37,211,102,.55)] transition-all duration-300"
        aria-label="Chat on WhatsApp"
        onClick={() => setBubbleOpen(false)}
      >
        <MessageCircle size={26} fill="white" strokeWidth={0} />
      </a>
    </div>
  );
}
