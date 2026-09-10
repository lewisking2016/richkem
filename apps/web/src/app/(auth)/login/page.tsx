"use client";

import { useState } from "react";
import Link from "next/link";
import { ShieldCheck, Phone, Mail } from "lucide-react";

export default function Login() {
  const [mode, setMode] = useState<"phone" | "email">("phone");
  return (
    <div className="mx-auto max-w-md py-8">
      <div className="card p-6 md:p-8">
        <span className="bg-brand mx-auto grid h-12 w-12 place-items-center rounded-xl text-xl font-black text-white">R</span>
        <h1 className="mt-4 text-center text-2xl font-extrabold">Welcome back</h1>
        <p className="mt-1 text-center text-sm text-muted">Sign in to track orders and manage escrow</p>

        <div className="mt-5 grid grid-cols-2 rounded-lg bg-gray-100 p-1">
          {(["phone", "email"] as const).map((m) => (
            <button key={m} onClick={() => setMode(m)}
              className={`flex items-center justify-center gap-1.5 rounded-md py-2 text-sm font-bold ${mode === m ? "bg-white shadow" : "text-muted"}`}>
              {m === "phone" ? <Phone size={14} /> : <Mail size={14} />} {m === "phone" ? "Phone" : "Email"}
            </button>
          ))}
        </div>

        <form className="mt-4 space-y-3">
          {mode === "phone" ? (
            <div><label className="label">Phone number</label><input className="input" placeholder="+254 7XX XXX XXX" /></div>
          ) : (
            <div><label className="label">Email</label><input className="input" type="email" placeholder="you@example.com" /></div>
          )}
          <div><label className="label">Password</label><input className="input" type="password" placeholder="••••••••" /></div>
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-muted"><input type="checkbox" className="accent-brand" defaultChecked /> Remember me</label>
            <Link href="/forgot-password" className="text-brand font-semibold hover:underline">Forgot password?</Link>
          </div>
          <Link href="/account" className="btn btn-primary w-full">Sign in</Link>
        </form>

        <div className="my-4 flex items-center gap-3 text-xs text-muted"><span className="h-px flex-1 bg-line" />OR<span className="h-px flex-1 bg-line" /></div>
        <Link href="/register" className="btn btn-outline w-full">Create an account</Link>
        <p className="text-money mt-4 flex items-center justify-center gap-1.5 text-xs font-semibold"><ShieldCheck size={13} /> Protected by Richkem escrow & buyer guarantee</p>
      </div>
    </div>
  );
}
