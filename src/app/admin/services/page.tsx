"use client";

import { useState } from "react";
import Link from "next/link";
import { services as initial } from "@/lib/mock-data";
import type { Service } from "@/types";

export default function AdminServicesPage() {
  const [items, setItems] = useState<Service[]>(
    [...initial].sort((a, b) => a.order - b.order)
  );

  const togglePublish = (id: string) => {
    setItems((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, published: !s.published } : s
      )
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Services</h1>
          <p className="text-sm text-slate-500">
            Publish and order public service pages (local demo state)
          </p>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-slate-200 bg-slate-50 text-slate-600">
            <tr>
              <th className="px-4 py-3 font-medium">Order</th>
              <th className="px-4 py-3 font-medium">Title</th>
              <th className="px-4 py-3 font-medium">Slug</th>
              <th className="px-4 py-3 font-medium">Published</th>
              <th className="px-4 py-3 font-medium"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {items.map((s) => (
              <tr key={s.id} className="hover:bg-slate-50">
                <td className="px-4 py-3 text-slate-500">{s.order}</td>
                <td className="px-4 py-3 font-medium text-slate-900">
                  {s.title}
                </td>
                <td className="px-4 py-3 font-mono text-xs text-slate-500">
                  {s.slug}
                </td>
                <td className="px-4 py-3">
                  <button
                    type="button"
                    onClick={() => togglePublish(s.id)}
                    className={
                      s.published
                        ? "text-green-700 text-xs font-medium"
                        : "text-slate-400 text-xs font-medium"
                    }
                  >
                    {s.published ? "Published" : "Draft"}
                  </button>
                </td>
                <td className="px-4 py-3">
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-xs text-amber-700 hover:underline"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
