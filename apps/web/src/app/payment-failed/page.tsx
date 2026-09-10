import Link from "next/link";
import { XCircle, RotateCcw, MessageCircle, Phone } from "lucide-react";

export const metadata = { title: "Payment failed" };

export default function PaymentFailed() {
  return (
    <div className="mx-auto max-w-md space-y-5 py-10 text-center">
      <span className="bg-danger mx-auto grid h-20 w-20 place-items-center rounded-full text-white"><XCircle size={44} /></span>
      <h1 className="text-3xl font-black">Payment didn't go through</h1>
      <p className="text-sm text-muted">
        The M-Pesa request was cancelled or timed out. <b className="text-ink">No money left your account.</b>
      </p>
      <div className="card p-5 text-left text-sm">
        <div className="mb-2 font-extrabold">Common causes</div>
        {[
          "Insufficient funds in the M-Pesa wallet",
          "Wrong PIN entered, or the STK push expired",
          "M-Pesa is busy — Safaricom timeouts happen",
        ].map((c) => (
          <div key={c} className="flex gap-2 border-b py-2 text-muted last:border-0"><XCircle size={14} className="mt-0.5 shrink-0 text-danger" /> {c}</div>
        ))}
      </div>
      <div className="grid gap-2">
        <Link href="/checkout" className="btn btn-primary"><RotateCcw size={16} /> Try again</Link>
        <Link href="/cart" className="btn btn-outline">Back to cart</Link>
      </div>
      <p className="text-xs text-muted">
        Charged but not confirmed? <span className="text-brand inline-flex items-center gap-1 font-semibold"><Phone size={12} /> 0700 000 000</span> · <span className="text-brand inline-flex items-center gap-1 font-semibold"><MessageCircle size={12} /> Live chat</span>
      </p>
    </div>
  );
}
