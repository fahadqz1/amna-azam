import { BRAND } from "@/config/brand";
import InstagramIcon from "@/components/ui/InstagramIcon";
import { MessageCircle, Mail, MapPin } from "lucide-react";

export const metadata = {
  title: "Contact Us — AMNA AZAM",
  description: "Get in touch with the AMNA AZAM team for styling help, custom orders and enquiries.",
};

export default function ContactPage() {
  return (
    <>
      <div className="bg-[#F8F5F0] border-b border-[#E5DDD5] py-14 text-center">
        <span className="eyebrow justify-center">Get In Touch</span>
        <h1 className="font-display font-bold mt-3" style={{ fontSize: "clamp(36px,5vw,64px)", letterSpacing: "-1.5px" }}>
          Contact Us
        </h1>
        <p className="text-[#242222]/50 text-sm mt-3 max-w-sm mx-auto">
          We'd love to hear from you — styling advice, custom orders, or any questions.
        </p>
      </div>

      <div className="container-luxury py-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Contact info */}
          <div>
            <h2 className="font-display font-semibold text-[26px] mb-8">We&apos;re here to help</h2>
            <div className="flex flex-col gap-6">
              <a
                href={`https://wa.me/${BRAND.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="w-11 h-11 bg-[#EAD9D7] flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                  <MessageCircle size={16} />
                </div>
                <div>
                  <p className="text-[11px] font-semibold tracking-[1.5px] uppercase text-[#242222]/40 mb-0.5">WhatsApp</p>
                  <p className="text-[15px] font-medium text-[#242222] group-hover:text-[#591C2B] transition-colors">{BRAND.whatsappDisplay}</p>
                  <p className="text-[12px] text-[#242222]/40">Mon–Sat, 10am–8pm PKT</p>
                </div>
              </a>

              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="w-11 h-11 bg-[#EAD9D7] flex items-center justify-center flex-shrink-0 group-hover:bg-[#B49A68] group-hover:text-white transition-colors">
                  <InstagramIcon size={16} />
                </div>
                <div>
                  <p className="text-[11px] font-semibold tracking-[1.5px] uppercase text-[#242222]/40 mb-0.5">Instagram</p>
                  <p className="text-[15px] font-medium text-[#242222] group-hover:text-[#591C2B] transition-colors">{BRAND.instagramHandle}</p>
                  <p className="text-[12px] text-[#242222]/40">DM us for styling advice</p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-[#EAD9D7] flex items-center justify-center flex-shrink-0">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="text-[11px] font-semibold tracking-[1.5px] uppercase text-[#242222]/40 mb-0.5">Email</p>
                  <p className="text-[15px] font-medium text-[#242222]">{BRAND.email}</p>
                  <p className="text-[12px] text-[#242222]/40">We reply within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-[#EAD9D7] flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-[11px] font-semibold tracking-[1.5px] uppercase text-[#242222]/40 mb-0.5">Location</p>
                  <p className="text-[15px] font-medium text-[#242222]">{BRAND.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick contact note */}
          <div className="bg-[#F8F5F0] border border-[#E5DDD5] p-8 h-fit">
            <h3 className="font-display font-semibold text-[20px] mb-3">Custom Orders</h3>
            <p className="text-[13.5px] text-[#242222]/60 leading-relaxed mb-5">
              Every piece can be customised to your measurements and preferences. Contact us on WhatsApp to discuss your vision and we'll bring it to life.
            </p>
            <a
              href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent("Assalamu Alaikum! I'd like to place a custom order.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold btn-block"
            >
              Start a Custom Order
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
