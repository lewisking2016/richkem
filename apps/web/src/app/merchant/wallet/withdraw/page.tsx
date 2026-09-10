"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowDownToLine, CheckCircle2, Info } from "lucide-react";
import { money } from "@/lib/data";

export default function Withdraw() {
  const [amount, setAmount] = useState("512340");
  const [done, setDone] = useState(false);
  const amt = Math.max(0, parseInt(amount.replace(/\D/g, "") || "0", 10));

  if (done) {
    return (
      <div className="mx-auto max-w-md py-16 text-center">
        <span className="bg-money mx-auto grid h-16 w-16 place-items-center rounded-full text-white"><CheckCircle2 size={30} /></span>
        <h1 className="mt-4 text-2xl font-extrabold">Withdrawal requested</h1>
        <p className="mt-2 text-sm text-muted">{money(amt)} is on its way to <b className="text-ink">+254 712 *** 678</b>. M-Pesa payouts usually land within minutes — max 24h on weekends.</p>
        <div className="mt-5 grid gap-2">
          <Link href="/merchant/wallet" className="btn btn-primary">Back to wallet</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-md">
      <h1 className="mb-1 text-2xl font-extrabold">Withdraw to M-Pesa</h1>
      <p className="mb-5 text-sm text-muted">Available balance: <b>{money(512340)}</b></p>

      <div className="card p-5">
        <label className="label">Amount (KES)</label>
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value.replace(/\D/g, ""))}
          inputMode="numeric"
          className="input !h-14 text-2xl font-black"
        />
        <div className="mt-2 flex gap-2">
          {["10000", "50000", "250000", "512340"].map((v) => (
            <button key={v} onClick={() => setAmount(v)} className="chip !px-3 !py-1 text-xs">KES {parseInt(v).toLocaleString()}</button>
          ))}
        </div>

        <div className="mt-4">
          <label className="label">Receiving M-Pesa number</label>
          <input className="input" defaultValue="+254 712 345 678" />
          <p className="mt-1.5 flex items-start gap-1.5 text-[11px] text-muted"><Info size={12} className="mt-0.5 shrink-0" /> Withdrawals go to the verified number on your KYC. Change it in settings with 24h notice.</p>
        </div>

        <div className="mt-4 flex justify-between rounded-lg bg-gray-50 p-3 text-sm">
          <span className="text-muted">Arrives as</span>
          <b>{money(amt)}</b>
        </div>

        <button onClick={() => amt > 0 && setDone(true)} disabled={amt <= 0} className="btn btn-primary mt-4 w-full disabled:opacity-50">
          <ArrowDownToLine size={16} /> Request {amt > 0 ? money(amt) : "withdrawal"}
        </button>
        <p className="mt-2 text-center text-[11px] text-muted">No withdrawal fees. Minimum KES 100.</p>
      </div>
    </div>
  );
}
