import Link from "next/link";
import { AccountShell } from "@/components/account-shell";

const nav = [
  { href: "/account", label: "Dashboard", icon: "dashboard" },
  { href: "/account/orders", label: "My orders", icon: "orders" },
  { href: "/account/escrow", label: "Escrow", icon: "escrow" },
  { href: "/account/saved", label: "Saved items", icon: "saved" },
  { href: "/account/messages", label: "Messages", icon: "messages" },
  { href: "/account/settings", label: "Settings", icon: "settings" },
];

const threads = [
  { name: "Richkem Official Store", last: "Your parcel is on the way — courier Msingi, track RK-88214.", time: "2m", unread: 2, avatar: "R" },
  { name: "Home Essentials KE", last: "Thank you! We've processed your refund of KES 6,499.", time: "1d", unread: 0, avatar: "H" },
  { name: "Dr. Amina Clinic", last: "Karibu! Your check-up is booked for Friday 10:00 AM.", time: "2d", unread: 0, avatar: "A" },
];

export default function Messages() {
  return (
    <AccountShell title="My account" name="Wanjiku Kamau" meta="Buyer · Nairobi" items={nav} active="/account/messages">
      <h1 className="mb-4 text-xl font-extrabold">Messages</h1>
      <div className="card divide-y">
        {threads.map((t) => (
          <Link key={t.name} href="#" className="flex items-center gap-3 p-4 hover:bg-gray-50">
            <span className="bg-brand grid h-11 w-11 shrink-0 place-items-center rounded-full font-black text-white">{t.avatar}</span>
            <div className="min-w-0 flex-1">
              <div className="flex justify-between gap-2">
                <span className="truncate text-sm font-bold">{t.name}</span>
                <span className="text-xs text-muted">{t.time}</span>
              </div>
              <div className="truncate text-xs text-muted">{t.last}</div>
            </div>
            {t.unread > 0 && <span className="bg-brand grid h-5 w-5 place-items-center rounded-full text-[10px] font-bold text-white">{t.unread}</span>}
          </Link>
        ))}
      </div>
    </AccountShell>
  );
}
