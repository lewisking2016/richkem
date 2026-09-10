import Link from "next/link";
import { Ban, MessageCircle } from "lucide-react";

export const metadata = { title: "Account suspended" };

export default function Suspended() {
  return (
    <div className="mx-auto max-w-md py-16 text-center">
      <span className="bg-danger-50 mx-auto grid h-16 w-16 place-items-center rounded-full text-danger"><Ban size={30} /></span>
      <h1 className="mt-4 text-2xl font-extrabold">Account suspended</h1>
      <p className="mt-2 text-sm text-muted">
        Your account was suspended for violating the marketplace terms — usually unresolved disputes or verification failures.
      </p>
      <div className="card mt-5 p-5 text-left text-sm">
        <div className="font-extrabold">What still works</div>
        <ul className="mt-2 space-y-1.5 text-muted">
          <li>· You can sign in and talk to our trust team</li>
          <li>· Money already in escrow follows normal release rules</li>
          <li>· Completed-order funds still pay out on schedule</li>
        </ul>
        <div className="mt-3 font-extrabold">What's paused</div>
        <ul className="mt-2 space-y-1.5 text-muted">
          <li>· New listings and new orders</li>
          <li>· Wallet withdrawals</li>
        </ul>
      </div>
      <div className="mt-5 grid gap-2">
        <Link href="/help" className="btn btn-primary"><MessageCircle size={15} /> Appeal to the trust team</Link>
        <Link href="/" className="btn btn-outline">Browse without an account</Link>
      </div>
    </div>
  );
}
