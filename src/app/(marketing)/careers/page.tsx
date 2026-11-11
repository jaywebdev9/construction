export const metadata = { title: "Careers" };

export default function CareersPage() {
  return (
    <div className="pt-20">
      <section className="border-b border-concrete/50 bg-white py-16 md:py-20">
        <div className="container-wide">
          <p className="eyebrow">Join us</p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Careers
          </h1>
          <p className="mt-4 max-w-2xl text-charcoal/70">
            Open roles will be listed here. Currently no live vacancies are
            published in this demo.
          </p>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-content text-center">
          <p className="text-lg font-medium text-charcoal">
            No open positions at the moment
          </p>
          <p className="mt-2 text-charcoal/60">
            Check back later or send a general enquiry via the contact page.
          </p>
        </div>
      </section>
    </div>
  );
}
