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
      <div className={`${accent} text-white text-[13px]`}>
        <div className="mx-auto flex h-9 max-w-6xl items-center gap-4 px-4">
          <Link href="/sell" className="font-semibold hover:underline">Sell on Richkem</Link>
          <Link href="/services" className="hidden hover:underline sm:inline">Services</Link>
          <Link href="/professionals" className="hidden hover:underline sm:inline">Professionals</Link>
          <Link href="/businesses" className="hidden hover:underline md:inline">Businesses</Link>
          <Link href="/market/containers" className="hidden hover:underline md:inline">Containers</Link>
          <Link href="/market/logistics" className="hidden hover:underline lg:inline">Freight</Link>
          <Link href="/help" className="hidden hover:underline sm:inline">Help</Link>
          <div className="ml-auto flex items-center gap-4">
            <span className="hidden items-center gap-1 md:inline-flex"><MapPin size={13} /> Kenya</span>
            <Link href="/account" className="hover:underline">Account</Link>
          </div>
        </div>
      </div>

      {/* main bar */}
      <div className="bg-white">
        <div className="mx-auto flex h-14 max-w-6xl items-center gap-3 px-4">
          <Link href="/" className="flex items-center gap-2">
            <span className={`${accent} grid h-9 w-9 place-items-center rounded-lg text-lg font-black text-white`}>R</span>
            <span className="hidden text-[17px] font-extrabold tracking-tight sm:block">
              Richkem<span className={variant === "services" ? "text-jiji" : "text-brand"}>.</span>
            </span>
          </Link>

          <form className="relative flex-1" action="/search">
            <Search size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
            <input
              name="q"
              placeholder="Search products, services, brands and categories"
              className="h-10 w-full rounded-lg border border-line bg-gray-50 pl-9 pr-24 text-sm outline-none focus:border-brand focus:bg-white"
            />
            <button className={`${accent} absolute right-1 top-1/2 h-8 -translate-y-1/2 rounded-md px-4 text-sm font-semibold text-white`}>
              Search
            </button>
          </form>

          <Link href="/cart" className="relative hidden items-center gap-1.5 text-sm font-semibold hover:text-brand sm:flex">
            <ShoppingCart size={19} /> Cart
            <span className="absolute -right-2 -top-2 grid h-4 w-4 place-items-center rounded-full bg-ink px-1 text-[10px] font-bold text-white">3</span>
          </Link>
          <Link href="/account" className="hidden items-center gap-1.5 text-sm font-semibold hover:text-brand md:flex">
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
