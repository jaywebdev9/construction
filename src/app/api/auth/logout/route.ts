import { destroySession } from "@/server/auth/session";
import { NextResponse } from "next/server";

export async function POST() {
  await destroySession();
  return NextResponse.redirect(
    new URL("/admin/login", process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"),
    { status: 303 }
  );
}
