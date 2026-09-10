"use client";

import Link from "next/link";
import { KeyRound } from "lucide-react";

export default function ForgotPassword() {
  return (
    <div className="mx-auto max-w-md py-8">
      <div className="card p-6 md:p-8">
        <span className="bg-brand-50 mx-auto grid h-12 w-12 place-items-center rounded-xl text-brand"><KeyRound size={22} /></span>
        <h1 className="mt-4 text-center text-2xl font-extrabold">Reset password</h1>
        <p className="mt-1 text-center text-sm text-muted">We'll send a 4-digit OTP code to your phone via SMS</p>
        <form className="mt-5 space-y-3">
          <div><label className="label">Phone number</label><input className="input" placeholder="+254 7XX XXX XXX" /></div>
          <Link href="/login" className="btn btn-primary w-full">Send OTP code</Link>
        </form>
        <p className="mt-4 text-center text-sm text-muted"><Link href="/login" className="text-brand font-semibold hover:underline">← Back to sign in</Link></p>
      </div>
    </div>
  );
}
