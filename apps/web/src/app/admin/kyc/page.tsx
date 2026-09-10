import { AccountShell, StatusPill, StatCard } from "@/components/account-shell";
import { merchantKyc } from "@/lib/data";

const nav = [
  { href: "/admin", label: "Overview", icon: "📈" },
  { href: "/admin/kyc", label: "KYC queue", icon: "🪪" },
  { href: "/admin/escrows", label: "Escrows", icon: "🛡️" },
  { href: "/admin/disputes", label: "Disputes", icon: "⚔️" },
  { href: "/admin/users", label: "Users & sellers", icon: "👥" },
];

export default function AdminKyc() {
  return (
    <AccountShell title="Admin console" name="Richkem Ops" meta="Platform admin" items={nav} active="/admin/kyc" accent="ink">
      <h1 className="mb-4 text-xl font-extrabold">KYC review queue</h1>
      <div className="grid grid-cols-3 gap-3">
        <StatCard n="12" t="Pending review" tone="warn" />
        <StatCard n="348" t="Approved" tone="good" />
        <StatCard n="9" t="Rejected" />
      </div>

      <div className="card mt-5 divide-y">
        {merchantKyc.map((k) => (
          <div key={k.id} className="flex flex-wrap items-center gap-3 p-3.5">
            <span className="bg-ink grid h-10 w-10 place-items-center rounded-full font-bold text-white">{k.seller[0]}</span>
            <div className="min-w-0 flex-1">
              <div className="text-sm font-semibold">{k.seller}</div>
              <div className="text-xs text-muted">{k.type} · submitted {k.submitted}</div>
            </div>
            <StatusPill s={k.status} />
            {k.status === "PENDING" ? (
              <div className="flex gap-2">
                <button className="btn btn-primary btn-xs">Approve</button>
                <button className="btn btn-danger btn-xs">Reject</button>
                <button className="btn btn-outline btn-xs">Docs</button>
              </div>
            ) : (
              <button className="btn btn-outline btn-xs">View file</button>
            )}
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs text-muted">SLA: review within 48h. Reject requires a reason — sent to seller by SMS + email.</p>
    </AccountShell>
  );
}
