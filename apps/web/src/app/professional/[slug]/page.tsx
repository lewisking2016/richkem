import { notFound } from "next/navigation";
import Link from "next/link";
import { Star, MapPin, ShieldCheck, CalendarCheck, MessageCircle, Award, Clock } from "lucide-react";
import { providerBySlug } from "@/lib/providers";
import { money } from "@/lib/data";
import { ProviderCard } from "@/components/provider-card";
import { providers } from "@/lib/providers";

export default async function ProfessionalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = providerBySlug(slug);
  if (!p) notFound();
  const similar = providers.filter((x) => x.type === "person" && x.id !== p.id).slice(0, 4);

  return (
    <div className="space-y-6">
      {/* HEADER CARD */}
      <div className="card overflow-hidden">
        <div className="h-24 bg-gradient-to-r from-brand to-brand-600" />
        <div className="flex flex-col gap-4 p-5 md:flex-row">
          <div className="relative -mt-16 h-28 w-28 shrink-0 overflow-hidden rounded-2xl border-4 border-white shadow">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.image} alt={p.name} className="h-full w-full object-cover" />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-2xl font-extrabold">{p.name}</h1>
              {p.verified && <span className="badge bg-money-50 text-money"><ShieldCheck size={12} /> ID & license verified</span>}
            </div>
            <p className="mt-0.5 font-semibold text-brand">{p.tagline}</p>
            <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
              <span className="inline-flex items-center gap-1"><Star size={13} className="fill-amber-400 text-amber-400" /> {p.rating} · {p.reviews} reviews</span>
              <span className="inline-flex items-center gap-1"><MapPin size={13} /> {p.location}, {p.county}</span>
              <span className="inline-flex items-center gap-1"><Clock size={13} /> {p.experienceYears} yrs experience</span>
              <span>Member since {p.memberSince}</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {p.specialities.map((s) => <span key={s} className="badge bg-brand-50 !text-brand">{s}</span>)}
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <div className="space-y-5">
          <section className="card p-5">
            <h2 className="mb-2 font-extrabold">About</h2>
            <p className="text-sm leading-relaxed text-muted">{p.bio}</p>
          </section>

          <section className="card p-5">
            <h2 className="mb-3 font-extrabold">Credentials</h2>
            <ul className="grid gap-2 sm:grid-cols-2">
              {(p.certifications ?? ["Identity verified"]).map((c) => (
                <li key={c} className="flex items-center gap-2 text-sm"><Award size={14} className="text-money" /> {c}</li>
              ))}
            </ul>
          </section>

          <section className="card p-5">
            <h2 className="mb-2 font-extrabold">Reviews ({p.reviews})</h2>
            {[
              { n: "Wanjiku K.", r: 5, t: "Explained everything clearly, same-day lab results. Booking via escrow gave me confidence." },
              { n: "John O.", r: 5, t: "Professional and punctual. Follow-up was included without extra charge." },
              { n: "Mercy A.", r: 4, t: "Great consultation. Waiting area was busy but the doctor was worth it." },
            ].map((rv) => (
              <div key={rv.n} className="border-b py-3 last:border-0">
                <div className="flex items-center gap-2 text-sm font-bold">
                  {rv.n}
                  <span className="flex">{Array.from({ length: rv.r }).map((_, i) => <Star key={i} size={11} className="fill-amber-400 text-amber-400" />)}</span>
                </div>
                <p className="mt-0.5 text-sm text-muted">{rv.t}</p>
              </div>
            ))}
          </section>
        </div>

        {/* BOOKING BOX */}
        <aside className="space-y-3">
          <div className="card p-5">
            <div className="text-xs uppercase text-muted">Consultation from</div>
            <div className="text-3xl font-black">{money(p.priceFrom)}</div>
            <div className="text-money mt-2 flex items-start gap-1.5 rounded-lg bg-money-50 p-3 text-xs font-semibold">
              <ShieldCheck size={14} className="shrink-0" /> Payment held in escrow. Released only after your session is delivered.
            </div>
            <button className="btn btn-primary mt-3 w-full"><CalendarCheck size={16} /> Book appointment</button>
            <button className="btn btn-outline mt-2 w-full"><MessageCircle size={16} /> Message</button>
            {p.openingHours && <div className="mt-3 text-xs text-muted">🕘 {p.openingHours}</div>}
          </div>
          <div className="card p-4 text-sm">
            <div className="font-extrabold">Service guarantee</div>
            <p className="mt-1 text-xs text-muted">If the professional no-shows, your escrow is refunded in full within 24h.</p>
          </div>
        </aside>
      </div>

      <section>
        <h2 className="section-title mb-3">Similar specialists</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {similar.map((s) => <ProviderCard key={s.id} p={s} />)}
        </div>
      </section>
    </div>
  );
}
