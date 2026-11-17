"use client";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex items-center justify-center gap-3 py-4">
        <div className="w-9 h-9 rounded-full bg-[#591C2B] flex items-center justify-center">
          <Check size={16} className="text-white" />
        </div>
        <p className="text-[#242222] font-medium text-[14.5px]">
          You're on the list! Welcome to the circle.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-0 max-w-md mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        required
        className="input flex-1 border-r-0 focus:z-10 focus:relative"
        disabled={status === "loading"}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="btn btn-primary px-6 flex-shrink-0 disabled:opacity-60"
        style={{ borderRadius: "0" }}
      >
        {status === "loading" ? (
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        ) : (
          <ArrowRight size={15} />
        )}
      </button>
      {status === "error" && (
        <p className="text-red-500 text-xs mt-2 absolute">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
