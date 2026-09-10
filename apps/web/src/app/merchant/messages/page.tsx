import { AccountShell } from "@/components/account-shell";

const nav = [
  { href: "/merchant/dashboard", label: "Dashboard", icon: "dashboard" },
  { href: "/merchant/products", label: "My listings", icon: "products" },
  { href: "/merchant/orders", label: "Orders", icon: "orders" },
  { href: "/merchant/bookings", label: "Bookings", icon: "bookings" },
  { href: "/merchant/wallet", label: "Wallet & escrow", icon: "escrow" },
  { href: "/merchant/messages", label: "Messages", icon: "messages" },
  { href: "/merchant/kyc", label: "Verification", icon: "verification" },
];

const chats = [
  { who: "Wanjiku Kamau", re: "Re: Samsung Galaxy A55", last: "Can you deliver to Kisumu by Friday?", time: "5m", unread: 1 },
  { who: "John Otieno", re: "iPhone 13 availability", last: "Is it sealed with warranty?", time: "1h", unread: 0 },
  { who: "Mary Achieng", re: "Order RK-88102", last: "Received, thank you! Confirming now.", time: "1d", unread: 0 },
];

export default function MerchantMessages() {
  return (
    <AccountShell title="Merchant hub" name="PhoneHub Kenya" meta="Verified seller · CBD" items={nav} active="/merchant/messages">
      <h1 className="mb-4 text-xl font-extrabold">Buyer chats</h1>
      <div className="card divide-y">
        {chats.map((c) => (
          <div key={c.who} className="flex cursor-pointer items-center gap-3 p-4 hover:bg-gray-50">
            <span className="bg-brand grid h-11 w-11 place-items-center rounded-full font-black text-white">{c.who[0]}</span>
            <div className="min-w-0 flex-1">
              <div className="flex justify-between gap-2"><span className="text-sm font-bold">{c.who}</span><span className="text-xs text-muted">{c.time}</span></div>
              <div className="text-xs text-muted"><b className="text-ink">{c.re}</b> · {c.last}</div>
            </div>
            {c.unread > 0 && <span className="bg-brand grid h-5 w-5 place-items-center rounded-full text-[10px] font-bold text-white">{c.unread}</span>}
          </div>
        ))}
      </div>
    </AccountShell>
  );
}
