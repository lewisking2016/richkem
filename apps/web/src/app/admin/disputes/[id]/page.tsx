import Link from "next/link";
import { ArrowLeft, ShieldCheck, XCircle, CheckCircle2, FileText, MessageSquare } from "lucide-react";

export const metadata = { title: "Dispute detail" };

export default function DisputeDetail() {
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-3">
        <Link href="/admin/disputes" className="grid h-9 w-9 place-items-center rounded-lg border hover:bg-gray-50"><ArrowLeft size={17} /></Link>
        <div>
          <h1 className="text-xl font-extrabold">Dispute DP-102</h1>
          <p className="text-xs text-muted">Order RK-87521 · opened 2d ago · HIGH priority</p>
        </div>
        <span className="badge bg-danger-50 text-danger ml-auto">UNDER REVIEW</span>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="card p-5">
          <h2 className="mb-2 flex items-center gap-2 font-extrabold"><MessageSquare size={16} /> Buyer claim</h2>
          <p className="text-sm text-muted">"Item never delivered. Courier says addressed to a different building. I want my KES 8,999 back."</p>
          <div className="mt-3 space-y-1.5 text-xs text-muted">
            <div>· Buyer: Wanjiku Kamau · 18 completed orders</div>
            <div>· Evidence: 2 photos, courier SMS screenshot</div>
          </div>
        </div>
        <div className="card p-5">
          <h2 className="mb-2 flex items-center gap-2 font-extrabold"><FileText size={16} /> Seller response</h2>
          <p className="text-sm text-muted">"Tracking shows delivered at the gatehouse and signed. We reship or refund if Richkem rules against us."</p>
          <div className="mt-3 space-y-1.5 text-xs text-muted">
            <div>· Seller: Richkem Official Store · 4.8 rating · 12,480 orders</div>
            <div>· Evidence: delivery manifest, signature capture</div>
          </div>
        </div>
      </div>

      <div className="card p-5">
        <h2 className="mb-3 font-extrabold">Escrow state</h2>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span className="badge bg-jiji-50 text-jiji">HELD</span>
          <b>KES 8,999</b>
          <span className="text-muted">funds locked — no payout until resolution</span>
        </div>
      </div>

      <div className="card p-5">
        <h2 className="mb-3 font-extrabold">Resolution (writes an immutable ledger row)</h2>
        <div className="grid gap-2 md:grid-cols-3">
          <button className="btn btn-danger"><XCircle size={15} /> Refund buyer — KES 8,999</button>
          <button className="btn btn-primary"><CheckCircle2 size={15} /> Release seller — KES 8,999</button>
          <button className="btn btn-outline">Split 50 / 50</button>
        </div>
        <textarea className="input mt-3 !h-20 py-2" placeholder="Resolution note — required. Sent to both parties by SMS + email." />
        <button className="btn btn-dark btn-sm mt-3">Submit resolution</button>
      </div>
    </div>
  );
}
