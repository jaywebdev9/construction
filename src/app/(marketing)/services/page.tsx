import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getPublishedServices } from "@/lib/mock-data";

export const metadata = {
  title: "Services",
  description:
    "Building construction, civil engineering, residential, commercial, renovation, and project management.",
};

export default function ServicesPage() {
  const services = getPublishedServices();

  return (
    <div className="pt-20">
      <section className="border-b border-concrete/50 bg-white py-16 md:py-20">
        <div className="container-wide">
          <p className="eyebrow">What we do</p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Services
          </h1>
          <p className="mt-4 max-w-2xl text-charcoal/70">
            A broad construction capability across buildings, infrastructure, and
            specialist works. Service descriptions are structured placeholders
            ready for company-specific content.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide space-y-16">
          {services.map((service, i) => (
            <article
              key={service.id}
              className={`grid gap-8 lg:grid-cols-2 lg:gap-16 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-concrete/30">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-display text-sm font-semibold text-amber">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                  {service.title}
                </h2>
                <p className="mt-4 leading-relaxed text-charcoal/75">
                  {service.shortDescription}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-amber hover:text-amber-600"
                >
                  View service details
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
