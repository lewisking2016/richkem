import { services, serviceCategories } from "@/lib/data";
import { providers } from "@/lib/providers";
import { ListingRow, SectionHead } from "@/components/listing";
import { ProviderCard } from "@/components/provider-card";
import { serviceCategoryIcons } from "@/components/icons";
import Link from "next/link";

export const metadata = { title: "Services" };

export default function ServicesHub() {
  return (
    <div className="space-y-6">
      <div className="card bg-gradient-to-r from-jiji to-jiji-600 p-6 text-white md:p-8">
        <h1 className="text-3xl font-black">Book trusted services</h1>
        <p className="mt-2 max-w-lg text-sm text-white/80">Licensed doctors, plumbers, lawyers, mechanics and more. Deposits held in escrow until the job is done.</p>
      </div>

      <section>
        <SectionHead title="Browse by category" accent="jiji" />
        <div className="grid grid-cols-4 gap-3 md:grid-cols-8">
          {serviceCategories.map((c) => {
            const Icon = serviceCategoryIcons[c.slug] ?? serviceCategoryIcons.doctors;
            return (
              <Link key={c.slug} href={`/services/${c.slug}`} className="card card-hover flex flex-col items-center gap-2 p-3 text-center">
                <span className="bg-jiji-50 text-jiji grid h-11 w-11 place-items-center rounded-xl">
                  <Icon size={21} strokeWidth={2} />
                </span>
                <span className="text-[11px] font-semibold">{c.name}</span>
              </Link>
            );
          })}
        </div>
      </section>

      <section>
        <SectionHead title="Instant-book services" accent="jiji" />
        <div className="grid gap-3 md:grid-cols-2">
          {services.map((s) => <ListingRow key={s.id} l={s} />)}
        </div>
      </section>

      <section>
        <SectionHead title="Profiles: people & companies" accent="jiji" />
        <div className="grid gap-3 md:grid-cols-2">
          {providers.slice(0, 6).map((p) => <ProviderCard key={p.id} p={p} />)}
        </div>
        <div className="mt-3 flex gap-2">
          <Link href="/professionals" className="btn btn-outline flex-1">All professionals →</Link>
          <Link href="/businesses" className="btn btn-outline flex-1">All businesses →</Link>
        </div>
      </section>
    </div>
  );
}
