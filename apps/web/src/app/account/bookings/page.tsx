"use client";

import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { AccountShell, StatusPill } from "@/components/account-shell";
import { useStore } from "@/lib/store";
import { money } from "@/lib/data";

const nav = [
  { href: "/account", label: "Dashboard", icon: "dashboard" },
  { href: "/account/orders", label: "My orders", icon: "orders" },
  { href: "/account/bookings", label: "My bookings", icon: "bookings" },
  { href: "/account/escrow", label: "Escrow", icon: "escrow" },
  { href: "/account/saved", label: "Saved items", icon: "saved" },
  { href: "/account/messages", label: "Messages", icon: "messages" },
  { href: "/account/settings", label: "Settings", icon: "settings" },
];

const demo = [
  { id: "BK-290", what: "Deep Cleaning — 3BR", who: "TechMed Technicians", when: "Thu, Sep 10 · 14:00", deposit: 5500, status: "COMPLETED" as const },
  { id: "BK-285", what: "Conveyancing consult", who: "Adv. Brian Ochieng", when: "Wed, Sep 9 · 09:00", deposit: 2000, status: "COMPLETED" as const },
];

export default function AccountBookings() {
  const { bookings, updateBookingStatus, ready } = useStore();

  return (
    <AccountShell title="My account" name="Wanjiku Kamau" meta="Buyer · Nairobi" items={nav} active="/account/bookings">
      <h1 className="mb-4 text-xl font-extrabold">My bookings</h1>

      {ready && bookings.length > 0 && (
        <section className="mb-6">
          <h2 className="mb-2 text-sm font-extrabold text-brand">THIS SESSION</h2>
          <div className="space-y-3">
            {bookings.map((b) => (
              <div key={b.id} className="card flex flex-wrap items-center gap-3 p-4">
                <span className="bg-jiji grid h-10 w-10 place-items-center rounded-full font-bold text-white">{b.who[0]}</span>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-sm font-bold">{b.what}</div>
                  <div className="text-xs text-muted">{b.who} · {b.when}</div>
                </div>
                <span className="text-xs font-semibold text-money">{money(b.deposit)} {b.status === "COMPLETED" ? "released" : "held"}</span>
                <StatusPill s={b.status} />
                {b.status === "PAID_HELD" && (
                  <div className="flex w-full gap-2 sm:w-auto">
                    <button onClick={() => updateBookingStatus(b.id, "COMPLETED")} className="btn btn-primary btn-xs flex-1">Mark done & release</button>
                    <button onClick={() => updateBookingStatus(b.id, "CANCELLED")} className="btn btn-danger btn-xs flex-1">Cancel</button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      <h2 className="mb-2 text-sm font-extrabold uppercase tracking-wide text-muted">Past bookings</h2>
      <div className="space-y-3">
        {demo.map((b) => (
          <div key={b.id} className="card flex flex-wrap items-center gap-3 p-4">
            <span className="bg-jiji grid h-10 w-10 place-items-center rounded-full font-bold text-white">{b.who[0]}</span>
            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-bold">{b.what}</div>
              <div className="text-xs text-muted">{b.who} · {b.when}</div>
            </div>
            <span className="text-xs font-semibold text-money">{money(b.deposit)} released</span>
            <StatusPill s={b.status} />
            <button className="btn btn-outline btn-xs">Book again</button>
          </div>
        ))}
      </div>

      <Link href="/services" className="btn btn-outline mt-4"><CalendarDays size={15} /> Book another service</Link>
    </AccountShell>
  );
}
