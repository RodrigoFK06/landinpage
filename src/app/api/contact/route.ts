import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  subject?: string;
  message: string;
};

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<ContactPayload>;

    // Basic validation
    if (!isNonEmptyString(body?.name) || !isNonEmptyString(body?.email) || !isNonEmptyString(body?.message)) {
      return NextResponse.json(
        { error: "Campos requeridos: name, email, message" },
        { status: 400 }
      );
    }

    const payload: ContactPayload = {
      name: body.name!,
      email: body.email!,
      company: body.company ?? "",
      subject: body.subject ?? "",
      message: body.message!,
    };

    const apiUrl = "https://portafolio-bytecore.vercel.app/api/contact";
    const apiKey = process.env.BYTECORE_API_KEY ?? process.env.NEXT_PUBLIC_BYTECORE_API_KEY;

    const res = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(apiKey ? { "x-api-key": apiKey } : {}),
      },
      body: JSON.stringify(payload),
    });

    type ContactAPIResponse = { success?: boolean; message?: string } & Record<string, unknown>;
    const text = await res.text();
    let json: ContactAPIResponse;
    try {
      json = JSON.parse(text) as ContactAPIResponse;
    } catch {
      json = { message: text };
    }

    return NextResponse.json<ContactAPIResponse>(json, { status: res.status });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Solicitud inválida o error del servidor";
    return NextResponse.json(
      { error: message },
      { status: 400 }
    );
  }
}
