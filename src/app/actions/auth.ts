"use server";

import { prisma } from "@/server/db/client";
import {
  createSession,
  destroySession,
  verifyPassword,
} from "@/server/auth/session";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email().max(255),
  password: z.string().min(8).max(128),
});

export type ActionResult =
  | { ok: true }
  | { ok: false; error: string };

export async function loginAction(
  _prev: ActionResult | null,
  formData: FormData
): Promise<ActionResult> {
  const parsed = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parsed.success) {
    return { ok: false, error: "Invalid email or password." };
  }

  const email = parsed.data.email.toLowerCase().trim();
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user || user.status !== "ACTIVE") {
    return { ok: false, error: "Invalid email or password." };
  }

  const account = await prisma.account.findFirst({
    where: { userId: user.id, providerId: "credential" },
  });

  if (!account?.password) {
    return { ok: false, error: "Invalid email or password." };
  }

  const valid = await verifyPassword(parsed.data.password, account.password);
  if (!valid) {
    return { ok: false, error: "Invalid email or password." };
  }

  await createSession(user.id);
  return { ok: true };
}

export async function logoutAction(): Promise<void> {
  await destroySession();
}
