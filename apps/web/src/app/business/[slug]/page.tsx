import { notFound } from "next/navigation";
import { Star, MapPin, ShieldCheck, MessageCircle, Award, Users, Clock, Phone } from "lucide-react";
import { providerBySlug, ecoListings } from "@/lib/providers";
import { money } from "@/lib/data";

export default async function BusinessPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = providerBySlug(slug);
  if (!p) notFound();
  const items = ecoListings.filter((e) => e.sellerId === p.id);

  return (
    <div className="space-y-6">
      <div className="card overflow-hidden">
        <div className="h-28 bg-gradient-to-r from-jiji via-jiji-600 to-ink md:h-36" />
        <div className="flex flex-col gap-4 p-5 md:flex-row">
          <div className="bg-jiji relative -mt-16 grid h-28 w-28 shrink-0 place-items-center rounded-2xl border-4 border-white text-4xl font-black text-white shadow">
            {p.name[0]}
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-2xl font-extrabold">{p.name}</h1>
              {p.verified && <span className="badge bg-money-50 text-money"><ShieldCheck size={12} /> KYC verified business</span>}
            </div>
            <p className="mt-0.5 font-semibold text-jiji">{p.tagline}</p>
            <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
              <span className="inline-flex items-center gap-1"><Star size={13} className="fill-amber-400 text-amber-400" /> {p.rating} · {p.reviews} reviews</span>
              <span className="inline-flex items-center gap-1"><MapPin size={13} /> {p.location}, {p.county}</span>
              <span className="inline-flex items-center gap-1"><Users size={13} /> {p.teamSize} staff</span>
              <span>Since {p.memberSince}</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {p.specialities.map((s) => <span key={s} className="badge bg-jiji-50 !text-jiji">{s}</span>)}
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <div className="space-y-5">
          <section className="card p-5">
            <h2 className="mb-2 font-extrabold">About the company</h2>
            <p className="text-sm leading-relaxed text-muted">{p.bio}</p>
            {p.openingHours && <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-muted"><Clock size={13} /> {p.openingHours}</p>}
          </section>

          <section className="card p-5">
            <h2 className="mb-3 font-extrabold">Licenses & certifications</h2>
            <ul className="grid gap-2 sm:grid-cols-2">
              {(p.certifications ?? ["Registered business"]).map((c) => (
                <li key={c} className="flex items-center gap-2 text-sm"><Award size={14} className="text-money" /> {c}</li>
              ))}
            </ul>
          </section>

          {items.length > 0 && (
            <section className="card p-5">
              <h2 className="mb-3 font-extrabold">Listings from this company ({items.length})</h2>
              <div className="space-y-2">
                {items.map((e) => (
                  <div key={e.id} className="flex items-center gap-3 rounded-lg border p-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={e.image} alt="" className="h-14 w-20 rounded-lg object-cover" />
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-sm font-bold">{e.title}</div>
                      <div className="text-xs text-muted">{e.location} · {e.postedAt}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-extrabold">{money(e.price)}</div>
                      <div className="text-[11px] text-muted">{e.unit}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        <aside className="space-y-3">
          <div className="card p-5">
            <div className="text-xs uppercase text-muted">Services from</div>
            <div className="text-2xl font-black">{money(p.priceFrom)}</div>
            <div className="text-money mt-2 flex items-start gap-1.5 rounded-lg bg-money-50 p-3 text-xs font-semibold">
              <ShieldCheck size={14} className="shrink-0" /> Every deal runs through escrow — pay only against verified milestones.
            </div>
            <button className="btn bg-jiji mt-3 w-full text-white hover:bg-jiji-600"><MessageCircle size={16} /> Request a quote</button>
            <button className="btn btn-outline mt-2 w-full"><Phone size={16} /> Call company</button>
          </div>
          <div className="card p-4 text-sm">
            <div className="font-extrabold">Business verification</div>
            <p className="mt-1 text-xs text-muted">Registration cert, KRA PIN and director IDs checked by Richkem before the KYC badge is granted.</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
