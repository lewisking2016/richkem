"use client";

import { useState } from "react";
import { AccountShell } from "@/components/account-shell";
import { Plus, MapPin, Pencil, Trash2, Check } from "lucide-react";

const nav = [
  { href: "/account", label: "Dashboard", icon: "dashboard" },
  { href: "/account/orders", label: "My orders", icon: "orders" },
  { href: "/account/bookings", label: "My bookings", icon: "bookings" },
  { href: "/account/escrow", label: "Escrow", icon: "escrow" },
  { href: "/account/addresses", label: "Addresses", icon: "settings" },
  { href: "/account/settings", label: "Settings", icon: "settings" },
];

const seed = [
  { id: 1, label: "Home", text: "Kilimani Business Centre, Kirichwa Road, Nairobi", isDefault: true },
  { id: 2, label: "Office", text: "Vision Plaza, Mombasa Road, Nairobi", isDefault: false },
];

export default function Addresses() {
  const [addrs, setAddrs] = useState(seed);
  const [adding, setAdding] = useState(false);
  const [draft, setDraft] = useState("");

  const makeDefault = (id: number) => setAddrs((a) => a.map((x) => ({ ...x, isDefault: x.id === id })));
  const remove = (id: number) => setAddrs((a) => a.filter((x) => x.id !== id));
  const add = () => {
    if (!draft.trim()) return;
    setAddrs((a) => [...a, { id: Date.now(), label: "New", text: draft.trim(), isDefault: a.length === 0 }]);
    setDraft(""); setAdding(false);
  };

  return (
    <AccountShell title="My account" name="Wanjiku Kamau" meta="Buyer · Nairobi" items={nav} active="/account/addresses">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-extrabold">Saved addresses</h1>
        <button onClick={() => setAdding(!adding)} className="btn btn-primary btn-sm"><Plus size={15} /> Add address</button>
      </div>

      {adding && (
        <div className="card mb-3 space-y-3 p-4">
          <div>
            <label className="label">Label</label>
            <input className="input" placeholder="e.g. Home, Office, Pickup point" value={draft ? undefined : ""} onChange={() => {}} />
          </div>
          <div>
            <label className="label">Full address</label>
            <input className="input" placeholder="Building, street, city" value={draft} onChange={(e) => setDraft(e.target.value)} />
          </div>
          <div className="flex gap-2">
            <button onClick={add} className="btn btn-primary btn-sm flex-1"><Check size={14} /> Save address</button>
            <button onClick={() => setAdding(false)} className="btn btn-outline btn-sm flex-1">Cancel</button>
          </div>
        </div>
      )}

      <div className="space-y-3">
        {addrs.map((a) => (
          <div key={a.id} className="card flex items-center gap-3 p-4">
            <span className="bg-brand-50 text-brand grid h-10 w-10 shrink-0 place-items-center rounded-xl"><MapPin size={18} /></span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold">{a.label}</span>
                {a.isDefault && <span className="badge bg-money-50 text-money">DEFAULT</span>}
              </div>
              <div className="truncate text-xs text-muted">{a.text}</div>
            </div>
            {!a.isDefault && (
              <>
                <button onClick={() => makeDefault(a.id)} className="text-brand text-xs font-bold hover:underline">Make default</button>
                <button onClick={() => remove(a.id)} aria-label="Delete address" className="grid h-8 w-8 place-items-center rounded-lg hover:bg-gray-100"><Trash2 size={14} className="text-danger" /></button>
              </>
            )}
            <button aria-label="Edit address" className="grid h-8 w-8 place-items-center rounded-lg hover:bg-gray-100"><Pencil size={14} className="text-muted" /></button>
          </div>
        ))}
      </div>
    </AccountShell>
  );
}
