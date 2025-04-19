// /app/api/youtube/trending/route.js
import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("https://m.youtube.com/feed/trending?hl=id&gl=ID&client=mv-google", {
    headers: {
      "User-Agent":
        "Opera/9.80 (BlackBerry; Opera Mini/4.5.33868/37.8993; HD; en_US) Presto/2.12.423 Version/12.16",
    },
  });

  const html = await res.text();

  // You can process it here if needed. For now, just return raw HTML
  return NextResponse.json({ html });
}
