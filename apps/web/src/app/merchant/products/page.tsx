"use client";

import Link from "next/link";
import { Plus, Pencil, Eye, Trash2, Package } from "lucide-react";
import { AccountShell, StatusPill } from "@/components/account-shell";
import { useStore } from "@/lib/store";
import { products, money } from "@/lib/data";

const nav = [
  { href: "/merchant/dashboard", label: "Dashboard", icon: "dashboard" },
  { href: "/merchant/products", label: "My listings", icon: "products" },
  { href: "/merchant/orders", label: "Orders", icon: "orders" },
  { href: "/merchant/bookings", label: "Bookings", icon: "bookings" },
  { href: "/merchant/wallet", label: "Wallet & escrow", icon: "wallet" },
  { href: "/merchant/messages", label: "Messages", icon: "messages" },
  { href: "/merchant/kyc", label: "Verification", icon: "verification" },
];

export default function MerchantProducts() {
  const { listings, ready } = useStore();
  const mine = products.slice(0, 8);

  return (
    <AccountShell title="Merchant hub" name="PhoneHub Kenya" meta="Verified seller · CBD" items={nav} active="/merchant/products">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-extrabold">My listings ({mine.length + listings.length})</h1>
        <Link href="/merchant/products/new" className="btn btn-primary btn-sm"><Plus size={15} /> Add listing</Link>
      </div>

      {ready && listings.length > 0 && (
        <section className="mb-5">
          <h2 className="mb-2 flex items-center gap-2 text-sm font-extrabold text-brand"><Package size={15} /> YOUR NEW LISTINGS</h2>
          <div className="card divide-y">
            {listings.map((p) => (
              <div key={p.id} className="flex items-center gap-3 p-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt="" className="h-14 w-14 rounded-lg object-cover" />
                <div className="min-w-0 flex-1">
                  <div className="truncate text-sm font-semibold">{p.title}</div>
                  <div className="text-xs text-muted">{p.category} · {p.stock} in stock</div>
                </div>
                <StatusPill s={p.status} />
                <b className="hidden text-sm sm:block">{money(p.price)}</b>
                <div className="flex gap-1">
                  <button className="grid h-8 w-8 place-items-center rounded-lg hover:bg-gray-100"><Pencil size={15} className="text-muted" /></button>
                  <button className="grid h-8 w-8 place-items-center rounded-lg hover:bg-gray-100"><Trash2 size={15} className="text-danger" /></button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="mb-4 flex gap-2">
        {["All", "ACTIVE", "DRAFT"].map((t, i) => (
          <button key={t} className={`chip ${i === 0 ? "chip-active" : ""}`}>{t}</button>
        ))}
      </div>

      <h2 className="mb-2 text-sm font-extrabold uppercase tracking-wide text-muted">Catalog demo data</h2>
      <div className="card divide-y">
        {mine.map((p) => (
          <div key={p.id} className="flex items-center gap-3 p-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.image} alt="" className="h-14 w-14 rounded-lg object-cover" />
            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-semibold">{p.title}</div>
              <div className="text-xs text-muted">{p.category} · {p.stock ?? "∞"} in stock · {p.postedAt}</div>
            </div>
            <StatusPill s={p.status ?? "ACTIVE"} />
            <b className="hidden text-sm sm:block">{money(p.price)}</b>
            <div className="flex gap-1">
              <button className="grid h-8 w-8 place-items-center rounded-lg hover:bg-gray-100"><Eye size={15} className="text-muted" /></button>
              <button className="grid h-8 w-8 place-items-center rounded-lg hover:bg-gray-100"><Pencil size={15} className="text-muted" /></button>
              <button className="grid h-8 w-8 place-items-center rounded-lg hover:bg-gray-100"><Trash2 size={15} className="text-danger" /></button>
            </div>
          </div>
        ))}
      </div>
    </AccountShell>
  );
}
