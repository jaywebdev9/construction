import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-offwhite px-4 text-center">
      <p className="text-sm font-medium uppercase tracking-[0.15em] text-amber">
        404
      </p>
      <h1 className="mt-3 font-display text-3xl font-semibold text-charcoal">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-charcoal/70">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Back to home
      </Link>
    </div>
  );
}
