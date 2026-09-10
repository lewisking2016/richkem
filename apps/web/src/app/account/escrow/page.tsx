import { AccountShell, StatusPill, StatCard } from "@/components/account-shell";
import { buyerOrders, money } from "@/lib/data";

const nav = [
  { href: "/account", label: "Dashboard", icon: "dashboard" },
  { href: "/account/orders", label: "My orders", icon: "orders" },
  { href: "/account/escrow", label: "Escrow", icon: "escrow" },
  { href: "/account/saved", label: "Saved items", icon: "saved" },
  { href: "/account/messages", label: "Messages", icon: "messages" },
  { href: "/account/settings", label: "Settings", icon: "settings" },
];

export default function Escrow() {
  return (
    <AccountShell title="My account" name="Wanjiku Kamau" meta="Buyer · Nairobi" items={nav} active="/account/escrow">
      <h1 className="mb-4 text-xl font-extrabold">Escrow center</h1>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        <StatCard n={money(66998)} t="Currently held" sub="2 orders" tone="good" />
        <StatCard n={money(112500)} t="Protected lifetime" sub="18 orders" />
        <StatCard n="0" t="Disputes lost" sub="1 resolved in your favor" />
      </div>

      <div className="card mt-5 p-4">
        <h2 className="mb-3 font-extrabold">Orders with money held</h2>
        <div className="space-y-3">
          {buyerOrders.filter((o) => o.escrow === "HELD").map((o) => (
            <div key={o.ref} className="flex flex-wrap items-center gap-3 rounded-lg border p-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={o.image} alt="" className="h-12 w-12 rounded-lg object-cover" />
              <div className="min-w-0 flex-1">
                <div className="truncate text-sm font-semibold">{o.item}</div>
                <div className="text-xs text-muted">{o.ref} · held since {o.date}</div>
              </div>
              <StatusPill s="HELD" />
              <b>{money(o.price)}</b>
              <div className="flex w-full gap-2 sm:w-auto">
                <button className="btn btn-primary btn-xs flex-1">Confirm & release</button>
                <button className="btn btn-danger btn-xs flex-1">Dispute</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card mt-5 p-4 text-sm">
        <h2 className="mb-2 font-extrabold">Release flow</h2>
        <ol className="list-inside list-decimal space-y-1 text-muted">
          <li>You pay via M-Pesa → money shows here as HELD</li>
          <li>Seller ships / delivers service</li>
          <li>You have 3 days after delivery to inspect</li>
          <li>You confirm → funds released minus 5% platform fee</li>
          <li>No action after 3 days → auto-release (dispute window closes)</li>
        </ol>
      </div>
    </AccountShell>
  );
}
