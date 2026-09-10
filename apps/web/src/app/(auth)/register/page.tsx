"use client";

import Link from "next/link";
import { ShoppingBag, Store, ShieldCheck } from "lucide-react";

export default function Register() {
  return (
    <div className="mx-auto max-w-md py-8">
      <div className="card p-6 md:p-8">
        <h1 className="text-center text-2xl font-extrabold">Create your account</h1>
        <p className="mt-1 text-center text-sm text-muted">One account to buy, sell and book services</p>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <label className="card cursor-pointer p-4 text-center ring-2 ring-brand has-[:checked]:ring-brand">
            <input type="radio" name="role" defaultChecked className="peer sr-only" />
            <ShoppingBag size={22} className="text-brand mx-auto" />
            <div className="mt-2 text-sm font-bold">I'm buying</div>
            <div className="text-[11px] text-muted">Shop with escrow protection</div>
          </label>
          <label className="card cursor-pointer p-4 text-center hover:ring-2 hover:ring-line has-[:checked]:ring-brand">
            <input type="radio" name="role" className="peer sr-only" />
            <Store size={22} className="text-jiji mx-auto" />
            <div className="mt-2 text-sm font-bold">I'm selling / pro</div>
            <div className="text-[11px] text-muted">Storefront, services or business profile</div>
          </label>
        </div>
        <p className="mt-2 text-center text-[11px] text-muted">Sellers can be shops, individual professionals, or companies — all KYC verified.</p>

        <form className="mt-4 space-y-3">
          <div><label className="label">Full name</label><input className="input" placeholder="Wanjiku Kamau" /></div>
          <div><label className="label">Phone (M-Pesa)</label><input className="input" placeholder="+254 7XX XXX XXX" /></div>
          <div><label className="label">Email</label><input className="input" type="email" placeholder="you@example.com" /></div>
          <div><label className="label">Password</label><input className="input" type="password" placeholder="Min 8 characters" /></div>
          <label className="flex items-start gap-2 text-xs text-muted">
            <input type="checkbox" className="accent-brand mt-0.5" defaultChecked />
            I agree to the Terms of Service and Escrow Terms. I understand money is held in escrow until order confirmation.
          </label>
          <Link href="/account" className="btn btn-primary w-full">Create account</Link>
        </form>
        <p className="mt-4 text-center text-sm text-muted">Already have an account? <Link href="/login" className="text-brand font-semibold hover:underline">Sign in</Link></p>
      </div>
    </div>
  );
}
