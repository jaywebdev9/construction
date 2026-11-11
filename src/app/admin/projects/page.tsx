"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { projects as initial } from "@/lib/mock-data";
import type { Project } from "@/types";

export default function AdminProjectsPage() {
  const [items] = useState<Project[]>(initial);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<string>("all");

  const filtered = useMemo(() => {
    return items.filter((p) => {
      const matchQ =
        !query ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.location.toLowerCase().includes(query.toLowerCase());
      const matchS = status === "all" || p.status === status;
      return matchQ && matchS;
    });
  }, [items, query, status]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Projects</h1>
          <p className="text-sm text-slate-500">
            Manage portfolio entries (local demo state)
          </p>
        </div>
        <Link
          href="/admin/projects/new"
          className="inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
        >
          Add project
        </Link>
      </div>

      <div className="flex flex-wrap gap-3">
        <input
          type="search"
          placeholder="Search…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="rounded-md border border-slate-300 px-3 py-2 text-sm"
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="rounded-md border border-slate-300 px-3 py-2 text-sm"
        >
          <option value="all">All statuses</option>
          <option value="completed">Completed</option>
          <option value="ongoing">Ongoing</option>
          <option value="planned">Planned</option>
        </select>
      </div>

      <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-slate-200 bg-slate-50 text-slate-600">
            <tr>
              <th className="px-4 py-3 font-medium">Title</th>
              <th className="px-4 py-3 font-medium">Category</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Location</th>
              <th className="px-4 py-3 font-medium">Published</th>
              <th className="px-4 py-3 font-medium"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filtered.map((p) => (
              <tr key={p.id} className="hover:bg-slate-50">
                <td className="px-4 py-3 font-medium text-slate-900">
                  {p.title}
                </td>
                <td className="px-4 py-3 capitalize text-slate-600">
                  {p.category}
                </td>
                <td className="px-4 py-3 capitalize text-slate-600">
                  {p.status}
                </td>
                <td className="px-4 py-3 text-slate-600">{p.location}</td>
                <td className="px-4 py-3">
                  <span
                    className={
                      p.published
                        ? "text-green-700"
                        : "text-slate-400"
                    }
                  >
                    {p.published ? "Yes" : "No"}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <Link
                    href={`/admin/projects/${p.id}`}
                    className="text-amber-700 hover:underline"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <p className="p-8 text-center text-slate-500">No projects found</p>
        )}
      </div>
    </div>
  );
}
