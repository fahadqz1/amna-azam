import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const supabase = await createAdminClient();
    const { error } = await supabase
      .from("newsletter_subscribers")
      .upsert({ email: email.toLowerCase().trim(), subscribed_at: new Date().toISOString() }, { onConflict: "email" });

    if (error) {
      console.error("Newsletter upsert error:", error.message);
      return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
