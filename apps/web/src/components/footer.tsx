import Link from "next/link";
import { ShieldCheck, Truck, RotateCcw } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-10 border-t bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-10 md:grid-cols-5">
        <div className="col-span-2">
          <div className="flex items-center gap-2">
            <span className="bg-brand grid h-9 w-9 place-items-center rounded-lg text-lg font-black text-white">R</span>
            <span className="text-[17px] font-extrabold">Richkem<span className="text-brand">.</span></span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted">
            Kenya's trusted marketplace for products, services and high-value assets — with M-Pesa escrow on every order.
          </p>
          <div className="mt-4 flex gap-2">
            <span className="badge bg-money-50 text-money"><ShieldCheck size={12} /> Escrow</span>
            <span className="badge bg-brand-50 text-brand"><Truck size={12} /> Countrywide</span>
            <span className="badge bg-jiji-50 text-jiji"><RotateCcw size={12} /> Returns</span>
          </div>
        </div>
        {[
          { h: "Buy", links: ["Search", "Categories", "Flash Deals", "How escrow works", "Track order"] },
          { h: "Sell", links: ["Become a seller", "Seller hub", "Fees", "KYC requirements", "Seller protection"] },
          { h: "Company", links: ["About us", "Careers", "Terms & privacy", "Contact", "Help center"] },
        ].map((col) => (
          <div key={col.h}>
            <h4 className="mb-3 text-sm font-extrabold uppercase tracking-wide">{col.h}</h4>
            <ul className="space-y-2 text-sm text-muted">
              {col.links.map((l) => <li key={l}><Link href="#" className="hover:text-brand">{l}</Link></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t px-4 py-4 text-center text-xs text-muted">
        © 2026 Richkem Services Ltd · Nairobi, Kenya · M-Pesa escrow protected payments
      </div>
    </footer>
  );
}
