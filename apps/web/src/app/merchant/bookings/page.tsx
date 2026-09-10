import { AccountShell, StatusPill } from "@/components/account-shell";

const nav = [
  { href: "/merchant/dashboard", label: "Dashboard", icon: "📊" },
  { href: "/merchant/products", label: "My listings", icon: "🏷️" },
  { href: "/merchant/orders", label: "Orders", icon: "📦" },
  { href: "/merchant/bookings", label: "Bookings", icon: "📅" },
  { href: "/merchant/wallet", label: "Wallet & escrow", icon: "🛡️" },
  { href: "/merchant/messages", label: "Messages", icon: "💬" },
  { href: "/merchant/kyc", label: "Verification", icon: "✅" },
];

const bookings = [
  { id: "BK-301", who: "Wanjiku Kamau", what: "Full Body Check-up", when: "Fri, Sep 11 · 10:00", status: "PENDING", deposit: "KES 2,000 held" },
  { id: "BK-298", who: "John Otieno", what: "Follow-up consultation", when: "Fri, Sep 11 · 11:30", status: "PAID_HELD", deposit: "KES 6,500 held" },
  { id: "BK-290", who: "Mary Achieng", what: "Full Body Check-up", when: "Thu, Sep 10 · 14:00", status: "COMPLETED", deposit: "released" },
  { id: "BK-285", who: "Peter Mwangi", what: "Health consultation", when: "Wed, Sep 9 · 09:00", status: "COMPLETED", deposit: "released" },
];

export default function Bookings() {
  return (
    <AccountShell title="Merchant hub" name="Dr. Amina Clinic" meta="Verified provider · Westlands" items={nav} active="/merchant/bookings">
      <h1 className="mb-4 text-xl font-extrabold">Bookings</h1>
      <div className="card divide-y">
        {bookings.map((b) => (
          <div key={b.id} className="flex flex-wrap items-center gap-3 p-3.5">
            <span className="bg-jiji grid h-10 w-10 place-items-center rounded-full font-bold text-white">{b.who[0]}</span>
            <div className="min-w-0 flex-1">
              <div className="text-sm font-semibold">{b.what} · {b.who}</div>
              <div className="text-xs text-muted">{b.id} · {b.when}</div>
            </div>
            <span className="text-xs font-semibold text-money">{b.deposit}</span>
            <StatusPill s={b.status} />
            {b.status === "PAID_HELD" && <button className="btn btn-primary btn-xs">Mark done</button>}
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs text-muted">Service deposits are held in escrow and released after the client confirms the service was delivered.</p>
    </AccountShell>
  );
}
