export const metadata = { title: "Terms & Conditions" };

export default function TermsPage() {
  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="container-content prose prose-neutral max-w-3xl">
          <h1>Terms & Conditions</h1>
          <p className="text-sm text-charcoal/50">
            Draft placeholder for legal review. Not jurisdiction-specific legal
            wording.
          </p>
          <h2>1. Use of the website</h2>
          <p>
            Content on this site is for general information. It does not
            constitute an offer or contractual commitment unless expressly stated
            in writing by the company.
          </p>
          <h2>2. Intellectual property</h2>
          <p>
            Site content, branding, and materials remain the property of [Company
            Name] or its licensors.
          </p>
          <h2>3. Contact</h2>
          <p>[Email Address]</p>
        </div>
      </section>
    </div>
  );
}
