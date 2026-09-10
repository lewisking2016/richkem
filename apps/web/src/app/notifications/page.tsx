import Link from "next/link";
import { Bell, ShieldCheck, Tag, Truck, MessageCircle, Star } from "lucide-react";

export const metadata = { title: "Notifications" };

const notes = [
  { icon: <ShieldCheck size={16} className="text-money" />, t: "Escrow released — KES 38,500", d: "Order RK-87940 · seller paid after your confirmation", time: "2h", unread: true },
  { icon: <Truck size={16} className="text-brand" />, t: "Out for delivery", d: "Order RK-88214 · courier Msingi, arrives 2–4pm", time: "3h", unread: true },
  { icon: <MessageCircle size={16} className="text-jiji" />, t: "New message from PhoneHub Kenya", d: "Re: iPhone 13 availability", time: "5h", unread: true },
  { icon: <Tag size={16} className="text-brand" />, t: "Price drop on a saved item", d: "Nike Air Force 1 '07 now KES 8,999 (was 10,999)", time: "1d", unread: false },
  { icon: <Star size={16} className="text-amber-400" />, t: "Dr. Amina Yusuf replied to your review", d: "\"Thank you for the kind words, Karibu tena!\"", time: "2d", unread: false },
  { icon: <ShieldCheck size={16} className="text-money" />, t: "Refund processed — KES 6,499", d: "Order RK-87110 · back in your M-Pesa within 24h", time: "3d", unread: false },
];

export default function Notifications() {
  const unread = notes.filter((n) => n.unread).length;
  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-extrabold">Notifications {unread > 0 && <span className="badge bg-brand text-white align-middle">{unread} new</span>}</h1>
        <button className="text-brand text-sm font-bold hover:underline">Mark all read</button>
      </div>
      <div className="card divide-y">
        {notes.map((n, i) => (
          <div key={i} className={`flex items-start gap-3 p-4 ${n.unread ? "bg-brand-50/40" : ""}`}>
            <span className="bg-white mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line">{n.icon}</span>
            <div className="min-w-0 flex-1">
              <div className="text-sm font-bold">{n.t}</div>
              <div className="text-xs text-muted">{n.d}</div>
            </div>
            <span className="shrink-0 text-[11px] text-muted">{n.time}</span>
            {n.unread && <span className="bg-brand mt-1.5 h-2 w-2 shrink-0 rounded-full" />}
          </div>
        ))}
      </div>
      <Link href="/account/settings" className="btn btn-outline mt-4">Notification settings</Link>
    </div>
  );
}
