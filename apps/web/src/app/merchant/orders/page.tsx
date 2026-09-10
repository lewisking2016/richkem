import { AccountShell, StatusPill } from "@/components/account-shell";
import { buyerOrders, money } from "@/lib/data";

const nav = [
  { href: "/merchant/dashboard", label: "Dashboard", icon: "dashboard" },
  { href: "/merchant/products", label: "My listings", icon: "products" },
  { href: "/merchant/orders", label: "Orders", icon: "orders" },
  { href: "/merchant/bookings", label: "Bookings", icon: "bookings" },
  { href: "/merchant/wallet", label: "Wallet & escrow", icon: "escrow" },
  { href: "/merchant/messages", label: "Messages", icon: "messages" },
  { href: "/merchant/kyc", label: "Verification", icon: "verification" },
];

export default function MerchantOrders() {
  return (
    <AccountShell title="Merchant hub" name="PhoneHub Kenya" meta="Verified seller · CBD" items={nav} active="/merchant/orders">
      <h1 className="mb-4 text-xl font-extrabold">Orders</h1>
      <div className="mb-4 flex gap-2 overflow-x-auto hide-scrollbar">
        {["New", "Paid — awaiting shipment", "In transit", "Completed", "Disputed"].map((t, i) => (
          <button key={t} className={`chip whitespace-nowrap ${i === 1 ? "chip-active" : ""}`}>{t}</button>
        ))}
      </div>
      <div className="card divide-y">
        {buyerOrders.map((o) => (
          <div key={o.ref} className="flex flex-wrap items-center gap-3 p-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={o.image} alt="" className="h-12 w-12 rounded-lg object-cover" />
            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-semibold">{o.item}</div>
              <div className="text-xs text-muted">{o.ref} · buyer Wanjiku K. · {o.date}</div>
            </div>
            <StatusPill s={o.escrow} />
            <b className="text-sm">{money(o.price)}</b>
            <div className="flex gap-2">
              {o.status === "PAID_HELD" || o.status === "SHIPPED" ? (
                <button className="btn btn-primary btn-xs">Mark shipped</button>
              ) : o.status === "DELIVERED" ? (
                <span className="text-xs text-muted">awaiting buyer confirm</span>
              ) : (
                <button className="btn btn-outline btn-xs">View</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </AccountShell>
  );
}
