"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/mock-data";
import type { ProjectCategory } from "@/types";
import { cn } from "@/lib/utils";

const categories: { value: ProjectCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "residential", label: "Residential" },
  { value: "commercial", label: "Commercial" },
  { value: "industrial", label: "Industrial" },
  { value: "infrastructure", label: "Infrastructure" },
  { value: "institutional", label: "Institutional" },
  { value: "renovation", label: "Renovation" },
];

export default function ProjectsPage() {
  const [category, setCategory] = useState<ProjectCategory | "all">("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return projects
      .filter((p) => p.published)
      .filter((p) => category === "all" || p.category === category)
      .filter(
        (p) =>
          !query ||
          p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.location.toLowerCase().includes(query.toLowerCase())
      );
  }, [category, query]);

  return (
    <div className="pt-20">
      <section className="border-b border-concrete/50 bg-white py-16 md:py-20">
        <div className="container-wide">
          <p className="eyebrow">Portfolio</p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Projects
          </h1>
          <p className="mt-4 max-w-2xl text-charcoal/70">
            Selected work across residential, commercial, industrial, and
            infrastructure. All projects shown are demo placeholders.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c.value}
                  type="button"
                  onClick={() => setCategory(c.value)}
                  className={cn(
                    "rounded-sm px-3 py-1.5 text-sm font-medium transition-colors",
                    category === c.value
                      ? "bg-charcoal text-white"
                      : "bg-white text-charcoal/70 hover:bg-concrete/40"
                  )}
                >
                  {c.label}
                </button>
              ))}
            </div>
            <input
              type="search"
              placeholder="Search by title or location…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="input-field max-w-xs"
              aria-label="Search projects"
            />
          </div>

          {filtered.length === 0 ? (
            <div className="mt-16 text-center">
              <p className="text-lg font-medium text-charcoal">
                No projects match your filters
              </p>
              <p className="mt-2 text-sm text-charcoal/60">
                Try clearing search or selecting a different category.
              </p>
              <button
                type="button"
                onClick={() => {
                  setCategory("all");
                  setQuery("");
                }}
                className="btn-secondary mt-6"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((project) => (
                <Link
                  key={project.id}
                  href={`/projects/${project.slug}`}
                  className="group card-surface overflow-hidden"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <span className="absolute left-3 top-3 rounded-sm bg-charcoal/80 px-2 py-1 text-xs font-medium uppercase tracking-wider text-white">
                      {project.status}
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-medium uppercase tracking-[0.12em] text-amber">
                      {project.category} · {project.location}
                    </p>
                    <h2 className="mt-2 font-display text-lg font-semibold text-charcoal group-hover:text-amber">
                      {project.title}
                    </h2>
                    <p className="mt-2 line-clamp-2 text-sm text-charcoal/70">
                      {project.summary}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
