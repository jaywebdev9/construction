"use client";

import { useState, useEffect } from "react";
import { siteSettings as defaults } from "@/lib/mock-data";
import type { SiteSettings } from "@/types";

const STORAGE_KEY = "demo-site-settings";

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState<SiteSettings>(defaults);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setSettings({ ...defaults, ...JSON.parse(raw) });
    } catch {
      /* ignore */
    }
  }, []);

  const update = (key: keyof SiteSettings, value: string) => {
    setSettings((s) => ({ ...s, [key]: value }));
    setSaved(false);
  };

  const save = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    setSaved(true);
  };

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Settings</h1>
        <p className="text-sm text-slate-500">
          Company profile placeholders. Changes stored in localStorage for this
          demo only.
        </p>
      </div>

      <div className="space-y-4 rounded-lg border border-slate-200 bg-white p-6">
        {(
          [
            ["companyName", "Company name"],
            ["tagline", "Tagline"],
            ["description", "Description"],
            ["address", "Address"],
            ["phone", "Phone"],
            ["email", "Email"],
            ["officeHours", "Office hours"],
            ["registrationDetails", "Registration details"],
          ] as const
        ).map(([key, label]) => (
          <div key={key}>
            <label className="block text-sm font-medium text-slate-700">
              {label}
            </label>
            {key === "description" ? (
              <textarea
                rows={3}
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                value={(settings[key] as string) || ""}
                onChange={(e) => update(key, e.target.value)}
              />
            ) : (
              <input
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                value={(settings[key] as string) || ""}
                onChange={(e) => update(key, e.target.value)}
              />
            )}
          </div>
        ))}

        <div className="flex items-center gap-3 pt-2">
          <button
            type="button"
            onClick={save}
            className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
          >
            Save (local)
          </button>
          {saved && (
            <span className="text-sm text-green-700">Saved to localStorage</span>
          )}
        </div>
      </div>
    </div>
  );
}
