"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { Smartphone } from "lucide-react";

export default function VerifyOtp() {
  const [digits, setDigits] = useState(["", "", "", ""]);
  const refs = useRef<(HTMLInputElement | null)[]>([]);

  const onDigit = (idx: number, v: string) => {
    const d = v.replace(/\D/g, "").slice(-1);
    setDigits((prev) => prev.map((x, i) => (i === idx ? d : x)));
    if (d && idx < 3) refs.current[idx + 1]?.focus();
  };

  return (
    <div className="mx-auto max-w-md py-8">
      <div className="card p-6 md:p-8">
        <span className="bg-brand-50 mx-auto grid h-12 w-12 place-items-center rounded-xl text-brand"><Smartphone size={22} /></span>
        <h1 className="mt-4 text-center text-2xl font-extrabold">Enter the 4-digit code</h1>
        <p className="mt-1 text-center text-sm text-muted">Sent via SMS to <b className="text-ink">+254 712 *** 678</b></p>

        <div className="mt-6 flex justify-center gap-3">
          {digits.map((d, i) => (
            <input
              key={i}
              ref={(el) => { refs.current[i] = el; }}
              value={d}
              onChange={(e) => onDigit(i, e.target.value)}
              inputMode="numeric"
              aria-label={`Digit ${i + 1}`}
              className="h-14 w-14 rounded-xl border-2 border-line text-center text-2xl font-black outline-none focus:border-brand"
            />
          ))}
        </div>

        <Link href="/account" className="btn btn-primary mt-6 w-full">Verify & continue</Link>
        <div className="mt-3 text-center text-xs text-muted">
          Didn't get it? <span className="text-brand font-semibold">Resend code</span> · <Link href="/forgot-password" className="text-brand font-semibold">Change number</Link>
        </div>
      </div>
    </div>
  );
}
