import Link from "next/link";
import { ShieldCheck, Store, ChevronRight, Star, Timer, Zap } from "lucide-react";
import HeroSlider from "@/components/hero-slider";
import { ListingCard, ListingRow, SectionHead, CategoryTile } from "@/components/listing";
import { ProviderCard } from "@/components/provider-card";
import { ecoGroupIcons, serviceCategoryIcons, PersonIcon, BusinessIcon } from "@/components/icons";
import { featured, flashDeals, services, categories, serviceCategories, products, money } from "@/lib/data";
import { providers, ecoGroups, ecoListings } from "@/lib/providers";

export default function Home() {
  return (
    <div className="space-y-10">
      {/* HERO SLIDER — rotating titles + swapping escrow card */}
      <HeroSlider />

      {/* SERVICE CATEGORIES */}
      <section>
        <SectionHead title="Find a service near you" href="/services" accent="jiji" />
        <div className="grid grid-cols-4 gap-3 md:grid-cols-8">
          {serviceCategories.map((c) => {
            const Icon = serviceCategoryIcons[c.slug] ?? serviceCategoryIcons.doctors;
            return (
              <Link key={c.slug} href={`/services/${c.slug}`} className="card card-hover flex flex-col items-center gap-2 p-3.5 text-center">
                <span className="bg-jiji-50 text-jiji grid h-11 w-11 place-items-center rounded-xl">
                  <Icon size={22} strokeWidth={2} />
                </span>
                <span className="text-[11px] font-semibold leading-tight">{c.name}</span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* FLASH DEALS — calm, no screaming banner */}
      <section>
        <div className="mb-3 flex items-center gap-3">
          <h2 className="section-title border-l-4 border-brand pl-2.5">Flash deals</h2>
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
          {ecoGroups.map((g) => {
            const Icon = ecoGroupIcons[g.slug] ?? ecoGroupIcons.containers;
            return (
              <Link key={g.slug} href={`/market/${g.slug}`} className="card card-hover group p-4">
                <span className="bg-brand-50 text-brand grid h-12 w-12 place-items-center rounded-xl">
                  <Icon size={24} strokeWidth={2} />
                </span>
                <div className="mt-2 font-bold group-hover:text-brand">{g.label}</div>
                <div className="text-xs text-muted">{g.blurb}</div>
              </Link>
            );
          })}
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
