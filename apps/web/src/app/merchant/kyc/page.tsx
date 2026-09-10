import { AccountShell, StatCard } from "@/components/account-shell";
import { ShieldCheck, FileCheck2, FileWarning, Upload } from "lucide-react";

const nav = [
  { href: "/merchant/dashboard", label: "Dashboard", icon: "📊" },
  { href: "/merchant/products", label: "My listings", icon: "🏷️" },
  { href: "/merchant/orders", label: "Orders", icon: "📦" },
  { href: "/merchant/bookings", label: "Bookings", icon: "📅" },
  { href: "/merchant/wallet", label: "Wallet & escrow", icon: "🛡️" },
  { href: "/merchant/messages", label: "Messages", icon: "💬" },
  { href: "/merchant/kyc", label: "Verification", icon: "✅" },
];

export default function Kyc() {
  return (
    <AccountShell title="Merchant hub" name="PhoneHub Kenya" meta="Verified seller · CBD" items={nav} active="/merchant/kyc">
      <h1 className="mb-4 text-xl font-extrabold">Verification (KYC)</h1>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        <StatCard n="APPROVED" t="Business permit" sub="checked Sep 8" tone="good" />
        <StatCard n="APPROVED" t="Director ID" sub="checked Sep 8" tone="good" />
        <StatCard n="PENDING" t="Shop photos" sub="upload to finish" tone="warn" />
        <StatCard n="LEVEL 2" t="Trust level" sub="out of 3" />
      </div>

      <div className="card mt-5 p-5">
        <div className="text-money flex items-center gap-2 font-extrabold"><ShieldCheck size={18} /> Verified sellers earn 3× more</div>
        <p className="mt-1 text-sm text-muted">Complete all documents to unlock the ✔ Verified badge, higher listing limits and priority search placement.</p>

        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {[
            { t: "Business permit", s: "APPROVED", icon: <FileCheck2 size={20} className="text-money" /> },
            { t: "Director national ID", s: "APPROVED", icon: <FileCheck2 size={20} className="text-money" /> },
            { t: "Shop / office photos", s: "PENDING", icon: <FileWarning size={20} className="text-warn" /> },
          ].map((d) => (
            <div key={d.t} className="rounded-lg border p-4 text-center">
              <div className="flex justify-center">{d.icon}</div>
              <div className="mt-2 text-sm font-bold">{d.t}</div>
              <div className={`badge mt-1 ${d.s === "APPROVED" ? "bg-money-50 text-money" : "bg-warn-50 text-warn"}`}>{d.s}</div>
              {d.s === "PENDING" && (
                <div className="mt-3 grid cursor-pointer place-items-center rounded-lg border-2 border-dashed p-3 text-muted hover:border-brand hover:text-brand">
                  <Upload size={18} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </AccountShell>
  );
}
