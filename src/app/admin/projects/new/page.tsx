import Link from "next/link";

export default function NewProjectPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <Link href="/admin/projects" className="text-sm text-slate-500 hover:underline">
          ← Projects
        </Link>
        <h1 className="mt-2 text-2xl font-semibold text-slate-900">
          New project
        </h1>
        <p className="text-sm text-slate-500">
          Form fields prepare the editor contract. Save is simulated in full
          CRUD implementation.
        </p>
      </div>
      <div className="space-y-4 rounded-lg border border-slate-200 bg-white p-6">
        {["Title", "Slug", "Category", "Location", "Status", "Summary"].map(
          (label) => (
            <div key={label}>
              <label className="block text-sm font-medium text-slate-700">
                {label}
              </label>
              <input
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                placeholder={label}
              />
            </div>
          )
        )}
        <p className="text-xs text-slate-400">
          Image upload supports local preview only. File storage is not
          connected in this phase.
        </p>
        <div className="flex gap-3 pt-2">
          <button
            type="button"
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
        </div>
      </div>
    </div>
  );
}
