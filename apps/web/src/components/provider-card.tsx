import Link from "next/link";
import { MapPin, Star, ShieldCheck, Users } from "lucide-react";
import { PersonIcon, BusinessIcon } from "./icons";
import type { Provider } from "@/lib/providers";
import { money } from "@/lib/data";

export function ProviderCard({ p }: { p: Provider }) {
  const href = p.type === "person" ? `/professional/${p.slug}` : `/business/${p.slug}`;
  return (
    <Link href={href} className="card card-hover group flex gap-3.5 p-4">
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={p.image} alt={p.name} className="img-zoom h-full w-full object-cover" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <span className={`badge ${p.type === "person" ? "bg-brand-50 text-brand" : "bg-jiji-50 text-jiji"}`}>
            {p.type === "person" ? <><PersonIcon size={11} /> Pro</> : <><BusinessIcon size={11} /> Business</>}
          </span>
          {p.verified && <span className="badge bg-money-50 text-money"><ShieldCheck size={11} /> Verified</span>}
        </div>
        <h3 className="mt-1 truncate font-bold group-hover:text-brand">{p.name}</h3>
        <p className="truncate text-xs font-medium text-ink/80">{p.tagline}</p>
        <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[11px] text-muted">
          <span className="inline-flex items-center gap-0.5"><Star size={10} className="fill-amber-400 text-amber-400" /> {p.rating} ({p.reviews})</span>
          <span className="inline-flex items-center gap-0.5"><MapPin size={10} /> {p.county}</span>
          {p.type === "company" && p.teamSize ? <span className="inline-flex items-center gap-0.5"><Users size={10} /> {p.teamSize} staff</span> : <span>{p.experienceYears} yrs</span>}
          <span className="text-brand font-bold">{money(p.priceFrom)}+</span>
        </div>
      </div>
    </Link>
  );
}
