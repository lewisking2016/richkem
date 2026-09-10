import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid place-items-center py-20 text-center">
      <div className="text-7xl font-black text-brand">404</div>
      <h1 className="mt-2 text-2xl font-extrabold">Page not found</h1>
      <p className="mt-1 text-sm text-muted">The page you're looking for doesn't exist or was moved.</p>
      <div className="mt-6 flex gap-2">
        <Link href="/" className="btn btn-primary">Go home</Link>
        <Link href="/search" className="btn btn-outline">Browse listings</Link>
      </div>
    </div>
  );
}
