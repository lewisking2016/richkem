import Link from "next/link";
import { ShieldCheck, Zap, Store, ChevronRight, Star, Truck, Timer, BadgeCheck } from "lucide-react";
import { ListingCard, ListingRow, SectionHead, CategoryTile } from "@/components/listing";
import { ProviderCard } from "@/components/provider-card";
import { featured, flashDeals, services, categories, serviceCategories, products, money } from "@/lib/data";
import { providers, ecoGroups, ecoListings } from "@/lib/providers";

export default function Home() {
  return (
    <div className="space-y-10">
      {/* HERO — one message, one accent, escrow promise front and center */}
      <section className="card relative overflow-hidden border-0 bg-ink text-white">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-money/20 blur-3xl" />
        <div className="relative grid gap-8 p-6 md:grid-cols-[1.2fr_1fr] md:p-12">
          <div>
            <span className="badge border border-white/15 bg-white/10 text-white">
              <ShieldCheck size={12} className="text-money" /> EVERY ORDER ESCROW-PROTECTED
            </span>
            <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight md:text-6xl">
              Kenya's marketplace<br />
              that <span className="text-brand">protects</span><br />
              every shilling.
            </h1>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/65">
              Products, services, vehicles, containers and verified professionals.
              Your money is held safely until you confirm delivery — no scams, no ghosting.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/search" className="btn btn-primary">Start shopping <ChevronRight size={16} /></Link>
              <Link href="/services" className="btn h-[46px] border border-white/20 bg-white/5 px-5 text-white hover:bg-white/10">Book a service</Link>
            </div>
            {/* Scannable trust strip — answers Jumia's "unscannable info" failure */}
            <div className="mt-8 grid max-w-lg grid-cols-3 gap-3 text-center">
              {[
                { icon: <ShieldCheck size={15} className="text-money" />, n: "100%", t: "escrow on orders" },
                { icon: <BadgeCheck size={15} className="text-brand" />, n: "12k+", t: "KYC-verified sellers" },
                { icon: <Timer size={15} className="text-white/70" />, n: "24h", t: "refund promise" },
              ].map((s) => (
                <div key={s.t} className="rounded-xl border border-white/10 bg-white/5 px-2 py-3">
                  <div className="flex items-center justify-center gap-1.5 text-lg font-extrabold">{s.icon}{s.n}</div>
                  <div className="mt-0.5 text-[10.5px] uppercase tracking-wide text-white/55">{s.t}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Escrow explainer card — the product IS the differentiator */}
          <div className="glass self-center rounded-2xl border border-white/12 p-5 text-ink shadow-(--shadow-pop) md:p-6">
            <div className="flex items-center gap-2">
              <span className="bg-money grid h-10 w-10 place-items-center rounded-xl text-white"><ShieldCheck size={20} /></span>
              <div>
                <div className="font-extrabold">How escrow works</div>
                <div className="text-xs text-muted">in 3 steps</div>
              </div>
            </div>
            <ol className="mt-4 space-y-3">
              {[
                { n: "1", t: "You pay via M-Pesa", d: "Money goes to Richkem Escrow — not the seller" },
                { n: "2", t: "Seller ships / delivers", d: "They only ship after payment is verified" },
                { n: "3", t: "You confirm, they get paid", d: "Not happy? Dispute → full refund path" },
              ].map((s) => (
                <li key={s.n} className="flex gap-3">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand text-sm font-black text-white">{s.n}</span>
                  <div>
                    <div className="text-sm font-bold">{s.t}</div>
                    <div className="text-xs text-muted">{s.d}</div>
                  </div>
                </li>
              ))}
            </ol>
            <Link href="/help/escrow" className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand hover:underline">
              See the guarantee <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICE CATEGORIES */}
      <section>
        <SectionHead title="Find a service near you" href="/services" accent="jiji" />
        <div className="grid grid-cols-4 gap-3 md:grid-cols-8">
          {serviceCategories.map((c) => (
            <Link key={c.slug} href={`/services/${c.slug}`} className="card card-hover flex flex-col items-center gap-2 p-3.5 text-center">
              <span className="text-2xl">{c.icon}</span>
              <span className="text-[11px] font-semibold leading-tight">{c.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* FLASH DEALS — calm, no screaming banner */}
      <section>
        <div className="mb-3 flex items-center gap-3">
          <h2 className="section-title border-l-4 border-brand pl-2.5">⚡ Flash deals</h2>
          <span className="badge bg-danger-50 text-danger"><Timer size={11} /> 04:12:38</span>
          <Link href="/search" className="text-brand ml-auto text-sm font-semibold hover:underline">See all →</Link>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-6">
          {flashDeals.map((l) => <ListingCard key={l.id} l={l} compact />)}
        </div>
      </section>

      {/* ECOSYSTEM — the everything-marketplace */}
      <section>
        <SectionHead title="The everything marketplace" />
        <div className="grid gap-3 md:grid-cols-5">
          {ecoGroups.map((g) => (
            <Link key={g.slug} href={`/market/${g.slug}`} className="card card-hover group p-4">
              <span className="text-3xl">{g.icon}</span>
              <div className="mt-2 font-bold group-hover:text-brand">{g.label}</div>
              <div className="text-xs text-muted">{g.blurb}</div>
            </Link>
          ))}
        </div>
        <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-4">
          {ecoListings.slice(0, 4).map((e) => (
            <Link key={e.id} href={`/market/${e.group}`} className="card card-hover group overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={e.image} alt={e.title} className="img-zoom aspect-[16/10] w-full object-cover" />
              <div className="p-3">
                <div className="truncate text-[13px] font-bold">{e.title}</div>
                <div className="price text-brand text-sm">{money(e.price)} <span className="text-[11px] font-medium text-muted">{e.unit}</span></div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* PROS + BUSINESSES */}
      <section>
        <SectionHead title="Verified people & companies" href="/professionals" accent="jiji" />
        <div className="grid gap-3 md:grid-cols-2">
          {providers.slice(0, 4).map((p) => <ProviderCard key={p.id} p={p} />)}
        </div>
      </section>

      {/* CATEGORIES */}
      <section>
        <SectionHead title="Shop by category" href="/categories" />
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
          {categories.slice(0, 10).map((c) => <CategoryTile key={c.slug} {...c} />)}
        </div>
      </section>

      {/* FEATURED */}
      <section>
        <SectionHead title="Featured for you" href="/search" />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-5">
          {featured.map((l) => <ListingCard key={l.id} l={l} />)}
        </div>
      </section>

      {/* SERVICES */}
      <section>
        <SectionHead title="Trusted services, bookable now" href="/services" accent="jiji" />
        <div className="grid gap-3 md:grid-cols-2">
          {services.slice(0, 4).map((l) => <ListingRow key={l.id} l={l} />)}
        </div>
      </section>

      {/* TOP STORES */}
      <section>
        <SectionHead title="Official & top-rated stores" href="/stores" />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {[
            { name: "Richkem Official Store", rating: 4.8, badge: "Official", slug: "richkem-official" },
            { name: "PhoneHub Kenya", rating: 4.6, badge: "Verified", slug: "phonehub-kenya" },
            { name: "AutoDeal Motors", rating: 4.7, badge: "Verified", slug: "autodeal-motors" },
            { name: "Dr. Amina Clinic", rating: 4.9, badge: "Top rated", slug: "dr-amina-clinic" },
          ].map((s) => (
            <Link key={s.slug} href={`/store/${s.slug}`} className="card card-hover flex items-center gap-3 p-4">
              <span className="bg-brand grid h-11 w-11 place-items-center rounded-full font-black text-white">{s.name[0]}</span>
              <div className="min-w-0">
                <div className="truncate text-sm font-bold">{s.name}</div>
                <div className="flex items-center gap-1 text-xs text-muted">
                  <Star size={11} className="fill-amber-400 text-amber-400" /> {s.rating} · {s.badge}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SELL CTA */}
      <section className="card flex flex-col items-center justify-between gap-4 p-6 md:flex-row md:p-8">
        <div>
          <h3 className="text-xl font-extrabold md:text-2xl">Own a business, or are you a specialist?</h3>
          <p className="mt-1 text-sm text-muted">Free listings · shops, professionals & companies · 5% fee only when you get paid · Friday M-Pesa payouts</p>
        </div>
        <Link href="/sell" className="btn btn-primary shrink-0"><Store size={16} /> Start selling</Link>
      </section>
    </div>
  );
}
