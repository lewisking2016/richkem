import { AccountShell, StatCard, StatusPill } from "@/components/account-shell";
import { buyerOrders, money } from "@/lib/data";

const nav = [
  { href: "/admin", label: "Overview", icon: "📈" },
  { href: "/admin/kyc", label: "KYC queue", icon: "🪪" },
  { href: "/admin/escrows", label: "Escrows", icon: "🛡️" },
  { href: "/admin/disputes", label: "Disputes", icon: "⚔️" },
  { href: "/admin/users", label: "Users & sellers", icon: "👥" },
];

export default function AdminEscrows() {
  return (
    <AccountShell title="Admin console" name="Richkem Ops" meta="Platform admin" items={nav} active="/admin/escrows" accent="ink">
      <h1 className="mb-4 text-xl font-extrabold">Escrow monitor</h1>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        <StatCard n={money(9120400)} t="Total float" tone="warn" />
        <StatCard n="184" t="Orders held" />
        <StatCard n="6" t="Held > 7 days" sub="chase delivery" tone="bad" />
        <StatCard n={money(2411500)} t="Fees earned (MTD)" tone="good" />
      </div>

      <div className="card mt-5 overflow-x-auto p-4">
        <table className="w-full min-w-[720px] text-sm">
          <thead>
            <tr className="border-b text-left text-xs uppercase text-muted">
              <th className="py-2">Order</th><th>Buyer</th><th>Seller</th><th>Amount</th><th>Escrow</th><th>Held since</th><th></th>
            </tr>
          </thead>
          <tbody>
            {buyerOrders.map((o) => (
              <tr key={o.ref} className="border-b last:border-0">
                <td className="py-2.5 font-semibold">{o.ref}</td>
                <td className="text-muted">Wanjiku K.</td>
                <td className="text-muted">{o.seller}</td>
                <td className="font-bold">{money(o.price)}</td>
                <td><StatusPill s={o.escrow} /></td>
                <td className="text-xs text-muted">{o.date}</td>
                <td className="text-right">
                  {o.escrow === "HELD" && <button className="btn btn-outline btn-xs">Force release</button>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-muted">Force release writes a RELEASE row to the immutable ledger and notifies both parties. All admin actions are audit-logged.</p>
    </AccountShell>
  );
}
