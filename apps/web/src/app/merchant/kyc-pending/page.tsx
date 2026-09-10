import Link from "next/link";
import { BadgeCheck, Clock, Package, ShieldAlert } from "lucide-react";

export const metadata = { title: "Verification in review" };

export default function KycPending() {
  return (
    <div className="mx-auto max-w-lg py-12">
      <div className="card p-6 text-center md:p-8">
        <span className="bg-warn-50 mx-auto grid h-16 w-16 place-items-center rounded-full text-warn"><Clock size={30} /></span>
        <h1 className="mt-4 text-2xl font-extrabold">We're verifying your account</h1>
        <p className="mt-2 text-sm text-muted">
          Documents received. Review takes up to 48 hours — most are approved the same day. We'll SMS you the moment it's done.
        </p>

        <div className="mt-6 space-y-2 text-left">
          {[
            { icon: <BadgeCheck size={16} className="text-money" />, t: "Documents submitted", d: "Business permit + director ID" },
            { icon: <ShieldAlert size={16} className="text-warn" />, t: "Under review", d: "Trust team checking your details" },
            { icon: <Package size={16} className="text-muted" />, t: "Start listing", d: "Unlocked after approval" },
          ].map((s, i) => (
            <div key={s.t} className="flex items-center gap-3 rounded-lg border p-3">
              {s.icon}
              <div className="flex-1">
                <div className="text-sm font-bold">{s.t}</div>
                <div className="text-xs text-muted">{s.d}</div>
              </div>
              {i === 1 && <span className="badge bg-warn-50 text-warn">IN PROGRESS</span>}
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-2">
          <Link href="/merchant/dashboard" className="btn btn-outline">Explore your dashboard</Link>
          <Link href="/help" className="btn btn-ghost text-sm text-muted underline">Verification taking longer than 48h?</Link>
        </div>
      </div>
    </div>
  );
}
