import Link from "next/link";
import { siteSettings } from "@/lib/mock-data";

export const metadata = {
  title: "About",
  description: "Company overview, values, and capabilities.",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <section className="border-b border-concrete/50 bg-white py-16 md:py-20">
        <div className="container-wide">
          <p className="eyebrow">Company</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            About {siteSettings.companyName}
          </h1>
          <p className="mt-4 max-w-2xl text-charcoal/70">
            Structured overview ready for verified company story, mission,
            vision, and credentials. No fabricated history or statistics.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-content space-y-16">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-semibold">Overview</h2>
              <p className="mt-4 leading-relaxed text-charcoal/80">
                {siteSettings.description} Replace this paragraph with the
                confirmed company narrative, founding context, and market focus
                once available.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold">
                Mission & vision
              </h2>
              <p className="mt-4 leading-relaxed text-charcoal/80">
                <strong className="text-charcoal">Mission:</strong> [Mission
                statement placeholder]
              </p>
              <p className="mt-3 leading-relaxed text-charcoal/80">
                <strong className="text-charcoal">Vision:</strong> [Vision
                statement placeholder]
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold">Values</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {["Safety", "Quality", "Integrity", "Delivery"].map((v) => (
                <div
                  key={v}
                  className="border border-concrete/60 bg-white p-5"
                >
                  <h3 className="font-display font-semibold">{v}</h3>
                  <p className="mt-2 text-sm text-charcoal/70">
                    [Short description of how this value is practised — editable]
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold">
              HSE & quality
            </h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-charcoal/80">
              Health, safety, and environmental management, together with quality
              systems, are central to how we work. Specific certifications,
              policies, and performance indicators should be listed here only when
              verified. [Credentials / certifications placeholder]
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/request-a-quote" className="btn-primary">
              Request a Quote
            </Link>
            <Link href="/team" className="btn-secondary">
              Meet the team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
