import Link from "next/link";
import { notFound } from "next/navigation";
import { ShieldCheck, CheckCircle2, Truck, Package, CircleDashed, XCircle } from "lucide-react";
import { money } from "@/lib/data";

const stages = ["Order placed", "Payment in escrow", "Shipped", "Delivered", "You confirm → seller paid"];

export default function OrderTracking({ params }: { params: Promise<{ ref: string }> }) {
  // demo shows a shipped order
  const ref = "RK-88214";
  const current = 3; // Delivered reached? show 3 => shipped+payment+delivered check
  const _ = params; // keep signature

  return (
    <div className="mx-auto max-w-3xl space-y-5">
      <div className="card flex items-center gap-4 p-5">
        <span className="bg-money grid h-12 w-12 place-items-center rounded-xl text-white"><ShieldCheck size={24} /></span>
        <div>
          <h1 className="text-xl font-extrabold">Order {ref}</h1>
          <p className="text-sm text-muted">Samsung Galaxy A55 5G · KES 42,999 · placed Sep 8, 2026</p>
        </div>
        <span className="badge bg-warn-50 text-warn ml-auto">ESCROW HELD</span>
      </div>

      {/* TIMELINE */}
      <div className="card p-5">
        <h2 className="mb-4 font-extrabold">Escrow & delivery timeline</h2>
        <ol className="space-y-0">
          {stages.map((s, i) => {
            const done = i < current;
            const active = i === current;
            return (
              <li key={s} className="flex gap-3">
                <div className="flex flex-col items-center">
                  {done ? <CheckCircle2 size={20} className="text-money" />
                    : active ? <Truck size={20} className="text-brand" />
                    : <CircleDashed size={20} className="text-muted" />}
                  {i < stages.length - 1 && <span className={`w-px flex-1 ${done ? "bg-money" : "bg-line"}`} />}
                </div>
                <div className={`pb-6 ${active ? "font-extrabold" : done ? "font-semibold" : "text-muted"}`}>{s}</div>
              </li>
            );
          })}
        </ol>
        <div className="flex gap-2">
          <button className="btn btn-primary btn-sm flex-1">Confirm delivery · release {money(42999)}</button>
          <button className="btn btn-danger btn-sm flex-1"><XCircle size={15} /> Open dispute</button>
        </div>
      </div>

      <div className="card p-5 text-sm">
        <h2 className="mb-2 font-extrabold">Ledger for this order</h2>
        {[
          { t: "M-Pesa received (escrow hold)", a: "+KES 42,999", d: "Sep 8 · 10:12", ok: true },
          { t: "Escrow release to seller (pending your confirm)", a: "—", d: "—", ok: false },
        ].map((r) => (
          <div key={r.t} className="flex items-center justify-between border-b py-2 last:border-0">
            <div><div className="font-semibold">{r.t}</div><div className="text-xs text-muted">{r.d}</div></div>
            <b className={r.ok ? "text-money" : "text-muted"}>{r.a}</b>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <Link href="/account/orders" className="btn btn-outline flex-1">All my orders</Link>
        <Link href="/account/messages" className="btn btn-outline flex-1">Message seller</Link>
      </div>
    </div>
  );
}
