import "server-only";
import { prisma } from "@/server/db/client";

export async function getSiteSettings() {
  const settings = await prisma.siteSetting.findUnique({
    where: { id: "default" },
  });
  if (settings) return settings;

  return {
    id: "default",
    companyName: "Amani Construction Ltd",
    tagline: "Precision. Craft. Delivery.",
    description:
      "Amani Construction Ltd delivers quality buildings and infrastructure across East Africa with disciplined project management and a commitment to safety.",
    address: "Plot 12, Ohio Street, Dar es Salaam, Tanzania",
    phone: "+255 22 000 0000",
    email: "info@amaniconstruction.co.tz",
    whatsapp: null as string | null,
    officeHours: "Monday – Friday, 08:00 – 17:00",
    linkedin: null as string | null,
    facebook: null as string | null,
    instagram: null as string | null,
    twitter: null as string | null,
    registrationDetails: "Registered in Tanzania",
    updatedAt: new Date(),
  };
}
