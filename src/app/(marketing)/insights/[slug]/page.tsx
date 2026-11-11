import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getArticleBySlug, articles } from "@/lib/mock-data";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return articles.filter((a) => a.published).map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article not found" };
  return { title: article.title, description: article.excerpt };
}

export default async function InsightDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <div className="pt-20">
      <article>
        <div className="relative aspect-[21/9] min-h-[32vh] bg-charcoal">
          <Image
            src={article.coverImage}
            alt=""
            fill
            priority
            className="object-cover opacity-70"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 to-transparent" />
          <div className="container-content absolute inset-x-0 bottom-0 pb-10">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Insights
            </Link>
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.15em] text-amber-300">
              {article.category}
            </p>
            <h1 className="mt-2 max-w-3xl font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {article.title}
            </h1>
            <p className="mt-3 text-sm text-white/70">
              {formatDate(article.publishedAt)} · {article.author}
            </p>
          </div>
        </div>
        <div className="section-padding">
          <div className="container-content prose prose-neutral max-w-3xl">
            {article.content.split("\n").map((line, i) => {
              if (line.startsWith("## "))
                return (
                  <h2 key={i} className="!mt-10">
                    {line.replace("## ", "")}
                  </h2>
                );
              if (line.startsWith("*") && line.endsWith("*"))
                return (
                  <p key={i} className="text-sm italic text-charcoal/50">
                    {line.replace(/^\*|\*$/g, "")}
                  </p>
                );
              if (line.startsWith("- "))
                return (
                  <li key={i} className="ml-4">
                    {line.replace("- ", "")}
                  </li>
                );
              if (line.trim() === "") return null;
              return <p key={i}>{line}</p>;
            })}
          </div>
        </div>
      </article>
    </div>
  );
}
