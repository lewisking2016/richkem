"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { AccountShell } from "@/components/account-shell";
import { ListingCard } from "@/components/listing";
import { useStore } from "@/lib/store";
import { listings } from "@/lib/data";

const nav = [
  { href: "/account", label: "Dashboard", icon: "dashboard" },
  { href: "/account/orders", label: "My orders", icon: "orders" },
  { href: "/account/escrow", label: "Escrow", icon: "escrow" },
  { href: "/account/saved", label: "Saved items", icon: "saved" },
  { href: "/account/messages", label: "Messages", icon: "messages" },
  { href: "/account/settings", label: "Settings", icon: "settings" },
];

export default function Saved() {
  const { saved, ready } = useStore();
  const items = listings.filter((l) => saved.includes(l.id));

  return (
    <AccountShell title="My account" name="Wanjiku Kamau" meta="Buyer · Nairobi" items={nav} active="/account/saved">
      <h1 className="mb-4 text-xl font-extrabold">Saved items ({items.length})</h1>
      {!ready ? <div className="skeleton h-64 w-full" /> : items.length === 0 ? (
        <div className="card grid place-items-center gap-3 py-16 text-center">
          <span className="bg-gray-100 grid h-14 w-14 place-items-center rounded-full text-muted"><Heart size={24} /></span>
          <h2 className="font-extrabold">Nothing saved yet</h2>
          <p className="text-sm text-muted">Tap the heart on any listing to keep it here.</p>
          <Link href="/search" className="btn btn-primary btn-sm mt-1">Browse listings</Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4">
          {items.map((l) => <ListingCard key={l.id} l={l} />)}
        </div>
      )}
    </AccountShell>
  );
}
