import Link from "next/link";
import { CategoryTile } from "@/components/listing";
import { categories } from "@/lib/data";

export const metadata = { title: "All categories" };

export default function Categories() {
  return (
    <div>
      <h1 className="mb-4 text-2xl font-extrabold">All categories</h1>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
        {categories.map((c) => <CategoryTile key={c.slug} {...c} />)}
      </div>
      <div className="card mt-6 p-5 text-center">
        <h2 className="font-extrabold">Looking beyond products?</h2>
        <p className="mt-1 text-sm text-muted">Containers, freight, machinery, professionals and companies live in the ecosystem market.</p>
        <div className="mt-3 flex flex-wrap justify-center gap-2">
          <Link href="/market/containers" className="btn btn-outline btn-sm">Containers</Link>
          <Link href="/market/logistics" className="btn btn-outline btn-sm">Freight</Link>
          <Link href="/professionals" className="btn btn-outline btn-sm">Professionals</Link>
          <Link href="/businesses" className="btn btn-outline btn-sm">Businesses</Link>
        </div>
      </div>
    </div>
  );
}
