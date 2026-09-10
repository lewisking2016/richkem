import { notFound } from "next/navigation";
import { Star, MapPin, ShieldCheck, MessageCircle, Flag } from "lucide-react";
import { sellers, listings } from "@/lib/data";
import { ListingCard, SectionHead } from "@/components/listing";

export default async function StorePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const seller = Object.values(sellers).find((s) => s.slug === slug);
  if (!seller) notFound();
  const items = listings.filter((l) => l.seller.slug === slug);

  return (
    <div className="space-y-6">
      {/* BANNER */}
      <div className="card overflow-hidden">
        <div className="h-28 bg-gradient-to-r from-ink via-gray-800 to-brand md:h-36" />
        <div className="flex flex-col gap-4 p-5 md:flex-row md:items-center">
          <span className="bg-brand -mt-12 grid h-20 w-20 place-items-center rounded-2xl border-4 border-white text-3xl font-black text-white shadow md:-mt-14">
            {seller.name[0]}
          </span>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-2xl font-extrabold">{seller.name}</h1>
              {seller.verified && <span className="badge bg-jiji-50 text-jiji">✔ Verified</span>}
            </div>
            <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-muted">
              <span className="inline-flex items-center gap-1"><Star size={13} className="fill-amber-400 text-amber-400" /> {seller.rating} ({seller.reviews.toLocaleString()})</span>
              <span className="inline-flex items-center gap-1"><MapPin size={13} /> {seller.location}</span>
              <span>Member since {seller.memberSince}</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="btn btn-outline btn-sm"><MessageCircle size={15} /> Chat</button>
            <button className="btn btn-outline btn-sm"><Flag size={15} /> Report</button>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {[
          { n: items.length.toString(), t: "Live listings" },
          { n: `${seller.rating}/5`, t: "Seller rating" },
          { n: "97%", t: "On-time delivery" },
          { n: "< 1h", t: "Response time" },
        ].map((s) => (
          <div key={s.t} className="card p-4 text-center">
            <div className="text-xl font-extrabold">{s.n}</div>
            <div className="text-xs text-muted">{s.t}</div>
          </div>
        ))}
      </div>

      <div className="text-money inline-flex items-center gap-1.5 text-sm font-semibold"><ShieldCheck size={15} /> All orders from this store are escrow protected</div>

      {/* LISTINGS */}
      <section>
        <SectionHead title={`Listings from ${seller.name}`} />
        {items.length === 0 ? (
          <div className="card p-12 text-center text-muted">No public listings yet.</div>
        ) : (
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-5">
            {items.map((l) => <ListingCard key={l.id} l={l} />)}
          </div>
        )}
      </section>
    </div>
  );
}
