import Link from "next/link";
import { notFound } from "next/navigation";
import { serviceCategories } from "@/lib/data";
import { providers } from "@/lib/providers";
import { ProviderCard } from "@/components/provider-card";

export default async function ServiceCategory({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cat = serviceCategories.find((c) => c.slug === slug);
  if (!cat) notFound();

  return (
    <div className="space-y-5">
      <div className="card flex items-center gap-4 p-5">
        <span className="text-4xl">{cat.icon}</span>
        <div>
          <h1 className="text-2xl font-extrabold">{cat.name}</h1>
          <p className="text-sm text-muted">Verified providers · escrow-protected bookings · reviews from real clients</p>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {providers
          .filter((p) => p.specialities.some((s) => s.toLowerCase().includes(cat.name.split(" ")[0].toLowerCase().slice(0, 5))) || true)
          .map((p) => <ProviderCard key={p.id} p={p} />)}
      </div>

      <div className="card p-6 text-center">
        <h3 className="font-extrabold">Can't find the right {cat.name.toLowerCase().replace(/s$/, "")}?</h3>
        <p className="mt-1 text-sm text-muted">Post what you need — verified providers will quote with escrow-protected bids.</p>
        <Link href="/professionals" className="btn bg-jiji mt-3 text-white hover:bg-jiji-600">Browse all professionals</Link>
      </div>
    </div>
  );
}
