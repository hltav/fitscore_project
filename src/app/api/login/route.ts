import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { supabase } from "@/libs/supabaseClient";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  if (error || !data)
    return NextResponse.json(
      { error: "Usuário não encontrado" },
      { status: 401 }
    );

  const passwordMatch = await bcrypt.compare(password, data.password);
  if (!passwordMatch)
    return NextResponse.json({ error: "Senha incorreta" }, { status: 401 });

  const token = Buffer.from(`${email}:${data.role}`).toString("base64");

  return NextResponse.json({ success: true, token });
}
