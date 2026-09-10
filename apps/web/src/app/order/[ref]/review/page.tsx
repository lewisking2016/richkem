"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Star, Camera, Send, BadgeCheck } from "lucide-react";

export default function ReviewPage() {
  const { ref } = useParams<{ ref: string }>();
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [done, setDone] = useState(false);

  const aspects = [
    { k: "Item as described", v: 5 },
    { k: "Delivery speed", v: 4 },
    { k: "Seller communication", v: 5 },
  ];

  if (done) {
    return (
      <div className="mx-auto max-w-md py-16 text-center">
        <span className="bg-money mx-auto grid h-16 w-16 place-items-center rounded-full text-white"><Star size={30} /></span>
        <h1 className="mt-4 text-2xl font-extrabold">Review published</h1>
        <p className="mt-2 text-sm text-muted">Thanks — honest reviews are what make the marketplace safe for everyone.</p>
        <Link href="/account/orders" className="btn btn-primary mt-6">Back to my orders</Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-lg">
      <h1 className="mb-1 text-2xl font-extrabold">Rate your order</h1>
      <p className="mb-5 text-sm text-muted">{ref} · Samsung Galaxy A55 5G · Richkem Official Store</p>

      <div className="card p-5">
        <div className="text-center">
          <div className="flex justify-center gap-1.5" role="radiogroup" aria-label="Overall rating">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                role="radio"
                aria-checked={rating === n}
                aria-label={`${n} star${n > 1 ? "s" : ""}`}
                onMouseEnter={() => setHover(n)}
                onMouseLeave={() => setHover(0)}
                onClick={() => setRating(n)}
                className="transition-transform hover:scale-110 active:scale-95"
              >
                <Star size={36} className={(hover || rating) >= n ? "fill-amber-400 text-amber-400" : "text-gray-300"} />
              </button>
            ))}
          </div>
          <div className="mt-2 text-sm font-bold">
            {["", "Very poor", "Poor", "Okay", "Good", "Excellent"][hover || rating] || "Tap to rate"}
          </div>
        </div>

        <div className="mt-5 space-y-2">
          {aspects.map((a) => (
            <div key={a.k} className="flex items-center justify-between rounded-lg border p-3 text-sm">
              <span className="font-semibold">{a.k}</span>
              <span className="flex gap-0.5">{Array.from({ length: a.v }).map((_, i) => <Star key={i} size={13} className="fill-amber-400 text-amber-400" />)}</span>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <label className="label">Your review</label>
          <textarea className="input !h-28 py-3" placeholder="What should other buyers know? Was the item as described? How was delivery?" />
        </div>

        <button className="btn btn-outline mt-3 w-full border-dashed"><Camera size={16} /> Add photos (optional)</button>

        <button onClick={() => setDone(true)} disabled={rating === 0} className="btn btn-primary mt-4 w-full disabled:opacity-50">
          <Send size={15} /> Publish review
        </button>
        <p className="mt-2 flex items-center justify-center gap-1.5 text-center text-[11px] text-muted">
          <BadgeCheck size={12} className="text-money" /> Only verified buyers of this order can review
        </p>
      </div>
    </div>
  );
}
