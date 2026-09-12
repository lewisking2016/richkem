"use client";

import { use, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { SearchX, SlidersHorizontal, Map } from "lucide-react";
import { ListingRow, ListingCard } from "@/components/listing";
import { listings } from "@/lib/data";

const groups = [
  { h: "category", label: "Category", opts: ["Phones & Tablets", "Electronics", "Vehicles", "Home & Office", "Fashion", "Aviation & Marine"] },
  { h: "price", label: "Price (KES)", opts: ["Under 1,000", "1,000 – 10,000", "10,000 – 100,000", "100,000 – 1M", "1M+"] },
  { h: "condition", label: "Condition", opts: ["Brand New", "Foreign Used", "Locally Used"] },
  { h: "location", label: "Location", opts: ["Nairobi", "Mombasa", "Nakuru", "Eldoret", "Kisumu"] },
  { h: "seller", label: "Seller", opts: ["Official Store", "Verified", "Escrow enabled"] },
];

function priceMatch(p: number, band?: string) {
  if (!band) return true;
  switch (band) {
    case "Under 1,000": return p < 1000;
    case "1,000 – 10,000": return p >= 1000 && p < 10000;
    case "10,000 – 100,000": return p >= 10000 && p < 100000;
    case "100,000 – 1M": return p >= 100000 && p < 1000000;
    case "1M+": return p >= 1000000;
    default: return true;
  }
}

export default function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q } = use(searchParams);
  const [sort, setSort] = useState("featured");
  const [filters, setFilters] = useState<Record<string, string[]>>({});
  const [showMobile, setShowMobile] = useState(false);
  const [visible, setVisible] = useState(10);

  useEffect(() => { setFilters({}); setVisible(10); }, [q]);
  useEffect(() => { setVisible(10); }, [filters, sort]);

  const toggle = (g: string, o: string) =>
    setFilters((prev) => {
      const cur = prev[g] ?? [];
      return { ...prev, [g]: cur.includes(o) ? cur.filter((x) => x !== o) : [...cur, o] };
    });

  const results = useMemo(() => {
    const query = (q ?? "").toLowerCase();
    let r = listings.filter((l) => {
      if (query && !(l.title + " " + l.category + " " + l.seller.name).toLowerCase().includes(query)) return false;
      const f = filters;
      if (f.category?.length && !f.category.includes(l.category)) return false;
      if (!priceMatch(l.price, f.price?.[0])) return false;
      if (f.condition?.length && (!l.condition || !f.condition.includes(l.condition))) return false;
      if (f.location?.length && !f.location.some((loc) => l.location.includes(loc))) return false;
      if (f.seller?.includes("Official Store") && !l.official) return false;
      if (f.seller?.includes("Verified") && !l.seller.verified) return false;
      if (f.seller?.includes("Escrow enabled") && !l.escrow) return false;
      return true;
    });
    if (sort === "low") r = [...r].sort((a, b) => a.price - b.price);
    if (sort === "high") r = [...r].sort((a, b) => b.price - a.price);
    if (sort === "new") r = [...r].reverse();
    return r;
  }, [q, filters, sort]);

  const activeCount = Object.values(filters).reduce((a, v) => a + v.length, 0);

  const FilterPanel = (
    <>
      {groups.map((g) => (
        <div key={g.h} className="border-t py-3 first:border-t-0">
          <h3 className="mb-2 text-[13px] font-bold">{g.label}</h3>
          <ul className="space-y-1.5 text-[13px] text-muted">
            {g.opts.map((o) => (
              <li key={o}>
                <label className="flex cursor-pointer items-center gap-2 hover:text-ink">
                  <input type="checkbox" className="accent-brand h-3.5 w-3.5" checked={(filters[g.h] ?? []).includes(o)} onChange={() => toggle(g.h, o)} />
                  {o}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <h1 className="text-xl font-extrabold">
          {q ? <>Results for “{q}” <span className="text-muted text-sm font-medium">({results.length})</span></> : <>All listings <span className="text-muted text-sm font-medium">({results.length})</span></>}
        </h1>
        <div className="flex gap-2">
          <Link href="/search/map" className="btn btn-outline btn-sm hidden md:inline-flex"><Map size={14} /> Map view</Link>
          <button onClick={() => setShowMobile(!showMobile)} className="btn btn-outline btn-sm lg:hidden">
            <SlidersHorizontal size={14} /> Filters {activeCount > 0 && <span className="badge bg-brand text-white">{activeCount}</span>}
          </button>
          <select value={sort} onChange={(e) => setSort(e.target.value)} className="input !h-9 !w-auto text-sm">
            <option value="featured">Sort: Featured</option>
            <option value="low">Price: Low → High</option>
            <option value="high">Price: High → Low</option>
            <option value="new">Newest</option>
          </select>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-[240px_1fr]">
        <aside className="card h-max p-4 max-lg:hidden">
          <div className="flex items-center justify-between">
            <h2 className="font-extrabold">Filters</h2>
            {activeCount > 0 && <button onClick={() => setFilters({})} className="text-brand text-xs font-bold hover:underline">Clear all</button>}
          </div>
          {FilterPanel}
        </aside>

        <div className="space-y-3">
          {showMobile && <div className="card p-4 lg:hidden">{FilterPanel}</div>}
          {results.length === 0 ? (
            <div className="card grid place-items-center gap-2 p-16 text-center">
              <SearchX size={40} className="text-muted" />
              <h2 className="font-extrabold">Nothing found</h2>
              <p className="text-sm text-muted">Try removing some filters or a different keyword.</p>
              {activeCount > 0 && <button onClick={() => setFilters({})} className="btn btn-outline btn-sm mt-1">Clear filters</button>}
            </div>
          ) : (
            <>
              <div className="hidden grid-cols-2 gap-3 md:grid-cols-3 xl:grid">
                {results.slice(0, 6).map((l) => <ListingCard key={l.id} l={l} />)}
              </div>
              <div className="space-y-3">
                {results.slice(0, visible).map((l) => <ListingRow key={l.id} l={l} />)}
              </div>
              {visible < results.length && (
                <div className="pt-2 text-center">
                  <button onClick={() => setVisible((v) => v + 10)} className="btn btn-outline">
                    Load more ({results.length - visible} remaining)
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
