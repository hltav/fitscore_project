import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

  const response = await fetch("https://hltav2025.app.n8n.cloud/webhook/candidates", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  return NextResponse.json(result);
}
