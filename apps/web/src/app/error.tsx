"use client";

import Link from "next/link";
import { TriangleAlert } from "lucide-react";

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="grid place-items-center py-20 text-center">
      <span className="bg-warn-50 grid h-16 w-16 place-items-center rounded-full text-warn"><TriangleAlert size={30} /></span>
      <div className="mt-4 text-6xl font-black text-warn">500</div>
      <h1 className="mt-2 text-2xl font-extrabold">Something went wrong</h1>
      <p className="mt-1 max-w-sm text-sm text-muted">
        An unexpected error occurred on our side. Your money and orders are safe — escrow balances are never affected by display errors.
      </p>
      <div className="mt-6 flex gap-2">
        <button onClick={reset} className="btn btn-primary">Try again</button>
        <Link href="/" className="btn btn-outline">Go home</Link>
      </div>
    </div>
  );
}
