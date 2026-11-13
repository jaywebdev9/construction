"use server";

import { z } from "zod";
import { createContactInquiry } from "@/server/dal/inquiries";

const schema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email().max(255),
  phone: z.string().max(40).optional(),
  message: z.string().min(10).max(5000),
});

export type ContactResult =
  | { ok: true; reference: string }
  | { ok: false; error: string; fieldErrors?: Record<string, string[]> };

export async function submitContactAction(
  input: z.infer<typeof schema>
): Promise<ContactResult> {
  const parsed = schema.safeParse(input);
  if (!parsed.success) {
    return {
      ok: false,
      error: "Please check the form fields.",
      fieldErrors: parsed.error.flatten().fieldErrors as Record<
        string,
        string[]
      >,
    };
  }

  try {
    const inquiry = await createContactInquiry(parsed.data);
    // Email notification can be wired via Resend adapter; persistence is primary.
    return { ok: true, reference: inquiry.reference };
  } catch {
    return {
      ok: false,
      error: "Unable to submit right now. Please try again later.",
    };
  }
}
