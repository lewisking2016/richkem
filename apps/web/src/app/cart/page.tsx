"use client";

import Link from "next/link";
import { Minus, Plus, Trash2, ShieldCheck, ArrowRight } from "lucide-react";
import { money } from "@/lib/data";

const items = [
  { id: 1, title: "Samsung Galaxy A55 5G 256GB", seller: "Richkem Official Store", price: 42999, qty: 1, seed: "phone1" },
  { id: 2, title: "Ceramic Non-stick Cookware Set — 12pc", seller: "Home Essentials KE", price: 6499, qty: 2, seed: "pot1" },
  { id: 3, title: "Nike Air Force 1 '07 — White", seller: "Richkem Official Store", price: 8999, qty: 1, seed: "shoes1" },
];

export default function Cart() {
  const subtotal = items.reduce((a, i) => a + i.price * i.qty, 0);
  const delivery = subtotal > 50000 ? 0 : 350;

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
      <div>
        <h1 className="mb-4 text-2xl font-extrabold">Cart ({items.reduce((a, i) => a + i.qty, 0)} items)</h1>
        <div className="space-y-3">
          {items.map((i) => (
            <div key={i.id} className="card flex gap-4 p-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`https://picsum.photos/seed/${i.seed}/160/160`} alt={i.title} className="h-24 w-24 rounded-lg object-cover" />
              <div className="flex flex-1 flex-col">
                <div className="flex justify-between gap-2">
                  <div>
                    <Link href="#" className="text-sm font-semibold hover:text-brand">{i.title}</Link>
                    <div className="text-xs text-muted">Sold by {i.seller}</div>
                  </div>
                  <button className="grid h-8 w-8 place-items-center rounded-lg hover:bg-gray-100"><Trash2 size={15} className="text-danger" /></button>
                </div>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button className="grid h-8 w-8 place-items-center rounded-lg border"><Minus size={13} /></button>
                    <span className="w-6 text-center font-bold">{i.qty}</span>
                    <button className="grid h-8 w-8 place-items-center rounded-lg border"><Plus size={13} /></button>
                  </div>
                  <div className="font-extrabold">{money(i.price * i.qty)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <aside className="card h-max space-y-3 p-5">
        <h2 className="font-extrabold">Order summary</h2>
        <div className="flex justify-between text-sm"><span className="text-muted">Subtotal</span><b>{money(subtotal)}</b></div>
        <div className="flex justify-between text-sm"><span className="text-muted">Delivery</span><b>{delivery === 0 ? "FREE" : money(delivery)}</b></div>
        <div className="flex justify-between border-t pt-3 text-lg"><b>Total</b><b className="text-brand">{money(subtotal + delivery)}</b></div>
        <div className="text-money flex items-start gap-1.5 rounded-lg bg-money-50 p-3 text-xs font-semibold"><ShieldCheck size={15} className="shrink-0" /> All items paid via M-Pesa escrow — money released only after you confirm delivery.</div>
        <Link href="/checkout" className="btn btn-primary w-full">Checkout <ArrowRight size={16} /></Link>
        <Link href="/search" className="btn btn-outline w-full">Continue shopping</Link>
      </aside>
    </div>
  );
}
