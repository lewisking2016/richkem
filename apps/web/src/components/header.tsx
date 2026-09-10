"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, ShoppingCart, Menu, X, Store, MapPin, ChevronDown } from "lucide-react";

const cats = [
  "Phones & Tablets", "Electronics", "Vehicles", "Home & Office",
  "Fashion", "Health & Beauty", "Aviation & Marine", "Property",
];

export default function Header({ variant = "market" }: { variant?: "market" | "services" }) {
  const [open, setOpen] = useState(false);
  const accent = variant === "services" ? "bg-jiji" : "bg-brand";

  return (
    <header className="sticky top-0 z-50 shadow-sm">
      {/* top strip */}
      <div className={`${accent} text-white text-[12.5px]`}>
        <div className="mx-auto flex h-9 max-w-6xl items-center gap-4 px-4">
          <Link href="/sell" className="inline-flex items-center gap-1.5 font-bold hover:underline"><Store size={13} /> Sell on Richkem</Link>
          <Link href="/services" className="hidden hover:underline sm:inline">Services</Link>
          <Link href="/professionals" className="hidden hover:underline md:inline">Professionals</Link>
          <Link href="/businesses" className="hidden hover:underline md:inline">Businesses</Link>
          <Link href="/market/containers" className="hidden hover:underline lg:inline">Containers</Link>
          <Link href="/market/logistics" className="hidden hover:underline lg:inline">Freight</Link>
          <Link href="/help" className="hidden hover:underline sm:inline">Help</Link>
          <div className="ml-auto flex items-center gap-4">
            <span className="hidden items-center gap-1 md:inline-flex"><MapPin size={13} /> Kenya</span>
            <Link href="/account" className="hover:underline">Account</Link>
          </div>
        </div>
      </div>

      {/* main bar — glass */}
      <div className="glass border-b border-line/70">
        <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4">
          <Link href="/" className="flex items-center gap-2">
            <span className={`${accent} grid h-10 w-10 place-items-center rounded-xl text-lg font-black text-white`}>R</span>
            <span className="hidden text-[18px] font-black tracking-tight sm:block">
              Richkem<span className={variant === "services" ? "text-jiji" : "text-brand"}>.</span>
            </span>
          </Link>

          <form className="relative flex-1" action="/search">
            <Search size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
            <input
              name="q"
              placeholder="Search products, services, pros, containers…"
              className="input !h-11 !bg-white pl-11 pr-24"
            />
            <button className={`${accent} absolute right-1.5 top-1/2 h-8 -translate-y-1/2 rounded-lg px-4 text-sm font-bold text-white transition-transform active:scale-95`}>
              Search
            </button>
          </form>

          <Link href="/cart" className="relative hidden items-center gap-1.5 text-sm font-bold hover:text-brand sm:flex">
            <ShoppingCart size={19} /> Cart
            <span className="absolute -right-2.5 -top-1.5 grid h-4.5 w-4.5 place-items-center rounded-full bg-ink px-1 text-[10px] font-bold text-white">3</span>
          </Link>
          <Link href="/account" className="hidden items-center gap-1.5 text-sm font-bold hover:text-brand md:flex">
            Account <ChevronDown size={14} />
          </Link>
          <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* category strip */}
        <nav className="mx-auto hidden max-w-6xl items-center gap-1 overflow-x-auto px-2 pb-1.5 text-[13px] font-medium text-muted lg:flex">
          <span className="inline-flex items-center gap-1 rounded-md bg-gray-100 px-2.5 py-1 font-bold text-ink"><Menu size={13} /> All categories</span>
          {cats.map((c) => (
            <Link key={c} href={`/category/${c.toLowerCase().replace(/[^a-z]+/g, "-").replace(/(^-|-$)/g, "")}`} className="whitespace-nowrap rounded-md px-2.5 py-1 hover:bg-gray-100 hover:text-brand">
              {c}
            </Link>
          ))}
          <span className="ml-auto inline-flex items-center gap-1 font-bold text-money"><Store size={13} /> Escrow protected</span>
        </nav>
      </div>

      {/* mobile drawer */}
      {open && (
        <div className="border-t bg-white p-4 lg:hidden">
          <div className="grid grid-cols-2 gap-2 text-sm font-semibold">
            {cats.map((c) => (
              <Link key={c} href="/search" onClick={() => setOpen(false)} className="rounded-lg border border-line px-3 py-2.5">{c}</Link>
            ))}
          </div>
          <div className="mt-3 flex gap-2">
            <Link href="/account" onClick={() => setOpen(false)} className="btn btn-outline btn-sm flex-1">Account</Link>
            <Link href="/cart" onClick={() => setOpen(false)} className="btn btn-primary btn-sm flex-1">Cart</Link>
          </div>
        </div>
      )}
    </header>
  );
}
