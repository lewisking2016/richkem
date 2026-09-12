"use client";

import Link from "next/link";
import { Package } from "lucide-react";
import { AccountShell, StatusPill } from "@/components/account-shell";
import { useStore } from "@/lib/store";
import { buyerOrders, money } from "@/lib/data";

const nav = [
  { href: "/account", label: "Dashboard", icon: "dashboard" },
  { href: "/account/orders", label: "My orders", icon: "orders" },
  { href: "/account/bookings", label: "My bookings", icon: "bookings" },
  { href: "/account/escrow", label: "Escrow", icon: "escrow" },
  { href: "/account/saved", label: "Saved items", icon: "saved" },
  { href: "/account/messages", label: "Messages", icon: "messages" },
  { href: "/account/settings", label: "Settings", icon: "settings" },
];

const tabs = ["All", "PAID_HELD", "SHIPPED", "DELIVERED", "COMPLETED", "DISPUTED", "REFUNDED"];

export default function Orders() {
  const { orders, ready } = useStore();

  return (
    <AccountShell title="My account" name="Wanjiku Kamau" meta="Buyer · Nairobi" items={nav} active="/account/orders">
      <h1 className="mb-4 text-xl font-extrabold">My orders</h1>

      {ready && orders.length > 0 && (
        <section className="mb-6">
          <h2 className="mb-2 flex items-center gap-2 text-sm font-extrabold text-brand"><Package size={15} /> THIS SESSION</h2>
          <div className="space-y-3">
            {orders.map((o) => (
              <Link key={o.ref} href={`/order/${o.ref.split("-")[0]}`} className="card card-hover flex items-center gap-4 p-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={o.image} alt="" className="h-16 w-16 rounded-lg object-cover" />
                <div className="min-w-0 flex-1">
                  <div className="truncate font-semibold">{o.item}</div>
                  <div className="text-xs text-muted">{o.ref} · {o.seller} · {o.date}</div>
                  <div className="mt-1 flex gap-1.5">
                    <StatusPill s={o.status} />
                    {o.escrow !== "—" && <StatusPill s={o.escrow} />}
                  </div>
                </div>
                <div className="text-right">
                  <div className="price">{money(o.price)}</div>
                  <div className="text-xs font-semibold text-brand">Track →</div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <h2 className="mb-2 text-sm font-extrabold text-muted uppercase tracking-wide">Order history</h2>
      <div className="mb-4 flex gap-2 overflow-x-auto pb-1 hide-scrollbar">
        {tabs.map((t) => (
          <button key={t} className={`chip whitespace-nowrap ${t === "All" ? "chip-active" : ""}`}>{t === "All" ? "All orders" : t.replace("_", " ")}</button>
        ))}
      </div>
      <div className="space-y-3">
        {buyerOrders.map((o) => (
          <Link key={o.ref} href={`/order/${o.ref}`} className="card card-hover flex items-center gap-4 p-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={o.image} alt="" className="h-16 w-16 rounded-lg object-cover" />
            <div className="min-w-0 flex-1">
              <div className="truncate font-semibold">{o.item}</div>
              <div className="text-xs text-muted">{o.ref} · {o.seller} · {o.date}</div>
              <div className="mt-1 flex gap-1.5">
                <StatusPill s={o.status} />
                {o.escrow !== "—" && <StatusPill s={o.escrow} />}
              </div>
            </div>
            <div className="text-right">
              <div className="price">{money(o.price)}</div>
              <div className="text-xs font-semibold text-brand">Track →</div>
            </div>
          </Link>
        ))}
      </div>
    </AccountShell>
  );
}
