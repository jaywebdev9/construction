import Link from "next/link";
import Image from "next/image";
import { getPublishedArticles } from "@/lib/mock-data";
import { formatDate } from "@/lib/utils";

export const metadata = {
  title: "Insights",
  description: "Articles and notes on construction and delivery.",
};

export default function InsightsPage() {
  const articles = getPublishedArticles();

  return (
    <div className="pt-20">
      <section className="border-b border-concrete/50 bg-white py-16 md:py-20">
        <div className="container-wide">
          <p className="eyebrow">Knowledge</p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Insights
          </h1>
          <p className="mt-4 max-w-2xl text-charcoal/70">
            Sample articles for demonstration. Replace with company-authored
            content.
          </p>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Link
                key={article.id}
                href={`/insights/${article.slug}`}
                className="group card-surface overflow-hidden"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={article.coverImage}
                    alt=""
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    sizes="33vw"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-medium uppercase tracking-[0.12em] text-amber">
                    {article.category}
                  </p>
                  <h2 className="mt-2 font-display text-lg font-semibold group-hover:text-amber">
                    {article.title}
                  </h2>
                  <p className="mt-2 line-clamp-2 text-sm text-charcoal/70">
                    {article.excerpt}
                  </p>
                  <p className="mt-3 text-xs text-charcoal/50">
                    {formatDate(article.publishedAt)} · {article.author}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
