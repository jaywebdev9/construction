"use client";

import { use, useState } from "react";
import Link from "next/link";
import { projects } from "@/lib/mock-data";

export default function EditProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const project = projects.find((p) => p.id === id);
  const [saved, setSaved] = useState(false);

  if (!project) {
    return (
      <div>
        <p className="text-slate-600">Project not found.</p>
        <Link href="/admin/projects" className="text-amber-700 text-sm">
          ← Back
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <Link
          href="/admin/projects"
          className="text-sm text-slate-500 hover:underline"
        >
          ← Projects
        </Link>
        <h1 className="mt-2 text-2xl font-semibold text-slate-900">
          Edit project
        </h1>
        <p className="text-sm text-slate-500">
          Demo editor — save updates local UI only
        </p>
      </div>

      <div className="space-y-4 rounded-lg border border-slate-200 bg-white p-6">
        <div>
          <label className="block text-sm font-medium text-slate-700">
            Title
          </label>
          <input
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
            defaultValue={project.title}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">
            Slug
          </label>
          <input
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm font-mono"
            defaultValue={project.slug}
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Category
            </label>
            <input
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm capitalize"
              defaultValue={project.category}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Status
            </label>
            <select
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
              defaultValue={project.status}
            >
              <option value="completed">Completed</option>
              <option value="ongoing">Ongoing</option>
              <option value="planned">Planned</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">
            Location
          </label>
          <input
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
            defaultValue={project.location}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">
            Summary
          </label>
          <textarea
            rows={3}
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
            defaultValue={project.summary}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">
            Description
          </label>
          <textarea
            rows={5}
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
            defaultValue={project.description}
          />
        </div>
        <p className="text-xs text-slate-400">
          Gallery manager and cover image upload support local preview only in
          this phase.
        </p>
        <div className="flex gap-3 pt-2">
          <button
            type="button"
            onClick={() => setSaved(true)}
            className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white"
          >
            Save (demo)
          </button>
          <Link
            href="/admin/projects"
            className="rounded-md border border-slate-300 px-4 py-2 text-sm"
          >
            Cancel
          </Link>
          {saved && (
            <span className="self-center text-sm text-green-700">
              Saved (demo)
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
