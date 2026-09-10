import { notFound } from "next/navigation";
import { ListingRow } from "@/components/listing";
import { ListingCard } from "@/components/listing";
import { listings, categories } from "@/lib/data";

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cat = categories.find((c) => c.slug === slug);
  const results = listings.filter((l) => l.categorySlug === slug);
  if (!cat) notFound();

  return (
    <div>
      <div className="card mb-4 flex items-center gap-4 p-5">
        <span className="text-4xl">{cat.icon}</span>
        <div>
          <h1 className="text-2xl font-extrabold">{cat.name}</h1>
          <p className="text-sm text-muted">{cat.count.toLocaleString()} listings · updated hourly · escrow protected</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {results.map((l) => <ListingCard key={l.id} l={l} />)}
      </div>
      {results.length > 0 && (
        <div className="mt-6 space-y-3">
          <h2 className="section-title">More in {cat.name}</h2>
          {results.slice(0, 3).map((l) => <ListingRow key={l.id} l={l} />)}
        </div>
      )}
    </div>
  );
}
