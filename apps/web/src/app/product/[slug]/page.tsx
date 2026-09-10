"use client";

import { use, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ShieldCheck, MapPin, Star, Truck, RotateCcw, Heart, Share2, ChevronRight, ShoppingCart, Check } from "lucide-react";
import { findListing, listings, money } from "@/lib/data";
import { useStore } from "@/lib/store";
import { ListingCard, SectionHead } from "@/components/listing";

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const l = findListing(slug);
  const router = useRouter();
  const { addToCart, toggleSaved, isSaved } = useStore();
  const [active, setActive] = useState(0);
  const [added, setAdded] = useState(false);

  if (!l || l.kind === "service") {
    return (
      <div className="card grid place-items-center gap-3 py-20 text-center">
        <h1 className="text-2xl font-extrabold">Item not found</h1>
        <Link href="/search" className="btn btn-primary">Browse listings</Link>
      </div>
    );
  }

  const similar = listings.filter((x) => x.categorySlug === l.categorySlug && x.id !== l.id).slice(0, 5);
  const off = l.compareAt ? Math.round((1 - l.price / l.compareAt) * 100) : 0;
  const saved = isSaved(l.id);

  const add = (go: boolean) => {
    addToCart({ id: l.id, title: l.title, price: l.price, image: l.image, seller: l.seller.name, slug: l.slug, kind: "product" });
    if (go) router.push("/checkout");
    else { setAdded(true); setTimeout(() => setAdded(false), 1600); }
  };

  return (
    <div className="space-y-8">
      <nav className="flex items-center gap-1 text-xs text-muted">
        <Link href="/" className="hover:text-brand">Home</Link> /
        <Link href={`/category/${l.categorySlug}`} className="hover:text-brand">{l.category}</Link> /
        <span className="truncate text-ink">{l.title}</span>
      </nav>

      <div className="grid gap-6 lg:grid-cols-[420px_1fr_300px]">
        {/* GALLERY — clickable thumbs + main swap */}
        <div className="space-y-2">
          <div className="card relative aspect-square overflow-hidden">
            <Image key={active} src={l.images?.[active] ?? l.image} alt={l.title} fill priority sizes="420px" className="img-zoom object-cover" />
            {off > 0 && <span className="badge absolute left-3 top-3 bg-danger text-white">-{off}%</span>}
          </div>
          <div className="grid grid-cols-5 gap-2">
            {l.images?.map((src, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`View image ${i + 1}`}
                className={`relative aspect-square overflow-hidden rounded-lg border-2 transition-all ${i === active ? "border-brand" : "border-transparent opacity-70 hover:opacity-100"}`}
              >
                <Image src={src} alt="" fill sizes="80px" className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* INFO */}
        <div>
          <div className="flex items-start justify-between gap-3">
            <h1 className="text-xl font-extrabold leading-snug md:text-2xl">{l.title}</h1>
            <div className="flex gap-1">
              <button
                onClick={() => toggleSaved(l.id)}
                aria-label={saved ? "Remove from saved" : "Save item"}
                className={`card grid h-9 w-9 place-items-center transition-transform active:scale-90 ${saved ? "text-danger" : ""}`}
              >
                <Heart size={16} className={saved ? "fill-danger" : ""} />
              </button>
              <button className="card grid h-9 w-9 place-items-center" aria-label="Share"><Share2 size={16} /></button>
            </div>
          </div>
          <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-muted">
            <span className="badge bg-jiji-50 text-jiji">✔ {l.seller.verified ? "Verified" : "New"} seller</span>
            <span>★ {l.seller.rating} ({l.seller.reviews.toLocaleString()} ratings)</span>
            <span className="inline-flex items-center gap-0.5"><MapPin size={11} /> {l.location}</span>
            {l.condition && <span>· Condition: <b className="text-ink">{l.condition}</b></span>}
          </div>

          <div className="mt-4 flex items-end gap-3">
            <span className="price text-3xl">{money(l.price)}</span>
            {l.compareAt && <>
              <span className="text-lg text-muted line-through">{money(l.compareAt)}</span>
              <span className="badge bg-danger-50 text-danger">You save {money(l.compareAt - l.price)}</span>
            </>}
          </div>

          {l.specs && (
            <div className="mt-5">
              <h2 className="mb-2 font-extrabold">Key specifications</h2>
              <dl className="grid grid-cols-1 gap-x-8 gap-y-1 text-sm sm:grid-cols-2">
                {Object.entries(l.specs).map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 border-b border-dashed py-1.5">
                    <dt className="text-muted">{k}</dt><dd className="text-right font-semibold">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          <p className="mt-5 text-sm leading-relaxed text-muted">{l.description}</p>
        </div>

        {/* BUY BOX */}
        <aside className="space-y-3">
          <div className="card p-4">
            <div className="text-money inline-flex items-center gap-1.5 text-sm font-extrabold"><ShieldCheck size={16} /> Escrow protected</div>
            <p className="mt-1.5 text-xs text-muted">Money held until you confirm delivery. Full refund if item not as described.</p>
            <button onClick={() => add(true)} className="btn btn-primary mt-4 w-full">Buy now · {money(l.price)}</button>
            <button onClick={() => add(false)} className={`btn mt-2 w-full ${added ? "bg-money text-white" : "btn-outline"}`}>
              {added ? <><Check size={16} /> Added to cart</> : <><ShoppingCart size={16} /> Add to cart</>}
            </button>
            <div className="mt-4 space-y-2 text-xs text-muted">
              <div className="flex gap-2"><Truck size={14} className="shrink-0" /> Delivery 24–48h Nairobi · 2–4 days countrywide</div>
              <div className="flex gap-2"><RotateCcw size={14} className="shrink-0" /> 7-day free returns</div>
            </div>
          </div>
          <div className="card p-4">
            <div className="text-xs uppercase text-muted">Sold by</div>
            <Link href={`/store/${l.seller.slug}`} className="mt-1 flex items-center gap-3">
              <span className="bg-brand grid h-10 w-10 place-items-center rounded-full font-black text-white">{l.seller.name[0]}</span>
              <div>
                <div className="text-sm font-bold hover:text-brand">{l.seller.name}</div>
                <div className="flex items-center gap-1 text-xs text-muted"><Star size={10} className="fill-amber-400 text-amber-400" /> {l.seller.rating} · since {l.seller.memberSince}</div>
              </div>
            </Link>
            <Link href={`/store/${l.seller.slug}`} className="btn btn-outline btn-sm mt-3 w-full">Visit store <ChevronRight size={14} /></Link>
          </div>
        </aside>
      </div>

      {/* SIMILAR */}
      <section>
        <SectionHead title="Similar items you might like" />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
          {similar.map((s) => <ListingCard key={s.id} l={s} />)}
        </div>
      </section>
    </div>
  );
}
