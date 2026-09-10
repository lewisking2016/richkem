import Link from "next/link";
import Image from "next/image";
import { Heart, ShieldCheck, MapPin } from "lucide-react";
import { money, type Listing } from "@/lib/data";

const fmt = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export function ListingCard({ l, compact = false }: { l: Listing; compact?: boolean }) {
  const href = l.kind === "product" ? `/product/${l.slug}` : `/service/${l.slug}`;
  return (
    <Link href={href} className="card group relative flex flex-col overflow-hidden hover:shadow-md">
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <Image src={l.image} alt={l.title} fill sizes="(max-width:768px) 50vw, 25vw" className="object-cover transition-transform group-hover:scale-105" />
        {l.official && <span className="badge bg-brand absolute left-2 top-2 text-white">Official Store</span>}
        {l.kind === "service" && <span className="badge bg-jiji absolute left-2 top-2 text-white">Service</span>}
        {l.compareAt && (
          <span className="badge absolute right-2 top-2 bg-danger text-white">
            -{Math.round((1 - l.price / l.compareAt) * 100)}%
          </span>
        )}
        <span className="absolute bottom-2 right-2 grid h-8 w-8 place-items-center rounded-full bg-white/90 shadow hover:bg-white">
          <Heart size={15} className="text-muted" />
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-1 p-3">
        <h3 className="line-clamp-2 text-[13px] font-medium leading-snug hover:text-brand">{l.title}</h3>
        <div className="mt-auto">
          <div className="flex items-baseline gap-1.5">
            <span className="text-[17px] font-extrabold">{money(l.price)}</span>
            {l.compareAt && <span className="text-xs text-muted line-through">{money(l.compareAt)}</span>}
          </div>
          {!compact && (
            <div className="mt-1.5 flex items-center justify-between text-[11px] text-muted">
              <span className="truncate">{l.seller.name}</span>
              <span className="inline-flex items-center gap-0.5"><MapPin size={11} /> {l.location.split(",")[0]}</span>
            </div>
          )}
          {l.escrow && !compact && (
            <div className="text-money mt-1.5 inline-flex items-center gap-1 text-[11px] font-semibold">
              <ShieldCheck size={12} /> Pay with escrow
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

export function ListingRow({ l }: { l: Listing }) {
  return (
    <Link href={l.kind === "product" ? `/product/${l.slug}` : `/service/${l.slug}`} className="card flex gap-3 p-2.5 hover:shadow-md sm:gap-4">
      <div className="relative h-28 w-36 shrink-0 overflow-hidden rounded-lg bg-gray-100 sm:h-32 sm:w-48">
        <Image src={l.image} alt={l.title} fill sizes="192px" className="object-cover" />
      </div>
      <div className="flex min-w-0 flex-1 flex-col py-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="line-clamp-2 font-semibold hover:text-brand">{l.title}</h3>
          <button className="grid h-8 w-8 shrink-0 place-items-center rounded-full hover:bg-gray-100"><Heart size={16} className="text-muted" /></button>
        </div>
        <div className="mt-1 text-xl font-extrabold">{money(l.price)}</div>
        {l.condition && <div className="text-xs text-muted">Condition: {l.condition}</div>}
        <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-muted">
          <span className="font-semibold text-ink">{l.seller.name}</span>
          {l.seller.verified && <span className="badge bg-jiji-50 text-jiji">✔ Verified</span>}
          <span className="inline-flex items-center gap-0.5"><MapPin size={11} /> {l.location}</span>
          <span>{l.postedAt}</span>
        </div>
      </div>
    </Link>
  );
}

export function SectionHead({ title, href, accent = "brand" }: { title: string; href?: string; accent?: "brand" | "jiji" }) {
  return (
    <div className="mb-3 flex items-center justify-between">
      <h2 className={`section-title border-l-4 pl-2.5 ${accent === "jiji" ? "border-jiji" : "border-brand"}`}>{title}</h2>
      {href && <Link href={href} className={`text-sm font-semibold hover:underline ${accent === "jiji" ? "text-jiji" : "text-brand"}`}>See all →</Link>}
    </div>
  );
}

export function CategoryTile({ name, slug, icon, count }: { name: string; slug: string; icon: string; count?: number }) {
  return (
    <Link href={`/category/${slug}`} className="card flex flex-col items-center gap-2 p-4 text-center hover:shadow-md">
      <span className="text-3xl">{icon}</span>
      <span className="text-[13px] font-semibold leading-tight">{name}</span>
      {count !== undefined && <span className="text-[11px] text-muted">{count.toLocaleString()} ads</span>}
    </Link>
  );
}

export function fmtSlug(s: string) { return fmt(s); }
