import { providers, proCategories } from "@/lib/providers";
import { ProviderCard } from "@/components/provider-card";
import { SectionHead } from "@/components/listing";
import Link from "next/link";

export const metadata = { title: "Professionals" };

export default function Professionals() {
  const pros = providers.filter((p) => p.type === "person");
  return (
    <div className="space-y-6">
      <div className="card bg-gradient-to-r from-brand to-brand-600 p-6 text-white md:p-8">
        <span className="badge bg-white/15 text-white">👤 PROFESSIONALS</span>
        <h1 className="mt-3 text-3xl font-black">Verified people. Real specialities.</h1>
        <p className="mt-2 max-w-xl text-sm text-white/85">
          Doctors, lawyers, engineers, CPAs, IT pros — individual specialists with public profiles, ratings and escrow-protected engagements.
        </p>
      </div>

      <section>
        <SectionHead title="Browse specialities" />
        <div className="grid grid-cols-4 gap-3 md:grid-cols-8">
          {proCategories.map((c) => (
            <Link key={c.slug} href={`/professionals?spec=${c.slug}`} className="card flex flex-col items-center gap-2 p-3 text-center hover:shadow-md">
              <span className="text-2xl">{c.icon}</span>
              <span className="text-[11px] font-semibold leading-tight">{c.label}</span>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <SectionHead title="Available now" href="/professionals" />
        <div className="grid gap-3 md:grid-cols-2">
          {pros.map((p) => <ProviderCard key={p.id} p={p} />)}
        </div>
      </section>

      <section className="card flex flex-col items-center justify-between gap-3 p-6 md:flex-row">
        <div>
          <h3 className="text-lg font-extrabold">Are you a specialist? Get listed.</h3>
          <p className="text-sm text-muted">Free profile · clients pay into escrow before you work · payouts to M-Pesa.</p>
        </div>
        <Link href="/sell" className="btn btn-primary shrink-0">Create my profile</Link>
      </section>
    </div>
  );
}
