"use client";

import Link from "next/link";
import { Minus, Plus, Trash2, ShieldCheck, ArrowRight, ShoppingCart } from "lucide-react";
import { useStore } from "@/lib/store";
import { money } from "@/lib/data";

export default function Cart() {
  const { cart, setQty, removeFromCart, cartTotal, ready } = useStore();
  const delivery = cartTotal > 50000 || cartTotal === 0 ? 0 : 350;

  if (!ready) return <div className="skeleton h-64 w-full" />;

  if (cart.length === 0) {
    return (
      <div className="card grid place-items-center gap-3 py-20 text-center">
        <span className="bg-gray-100 grid h-16 w-16 place-items-center rounded-full text-muted"><ShoppingCart size={28} /></span>
        <h1 className="text-2xl font-extrabold">Your cart is empty</h1>
        <p className="text-sm text-muted">Browse the marketplace — everything ships with escrow protection.</p>
        <Link href="/search" className="btn btn-primary mt-2">Start shopping</Link>
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
      <div>
        <h1 className="mb-4 text-2xl font-extrabold">Cart ({cart.reduce((a, i) => a + i.qty, 0)} items)</h1>
        <div className="space-y-3">
          {cart.map((i) => (
            <div key={i.id} className="card flex gap-4 p-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={i.image} alt={i.title} className="h-24 w-24 rounded-lg object-cover" />
              <div className="flex flex-1 flex-col">
                <div className="flex justify-between gap-2">
                  <div>
                    <Link href={i.kind === "product" ? `/product/${i.slug}` : `/service/${i.slug}`} className="text-sm font-semibold hover:text-brand">{i.title}</Link>
                    <div className="text-xs text-muted">Sold by {i.seller}</div>
                  </div>
                  <button onClick={() => removeFromCart(i.id)} aria-label="Remove" className="grid h-8 w-8 place-items-center rounded-lg hover:bg-gray-100">
                    <Trash2 size={15} className="text-danger" />
                  </button>
                </div>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button onClick={() => setQty(i.id, i.qty - 1)} aria-label="Decrease" className="grid h-8 w-8 place-items-center rounded-lg border"><Minus size={13} /></button>
                    <span className="w-6 text-center font-bold">{i.qty}</span>
                    <button onClick={() => setQty(i.id, i.qty + 1)} aria-label="Increase" className="grid h-8 w-8 place-items-center rounded-lg border"><Plus size={13} /></button>
                  </div>
                  <div className="price">{money(i.price * i.qty)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <aside className="card h-max space-y-3 p-5">
        <h2 className="font-extrabold">Order summary</h2>
        <div className="flex justify-between text-sm"><span className="text-muted">Subtotal</span><b>{money(cartTotal)}</b></div>
        <div className="flex justify-between text-sm"><span className="text-muted">Delivery</span><b>{delivery === 0 ? "FREE" : money(delivery)}</b></div>
        <div className="flex justify-between border-t pt-3 text-lg"><b>Total</b><b className="text-brand">{money(cartTotal + delivery)}</b></div>
        <div className="text-money flex items-start gap-1.5 rounded-lg bg-money-50 p-3 text-xs font-semibold"><ShieldCheck size={15} className="shrink-0" /> All items paid via M-Pesa escrow — money released only after you confirm delivery.</div>
        <Link href="/checkout" className="btn btn-primary w-full">Checkout <ArrowRight size={16} /></Link>
        <Link href="/search" className="btn btn-outline w-full">Continue shopping</Link>
      </aside>
    </div>
  );
}
