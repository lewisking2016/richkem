import { SearchX } from "lucide-react";
import { ListingRow, ListingCard } from "@/components/listing";
import { listings } from "@/lib/data";

const groups = [
  { h: "Category", opts: ["Phones & Tablets (24)", "Electronics (19)", "Vehicles (21)", "Home & Office (15)", "Fashion (22)"] },
  { h: "Price (KES)", opts: ["Under 1,000", "1,000 – 10,000", "10,000 – 100,000", "100,000 – 1M", "1M+"] },
  { h: "Condition", opts: ["Brand New", "Foreign Used", "Locally Used", "Refurbished"] },
  { h: "Location", opts: ["Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret"] },
  { h: "Seller", opts: ["Official Store", "Verified sellers", "Escrow enabled"] },
];

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q } = await searchParams;
  const query = (q ?? "").toLowerCase();
  const results = query
    ? listings.filter((l) => (l.title + " " + l.category + " " + l.seller.name).toLowerCase().includes(query))
    : listings;

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <h1 className="text-xl font-extrabold">
          {query ? <>Results for “{q}” <span className="text-muted text-sm font-medium">({results.length})</span></> : "All listings"}
        </h1>
        <div className="flex gap-2">
          <select className="input !h-9 !w-auto text-sm"><option>Sort: Featured</option><option>Price: Low → High</option><option>Price: High → Low</option><option>Newest</option></select>
          <select className="input !h-9 !w-auto text-sm"><option>Delivery: Countrywide</option><option>Nairobi only</option></select>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-[240px_1fr]">
        {/* FILTER SIDEBAR */}
        <aside className="card h-max p-4 max-lg:hidden">
          <h2 className="mb-3 font-extrabold">Filters</h2>
          {groups.map((g) => (
            <div key={g.h} className="border-t py-3 first:border-t-0">
              <h3 className="mb-2 text-[13px] font-bold">{g.h}</h3>
              <ul className="space-y-1.5 text-[13px] text-muted">
                {g.opts.map((o) => (
                  <li key={o}><label className="flex cursor-pointer items-center gap-2 hover:text-ink"><input type="checkbox" className="accent-brand h-3.5 w-3.5" />{o}</label></li>
                ))}
              </ul>
            </div>
          ))}
        </aside>

        {/* RESULTS */}
        <div className="space-y-3">
          <div className="flex gap-2 overflow-x-auto pb-1 hide-scrollbar lg:hidden">
            {["Category", "Price", "Condition", "Location", "Escrow"].map((f) => (
              <button key={f} className="chip whitespace-nowrap">⚙ {f}</button>
            ))}
          </div>
          {results.length === 0 ? (
            <div className="card grid place-items-center gap-2 p-16 text-center">
              <SearchX size={40} className="text-muted" />
              <h2 className="font-extrabold">Nothing found</h2>
              <p className="text-sm text-muted">Try a different keyword, or browse categories.</p>
            </div>
          ) : (
            <>
              <div className="hidden grid-cols-2 gap-3 md:grid-cols-3 lg:hidden xl:grid">
                {results.slice(0, 6).map((l) => <ListingCard key={l.id} l={l} />)}
              </div>
              <div className="space-y-3">
                {results.map((l) => <ListingRow key={l.id} l={l} />)}
              </div>
              <div className="flex justify-center gap-1 pt-2">
                {[1, 2, 3, "…", 12].map((p, i) => (
                  <button key={i} className={`h-9 w-9 rounded-lg text-sm font-bold ${p === 1 ? "bg-brand text-white" : "card"}`}>{p}</button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
