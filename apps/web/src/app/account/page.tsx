import Link from "next/link";
import { ShieldCheck, ShoppingCart } from "lucide-react";
import { AccountShell, StatCard, StatusPill } from "@/components/account-shell";
import { buyerOrders, money } from "@/lib/data";

const nav = [
  { href: "/account", label: "Dashboard", icon: "dashboard" },
  { href: "/account/orders", label: "My orders", icon: "orders" },
  { href: "/account/escrow", label: "Escrow", icon: "escrow" },
  { href: "/account/saved", label: "Saved items", icon: "saved" },
  { href: "/account/messages", label: "Messages", icon: "messages" },
  { href: "/account/settings", label: "Settings", icon: "settings" },
];

export default function AccountDashboard() {
  const held = 66998; // 42999 + 23999
  return (
    <AccountShell title="My account" name="Wanjiku Kamau" meta="Buyer · Nairobi" items={nav} active="/account">
      <h1 className="mb-4 text-xl font-extrabold">Habari, Wanjiku</h1>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        <StatCard n={money(held)} t="In escrow now" sub="2 orders protected" tone="good" />
        <StatCard n="2" t="Active orders" sub="1 shipped, 1 delivered" />
        <StatCard n="14" t="Completed" sub="lifetime purchases" />
        <StatCard n="4.9★" t="Buyer rating" sub="sellers love you" />
      </div>

      <div className="card mt-5 p-4">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="font-extrabold">Active orders</h2>
          <Link href="/account/orders" className="text-brand text-sm font-semibold hover:underline">See all</Link>
        </div>
        <div className="space-y-2">
          {buyerOrders.filter((o) => ["SHIPPED", "DELIVERED", "DISPUTED"].includes(o.status)).map((o) => (
            <Link key={o.ref} href={`/order/${o.ref}`} className="flex items-center gap-3 rounded-lg border p-2.5 hover:shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={o.image} alt="" className="h-12 w-12 rounded-lg object-cover" />
              <div className="min-w-0 flex-1">
                <div className="truncate text-sm font-semibold">{o.item}</div>
                <div className="text-xs text-muted">{o.ref} · {o.date}</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-extrabold">{money(o.price)}</div>
                <StatusPill s={o.escrow} />
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-2">
        <div className="card bg-money-50 p-4">
          <h3 className="text-money flex items-center gap-2 font-extrabold"><ShieldCheck size={18} /> How escrow protects you</h3>
          <p className="mt-1 text-sm text-muted">Money leaves your M-Pesa but stays locked. Seller ships. You confirm. Only then they're paid. Dispute anytime.</p>
        </div>
        <div className="card p-4">
          <h3 className="flex items-center gap-2 font-extrabold"><ShoppingCart size={18} className="text-brand" /> Finish where you left off</h3>
          <p className="mt-1 text-sm text-muted">Cart has 4 items · KES 64,996</p>
          <Link href="/cart" className="btn btn-primary btn-sm mt-3">Go to cart</Link>
        </div>
      </div>
    </AccountShell>
  );
}
