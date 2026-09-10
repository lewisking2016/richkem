import { AccountShell, StatusPill } from "@/components/account-shell";

const nav = [
  { href: "/admin", label: "Overview", icon: "📈" },
  { href: "/admin/kyc", label: "KYC queue", icon: "🪪" },
  { href: "/admin/escrows", label: "Escrows", icon: "🛡️" },
  { href: "/admin/disputes", label: "Disputes", icon: "⚔️" },
  { href: "/admin/users", label: "Users & sellers", icon: "👥" },
];

const users = [
  { name: "Wanjiku Kamau", role: "Buyer", loc: "Nairobi", orders: 18, status: "ACTIVE", flag: "" },
  { name: "PhoneHub Kenya", role: "Seller", loc: "Nairobi CBD", orders: 1240, status: "ACTIVE", flag: "" },
  { name: "Home Essentials KE", role: "Seller", loc: "Nakuru", orders: 210, status: "PENDING", flag: "KYC" },
  { name: "TechMed Technicians", role: "Seller", loc: "Eldoret", orders: 12, status: "PENDING", flag: "KYC" },
  { name: "AutoDeal Motors", role: "Seller", loc: "Mombasa Rd", orders: 89, status: "ACTIVE", flag: "" },
  { name: "QuickCash Flippers", role: "Seller", loc: "Kisumu", orders: 3, status: "SUSPENDED", flag: "3 disputes" },
];

export default function AdminUsers() {
  return (
    <AccountShell title="Admin console" name="Richkem Ops" meta="Platform admin" items={nav} active="/admin/users" accent="ink">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <h1 className="text-xl font-extrabold">Users & sellers</h1>
        <input className="input !h-9 max-w-xs" placeholder="Search name, phone, email…" />
      </div>

      <div className="card overflow-x-auto p-4">
        <table className="w-full min-w-[680px] text-sm">
          <thead>
            <tr className="border-b text-left text-xs uppercase text-muted">
              <th className="py-2">Name</th><th>Role</th><th>Location</th><th>Orders</th><th>Status</th><th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.name} className="border-b last:border-0">
                <td className="py-2.5 font-semibold">{u.name} {u.flag && <span className="badge bg-danger-50 text-danger ml-1">{u.flag}</span>}</td>
                <td><span className={`badge ${u.role === "Seller" ? "bg-jiji-50 text-jiji" : "bg-gray-100 text-muted"}`}>{u.role}</span></td>
                <td className="text-muted">{u.loc}</td>
                <td>{u.orders.toLocaleString()}</td>
                <td><StatusPill s={u.status} /></td>
                <td className="text-right">
                  <button className="btn btn-outline btn-xs">{u.status === "SUSPENDED" ? "Reinstate" : "Manage"}</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-muted">Suspensions immediately hide all listings and freeze wallet withdrawals. Every action is audit-logged.</p>
    </AccountShell>
  );
}
