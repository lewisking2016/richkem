import Link from "next/link";
import { ShieldCheck, Zap, Store, ChevronRight, Star } from "lucide-react";
import { ListingCard, ListingRow, SectionHead, CategoryTile } from "@/components/listing";
import { ProviderCard } from "@/components/provider-card";
import { featured, flashDeals, services, categories, serviceCategories, products, money } from "@/lib/data";
import { providers, ecoGroups, ecoListings } from "@/lib/providers";

const ecoMoney = money(ecoListings.reduce((a, e) => a + e.price, 0));

export default function Home() {
  return (
    <div className="space-y-8">
      {/* HERO */}
      <section className="grid gap-4 lg:grid-cols-[1fr_320px]">
        <div className="card relative overflow-hidden bg-gradient-to-r from-ink to-gray-800 p-6 text-white md:p-10">
          <span className="badge bg-brand text-white"><Zap size={12} /> M-PESA ESCROW INSIDE</span>
          <h1 className="mt-4 max-w-xl text-3xl font-black leading-tight md:text-5xl">
            Everything Kenya buys.<br />
            <span className="text-brand">Protected</span> on every shilling.
          </h1>
          <p className="mt-3 max-w-md text-sm text-white/70 md:text-base">
            Products, services and high-value assets from verified sellers. Your money sits in escrow until you confirm delivery.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/search" className="btn btn-primary">Start shopping</Link>
            <Link href="/services" className="btn btn-outline !border-white/25 !bg-white/10 !text-white">Book services</Link>
          </div>
        </div>
        <div className="card flex flex-col justify-between gap-4 p-5">
          <div>
            <div className="text-money inline-flex items-center gap-2 font-extrabold"><ShieldCheck size={20} /> Escrow explained</div>
            <p className="mt-2 text-sm text-muted">Pay with M-Pesa. We hold the money. Seller ships. You confirm. Seller gets paid. Dispute anytime before release.</p>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            {[
              { n: "48h", t: "avg delivery" },
              { n: "12k+", t: "verified sellers" },
              { n: "0 KES", t: "buyer escrow fee" },
            ].map((s) => (
              <div key={s.t} className="rounded-lg bg-gray-50 p-2.5">
                <div className="text-lg font-extrabold">{s.n}</div>
                <div className="text-[10px] text-muted uppercase">{s.t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE CATEGORIES STRIP (Jiji-style) */}
      <section>
        <SectionHead title="Find a service near you" href="/services" accent="jiji" />
        <div className="grid grid-cols-4 gap-3 md:grid-cols-8">
          {serviceCategories.map((c) => (
            <Link key={c.slug} href={`/services/${c.slug}`} className="card flex flex-col items-center gap-2 p-3 text-center hover:shadow-md">
              <span className="text-2xl">{c.icon}</span>
              <span className="text-[11px] font-semibold leading-tight">{c.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* FLASH DEALS */}
      <section className="card p-4">
        <div className="mb-3 flex items-center gap-3">
          <h2 className="section-title text-danger">⚡ Flash Deals</h2>
          <span className="badge bg-danger-50 text-danger">Ends in 04:12:38</span>
          <Link href="/search" className="text-brand ml-auto text-sm font-semibold hover:underline">See all →</Link>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-6">
          {flashDeals.map((l) => <ListingCard key={l.id} l={l} compact />)}
        </div>
      </section>

      {/* CATEGORY GRID */}
      <section>
        <SectionHead title="Shop by category" href="/categories" />
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
          {categories.slice(0, 10).map((c) => <CategoryTile key={c.slug} {...c} />)}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section>
        <SectionHead title="Featured for you" href="/search" />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-5">
          {featured.map((l) => <ListingCard key={l.id} l={l} />)}
        </div>
      </section>

      {/* ECOSYSTEM: PROS + BUSINESSES */}
      <section>
        <SectionHead title="Verified professionals & companies" href="/professionals" accent="jiji" />
        <div className="grid gap-3 md:grid-cols-2">
          {providers.slice(0, 4).map((p) => <ProviderCard key={p.id} p={p} />)}
        </div>
        <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-4">
          <Link href="/professionals" className="card p-4 text-center hover:shadow-md"><span className="text-2xl">👤</span><div className="mt-1 text-sm font-bold">Hire a pro</div><div className="text-[11px] text-muted">doctors · lawyers · engineers</div></Link>
          <Link href="/businesses" className="card p-4 text-center hover:shadow-md"><span className="text-2xl">🏢</span><div className="mt-1 text-sm font-bold">Hire a company</div><div className="text-[11px] text-muted">clearing · freight · garages</div></Link>
          <Link href="/market/containers" className="card p-4 text-center hover:shadow-md"><span className="text-2xl">🚢</span><div className="mt-1 text-sm font-bold">Containers</div><div className="text-[11px] text-muted">20FT · 40FT · reefer</div></Link>
          <Link href="/market/logistics" className="card p-4 text-center hover:shadow-md"><span className="text-2xl">📦</span><div className="mt-1 text-sm font-bold">Freight & haulage</div><div className="text-[11px] text-muted">MSA→NBO · sea freight</div></Link>
        </div>
      </section>

      {/* ECOSYSTEM MARKET GROUPS */}
      <section>
        <SectionHead title="The everything marketplace" href="/market/containers" />
        <div className="grid gap-3 md:grid-cols-5">
          {ecoGroups.map((g) => (
            <Link key={g.slug} href={`/market/${g.slug}`} className="card group p-4 hover:shadow-md">
              <span className="text-3xl">{g.icon}</span>
              <div className="mt-2 font-bold group-hover:text-brand">{g.label}</div>
              <div className="text-xs text-muted">{g.blurb}</div>
            </Link>
          ))}
        </div>
        <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-4">
          {ecoListings.slice(0, 4).map((e) => (
            <Link key={e.id} href={`/market/${e.group}`} className="card overflow-hidden hover:shadow-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={e.image} alt={e.title} className="aspect-[16/10] w-full object-cover" />
              <div className="p-3">
                <div className="truncate text-[13px] font-bold">{e.title}</div>
                <div className="text-sm font-extrabold text-brand">{money(e.price)} <span className="text-[11px] font-medium text-muted">{e.unit}</span></div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ESCROW TRUST BANNER */}
      <section className="card flex flex-col items-center gap-4 bg-gradient-to-r from-money-50 to-white p-6 text-center md:flex-row md:text-left">
        <span className="bg-money grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-white"><ShieldCheck size={28} /></span>
        <div className="flex-1">
          <h3 className="text-xl font-extrabold">Every shilling protected by escrow</h3>
          <p className="mt-1 text-sm text-muted">From a 6,500 KES check-up to an 18.5M KES Cessna — same protection. Money moves only when you're happy.</p>
        </div>
        <Link href="/help/escrow" className="btn btn-dark shrink-0">How it works <ChevronRight size={16} /></Link>
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
            <Link key={s.slug} href={`/store/${s.slug}`} className="card flex items-center gap-3 p-4 hover:shadow-md">
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

      {/* RECENT PRODUCTS ROW */}
      <section>
        <SectionHead title="Fresh arrivals" href="/search" />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-6">
          {products.slice(8, 14).map((l) => <ListingCard key={l.id} l={l} compact />)}
        </div>
      </section>

      {/* SELL CTA */}
      <section className="card flex flex-col items-center justify-between gap-4 p-6 md:flex-row">
        <div>
          <h3 className="text-xl font-extrabold">Own a business? Open your storefront today.</h3>
          <p className="mt-1 text-sm text-muted">Free listings · 5% escrow fee on completion · M-Pesa payouts every Friday</p>
        </div>
        <Link href="/sell" className="btn btn-primary shrink-0"><Store size={16} /> Start selling</Link>
      </section>

      <p className="pb-2 text-center text-xs text-muted">
        {products.length + services.length + ecoListings.length} live listings · {ecoMoney} in escrow-protected deals · {providers.length} verified pros & companies
      </p>
    </div>
  );
}
