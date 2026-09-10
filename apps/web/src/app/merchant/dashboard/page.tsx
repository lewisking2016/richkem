import Link from "next/link";
import { AccountShell, StatCard, StatusPill } from "@/components/account-shell";
import { buyerOrders, money } from "@/lib/data";

const nav = [
  { href: "/merchant/dashboard", label: "Dashboard", icon: "📊" },
  { href: "/merchant/products", label: "My listings", icon: "🏷️" },
  { href: "/merchant/orders", label: "Orders", icon: "📦" },
  { href: "/merchant/bookings", label: "Bookings", icon: "📅" },
  { href: "/merchant/wallet", label: "Wallet & escrow", icon: "🛡️" },
  { href: "/merchant/messages", label: "Messages", icon: "💬" },
  { href: "/merchant/kyc", label: "Verification", icon: "✅" },
];

export default function MerchantDashboard() {
  return (
    <AccountShell title="Merchant hub" name="PhoneHub Kenya" meta="Verified seller · CBD" items={nav} active="/merchant/dashboard">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-extrabold">Seller dashboard</h1>
        <Link href="/merchant/products/new" className="btn btn-primary btn-sm">+ Add listing</Link>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        <StatCard n={money(512340)} t="Wallet balance" sub="available now" tone="good" />
        <StatCard n={money(66998)} t="In escrow" sub="3 orders" tone="warn" />
        <StatCard n="47" t="Live listings" sub="2 low stock" />
        <StatCard n="4.6★" t="Rating" sub="3,120 reviews" />
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div className="card p-4">
          <h2 className="mb-3 font-extrabold">Needs your action</h2>
          <div className="space-y-2 text-sm">
            {[
              { t: "Ship order RK-88214", d: "Paid & verified — escrow secured", cta: "Ship now", tone: "good" },
              { t: "Respond to dispute RK-87521", d: "Admin reviewing — respond within 24h", cta: "Respond", tone: "bad" },
              { t: "2 listings low on stock", d: "Nike AF-1: 3 left · iPhone 13: 2 left", cta: "Restock", tone: "warn" },
            ].map((a) => (
              <div key={a.t} className="flex items-center gap-3 rounded-lg border p-3">
                <div className="min-w-0 flex-1"><div className="font-semibold">{a.t}</div><div className="text-xs text-muted">{a.d}</div></div>
                <button className={`btn btn-xs ${a.tone === "good" ? "btn-primary" : "btn-outline"}`}>{a.cta}</button>
              </div>
            ))}
          </div>
        </div>
        <div className="card p-4">
          <h2 className="mb-3 font-extrabold">This week</h2>
          <div className="space-y-3">
            {[["Revenue", money(128400), "+18%"], ["Orders", "14", "+3"], ["Views", "8,921", "+11%"], ["Chat response", "12 min", "▼"]].map(([k, v, d]) => (
              <div key={k} className="flex items-center justify-between text-sm">
                <span className="text-muted">{k}</span>
                <span className="font-bold">{v} <span className="text-money text-xs font-semibold">{d}</span></span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex h-24 items-end gap-1.5">
            {[40, 65, 45, 70, 55, 80, 95].map((h, i) => (
              <div key={i} className="bg-brand flex-1 rounded-t" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      </div>

      <div className="card mt-5 p-4">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="font-extrabold">Recent orders</h2>
          <Link href="/merchant/orders" className="text-brand text-sm font-semibold hover:underline">All orders</Link>
        </div>
        <div className="space-y-2">
          {buyerOrders.slice(0, 4).map((o) => (
            <div key={o.ref} className="flex items-center gap-3 rounded-lg border p-2.5 text-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={o.image} alt="" className="h-10 w-10 rounded-lg object-cover" />
              <div className="min-w-0 flex-1"><div className="truncate font-semibold">{o.item}</div><div className="text-xs text-muted">{o.ref} · {o.date}</div></div>
              <StatusPill s={o.status} />
              <b>{money(o.price)}</b>
            </div>
          ))}
        </div>
      </div>
    </AccountShell>
  );
}
