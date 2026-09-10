import Link from "next/link";
import { ImagePlus, ShieldCheck, Info } from "lucide-react";

export const metadata = { title: "Add listing" };

export default function NewListing() {
  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="mb-1 text-xl font-extrabold">Add a new listing</h1>
      <p className="mb-5 text-sm text-muted">Quality listings with real photos sell 3× faster.</p>

      <div className="space-y-4">
        <section className="card p-5">
          <h2 className="mb-3 font-extrabold">Photos</h2>
          <div className="grid grid-cols-4 gap-2">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="grid aspect-square place-items-center rounded-lg border-2 border-dashed text-muted hover:border-brand hover:text-brand">
                <ImagePlus size={22} />
              </div>
            ))}
          </div>
          <p className="mt-2 text-xs text-muted">Up to 8 photos. First photo = cover. JPG/PNG, max 5MB each.</p>
        </section>

        <section className="card p-5">
          <h2 className="mb-3 font-extrabold">Details</h2>
          <div className="grid gap-3">
            <div><label className="label">Title</label><input className="input" placeholder="e.g. Samsung Galaxy A55 5G 256GB" /></div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div><label className="label">Category</label><select className="input"><option>Phones & Tablets</option><option>Electronics</option><option>Vehicles</option></select></div>
              <div><label className="label">Condition</label><select className="input"><option>Brand New</option><option>Foreign Used</option><option>Locally Used</option></select></div>
            </div>
            <div><label className="label">Description</label><textarea className="input !h-28 py-2" placeholder="Describe the item, what's included, warranty..." /></div>
          </div>
        </section>

        <section className="card p-5">
          <h2 className="mb-3 font-extrabold">Pricing & stock</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            <div><label className="label">Price (KES)</label><input className="input" type="number" placeholder="42999" /></div>
            <div><label className="label">Compare-at (optional)</label><input className="input" type="number" placeholder="49999" /></div>
            <div><label className="label">Stock</label><input className="input" type="number" placeholder="20" /></div>
          </div>
          <div className="text-money mt-3 flex items-start gap-2 rounded-lg bg-money-50 p-3 text-xs font-semibold">
            <ShieldCheck size={14} className="shrink-0" /> Buyers pay into escrow. 5% platform fee deducted only when the order completes. You never ship unpaid orders.
          </div>
        </section>

        <div className="flex gap-2">
          <Link href="/merchant/products" className="btn btn-outline flex-1">Save draft</Link>
          <Link href="/merchant/products" className="btn btn-primary flex-1"><Info size={15} /> Publish listing</Link>
        </div>
      </div>
    </div>
  );
}
