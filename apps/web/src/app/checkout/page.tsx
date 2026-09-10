"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ShieldCheck, Truck, Store, Phone, CheckCircle2, ShoppingCart } from "lucide-react";
import { useStore } from "@/lib/store";
import { money } from "@/lib/data";

const steps = ["Address", "Delivery", "Payment", "Done"];

export default function Checkout() {
  const { cart, cartTotal, clearCart } = useStore();
  const router = useRouter();
  const [method, setMethod] = useState<"mpesa" | "on">("mpesa");
  const [deliveryOpt, setDeliveryOpt] = useState<"door" | "pickup">("door");
  const [placing, setPlacing] = useState(false);

  const delivery = deliveryOpt === "pickup" || cartTotal > 50000 ? 0 : 350;
  const count = cart.reduce((a, i) => a + i.qty, 0);

  if (count === 0) {
    return (
      <div className="card mx-auto grid max-w-md place-items-center gap-3 py-16 text-center">
        <span className="bg-gray-100 grid h-14 w-14 place-items-center rounded-full text-muted"><ShoppingCart size={24} /></span>
        <h1 className="text-xl font-extrabold">Nothing to check out</h1>
        <p className="text-sm text-muted">Your cart is empty.</p>
        <Link href="/search" className="btn btn-primary btn-sm">Browse listings</Link>
      </div>
    );
  }

  const place = () => {
    setPlacing(true);
    setTimeout(() => { clearCart(); router.push("/order-success"); }, 900);
  };

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="mb-4 text-2xl font-extrabold">Checkout</h1>

      <div className="mb-6 flex items-center gap-2 text-xs font-semibold">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center gap-2">
            <span className={`grid h-6 w-6 place-items-center rounded-full ${i < 3 ? "bg-brand text-white" : "bg-gray-200 text-muted"}`}>{i + 1}</span>
            <span className={i < 3 ? "text-ink" : "text-muted"}>{s}</span>
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
            <button onClick={() => setDeliveryOpt("door")} className={`flex items-center gap-3 rounded-lg border p-3.5 text-left transition-all ${deliveryOpt === "door" ? "border-brand ring-2 ring-brand/20" : ""}`}>
              <Truck size={18} className="text-muted" />
              <span className="flex-1 text-sm"><b>Door delivery</b> · 2–4 days · countrywide</span>
              <b className="text-sm">{cartTotal > 50000 ? <span className="text-money">FREE</span> : money(350)}</b>
            </button>
            <button onClick={() => setDeliveryOpt("pickup")} className={`flex items-center gap-3 rounded-lg border p-3.5 text-left transition-all ${deliveryOpt === "pickup" ? "border-brand ring-2 ring-brand/20" : ""}`}>
              <Store size={18} className="text-muted" />
              <span className="flex-1 text-sm"><b>Pickup station</b> · Nairobi CBD · ready tomorrow</span>
              <b className="text-money text-sm">FREE</b>
            </button>
          </div>
        </section>

        {/* PAYMENT */}
        <section className="card p-5">
          <h2 className="mb-3 font-extrabold">3 · Payment</h2>
          <div className="grid gap-2">
            <button onClick={() => setMethod("mpesa")} className={`flex items-center gap-3 rounded-lg border p-4 text-left ${method === "mpesa" ? "border-brand ring-2 ring-brand/20" : ""}`}>
              <span className="bg-money-50 grid h-9 w-9 place-items-center rounded-lg text-money"><Phone size={17} /></span>
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
              <div className="text-money flex items-center gap-2 font-bold"><CheckCircle2 size={15} /> M-Pesa number confirmed</div>
              <p className="mt-1 text-xs text-muted">You'll receive an STK push on <b>+254 712 *** 678</b>. Money is held by Richkem Escrow — the seller only gets paid after you confirm delivery.</p>
              <Link href="/payment-failed" className="mt-2 inline-block text-[11px] font-semibold text-danger">What if payment fails?</Link>
            </div>
          )}
        </section>

        {/* SUMMARY */}
        <section className="card p-5">
          <h2 className="mb-3 font-extrabold">Order summary ({count} items)</h2>
          <div className="mb-3 space-y-2">
            {cart.map((i) => (
              <div key={i.id} className="flex items-center gap-3 text-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={i.image} alt="" className="h-10 w-10 rounded-lg object-cover" />
                <span className="min-w-0 flex-1 truncate">{i.title} × {i.qty}</span>
                <b>{money(i.price * i.qty)}</b>
              </div>
            ))}
          </div>
          <div className="flex justify-between text-sm"><span className="text-muted">Subtotal</span><b>{money(cartTotal)}</b></div>
          <div className="flex justify-between text-sm"><span className="text-muted">Delivery</span><b>{delivery === 0 ? "FREE" : money(delivery)}</b></div>
          <div className="mt-2 flex justify-between border-t pt-3 text-lg"><b>Total</b><b className="text-brand">{money(cartTotal + delivery)}</b></div>
          <button onClick={place} disabled={placing} className="btn btn-primary mt-4 w-full disabled:opacity-70">
            {placing ? "Processing M-Pesa…" : `Place order · Pay ${money(cartTotal + delivery)}`}
          </button>
          <p className="mt-2 text-center text-[11px] text-muted">By placing this order you agree to the escrow terms. Dispute anytime before release.</p>
        </section>
      </div>
    </div>
  );
}
