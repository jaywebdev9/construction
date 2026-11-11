"use client";

import { useState } from "react";
import Image from "next/image";
import { teamMembers as initial } from "@/lib/mock-data";
import type { TeamMember } from "@/types";

export default function AdminTeamPage() {
  const [items, setItems] = useState<TeamMember[]>(
    [...initial].sort((a, b) => a.order - b.order)
  );

  const toggle = (id: string) => {
    setItems((prev) =>
      prev.map((m) =>
        m.id === id ? { ...m, published: !m.published } : m
      )
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Team</h1>
        <p className="text-sm text-slate-500">
          Placeholder profiles — toggle publish for demo
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((m) => (
          <div
            key={m.id}
            className="rounded-lg border border-slate-200 bg-white overflow-hidden"
          >
            <div className="relative aspect-[4/3] bg-slate-100">
              <Image
                src={m.photo}
                alt=""
                fill
                className="object-cover"
                sizes="300px"
              />
            </div>
            <div className="p-4">
              <h2 className="font-semibold text-slate-900">{m.name}</h2>
              <p className="text-sm text-amber-700">{m.role}</p>
              <p className="mt-2 line-clamp-2 text-xs text-slate-500">{m.bio}</p>
              <button
                type="button"
                onClick={() => toggle(m.id)}
                className={`mt-3 text-xs font-medium ${
                  m.published ? "text-green-700" : "text-slate-400"
                }`}
              >
                {m.published ? "Published" : "Hidden"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
