"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteSettings } from "@/lib/mock-data";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Our Team", href: "/team" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solid = !isHome || scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        solid
          ? "border-b border-concrete/50 bg-offwhite/95 backdrop-blur-sm"
          : "bg-transparent"
      )}
    >
      <div className="container-wide flex h-16 items-center justify-between md:h-20">
        <Link
          href="/"
          className={cn(
            "font-display text-lg font-semibold tracking-tight md:text-xl",
            solid ? "text-charcoal" : "text-white"
          )}
        >
          {siteSettings.companyName}
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium transition-colors",
                  solid
                    ? active
                      ? "text-amber"
                      : "text-charcoal/80 hover:text-charcoal"
                    : active
                      ? "text-amber-300"
                      : "text-white/85 hover:text-white"
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/request-a-quote"
            className={cn(
              "ml-3 rounded-sm px-4 py-2 text-sm font-medium transition-colors",
              solid
                ? "bg-amber text-white hover:bg-amber-600"
                : "bg-white text-charcoal hover:bg-offwhite"
            )}
          >
            Request a Quote
          </Link>
        </nav>

        <button
          type="button"
          className={cn(
            "inline-flex items-center justify-center rounded-sm p-2 lg:hidden",
            solid ? "text-charcoal" : "text-white"
          )}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-concrete/40 bg-offwhite lg:hidden">
          <nav className="container-wide flex flex-col gap-1 py-4">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-2 py-3 text-base font-medium",
                    active ? "text-amber" : "text-charcoal"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/request-a-quote"
              className="mt-2 rounded-sm bg-amber px-4 py-3 text-center text-sm font-medium text-white"
            >
              Request a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
