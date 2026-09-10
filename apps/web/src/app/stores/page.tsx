import Link from "next/link";
import { Star, ShieldCheck } from "lucide-react";
import { sellers, listings } from "@/lib/data";

export const metadata = { title: "Stores" };

export default function Stores() {
  const all = Object.values(sellers);
  return (
    <div>
      <h1 className="mb-1 text-2xl font-extrabold">All stores & providers</h1>
      <p className="mb-4 text-sm text-muted">Every seller is KYC-checked. Ratings come from completed, escrow-protected orders.</p>
      <div className="grid gap-3 md:grid-cols-2">
        {all.map((s) => {
          const count = listings.filter((l) => l.seller.slug === s.slug).length;
          return (
            <Link key={s.slug} href={`/store/${s.slug}`} className="card card-hover flex items-center gap-4 p-4">
              <span className="bg-brand grid h-12 w-12 place-items-center rounded-xl text-lg font-black text-white">{s.name[0]}</span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <span className="truncate font-bold">{s.name}</span>
                  {s.verified && <span className="badge bg-money-50 text-money"><ShieldCheck size={10} /> Verified</span>}
                </div>
                <div className="flex items-center gap-2 text-xs text-muted">
                  <Star size={11} className="fill-amber-400 text-amber-400" /> {s.rating} ({s.reviews.toLocaleString()}) · {s.location}
                </div>
              </div>
              <span className="text-xs text-muted">{count} listings</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
