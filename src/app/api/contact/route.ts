import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";
import { z } from "zod";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate using Zod schema
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form data", issues: parsed.error.issues },
        { status: 400 }
      );
    }

    const { name, email, service, message } = parsed.data;

    // TODO: Integrate with email service (e.g., Resend, SendGrid, Nodemailer)
    // Example: await sendEmail({ to: "info@ayaltech.com.bd", name, email, service, message });

    console.log("Contact form submission:", { name, email, service, message });

    return NextResponse.json(
      { success: true, message: "Message received. We will contact you shortly." },
      { status: 200 }
    );
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: "Validation failed" }, { status: 400 });
    }
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
