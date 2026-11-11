import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import {
  getFeaturedProjects,
  getPublishedServices,
  siteSettings,
} from "@/lib/mock-data";

export default function HomePage() {
  const featured = getFeaturedProjects().slice(0, 3);
  const services = getPublishedServices().slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-end bg-charcoal">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
            alt="Construction site with structural steel and concrete works"
            fill
            priority
            className="object-cover opacity-60"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-charcoal/30" />
        </div>
        <div className="container-wide relative z-10 pb-20 pt-32 md:pb-28">
          <p className="eyebrow text-amber-400">Construction & Civil Engineering</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Building with precision. Delivering with discipline.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/80">
            {siteSettings.description}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/projects" className="btn-primary">
              Explore Our Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/request-a-quote"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/40 bg-transparent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white hover:text-charcoal"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Credibility strip */}
      <section className="border-b border-concrete/50 bg-white">
        <div className="container-wide flex flex-wrap items-center justify-between gap-6 py-8 text-sm text-charcoal/70">
          <p className="font-medium text-charcoal">
            [Company Name] — editable credibility placeholders
          </p>
          <div className="flex flex-wrap gap-8">
            <span>[Service regions]</span>
            <span>[Focus sectors]</span>
            <span>[HSE commitment]</span>
          </div>
        </div>
      </section>

      {/* Company intro */}
      <section className="section-padding bg-offwhite">
        <div className="container-content">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="eyebrow">Who we are</p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
                A construction partner focused on quality and delivery
              </h2>
            </div>
            <div className="space-y-4 text-charcoal/80 leading-relaxed">
              <p>
                We work with developers, institutions, and private clients to
                deliver buildings and infrastructure that perform. Our approach
                combines technical capability, site discipline, and clear
                communication from enquiry through handover.
              </p>
              <p>
                Company history, values, and verified credentials will appear
                here once provided. Until then, this section remains a structured
                placeholder for accurate company content.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-medium text-amber hover:text-amber-600"
              >
                About the company
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Capabilities</p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Services
              </h2>
            </div>
            <Link
              href="/services"
              className="btn-secondary"
            >
              All services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="group flex flex-col border border-concrete/60 bg-offwhite p-6 transition-colors hover:border-amber/40 hover:bg-white"
              >
                <span className="font-display text-3xl font-semibold text-concrete">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-charcoal group-hover:text-amber">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal/70">
                  {service.shortDescription}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-amber opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Selected projects */}
      <section className="section-padding bg-charcoal text-white">
        <div className="container-wide">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow text-amber-400">Portfolio</p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Selected projects
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-sm border border-white/30 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white hover:text-charcoal"
            >
              View all projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 space-y-16">
            {featured.map((project, index) => (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                className={`group grid gap-8 lg:gap-12 ${
                  index % 2 === 0
                    ? "lg:grid-cols-[1.2fr_1fr]"
                    : "lg:grid-cols-[1fr_1.2fr]"
                }`}
              >
                <div
                  className={`relative aspect-[16/10] overflow-hidden ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                </div>
                <div
                  className={`flex flex-col justify-center ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-amber-400">
                    {project.category} · {project.location}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-white/70 leading-relaxed">
                    {project.summary}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-amber-400">
                    View project
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose / process */}
      <section className="section-padding bg-offwhite">
        <div className="container-content">
          <p className="eyebrow">Approach</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            How we work
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Discover",
                text: "Understand scope, constraints, and success criteria with the client team.",
              },
              {
                step: "02",
                title: "Plan",
                text: "Define programme, method, quality plan, and clear commercial framework.",
              },
              {
                step: "03",
                title: "Deliver",
                text: "Execute with site discipline, progress reporting, and controlled change.",
              },
              {
                step: "04",
                title: "Handover",
                text: "Commission, document, and hand over with a clear defects process.",
              },
            ].map((item) => (
              <div key={item.step} className="border-t border-concrete pt-6">
                <span className="font-display text-sm font-semibold text-amber">
                  {item.step}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-xs text-charcoal/50">
            Process labels are editable placeholders and should reflect the
            company&apos;s verified delivery approach.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-20 text-white">
        <div className="container-content text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Ready to discuss your project?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-white/70">
            Share your requirements and we will respond with next steps. Demo
            form only — no data is sent to a server.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/request-a-quote" className="btn-primary">
              Request a Quote
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/30 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white hover:text-charcoal"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
