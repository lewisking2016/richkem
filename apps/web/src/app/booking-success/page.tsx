import Link from "next/link";
import { CheckCircle2, CalendarDays, MessageCircle, ShieldCheck } from "lucide-react";
import { money } from "@/lib/data";

export const metadata = { title: "Booking confirmed" };

export default function BookingSuccess() {
  return (
    <div className="mx-auto max-w-md space-y-5 py-10 text-center">
      <span className="bg-money mx-auto grid h-20 w-20 place-items-center rounded-full text-white"><CheckCircle2 size={44} /></span>
      <h1 className="text-3xl font-black">Booking confirmed!</h1>
      <p className="text-sm text-muted">
        Your deposit of <b className="text-ink">{money(2000)}</b> is now in <b className="text-money">escrow</b>. The provider has been notified and will confirm the slot shortly.
      </p>
      <div className="card p-5 text-left text-sm">
        <div className="flex justify-between border-b py-2"><span className="text-muted">Booking</span><b>BK-302</b></div>
        <div className="flex justify-between border-b py-2"><span className="text-muted">Provider</span><b>Dr. Amina Yusuf</b></div>
        <div className="flex justify-between border-b py-2"><span className="text-muted">When</span><b>Fri, Sep 11 · 10:00</b></div>
        <div className="flex justify-between border-b py-2"><span className="text-muted">Deposit (escrow)</span><b className="text-money">{money(2000)}</b></div>
        <div className="flex justify-between py-2"><span className="text-muted">Balance at visit</span><b>{money(4500)}</b></div>
      </div>
      <div className="text-money flex items-start gap-1.5 rounded-lg bg-money-50 p-3 text-xs font-semibold text-left">
        <ShieldCheck size={15} className="shrink-0" /> Provider no-show? Full refund within 24h. Reschedule free up to 12h before your slot.
      </div>
      <div className="grid gap-2">
        <Link href="/account/bookings" className="btn btn-primary"><CalendarDays size={16} /> View my bookings</Link>
        <Link href="/account/messages" className="btn btn-outline"><MessageCircle size={16} /> Message provider</Link>
      </div>
    </div>
  );
}
