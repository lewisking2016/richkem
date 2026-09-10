import Link from "next/link";
import { ShieldCheck, CheckCircle2, XCircle, Clock, FileText } from "lucide-react";

export const metadata = { title: "The Richkem Escrow Guarantee" };

export default function EscrowGuarantee() {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div className="card bg-gradient-to-r from-ink to-gray-800 p-6 text-white md:p-10">
        <span className="badge bg-money text-white"><ShieldCheck size={12} /> THE RICHKEM GUARANTEE</span>
        <h1 className="mt-4 text-3xl font-black md:text-4xl">Every shilling protected. Every time.</h1>
        <p className="mt-2 max-w-xl text-sm text-white/70">Whether it's a 1,200 KES blender or an 18.5M KES aircraft — the same escrow rules apply.</p>
      </div>

      <section className="grid gap-3 md:grid-cols-3">
        {[
          { icon: <CheckCircle2 size={20} className="text-money" />, t: "Money held, not sent", d: "Your M-Pesa payment goes to Richkem Escrow. The seller sees 'paid — ship now' but can't withdraw until you confirm." },
          { icon: <Clock size={20} className="text-brand" />, t: "3-day inspection window", d: "After delivery you get 3 days to inspect. Confirm to release, or open a dispute inside the window." },
          { icon: <XCircle size={20} className="text-danger" />, t: "Dispute = protection", d: "Item not as described? Never delivered? Evidence-based review. Refunds go straight back to your M-Pesa." },
        ].map((c) => (
          <div key={c.t} className="card p-5">
            {c.icon}
            <h2 className="mt-2 font-extrabold">{c.t}</h2>
            <p className="mt-1 text-sm text-muted">{c.d}</p>
          </div>
        ))}
      </section>

      <section className="card p-5 md:p-7">
        <h2 className="text-xl font-extrabold">The rules, plainly</h2>
        <ol className="mt-4 space-y-3">
          {[
            "You pay via M-Pesa STK push — we never store your PIN.",
            "The seller is notified to ship only after payment is verified.",
            "Tracking updates appear on your order page at every milestone.",
            "You confirm delivery → funds release to the seller minus a 5% fee.",
            "No action after 3 days → auto-release; the dispute window closes.",
            "Disputes are resolved by Richkem's trust team with evidence from both sides.",
          ].map((r, i) => (
            <li key={i} className="flex gap-3 text-sm">
              <span className="bg-brand-50 text-brand grid h-6 w-6 shrink-0 place-items-center rounded-full text-xs font-black">{i + 1}</span>
              <span className="text-muted">{r}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="card flex flex-col items-center justify-between gap-3 p-6 md:flex-row">
        <p className="text-sm text-muted">Questions about a specific order? Our support team answers in under 15 minutes.</p>
        <Link href="/help" className="btn btn-dark shrink-0">Contact support <FileText size={15} /></Link>
      </section>
    </div>
  );
}
