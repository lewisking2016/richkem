"use client";

import { useState } from "react";
import Link from "next/link";
import { ShieldCheck, Truck, Store, Phone, CheckCircle2 } from "lucide-react";
import { money } from "@/lib/data";

const steps = ["Address", "Delivery", "Payment", "Done"];

export default function Checkout() {
  const [method, setMethod] = useState<"mpesa" | "on" | "card">("mpesa");
  const subtotal = 42999 + 6499 * 2 + 8999;
  const delivery = 350;

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="mb-4 text-2xl font-extrabold">Checkout</h1>

      {/* STEPPER */}
      <div className="mb-6 flex items-center gap-2 text-xs font-semibold">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center gap-2">
            <span className={`grid h-6 w-6 place-items-center rounded-full ${i === 0 ? "bg-brand text-white" : "bg-gray-200 text-muted"}`}>{i + 1}</span>
            <span className={i === 0 ? "text-ink" : "text-muted"}>{s}</span>
            {i < steps.length - 1 && <span className="h-px w-8 bg-line" />}
          </div>
        ))}
      </div>

      <div className="grid gap-5">
        {/* ADDRESS */}
        <section className="card p-5">
          <h2 className="mb-3 font-extrabold">1 · Delivery address</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <div><label className="label">Full name</label><input className="input" defaultValue="Wanjiku Kamau" /></div>
            <div><label className="label">Phone (M-Pesa)</label><input className="input" defaultValue="+254 712 345 678" /></div>
            <div className="sm:col-span-2"><label className="label">Delivery location</label><input className="input" defaultValue="Kilimani Business Centre, Kirichwa Road, Nairobi" /></div>
          </div>
        </section>

        {/* DELIVERY */}
        <section className="card p-5">
          <h2 className="mb-3 font-extrabold">2 · Delivery method</h2>
          <div className="grid gap-2">
            <label className="flex cursor-pointer items-center gap-3 rounded-lg border p-3.5">
              <input type="radio" name="del" defaultChecked className="accent-brand" />
              <Truck size={18} className="text-muted" />
              <span className="flex-1 text-sm"><b>Door delivery</b> · 2–4 days · countrywide</span>
              <b className="text-sm">KES 350</b>
            </label>
            <label className="flex cursor-pointer items-center gap-3 rounded-lg border p-3.5">
              <input type="radio" name="del" className="accent-brand" />
              <Store size={18} className="text-muted" />
              <span className="flex-1 text-sm"><b>Pickup station</b> · Nairobi CBD · ready tomorrow</span>
              <b className="text-sm text-money">FREE</b>
            </label>
          </div>
        </section>

        {/* PAYMENT */}
        <section className="card p-5">
          <h2 className="mb-3 font-extrabold">3 · Payment</h2>
          <div className="grid gap-2">
            <button onClick={() => setMethod("mpesa")} className={`flex items-center gap-3 rounded-lg border p-4 text-left ${method === "mpesa" ? "border-brand ring-2 ring-brand/20" : ""}`}>
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-money-50 text-money"><Phone size={17} /></span>
              <span className="flex-1 text-sm"><b>M-Pesa escrow</b> · STK push to your phone</span>
              <span className="badge bg-money-50 text-money"><ShieldCheck size={11} /> Protected</span>
            </button>
            <button onClick={() => setMethod("on")} className={`flex items-center gap-3 rounded-lg border p-4 text-left ${method === "on" ? "border-brand ring-2 ring-brand/20" : ""}`}>
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-gray-100"><Truck size={17} /></span>
              <span className="flex-1 text-sm"><b>Pay on delivery</b> · Nairobi only, under KES 50,000</span>
            </button>
          </div>

          {method === "mpesa" && (
            <div className="mt-3 rounded-lg bg-money-50 p-4 text-sm">
              <div className="flex items-center gap-2 font-bold text-money"><CheckCircle2 size={15} /> M-Pesa number confirmed</div>
              <p className="mt-1 text-xs text-muted">You'll receive an STK push on <b>+254 712 *** 678</b>. Enter your PIN. Money is held by Richkem Escrow — the seller only gets paid after you confirm delivery.</p>
            </div>
          )}
        </section>

        {/* SUMMARY */}
        <section className="card p-5">
          <h2 className="mb-3 font-extrabold">Order summary</h2>
          <div className="flex justify-between text-sm"><span className="text-muted">Subtotal (4 items)</span><b>{money(subtotal)}</b></div>
          <div className="flex justify-between text-sm"><span className="text-muted">Delivery</span><b>{money(delivery)}</b></div>
          <div className="mt-2 flex justify-between border-t pt-3 text-lg"><b>Total</b><b className="text-brand">{money(subtotal + delivery)}</b></div>
          <Link href="/order/RK-88215" className="btn btn-primary mt-4 w-full">Place order · Pay via M-Pesa</Link>
          <p className="mt-2 text-center text-[11px] text-muted">By placing this order you agree to the escrow terms. Dispute anytime before release.</p>
        </section>
      </div>
    </div>
  );
}
