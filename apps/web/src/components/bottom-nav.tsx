import Link from "next/link";
import { Home, Search, Heart, MessageCircle, User } from "lucide-react";

const tabs = [
  { href: "/", label: "Home", icon: Home },
  { href: "/search", label: "Search", icon: Search },
  { href: "/account/saved", label: "Saved", icon: Heart },
  { href: "/account/messages", label: "Chats", icon: MessageCircle },
  { href: "/account", label: "Account", icon: User },
];

export default function BottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-5 border-t bg-white pb-[env(safe-area-inset-bottom)] lg:hidden">
      {tabs.map(({ href, label, icon: Icon }) => (
        <Link key={href} href={href} className="flex flex-col items-center gap-0.5 py-2 text-[10px] font-semibold text-muted hover:text-brand">
          <Icon size={20} />
          {label}
        </Link>
      ))}
    </nav>
  );
}
