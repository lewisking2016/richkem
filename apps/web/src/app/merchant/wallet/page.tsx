import Link from "next/link";
import { AccountShell, StatCard } from "@/components/account-shell";
import { walletLedger, money } from "@/lib/data";
import { ArrowDownToLine } from "lucide-react";

const nav = [
  { href: "/merchant/dashboard", label: "Dashboard", icon: "dashboard" },
  { href: "/merchant/products", label: "My listings", icon: "products" },
  { href: "/merchant/orders", label: "Orders", icon: "orders" },
  { href: "/merchant/bookings", label: "Bookings", icon: "bookings" },
  { href: "/merchant/wallet", label: "Wallet & escrow", icon: "escrow" },
  { href: "/merchant/messages", label: "Messages", icon: "messages" },
  { href: "/merchant/kyc", label: "Verification", icon: "verification" },
];

export default function Wallet() {
  return (
    <AccountShell title="Merchant hub" name="PhoneHub Kenya" meta="Verified seller · CBD" items={nav} active="/merchant/wallet">
      <h1 className="mb-4 text-xl font-extrabold">Wallet & escrow</h1>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        <StatCard n={money(512340)} t="Available balance" tone="good" />
        <StatCard n={money(66998)} t="In escrow" sub="unlocks on delivery confirm" tone="warn" />
        <StatCard n={money(1925)} t="Fees this month" sub="5% platform fee" />
        <StatCard n="Fri" t="Next payout" sub="auto to M-Pesa" />
      </div>

      <div className="card mt-5 p-4">
        <div className="flex items-center justify-between">
          <h2 className="font-extrabold">Ledger — every shilling traced</h2>
          <Link href="/merchant/wallet/withdraw" className="btn btn-primary btn-sm"><ArrowDownToLine size={15} /> Withdraw to M-Pesa</Link>
        </div>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="border-b text-left text-xs uppercase text-muted">
                <th className="py-2">Date</th><th>Order</th><th>Type</th><th className="text-right">Amount</th><th className="text-right">Ref</th>
              </tr>
            </thead>
            <tbody>
              {walletLedger.map((r) => (
                <tr key={r.id} className="border-b last:border-0">
                  <td className="py-2.5 text-muted">{r.date}</td>
                  <td className="font-semibold">{r.orderId}</td>
                  <td>
                    <span className={`badge ${r.entryType === "HOLD" ? "bg-jiji-50 text-jiji" : r.entryType === "RELEASE" ? "bg-money-50 text-money" : r.entryType === "FEE" ? "bg-warn-50 text-warn" : "bg-danger-50 text-danger"}`}>
                      {r.entryType}
                    </span>
                  </td>
                  <td className={`text-right font-extrabold ${r.amount < 0 ? "text-danger" : "text-money"}`}>
                    {r.amount < 0 ? "−" : "+"}{money(Math.abs(r.amount))}
                  </td>
                  <td className="text-right text-xs text-muted">{r.ref}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AccountShell>
  );
}
