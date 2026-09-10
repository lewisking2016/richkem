import Link from "next/link";
import { ShieldCheck, Package, Store, MessageCircle, Phone, Mail } from "lucide-react";

export const metadata = { title: "Help Center" };

const faqs = [
  { q: "How does escrow protect me?", a: "Your M-Pesa payment is held by Richkem — not the seller. The seller ships knowing money is verified, and you get 3 days to inspect before funds release." },
  { q: "When do sellers get paid?", a: "When you confirm delivery, or automatically after the 3-day inspection window closes. Disputes pause the release." },
  { q: "What does Richkem charge?", a: "Buyers pay nothing extra. Sellers pay a 5% fee only on completed orders — deducted at escrow release, never upfront." },
  { q: "How do I report a scam or bad seller?", a: "Every listing and profile has a report action. Reports are reviewed within hours and repeat offenders are suspended." },
  { q: "Can I sell as an individual professional?", a: "Yes — shops, individual specialists and companies all get profiles. KYC verification unlocks the badge and higher limits." },
];

export default function Help() {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div className="card p-6 md:p-8">
        <h1 className="text-3xl font-black">Help Center</h1>
        <p className="mt-1 text-sm text-muted">Answers in plain language. Support replies in under 15 minutes, 7 days a week.</p>
      </div>

      <section className="grid gap-3 md:grid-cols-2">
        <Link href="/help/escrow" className="card card-hover flex items-center gap-3 p-4">
          <span className="bg-money-50 text-money grid h-11 w-11 place-items-center rounded-xl"><ShieldCheck size={22} /></span>
          <div><div className="font-bold">The Escrow Guarantee</div><div className="text-xs text-muted">How every shilling is protected</div></div>
        </Link>
        <Link href="/account/orders" className="card card-hover flex items-center gap-3 p-4">
          <span className="bg-brand-50 text-brand grid h-11 w-11 place-items-center rounded-xl"><Package size={22} /></span>
          <div><div className="font-bold">Track an order</div><div className="text-xs text-muted">Timeline, ledger, confirm or dispute</div></div>
        </Link>
        <Link href="/sell" className="card card-hover flex items-center gap-3 p-4">
          <span className="bg-jiji-50 text-jiji grid h-11 w-11 place-items-center rounded-xl"><Store size={22} /></span>
          <div><div className="font-bold">Selling on Richkem</div><div className="text-xs text-muted">Fees, payouts, verification</div></div>
        </Link>
        <Link href="/account/messages" className="card card-hover flex items-center gap-3 p-4">
          <span className="bg-gray-100 grid h-11 w-11 place-items-center rounded-xl"><MessageCircle size={22} /></span>
          <div><div className="font-bold">Messages</div><div className="text-xs text-muted">Chat with buyers and sellers</div></div>
        </Link>
      </section>

      <section className="card divide-y">
        {faqs.map((f) => (
          <details key={f.q} className="group p-4">
            <summary className="cursor-pointer list-none font-bold marker:hidden group-hover:text-brand">
              {f.q}
            </summary>
            <p className="mt-2 text-sm text-muted">{f.a}</p>
          </details>
        ))}
      </section>

      <section className="card flex flex-col items-center justify-between gap-4 p-6 md:flex-row">
        <div>
          <h2 className="font-extrabold">Still stuck?</h2>
          <p className="text-sm text-muted">Call, email or start a chat — real humans, fast.</p>
        </div>
        <div className="flex gap-2">
          <a href="tel:+254700000000" className="btn btn-outline btn-sm"><Phone size={15} /> Call</a>
          <a href="mailto:hello@richkem.co.ke" className="btn btn-primary btn-sm"><Mail size={15} /> Email</a>
        </div>
      </section>
    </div>
  );
}
