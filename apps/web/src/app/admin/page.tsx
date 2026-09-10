import { AccountShell, StatCard, StatusPill } from "@/components/account-shell";
import { money } from "@/lib/data";

const nav = [
  { href: "/admin", label: "Overview", icon: "overview" },
  { href: "/admin/kyc", label: "KYC queue", icon: "kyc" },
  { href: "/admin/escrows", label: "Escrows", icon: "escrow" },
  { href: "/admin/disputes", label: "Disputes", icon: "disputes" },
  { href: "/admin/users", label: "Users & sellers", icon: "users" },
];

export default function AdminOverview() {
  return (
    <AccountShell title="Admin console" name="Richkem Ops" meta="Platform admin" items={nav} active="/admin" accent="ink">
      <h1 className="mb-4 text-xl font-extrabold">Platform overview</h1>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        <StatCard n={money(48230000)} t="GMV this month" sub="+22% vs Aug" tone="good" />
        <StatCard n={money(9120400)} t="Escrow float" sub="184 orders held" tone="warn" />
        <StatCard n="12" t="KYC awaiting" sub="SLA: 48h" />
        <StatCard n="3" t="Open disputes" sub="1 urgent" tone="bad" />
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div className="card p-4">
          <h2 className="mb-3 font-extrabold">Urgent alerts</h2>
          <div className="space-y-2 text-sm">
            {[
              { t: "Dispute RK-87521 escalated", d: "Buyer requested refund — seller unresponsive 22h", tone: "bad" },
              { t: "High-value escrow held >14 days", d: "Isuzu NPR truck order RK-87233 — KES 6.5M", tone: "warn" },
              { t: "4 sellers pending KYC >48h", d: "SLA breach risk today", tone: "warn" },
            ].map((a) => (
              <div key={a.t} className={`rounded-lg border p-3 ${a.tone === "bad" ? "border-danger/30 bg-danger-50" : "border-warn/30 bg-warn-50"}`}>
                <div className="font-semibold">{a.t}</div>
                <div className="text-xs text-muted">{a.d}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="card p-4">
          <h2 className="mb-3 font-extrabold">Weekly GMV (KES M)</h2>
          <div className="flex h-36 items-end gap-2">
            {[28, 34, 31, 40, 38, 44, 48].map((h, i) => (
              <div key={i} className="flex-1 text-center">
                <div className="bg-brand mx-auto w-full rounded-t" style={{ height: `${h * 2}px` }} />
                <div className="mt-1 text-[10px] text-muted">W{i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card mt-5 p-4">
        <h2 className="mb-3 font-extrabold">Latest escrow movements</h2>
        {[
          { ref: "ESC-2210", o: "RK-87940", t: "RELEASE", a: "+38,500", who: "Home Essentials KE" },
          { ref: "ESC-2195", o: "RK-88102", t: "HOLD", a: "+23,999", who: "Wanjiku Kamau" },
          { ref: "ESC-2211", o: "RK-88214", t: "HOLD", a: "+42,999", who: "Wanjiku Kamau" },
          { ref: "ESC-2160", o: "RK-87110", t: "REFUND", a: "−6,499", who: "Home Essentials KE" },
        ].map((r) => (
          <div key={r.ref} className="flex items-center gap-3 border-b py-2.5 text-sm last:border-0">
            <StatusPill s={r.t} />
            <b>{r.o}</b><span className="text-muted">{r.who}</span>
            <b className={`ml-auto ${r.a.startsWith("−") ? "text-danger" : "text-money"}`}>KES {r.a.replace("+", "")}</b>
          </div>
        ))}
      </div>
    </AccountShell>
  );
}
