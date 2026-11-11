import Link from "next/link";
import { inquiries, projects } from "@/lib/mock-data";

export default function AdminDashboardPage() {
  const totalInquiries = inquiries.length;
  const newInquiries = inquiries.filter((i) => i.status === "new").length;
  const publishedProjects = projects.filter((p) => p.published).length;
  const ongoingProjects = projects.filter((p) => p.status === "ongoing").length;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Dashboard</h1>
        <p className="mt-1 text-sm text-slate-500">
          Overview of demo content and enquiries
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Total inquiries", value: totalInquiries },
          { label: "New inquiries", value: newInquiries },
          { label: "Published projects", value: publishedProjects },
          { label: "Ongoing projects", value: ongoingProjects },
        ].map((kpi) => (
          <div
            key={kpi.label}
            className="rounded-lg border border-slate-200 bg-white p-5"
          >
            <p className="text-sm text-slate-500">{kpi.label}</p>
            <p className="mt-1 text-3xl font-semibold text-slate-900">
              {kpi.value}
            </p>
            <p className="mt-1 text-xs text-amber-600">Demo data</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-lg border border-slate-200 bg-white">
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
            <h2 className="font-semibold text-slate-900">Recent inquiries</h2>
            <Link
              href="/admin/inquiries"
              className="text-sm text-amber-700 hover:underline"
            >
              View all
            </Link>
          </div>
          <ul className="divide-y divide-slate-100">
            {inquiries.slice(0, 5).map((inq) => (
              <li key={inq.id} className="px-5 py-3 text-sm">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-medium text-slate-900">{inq.name}</span>
                  <span className="rounded bg-slate-100 px-2 py-0.5 text-xs capitalize text-slate-600">
                    {inq.status}
                  </span>
                </div>
                <p className="mt-0.5 text-slate-500">
                  {inq.reference} · {inq.serviceType || "General"}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-5">
          <h2 className="font-semibold text-slate-900">Quick actions</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/admin/projects/new"
              className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
            >
              Add project
            </Link>
            <Link
              href="/admin/inquiries"
              className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Manage inquiries
            </Link>
            <Link
              href="/admin/settings"
              className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Site settings
            </Link>
          </div>
          <p className="mt-6 text-xs text-slate-400">
            Charts and full activity feeds can be expanded once mock time-series
            data is defined. Recharts is available in the stack for that purpose.
          </p>
        </div>
      </div>
    </div>
  );
}
