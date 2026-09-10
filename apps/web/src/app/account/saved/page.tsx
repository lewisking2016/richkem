import { AccountShell } from "@/components/account-shell";
import { ListingCard } from "@/components/listing";
import { listings } from "@/lib/data";

const nav = [
  { href: "/account", label: "Dashboard", icon: "🏠" },
  { href: "/account/orders", label: "My orders", icon: "📦" },
  { href: "/account/escrow", label: "Escrow", icon: "🛡️" },
  { href: "/account/saved", label: "Saved items", icon: "❤️" },
  { href: "/account/messages", label: "Messages", icon: "💬" },
  { href: "/account/settings", label: "Settings", icon: "⚙️" },
];

export default function Saved() {
  const saved = listings.filter((l) => ["l1", "l4", "l6", "l8"].includes(l.id));
  return (
    <AccountShell title="My account" name="Wanjiku Kamau" meta="Buyer · Nairobi" items={nav} active="/account/saved">
      <h1 className="mb-4 text-xl font-extrabold">Saved items ({saved.length})</h1>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4">
        {saved.map((l) => <ListingCard key={l.id} l={l} />)}
      </div>
    </AccountShell>
  );
}
