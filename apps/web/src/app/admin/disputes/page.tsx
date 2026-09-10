import { AccountShell, StatCard } from "@/components/account-shell";

const nav = [
  { href: "/admin", label: "Overview", icon: "overview" },
  { href: "/admin/kyc", label: "KYC queue", icon: "kyc" },
  { href: "/admin/escrows", label: "Escrows", icon: "escrow" },
  { href: "/admin/disputes", label: "Disputes", icon: "disputes" },
  { href: "/admin/users", label: "Users & sellers", icon: "users" },
];

const disputes = [
  { id: "DP-102", order: "RK-87521", item: "Nike Air Force 1 '07", amount: "KES 8,999", claim: "Item never delivered", age: "2d ago", urgency: "HIGH" },
  { id: "DP-101", order: "RK-87110", item: "Ceramic Cookware 12pc", amount: "KES 6,499", claim: "Not as described — resolved: refunded", age: "Aug 21", urgency: "CLOSED" },
  { id: "DP-100", order: "RK-87233", item: "Isuzu NPR Truck", amount: "KES 6,500,000", claim: "Inspection mismatch", age: "5h ago", urgency: "HIGH" },
];

export default function AdminDisputes() {
  return (
    <AccountShell title="Admin console" name="Richkem Ops" meta="Platform admin" items={nav} active="/admin/disputes" accent="ink">
      <h1 className="mb-4 text-xl font-extrabold">Disputes</h1>
      <div className="grid grid-cols-3 gap-3">
        <StatCard n="3" t="Open cases" tone="bad" />
        <StatCard n="41" t="Resolved (30d)" sub="avg 26h" tone="good" />
        <StatCard n="1.8%" t="Dispute rate" sub="of all orders" />
      </div>

      <div className="mt-5 space-y-3">
        {disputes.map((d) => (
          <div key={d.id} className="card flex flex-wrap items-center gap-3 p-4">
            <span className={`badge ${d.urgency === "HIGH" ? "bg-danger-50 text-danger" : "bg-gray-100 text-muted"}`}>{d.urgency}</span>
            <div className="min-w-0 flex-1">
              <div className="text-sm font-bold">{d.id} · {d.claim}</div>
              <div className="text-xs text-muted">{d.order} · {d.item} · {d.amount} · opened {d.age}</div>
            </div>
            {d.urgency === "HIGH" ? (
              <div className="flex gap-2">
                <button className="btn btn-primary btn-xs">Refund buyer</button>
                <button className="btn btn-dark btn-xs">Release seller</button>
                <button className="btn btn-outline btn-xs">Evidence</button>
              </div>
            ) : (
              <span className="badge bg-money-50 text-money">RESOLVED</span>
            )}
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs text-muted">Resolutions write immutable ledger rows: REFUND (buyer) or RELEASE (seller). Both parties notified with the reason.</p>
    </AccountShell>
  );
}
