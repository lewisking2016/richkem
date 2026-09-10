import Link from "next/link";
import { Store, ShieldCheck, Wallet, TrendingUp, CheckCircle2 } from "lucide-react";

export const metadata = { title: "Sell on Richkem" };

const steps = [
  { n: "1", t: "Create account", d: "Register as a merchant in 2 minutes." },
  { n: "2", t: "Submit KYC", d: "ID + business permit. Verified within 48h." },
  { n: "3", t: "List products", d: "Photos, price, stock. Go live instantly." },
  { n: "4", t: "Get paid", d: "M-Pesa payout every Friday after escrow release." },
];

export default function SellLanding() {
  return (
    <div className="space-y-8">
      <section className="card overflow-hidden bg-gradient-to-r from-ink to-gray-800 p-6 text-white md:p-10">
        <span className="badge bg-brand text-white"><Store size={12} /> SELLER HUB</span>
        <h1 className="mt-4 max-w-2xl text-3xl font-black md:text-4xl">Kenya buys here. Sell with zero risk of fake payments.</h1>
        <p className="mt-2 max-w-lg text-sm text-white/75">Every buyer pays into escrow before you ship. No bounced M-Pesa. No ghosting. 5% fee only when your money is released.</p>
        <Link href="/merchant/dashboard" className="btn btn-primary mt-6">Apply now — it's free</Link>
      </section>

      <section className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {[
          { icon: <ShieldCheck size={20} className="text-money" />, t: "Escrow guaranteed", d: "Funds verified before you ship" },
          { icon: <Wallet size={20} className="text-brand" />, t: "Friday payouts", d: "Direct to your M-Pesa" },
          { icon: <TrendingUp size={20} className="text-jiji" />, t: "12M+ monthly visits", d: "Buyers already here" },
          { icon: <CheckCircle2 size={20} className="text-money" />, t: "Verified badge", d: "KYC = 3× more sales" },
        ].map((b) => (
          <div key={b.t} className="card p-4">
            {b.icon}
            <div className="mt-2 text-sm font-bold">{b.t}</div>
            <div className="text-xs text-muted">{b.d}</div>
          </div>
        ))}
      </section>

      <section className="card p-5">
        <h2 className="mb-4 font-extrabold">How it works</h2>
        <div className="grid gap-3 md:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="rounded-lg border p-4">
              <span className="bg-brand grid h-8 w-8 place-items-center rounded-full font-black text-white">{s.n}</span>
              <div className="mt-3 font-bold">{s.t}</div>
              <div className="mt-1 text-sm text-muted">{s.d}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="card p-5">
        <h2 className="mb-1 font-extrabold">Start your application</h2>
        <p className="mb-4 text-sm text-muted">Takes ~5 minutes. Have your ID and business documents ready.</p>
        <div className="grid gap-3 sm:grid-cols-2">
          <div><label className="label">Business / shop name</label><input className="input" placeholder="e.g. Wanjiku Electronics" /></div>
          <div><label className="label">Category</label><select className="input"><option>Electronics & Phones</option><option>Vehicles</option><option>Home & Office</option><option>Services</option><option>Other</option></select></div>
          <div><label className="label">Phone (M-Pesa for payouts)</label><input className="input" placeholder="+254 7XX XXX XXX" /></div>
          <div><label className="label">Town / City</label><input className="input" placeholder="Nairobi" /></div>
        </div>
        <Link href="/become-seller/welcome" className="btn btn-primary mt-4">Submit application</Link>
      </section>
    </div>
  );
}
