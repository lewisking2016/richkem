import Link from "next/link";
import { AccountShell, StatusPill } from "@/components/account-shell";
import { buyerOrders, money } from "@/lib/data";

const nav = [
  { href: "/account", label: "Dashboard", icon: "🏠" },
  { href: "/account/orders", label: "My orders", icon: "📦" },
  { href: "/account/escrow", label: "Escrow", icon: "🛡️" },
  { href: "/account/saved", label: "Saved items", icon: "❤️" },
  { href: "/account/messages", label: "Messages", icon: "💬" },
  { href: "/account/settings", label: "Settings", icon: "⚙️" },
];

const tabs = ["All", "PAID_HELD", "SHIPPED", "DELIVERED", "COMPLETED", "DISPUTED", "REFUNDED"];

export default function Orders() {
  return (
    <AccountShell title="My account" name="Wanjiku Kamau" meta="Buyer · Nairobi" items={nav} active="/account/orders">
      <h1 className="mb-4 text-xl font-extrabold">My orders</h1>
      <div className="mb-4 flex gap-2 overflow-x-auto pb-1 hide-scrollbar">
        {tabs.map((t) => (
          <button key={t} className={`chip whitespace-nowrap ${t === "All" ? "chip-active" : ""}`}>{t === "All" ? "All orders" : t.replace("_", " ")}</button>
        ))}
      </div>
      <div className="space-y-3">
        {buyerOrders.map((o) => (
          <Link key={o.ref} href={`/order/${o.ref}`} className="card flex items-center gap-4 p-3 hover:shadow-md">
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
              <div className="font-extrabold">{money(o.price)}</div>
              <div className="text-xs text-brand font-semibold">Track →</div>
            </div>
          </Link>
        ))}
      </div>
    </AccountShell>
  );
}
