import { AccountShell } from "@/components/account-shell";

const nav = [
  { href: "/account", label: "Dashboard", icon: "🏠" },
  { href: "/account/orders", label: "My orders", icon: "📦" },
  { href: "/account/escrow", label: "Escrow", icon: "🛡️" },
  { href: "/account/saved", label: "Saved items", icon: "❤️" },
  { href: "/account/messages", label: "Messages", icon: "💬" },
  { href: "/account/settings", label: "Settings", icon: "⚙️" },
];

export default function Settings() {
  return (
    <AccountShell title="My account" name="Wanjiku Kamau" meta="Buyer · Nairobi" items={nav} active="/account/settings">
      <h1 className="mb-4 text-xl font-extrabold">Settings</h1>
      <div className="space-y-4">
        <section className="card p-5">
          <h2 className="mb-3 font-extrabold">Profile</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <div><label className="label">Full name</label><input className="input" defaultValue="Wanjiku Kamau" /></div>
            <div><label className="label">Phone (M-Pesa)</label><input className="input" defaultValue="+254 712 345 678" /></div>
            <div className="sm:col-span-2"><label className="label">Email</label><input className="input" defaultValue="wanjiku@example.com" /></div>
            <div className="sm:col-span-2"><label className="label">Default delivery address</label><input className="input" defaultValue="Kilimani Business Centre, Nairobi" /></div>
          </div>
          <button className="btn btn-primary btn-sm mt-4">Save changes</button>
        </section>
        <section className="card p-5">
          <h2 className="mb-3 font-extrabold">Security</h2>
          <div className="flex items-center justify-between border-b py-3 text-sm"><span>Change password</span><button className="btn btn-outline btn-xs">Update</button></div>
          <div className="flex items-center justify-between py-3 text-sm"><span>Two-factor authentication (SMS OTP)</span><span className="badge bg-money-50 text-money">ON</span></div>
        </section>
        <section className="card p-5">
          <h2 className="mb-3 font-extrabold">Notifications</h2>
          {["Order & escrow updates (SMS)", "Promotions & flash deals", "New message from seller"].map((n, i) => (
            <label key={n} className="flex items-center justify-between border-b py-3 text-sm last:border-0">
              {n}<input type="checkbox" defaultChecked={i < 2} className="accent-brand h-4 w-4" />
            </label>
          ))}
        </section>
      </div>
    </AccountShell>
  );
}
