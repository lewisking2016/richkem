import Link from "next/link";
import { providers } from "@/lib/providers";
import { ProviderCard } from "@/components/provider-card";
import { SectionHead } from "@/components/listing";

export const metadata = { title: "Businesses" };

export default function Businesses() {
  const companies = providers.filter((p) => p.type === "company");
  return (
    <div className="space-y-6">
      <div className="card bg-gradient-to-r from-jiji to-jiji-600 p-6 text-white md:p-8">
        <span className="badge bg-white/15 text-white">🏢 BUSINESSES</span>
        <h1 className="mt-3 text-3xl font-black">Companies you can trade with — safely.</h1>
        <p className="mt-2 max-w-xl text-sm text-white/85">
          Clearing agents, freight companies, garages, clinics and machinery dealers. Registered, KYC-verified, escrow-backed.
        </p>
      </div>

      <section>
        <SectionHead title="Verified companies" href="/businesses" />
        <div className="grid gap-3 md:grid-cols-2">
          {companies.map((p) => <ProviderCard key={p.id} p={p} />)}
        </div>
      </section>

      <section className="card flex flex-col items-center justify-between gap-3 p-6 md:flex-row">
        <div>
          <h3 className="text-lg font-extrabold">Run a company? List your business.</h3>
          <p className="text-sm text-muted">Public profile like Google Business · storefront · escrow on every deal · KYC badge.</p>
        </div>
        <Link href="/sell" className="btn bg-jiji shrink-0 text-white hover:bg-jiji-600">List my business</Link>
      </section>
    </div>
  );
}
