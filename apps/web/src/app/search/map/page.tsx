import Link from "next/link";
import { MapPin, ArrowLeft } from "lucide-react";
import { listings } from "@/lib/data";
import { money } from "@/lib/data";

export const metadata = { title: "Map view" };

// Nairobi-centered demo coordinates per listing seed
const coords: Record<string, [number, number]> = {
  l1: [-1.2864, 36.8172], l2: [-1.2921, 36.8219], l3: [-1.2864, 36.8172],
  l4: [-1.3001, 36.8271], l5: [-1.3187, 36.8561], l6: [-1.3192, 36.8152],
  l7: [-1.2841, 36.8321], l8: [-1.2712, 36.8111], l9: [-1.2864, 36.8172],
  l10: [-1.3210, 36.7089], l11: [-1.2864, 36.8172], l12: [-1.2712, 36.8111],
  v1: [-1.2635, 36.8030], v2: [-1.2911, 36.7901], v3: [-1.2981, 36.8061],
  v4: [-1.3187, 36.8561], v5: [-1.2841, 36.8321], v6: [-1.2712, 36.8111],
};

export default function MapView() {
  const items = listings.filter((l) => coords[l.id]);
  const bbox = "36.68,-1.35,36.90,-1.24";
  const markers = items
    .slice(0, 12)
    .map((l, i) => `&marker=${coords[l.id][0]},${coords[l.id][1]}`)
    .join("");

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-extrabold">Map view — Nairobi</h1>
        <Link href="/search" className="btn btn-outline btn-sm"><ArrowLeft size={14} /> Back to list</Link>
      </div>

      <div className="card overflow-hidden">
        <iframe
          title="Listings map"
          className="h-[420px] w-full border-0"
          src={`https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik${markers}`}
        />
      </div>

      <div className="grid gap-2 md:grid-cols-2">
        {items.slice(0, 12).map((l) => (
          <Link key={l.id} href={l.kind === "product" ? `/product/${l.slug}` : `/service/${l.slug}`} className="card card-hover flex items-center gap-3 p-3">
            <span className="bg-brand-50 text-brand grid h-9 w-9 shrink-0 place-items-center rounded-lg"><MapPin size={16} /></span>
            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-semibold">{l.title}</div>
              <div className="text-xs text-muted">{l.location}</div>
            </div>
            <b className="price shrink-0 text-sm">{money(l.price)}</b>
          </Link>
        ))}
      </div>
    </div>
  );
}
