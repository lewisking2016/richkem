"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ImagePlus, ShieldCheck, Info, Check } from "lucide-react";
import { useStore } from "@/lib/store";
import { money } from "@/lib/data";

export default function NewListing() {
  const { addListing } = useStore();
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Phones & Tablets");
  const [stock, setStock] = useState("1");
  const [saved, setSaved] = useState<null | "DRAFT" | "ACTIVE">(null);

  const save = (status: "DRAFT" | "ACTIVE") => {
    if (!title.trim() || !price) return;
    addListing({
      title: title.trim(),
      price: parseInt(price, 10) || 0,
      image: `https://picsum.photos/seed/${encodeURIComponent(title.trim().slice(0, 20) || "new")}/640/480`,
      category,
      stock: parseInt(stock, 10) || 1,
      status,
    });
    setSaved(status);
    setTimeout(() => router.push("/merchant/products"), 900);
  };

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="mb-1 text-xl font-extrabold">Add a new listing</h1>
      <p className="mb-5 text-sm text-muted">Quality listings with real photos sell 3× faster.</p>

      {saved && (
        <div className="text-money mb-4 flex items-center gap-2 rounded-lg bg-money-50 p-3.5 text-sm font-bold">
          <Check size={16} /> {saved === "DRAFT" ? "Draft saved" : "Listing published"} — taking you to your listings…
        </div>
      )}

      <div className="space-y-4">
        <section className="card p-5">
          <h2 className="mb-3 font-extrabold">Photos</h2>
          <div className="grid grid-cols-4 gap-2">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="grid aspect-square place-items-center rounded-lg border-2 border-dashed text-muted transition-colors hover:border-brand hover:text-brand">
                <ImagePlus size={22} />
              </div>
            ))}
          </div>
          <p className="mt-2 text-xs text-muted">Up to 8 photos. First photo = cover. A placeholder is auto-assigned for now.</p>
        </section>

        <section className="card p-5">
          <h2 className="mb-3 font-extrabold">Details</h2>
          <div className="grid gap-3">
            <div>
              <label className="label">Title</label>
              <input className="input" placeholder="e.g. Samsung Galaxy A55 5G 256GB" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className="label">Category</label>
                <select className="input" value={category} onChange={(e) => setCategory(e.target.value)}>
                  {["Phones & Tablets", "Electronics", "Vehicles", "Home & Office", "Fashion", "Health & Beauty"].map((c) => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="label">Condition</label>
                <select className="input"><option>Brand New</option><option>Foreign Used</option><option>Locally Used</option></select>
              </div>
            </div>
            <div>
              <label className="label">Description</label>
              <textarea className="input !h-28 py-2" placeholder="Describe the item, what's included, warranty..." />
            </div>
          </div>
        </section>

        <section className="card p-5">
          <h2 className="mb-3 font-extrabold">Pricing & stock</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            <div>
              <label className="label">Price (KES)</label>
              <input className="input" type="number" placeholder="42999" value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div>
              <label className="label">Compare-at (optional)</label>
              <input className="input" type="number" placeholder="49999" />
            </div>
            <div>
              <label className="label">Stock</label>
              <input className="input" type="number" min="1" value={stock} onChange={(e) => setStock(e.target.value)} />
            </div>
          </div>
          {price && (
            <div className="mt-3 text-sm text-muted">You receive <b className="text-money">{money(Math.round(parseInt(price, 10) * 0.95))}</b> after the 5% escrow fee on completion.</div>
          )}
          <div className="text-money mt-3 flex items-start gap-2 rounded-lg bg-money-50 p-3 text-xs font-semibold">
            <ShieldCheck size={14} className="shrink-0" /> Buyers pay into escrow. 5% platform fee deducted only when the order completes. You never ship unpaid orders.
          </div>
        </section>

        <div className="flex gap-2">
          <button onClick={() => save("DRAFT")} disabled={!title.trim() || !price} className="btn btn-outline flex-1 disabled:opacity-50">Save draft</button>
          <button onClick={() => save("ACTIVE")} disabled={!title.trim() || !price} className="btn btn-primary flex-1 disabled:opacity-50"><Info size={15} /> Publish listing</button>
        </div>
      </div>
    </div>
  );
}
