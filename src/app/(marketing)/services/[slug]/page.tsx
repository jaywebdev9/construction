import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getServiceBySlug, services } from "@/lib/mock-data";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.filter((s) => s.published).map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service not found" };
  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <div className="pt-20">
      <section className="relative aspect-[21/9] min-h-[36vh] bg-charcoal">
        <Image
          src={service.image}
          alt={service.title}
          fill
          priority
          className="object-cover opacity-70"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 to-transparent" />
        <div className="container-wide absolute inset-x-0 bottom-0 pb-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            All services
          </Link>
          <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {service.title}
          </h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-content">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="font-display text-xl font-semibold">Overview</h2>
                <p className="mt-3 leading-relaxed text-charcoal/80">
                  {service.description}
                </p>
              </div>
              <div>
                <h2 className="font-display text-xl font-semibold">
                  Scope of work
                </h2>
                <ul className="mt-3 list-inside list-disc space-y-1.5 text-charcoal/80">
                  {service.scope.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-display text-xl font-semibold">Approach</h2>
                <ul className="mt-3 list-inside list-disc space-y-1.5 text-charcoal/80">
                  {service.approach.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <aside>
              <div className="card-surface sticky top-28 p-6">
                <h3 className="font-display text-lg font-semibold">
                  Discuss this service
                </h3>
                <p className="mt-2 text-sm text-charcoal/70">
                  Tell us about your project and we will respond with next steps.
                </p>
                <Link
                  href="/request-a-quote"
                  className="btn-primary mt-6 w-full"
                >
                  Request a Quote
                </Link>
                <Link
                  href="/contact"
                  className="btn-ghost mt-2 w-full text-center"
                >
                  Contact us
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
