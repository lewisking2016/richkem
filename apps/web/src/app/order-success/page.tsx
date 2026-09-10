import Link from "next/link";
import { CheckCircle2, Package, MessageCircle, Phone } from "lucide-react";
import { money } from "@/lib/data";

export const metadata = { title: "Payment received" };

export default function OrderSuccess() {
  return (
    <div className="mx-auto max-w-md space-y-5 py-10 text-center">
      <span className="bg-money mx-auto grid h-20 w-20 place-items-center rounded-full text-white"><CheckCircle2 size={44} /></span>
      <h1 className="text-3xl font-black">Payment received!</h1>
      <p className="text-sm text-muted">
        M-Pesa confirmed <b className="text-ink">KES 42,999</b>. Your money is now in <b className="text-money">escrow</b> — the seller has been notified to ship.
      </p>
      <div className="card p-5 text-left text-sm">
        <div className="flex justify-between border-b py-2"><span className="text-muted">Order</span><b>RK-88214</b></div>
        <div className="flex justify-between border-b py-2"><span className="text-muted">M-Pesa code</span><b>QGH7XY21KP</b></div>
        <div className="flex justify-between border-b py-2"><span className="text-muted">Escrow status</span><b className="text-money">HELD</b></div>
        <div className="flex justify-between py-2"><span className="text-muted">Release condition</span><b>You confirm delivery</b></div>
      </div>
      <div className="grid gap-2">
        <Link href="/order/RK-88214" className="btn btn-primary"><Package size={16} /> Track order</Link>
        <Link href="/account" className="btn btn-outline">Go to my account</Link>
      </div>
      <p className="text-xs text-muted">Wait — didn't get the STK push? <span className="text-brand inline-flex items-center gap-1 font-semibold"><Phone size={12} /> Try again</span></p>
    </div>
  );
}
