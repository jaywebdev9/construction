import { siteSettings } from "@/lib/mock-data";
import { ContactForm } from "@/components/site/ContactForm";

export const metadata = {
  title: "Contact",
  description: "Get in touch with the team.",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <section className="border-b border-concrete/50 bg-white py-16 md:py-20">
        <div className="container-wide">
          <p className="eyebrow">Get in touch</p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Contact
          </h1>
          <p className="mt-4 max-w-2xl text-charcoal/70">
            Reach out for project enquiries, general questions, or to request a
            quotation. Contact details below are placeholders.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-xs font-medium uppercase tracking-[0.15em] text-amber">
                  Office
                </h2>
                <p className="mt-2 text-charcoal/80">{siteSettings.address}</p>
              </div>
              <div>
                <h2 className="text-xs font-medium uppercase tracking-[0.15em] text-amber">
                  Phone
                </h2>
                <p className="mt-2">
                  <a
                    href={`tel:${siteSettings.phone.replace(/\s/g, "")}`}
                    className="text-charcoal hover:text-amber"
                  >
                    {siteSettings.phone}
                  </a>
                </p>
              </div>
              <div>
                <h2 className="text-xs font-medium uppercase tracking-[0.15em] text-amber">
                  Email
                </h2>
                <p className="mt-2">
                  <a
                    href={`mailto:${siteSettings.email}`}
                    className="text-charcoal hover:text-amber"
                  >
                    {siteSettings.email}
                  </a>
                </p>
              </div>
              <div>
                <h2 className="text-xs font-medium uppercase tracking-[0.15em] text-amber">
                  Hours
                </h2>
                <p className="mt-2 text-charcoal/80">{siteSettings.officeHours}</p>
              </div>
              <div className="rounded-sm border border-dashed border-concrete bg-white p-6 text-sm text-charcoal/60">
                Map embed placeholder — replace with verified location and map
                provider when ready.
              </div>
            </div>
            <div className="lg:col-span-3">
              <div className="card-surface p-6 sm:p-8">
                <h2 className="font-display text-xl font-semibold">
                  Send a message
                </h2>
                <p className="mt-1 text-sm text-charcoal/60">
                  Frontend demo only. Submission is simulated locally.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
