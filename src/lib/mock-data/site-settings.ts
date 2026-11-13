import type { SiteSettings } from "@/types";

/** Fallback when database is unavailable. Prefer getSiteSettings() from DAL. */
export const siteSettings: SiteSettings = {
  companyName: "Amani Construction Ltd",
  tagline: "Precision. Craft. Delivery.",
  description:
    "Amani Construction Ltd delivers quality buildings and civil infrastructure across Tanzania and East Africa with disciplined project management, safety leadership, and lasting craftsmanship.",
  address: "Plot 12, Ohio Street, Dar es Salaam, Tanzania",
  phone: "+255 22 211 4500",
  email: "info@amaniconstruction.co.tz",
  whatsapp: undefined,
  officeHours: "Monday – Friday, 08:00 – 17:00",
  social: {
    linkedin: "https://www.linkedin.com/",
    facebook: "https://www.facebook.com/",
    instagram: undefined,
  },
  registrationDetails: "Registered in the United Republic of Tanzania",
};
