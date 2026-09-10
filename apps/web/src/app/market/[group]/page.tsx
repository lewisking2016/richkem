import { notFound } from "next/navigation";
import { ecoGroups, ecoListings, providerById } from "@/lib/providers";
import { money } from "@/lib/data";
import { ShieldCheck, MapPin } from "lucide-react";

export default async function EcoGroupPage({ params }: { params: Promise<{ group: string }> }) {
  const { group } = await params;
  const g = ecoGroups.find((x) => x.slug === group);
  if (!g) notFound();
  const items = ecoListings.filter((e) => e.group === group);

  return (
    <div className="space-y-5">
      <div className="card flex items-center gap-4 p-5">
        <span className="text-4xl">{g.icon}</span>
        <div>
          <h1 className="text-2xl font-extrabold">{g.label}</h1>
          <p className="text-sm text-muted">{g.blurb} · escrow protected · countrywide</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
        {items.map((e) => {
          const s = providerById(e.sellerId);
          return (
            <div key={e.id} className="card overflow-hidden hover:shadow-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={e.image} alt={e.title} className="aspect-[4/3] w-full object-cover" />
              <div className="space-y-2 p-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-bold leading-snug">{e.title}</h3>
                  {e.escrow && <span className="badge bg-money-50 shrink-0 text-money"><ShieldCheck size={11} /> Escrow</span>}
                </div>
                <div className="text-xl font-extrabold">{money(e.price)} <span className="text-xs font-medium text-muted">{e.unit}</span></div>
                <dl className="grid grid-cols-2 gap-x-3 gap-y-1 text-xs">
                  {Object.entries(e.specs).slice(0, 4).map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-2"><dt className="text-muted">{k}</dt><dd className="font-semibold">{v}</dd></div>
                  ))}
                </dl>
                <p className="line-clamp-2 text-xs text-muted">{e.description}</p>
                <div className="flex items-center justify-between border-t pt-2 text-xs">
                  <span className="inline-flex items-center gap-1 text-muted"><MapPin size={11} /> {e.location}</span>
                  <span className="font-semibold">{s?.name}</span>
                </div>
                <button className="btn btn-primary btn-sm w-full">Request / Buy with escrow</button>
              </div>
            </div>
          );
        })}
      </div>

      {items.length === 0 && <div className="card p-12 text-center text-muted">No listings in this group yet.</div>}
    </div>
  );
}
