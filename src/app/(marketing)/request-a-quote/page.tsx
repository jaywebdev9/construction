import { MultiStepQuoteForm } from "@/components/site/MultiStepQuoteForm";

export const metadata = {
  title: "Request a Quote",
  description: "Multi-step quotation request form (frontend demo).",
};

export default function RequestQuotePage() {
  return (
    <div className="pt-20">
      <section className="border-b border-concrete/50 bg-white py-16 md:py-20">
        <div className="container-wide">
          <p className="eyebrow">Enquiry</p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Request a Quote
          </h1>
          <p className="mt-4 max-w-2xl text-charcoal/70">
            Complete the steps below. This is a frontend-only demo: data stays in
            the browser and a demo reference number is shown on success.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-content max-w-2xl">
          <MultiStepQuoteForm />
        </div>
      </section>
    </div>
  );
}
