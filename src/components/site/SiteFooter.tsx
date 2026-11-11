import Link from "next/link";
import { siteSettings } from "@/lib/mock-data";

const footerNav = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Our Team", href: "/team" },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Building Construction", href: "/services/building-construction" },
  {
    label: "Civil Engineering",
    href: "/services/civil-engineering-infrastructure",
  },
  { label: "Residential", href: "/services/residential-construction" },
  { label: "Commercial & Industrial", href: "/services/commercial-industrial" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-concrete/50 bg-charcoal text-white">
      <div className="container-wide section-padding">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <p className="font-display text-xl font-semibold">
              {siteSettings.companyName}
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/70">
              {siteSettings.description}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-amber-400">
              Explore
            </p>
            <ul className="mt-4 space-y-2">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-amber-400">
              Services
            </p>
            <ul className="mt-4 space-y-2">
              {serviceLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-amber-400">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li>{siteSettings.address}</li>
              <li>
                <a
                  href={`tel:${siteSettings.phone.replace(/\s/g, "")}`}
                  className="hover:text-white"
                >
                  {siteSettings.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteSettings.email}`}
                  className="hover:text-white"
                >
                  {siteSettings.email}
                </a>
              </li>
              <li className="pt-1">{siteSettings.officeHours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} {siteSettings.companyName}. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/50">
            <Link href="/privacy" className="hover:text-white/80">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white/80">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
