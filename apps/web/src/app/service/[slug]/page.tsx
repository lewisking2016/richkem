import { notFound } from "next/navigation";
import Link from "next/link";
import { ShieldCheck, MapPin, Star, Clock, CalendarCheck, Phone, MessageCircle } from "lucide-react";
import { findListing, money } from "@/lib/data";
import { SectionHead, ListingRow } from "@/components/listing";
import { services } from "@/lib/data";

const slots = ["Mon–Fri 8:00–17:00", "Sat 9:00–14:00", "Emergency 24/7"];

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = findListing(slug);
  if (!s || s.kind !== "service") notFound();
  const more = services.filter((x) => x.id !== s.id).slice(0, 3);

  return (
    <div className="space-y-8">
      <nav className="flex items-center gap-1 text-xs text-muted">
        <Link href="/" className="hover:text-jiji">Home</Link> / <Link href="/services" className="hover:text-jiji">Services</Link> / <span className="text-ink">{s.title}</span>
      </nav>

      <div className="grid gap-6 lg:grid-cols-[420px_1fr_320px]">
        <div className="card relative aspect-[4/3] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={s.image} alt={s.title} className="h-full w-full object-cover" />
          <span className="badge bg-jiji absolute left-3 top-3 text-white">Service</span>
        </div>

        <div>
          <h1 className="text-2xl font-extrabold">{s.title}</h1>
          <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-muted">
            <span className="badge bg-jiji-50 text-jiji">✔ Verified provider</span>
            <span>★ {s.seller.rating} ({s.seller.reviews.toLocaleString()} reviews)</span>
            <span className="inline-flex items-center gap-0.5"><MapPin size={11} /> {s.location}</span>
            <span className="inline-flex items-center gap-0.5"><Clock size={11} /> Responds in ~15 min</span>
          </div>

          <div className="mt-4 flex items-end gap-2">
            <span className="text-3xl font-black text-jiji">{money(s.price)}</span>
            {s.compareAt && <span className="text-lg text-muted line-through">{money(s.compareAt)}</span>}
            <span className="text-xs text-muted">/ session</span>
          </div>

          <div className="mt-5">
            <h2 className="mb-2 font-extrabold">Availability</h2>
            <div className="flex flex-wrap gap-2">{slots.map((t) => <span key={t} className="badge bg-gray-100 !text-ink">{t}</span>)}</div>
          </div>

          <p className="mt-5 text-sm leading-relaxed text-muted">{s.description}</p>

          <div className="mt-5">
            <h2 className="mb-2 font-extrabold">What's included</h2>
            <ul className="grid gap-1.5 text-sm sm:grid-cols-2">
              {["Consultation & assessment", "Licensed professional", "Service report", "Follow-up support"].map((f) => (
                <li key={f} className="flex items-center gap-2"><ShieldCheck size={14} className="text-money" /> {f}</li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="space-y-3">
          <div className="card p-4">
            <div className="text-jiji inline-flex items-center gap-1.5 text-sm font-extrabold"><ShieldCheck size={16} /> Booking protected</div>
            <p className="mt-1.5 text-xs text-muted">Pay a deposit via M-Pesa. Funds released after service is delivered.</p>
            <Link href={`/booking-success?what=${encodeURIComponent(s.title)}&who=${encodeURIComponent(s.seller.name)}&deposit=${Math.round(s.price * 0.3)}&when=${encodeURIComponent("Fri, Sep 11 · 10:00")}`} className="btn bg-jiji mt-4 w-full text-white hover:bg-jiji-600"><CalendarCheck size={16} /> Book now</Link>
            <button className="btn btn-outline mt-2 w-full"><MessageCircle size={16} /> Chat</button>
            <button className="btn btn-outline mt-2 w-full"><Phone size={16} /> Call provider</button>
          </div>
          <div className="card p-4">
            <div className="text-xs uppercase text-muted">Provided by</div>
            <Link href={`/store/${s.seller.slug}`} className="mt-1 flex items-center gap-3">
              <span className="bg-jiji grid h-10 w-10 place-items-center rounded-full font-black text-white">{s.seller.name[0]}</span>
              <div>
                <div className="text-sm font-bold hover:text-jiji">{s.seller.name}</div>
                <div className="text-xs text-muted">★ {s.seller.rating} · since {s.seller.memberSince}</div>
              </div>
            </Link>
          </div>
        </aside>
      </div>

      <section>
        <SectionHead title="Other services nearby" accent="jiji" />
        <div className="grid gap-3 md:grid-cols-2">
          {more.map((m) => <ListingRow key={m.id} l={m} />)}
        </div>
      </section>
    </div>
  );
}
