import Link from "next/link";
import { Rocket, CheckCircle2, Upload, Store } from "lucide-react";

export const metadata = { title: "Welcome, seller" };

export default function SellerWelcome() {
  return (
    <div className="mx-auto max-w-lg py-12">
      <div className="card p-6 text-center md:p-8">
        <span className="bg-brand mx-auto grid h-16 w-16 place-items-center rounded-full text-white"><Rocket size={30} /></span>
        <h1 className="mt-4 text-2xl font-extrabold">Application received — karibu!</h1>
        <p className="mt-2 text-sm text-muted">Your storefront journey starts here. Three quick steps and you're selling:</p>

        <div className="mt-6 space-y-2 text-left">
          {[
            { n: 1, t: "Upload KYC documents", d: "ID + permit. Approved within 48h.", icon: <Upload size={16} className="text-brand" /> },
            { n: 2, t: "Add your first listing", d: "Photos, price, stock. Drafts are free.", icon: <Store size={16} className="text-brand" /> },
            { n: 3, t: "Go live & get paid", d: "Buyers pay into escrow; payouts every Friday.", icon: <CheckCircle2 size={16} className="text-money" /> },
          ].map((s) => (
            <div key={s.n} className="flex items-center gap-3 rounded-lg border p-3">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-50">{s.icon}</span>
              <div className="flex-1">
                <div className="text-sm font-bold">{s.n}. {s.t}</div>
                <div className="text-xs text-muted">{s.d}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-2">
          <Link href="/merchant/kyc" className="btn btn-primary">Start KYC verification</Link>
          <Link href="/merchant/dashboard" className="btn btn-outline">Peek at your dashboard</Link>
        </div>
      </div>
    </div>
  );
}
