"use client";

import { use, useState } from "react";
import Link from "next/link";
import { ShieldCheck, CheckCircle2, Truck, CircleDashed, XCircle, MessageCircle } from "lucide-react";
import { money } from "@/lib/data";

const stages = ["Order placed", "Payment in escrow", "Shipped", "Delivered", "You confirm → seller paid"];

export default function OrderTracking({ params }: { params: Promise<{ ref: string }> }) {
  const { ref } = use(params);
  const [current, setCurrent] = useState(3);
  const [disputed, setDisputed] = useState(false);
  const [released, setReleased] = useState(false);
  const amount = 42999;

  const stageOf = () => {
    if (disputed) return 4;
    if (released) return 5;
    return current;
  };

  return (
    <div className="mx-auto max-w-3xl space-y-5">
      <div className="card flex items-center gap-4 p-5">
        <span className="bg-money grid h-12 w-12 place-items-center rounded-xl text-white"><ShieldCheck size={24} /></span>
        <div>
          <h1 className="text-xl font-extrabold">Order {ref}</h1>
          <p className="text-sm text-muted">Samsung Galaxy A55 5G · {money(amount)} · placed Sep 8, 2026</p>
        </div>
        <span className={`badge ml-auto ${disputed ? "bg-danger-50 text-danger" : released ? "bg-money-50 text-money" : "bg-warn-50 text-warn"}`}>
          {disputed ? "DISPUTED" : released ? "RELEASED" : "ESCROW HELD"}
        </span>
      </div>

      {/* TIMELINE */}
      <div className="card p-5">
        <h2 className="mb-4 font-extrabold">Escrow & delivery timeline</h2>
        <ol>
          {stages.slice(0, disputed ? 4 : 5).map((s, i) => {
            const done = i < stageOf() - 1 || (released && i === 4);
            const active = !released && !disputed && i === current;
            return (
              <li key={s} className="flex gap-3">
                <div className="flex flex-col items-center">
                  {done ? <CheckCircle2 size={20} className="text-money" />
                    : active ? <Truck size={20} className="text-brand" />
                    : <CircleDashed size={20} className="text-muted" />}
                  {i < (disputed ? 3 : 4) && <span className={`w-px flex-1 ${done ? "bg-money" : "bg-line"}`} />}
                </div>
                <div className={`pb-6 ${active ? "font-extrabold" : done ? "font-semibold" : "text-muted"}`}>{s}</div>
              </li>
            );
          })}
        </ol>

        {disputed ? (
          <div className="rounded-lg bg-danger-50 p-4 text-sm">
            <div className="text-danger flex items-center gap-2 font-bold"><XCircle size={15} /> Dispute opened — case DP-104</div>
            <p className="mt-1 text-xs text-muted">Our team reviews evidence from both sides within 24h. Your money stays locked until resolution. You'll get SMS updates.</p>
          </div>
        ) : released ? (
          <div className="rounded-lg bg-money-50 p-4 text-sm">
            <div className="text-money flex items-center gap-2 font-bold"><CheckCircle2 size={15} /> Funds released to seller</div>
            <p className="mt-1 text-xs text-muted">{money(amount)} sent to the seller's wallet. Thanks for confirming — rate the seller to help other buyers.</p>
            <button className="btn btn-outline btn-sm mt-3">Rate this order</button>
          </div>
        ) : (
          <div className="flex gap-2">
            <button onClick={() => { setCurrent(5); setReleased(true); }} className="btn btn-primary btn-sm flex-1">
              Confirm delivery · release {money(amount)}
            </button>
            <button onClick={() => setDisputed(true)} className="btn btn-danger btn-sm flex-1"><XCircle size={15} /> Open dispute</button>
          </div>
        )}
      </div>

      <div className="card p-5 text-sm">
        <h2 className="mb-2 font-extrabold">Ledger for this order</h2>
        {[
          { t: "M-Pesa received (escrow hold)", a: "+" + money(amount), d: "Sep 8 · 10:12", on: true },
          ...(released ? [{ t: "Escrow release to seller", a: "−" + money(amount), d: "Just now", on: true }] : []),
          ...(!released && !disputed ? [{ t: "Escrow release (pending your confirm)", a: "—", d: "—", on: false }] : []),
        ].map((r) => (
          <div key={r.t} className="flex items-center justify-between border-b py-2 last:border-0">
            <div><div className="font-semibold">{r.t}</div><div className="text-xs text-muted">{r.d}</div></div>
            <b className={r.on ? "text-money" : "text-muted"}>{r.a}</b>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <Link href="/account/orders" className="btn btn-outline flex-1">All my orders</Link>
        <Link href="/account/messages" className="btn btn-outline flex-1"><MessageCircle size={15} /> Message seller</Link>
      </div>
    </div>
  );
}
