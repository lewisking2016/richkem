import { WifiOff } from "lucide-react";
import Link from "next/link";

export const metadata = { title: "You're offline" };

export default function Offline() {
  return (
    <div className="grid place-items-center py-20 text-center">
      <span className="bg-gray-100 grid h-16 w-16 place-items-center rounded-full text-muted"><WifiOff size={30} /></span>
      <h1 className="mt-4 text-2xl font-extrabold">You're offline</h1>
      <p className="mt-1 max-w-sm text-sm text-muted">
        No internet connection. Anything you already placed — orders, escrow, payouts — is safe on our servers and will sync when you reconnect.
      </p>
      <Link href="/" className="btn btn-primary mt-6">Retry</Link>
    </div>
  );
}
