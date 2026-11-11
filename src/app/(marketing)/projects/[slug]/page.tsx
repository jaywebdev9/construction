import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getProjectBySlug, projects } from "@/lib/mock-data";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.filter((p) => p.published).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.seoTitle || project.title,
    description: project.seoDescription || project.summary,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const related = projects
    .filter(
      (p) =>
        p.published &&
        p.id !== project.id &&
        p.category === project.category
    )
    .slice(0, 3);

  return (
    <div className="pt-20">
      <section className="relative aspect-[21/9] min-h-[40vh] bg-charcoal">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          priority
          className="object-cover opacity-80"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent" />
        <div className="container-wide absolute inset-x-0 bottom-0 pb-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            All projects
          </Link>
          <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {project.title}
          </h1>
          <p className="mt-3 text-sm uppercase tracking-[0.15em] text-amber-300">
            {project.category} · {project.location} · {project.status}
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-content">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-display text-xl font-semibold">Overview</h2>
                <p className="mt-3 leading-relaxed text-charcoal/80">
                  {project.description}
                </p>
              </div>
              <div>
                <h2 className="font-display text-xl font-semibold">Scope</h2>
                <ul className="mt-3 list-inside list-disc space-y-1 text-charcoal/80">
                  {project.scope.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              {project.gallery.length > 0 && (
                <div>
                  <h2 className="font-display text-xl font-semibold">Gallery</h2>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {project.gallery.map((src, i) => (
                      <div
                        key={i}
                        className="relative aspect-[4/3] overflow-hidden"
                      >
                        <Image
                          src={src}
                          alt={`${project.title} — image ${i + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, 40vw"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <aside className="space-y-6">
              <div className="card-surface p-6">
                <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-amber">
                  Key facts
                </h3>
                <dl className="mt-4 space-y-3 text-sm">
                  <div>
                    <dt className="text-charcoal/50">Location</dt>
                    <dd className="font-medium">{project.location}</dd>
                  </div>
                  <div>
                    <dt className="text-charcoal/50">Category</dt>
                    <dd className="font-medium capitalize">{project.category}</dd>
                  </div>
                  <div>
                    <dt className="text-charcoal/50">Status</dt>
                    <dd className="font-medium capitalize">{project.status}</dd>
                  </div>
                  {project.completionDate && (
                    <div>
                      <dt className="text-charcoal/50">Completion</dt>
                      <dd className="font-medium">{project.completionDate}</dd>
                    </div>
                  )}
                </dl>
              </div>
              <Link href="/request-a-quote" className="btn-primary w-full">
                Request a Quote
              </Link>
            </aside>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-concrete/50 bg-white section-padding">
          <div className="container-wide">
            <h2 className="font-display text-2xl font-semibold">
              Related projects
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.id}
                  href={`/projects/${p.slug}`}
                  className="group"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={p.coverImage}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                      sizes="33vw"
                    />
                  </div>
                  <h3 className="mt-3 font-display font-semibold group-hover:text-amber">
                    {p.title}
                  </h3>
                  <p className="text-sm text-charcoal/60">{p.location}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
