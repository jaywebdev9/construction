"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { inquiries as initial } from "@/lib/mock-data";
import type { Inquiry } from "@/types";
import { cn } from "@/lib/utils";

const statuses: Inquiry["status"][] = [
  "new",
  "in-progress",
  "quoted",
  "won",
  "lost",
  "archived",
];

export default function AdminInquiriesPage() {
  const [items, setItems] = useState<Inquiry[]>(initial);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<string>("all");
  const [selected, setSelected] = useState<Inquiry | null>(null);
  const [note, setNote] = useState("");

  const filtered = useMemo(() => {
    return items.filter((i) => {
      const q =
        !query ||
        i.name.toLowerCase().includes(query.toLowerCase()) ||
        i.reference.toLowerCase().includes(query.toLowerCase()) ||
        (i.email && i.email.toLowerCase().includes(query.toLowerCase()));
      const s = status === "all" || i.status === status;
      return q && s;
    });
  }, [items, query, status]);

  const updateStatus = (id: string, newStatus: Inquiry["status"]) => {
    setItems((prev) =>
      prev.map((i) =>
        i.id === id
          ? { ...i, status: newStatus, updatedAt: new Date().toISOString() }
          : i
      )
    );
    if (selected?.id === id) {
      setSelected((s) => (s ? { ...s, status: newStatus } : s));
    }
  };

  const addNote = () => {
    if (!selected || !note.trim()) return;
    const newNote = {
      id: `n-${Date.now()}`,
      text: note.trim(),
      createdAt: new Date().toISOString(),
      author: "Demo Admin",
    };
    setItems((prev) =>
      prev.map((i) =>
        i.id === selected.id
          ? {
              ...i,
              notes: [...i.notes, newNote],
              updatedAt: new Date().toISOString(),
            }
          : i
      )
    );
    setSelected((s) =>
      s ? { ...s, notes: [...s.notes, newNote] } : s
    );
    setNote("");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Inquiries</h1>
        <p className="text-sm text-slate-500">
          Demo enquiries — status and notes update locally only
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <input
          type="search"
          placeholder="Search name, email, ref…"
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
          {statuses.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-6 lg:grid-cols-5">
        <div className="lg:col-span-3 overflow-x-auto rounded-lg border border-slate-200 bg-white">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-slate-200 bg-slate-50 text-slate-600">
              <tr>
                <th className="px-4 py-3 font-medium">Reference</th>
                <th className="px-4 py-3 font-medium">Name</th>
                <th className="px-4 py-3 font-medium">Type</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((inq) => (
                <tr
                  key={inq.id}
                  className={cn(
                    "hover:bg-slate-50 cursor-pointer",
                    selected?.id === inq.id && "bg-amber-50"
                  )}
                  onClick={() => setSelected(inq)}
                >
                  <td className="px-4 py-3 font-mono text-xs">{inq.reference}</td>
                  <td className="px-4 py-3 font-medium">{inq.name}</td>
                  <td className="px-4 py-3 text-slate-600">
                    {inq.serviceType || "—"}
                  </td>
                  <td className="px-4 py-3">
                    <span className="rounded bg-slate-100 px-2 py-0.5 text-xs capitalize">
                      {inq.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-amber-700 text-xs">View</td>
                </tr>
              ))}
            </tbody>
          </table>
          {filtered.length === 0 && (
            <p className="p-8 text-center text-slate-500">No inquiries found</p>
          )}
        </div>

        <div className="lg:col-span-2 rounded-lg border border-slate-200 bg-white p-5">
          {selected ? (
            <div className="space-y-4">
              <div>
                <p className="text-xs font-mono text-slate-400">
                  {selected.reference}
                </p>
                <h2 className="text-lg font-semibold">{selected.name}</h2>
                <p className="text-sm text-slate-500">{selected.email}</p>
                {selected.phone && (
                  <p className="text-sm text-slate-500">{selected.phone}</p>
                )}
              </div>
              <div>
                <label className="text-xs font-medium text-slate-500">
                  Status
                </label>
                <select
                  value={selected.status}
                  onChange={(e) =>
                    updateStatus(
                      selected.id,
                      e.target.value as Inquiry["status"]
                    )
                  }
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                >
                  {statuses.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500">Message</p>
                <p className="mt-1 text-sm text-slate-700 whitespace-pre-wrap">
                  {selected.message}
                </p>
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500">
                  Internal notes
                </p>
                <ul className="mt-2 space-y-2">
                  {selected.notes.map((n) => (
                    <li
                      key={n.id}
                      className="rounded bg-slate-50 px-3 py-2 text-sm"
                    >
                      {n.text}
                      <span className="mt-1 block text-xs text-slate-400">
                        {n.author} · {new Date(n.createdAt).toLocaleString()}
                      </span>
                    </li>
                  ))}
                  {selected.notes.length === 0 && (
                    <li className="text-sm text-slate-400">No notes yet</li>
                  )}
                </ul>
                <div className="mt-3 flex gap-2">
                  <input
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Add note…"
                    className="flex-1 rounded-md border border-slate-300 px-3 py-2 text-sm"
                  />
                  <button
                    type="button"
                    onClick={addNote}
                    className="rounded-md bg-slate-900 px-3 py-2 text-sm text-white"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-sm text-slate-500">
              Select an inquiry to view details and update status.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
