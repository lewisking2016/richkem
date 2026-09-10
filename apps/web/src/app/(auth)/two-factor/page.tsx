"use client";

import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export default function TwoFactor() {
  return (
    <div className="mx-auto max-w-md py-8">
      <div className="card p-6 md:p-8">
        <span className="bg-money-50 mx-auto grid h-12 w-12 place-items-center rounded-xl text-money"><ShieldCheck size={22} /></span>
        <h1 className="mt-4 text-center text-2xl font-extrabold">Two-factor check</h1>
        <p className="mt-1 text-center text-sm text-muted">New device detected. We sent a code to your phone and email — enter the SMS one.</p>
        <form className="mt-5 space-y-3">
          <div><label className="label">Security code</label><input className="input tracking-[0.4em] text-center font-black" placeholder="————" maxLength={4} /></div>
          <Link href="/account" className="btn btn-primary w-full">Trust this device & sign in</Link>
        </form>
        <p className="mt-4 text-center text-xs text-muted">Not you? <Link href="/login" className="text-brand font-semibold">Secure your account</Link></p>
      </div>
    </div>
  );
}
