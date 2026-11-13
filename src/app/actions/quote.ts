"use server";

import { z } from "zod";
import { createQuoteRequest } from "@/server/dal/inquiries";

const schema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email().max(255),
  phone: z.string().min(6).max(40),
  company: z.string().max(160).optional(),
  projectType: z.string().min(1).max(80),
  location: z.string().min(2).max(160),
  scope: z.string().min(10).max(8000),
  budget: z.string().max(120).optional(),
  timeline: z.string().max(120).optional(),
});

export type QuoteResult =
  | { ok: true; reference: string }
  | { ok: false; error: string; fieldErrors?: Record<string, string[]> };

export async function submitQuoteAction(
  input: z.infer<typeof schema>
): Promise<QuoteResult> {
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
    const quote = await createQuoteRequest(parsed.data);
    return { ok: true, reference: quote.reference };
  } catch {
    return {
      ok: false,
      error: "Unable to submit right now. Please try again later.",
    };
  }
}
