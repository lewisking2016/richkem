"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ShieldCheck, ChevronRight, ChevronLeft, BadgeCheck, Timer, Ship, Stethoscope, Package } from "lucide-react";

const slides = [
  {
    title: ["Kenya's marketplace", "that protects", "every shilling."],
    sub: "Products, services, vehicles, containers and verified professionals. Your money is held safely until you confirm delivery — no scams, no ghosting.",
    card: {
      icon: ShieldCheck,
      head: "How escrow works",
      tint: "bg-money",
      steps: [
        { t: "You pay via M-Pesa", d: "Money goes to Richkem Escrow — not the seller" },
        { t: "Seller ships / delivers", d: "They only ship after payment is verified" },
        { t: "You confirm, they get paid", d: "Not happy? Dispute → full refund path" },
      ],
      cta: { label: "See the guarantee", href: "/help/escrow" },
    },
  },
  {
    title: ["Containers, trucks", "and freight —", "with milestone pay."],
    sub: "20FT and 40FT containers, haulage on the Northern Corridor, sea freight per CBM. Funds release per delivery milestone, not on promises.",
    card: {
      icon: Ship,
      head: "Shipping with escrow",
      tint: "bg-brand",
      steps: [
        { t: "Quote & booking", d: "Fixed rate, escrow-locked before loading" },
        { t: "In transit", d: "GPS-tracked, milestone updates on your order" },
        { t: "Proof of delivery", d: "Funds release only after POD confirmation" },
      ],
      cta: { label: "Browse containers", href: "/market/containers" },
    },
  },
  {
    title: ["Book verified pros.", "Pay only after", "the work is done."],
    sub: "Doctors, lawyers, engineers, CPAs — ID and license verified. Deposit held in escrow; no-show means a full refund within 24 hours.",
    card: {
      icon: Stethoscope,
      head: "Booking protection",
      tint: "bg-jiji",
      steps: [
        { t: "Book & deposit", d: "Deposit held by Richkem, not the provider" },
        { t: "Session delivered", d: "Licensed, KYC-verified professional" },
        { t: "Release or refund", d: "No-show = full refund within 24h" },
      ],
      cta: { label: "Find a professional", href: "/professionals" },
    },
  },
  {
    title: ["Sell anything.", "Get paid every", "Friday. Risk-free."],
    sub: "Shops, individual professionals and companies. Buyers pay into escrow before you ship — 5% fee only when your money is released.",
    card: {
      icon: Package,
      head: "Seller promise",
      tint: "bg-ink",
      steps: [
        { t: "No unpaid orders", d: "We verify the money before you ship" },
        { t: "Friday M-Pesa payouts", d: "Direct to your wallet, every week" },
        { t: "Dispute cover", d: "Evidence-based resolution, both sides heard" },
      ],
      cta: { label: "Start selling", href: "/sell" },
    },
  },
];

export default function HeroSlider() {
  const [i, setI] = useState(0);

  // Always-on automation: restart the clock on every slide change (manual or auto)
  // so each slide gets a full 6s, and the slider never stalls while hovered.
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, [i]);

  const s = slides[i];
  const CardIcon = s.card.icon;

  return (
    <section
      className="card relative overflow-hidden border-0 bg-ink text-white"
      aria-roledescription="carousel"
      aria-label="Richkem highlights"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-money/20 blur-3xl" />

      <div className="relative grid gap-8 p-6 md:grid-cols-[1.2fr_1fr] md:p-12">
        {/* LEFT — animated title */}
        <div key={i} className="animate-[fadeInUp_.5s_ease-out]">
          <span className="badge border border-white/15 bg-white/10 text-white">
            <ShieldCheck size={12} className="text-money" /> EVERY ORDER ESCROW-PROTECTED
          </span>
          <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight md:text-6xl">
            {s.title[0]}<br />
            <span className="text-brand">{s.title[1]}</span><br />
            {s.title[2]}
          </h1>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/65">{s.sub}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/search" className="btn btn-primary">Start shopping <ChevronRight size={16} /></Link>
            <Link href="/services" className="btn h-[46px] border border-white/20 bg-white/5 px-5 text-white hover:bg-white/10">Book a service</Link>
          </div>

          <div className="mt-8 grid max-w-lg grid-cols-3 gap-3 text-center">
            {[
              { icon: <ShieldCheck size={15} className="text-money" />, n: "100%", t: "escrow on orders" },
              { icon: <BadgeCheck size={15} className="text-brand" />, n: "12k+", t: "KYC-verified sellers" },
              { icon: <Timer size={15} className="text-white/70" />, n: "24h", t: "refund promise" },
            ].map((x) => (
              <div key={x.t} className="rounded-xl border border-white/10 bg-white/5 px-2 py-3">
                <div className="flex items-center justify-center gap-1.5 text-lg font-extrabold">{x.icon}{x.n}</div>
                <div className="mt-0.5 text-[10.5px] uppercase tracking-wide text-white/55">{x.t}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — swapping explainer card */}
        <div className="relative flex items-center">
          <div key={"c" + i} className="glass w-full rounded-2xl border border-white/12 p-5 text-ink shadow-(--shadow-pop) md:p-6 animate-[fadeInUp_.5s_ease-out]">
            <div className="flex items-center gap-2">
              <span className={`${s.card.tint} grid h-10 w-10 place-items-center rounded-xl text-white`}><CardIcon size={20} /></span>
              <div>
                <div className="font-extrabold">{s.card.head}</div>
                <div className="text-xs text-muted">escrow protection</div>
              </div>
            </div>
            <ol className="mt-4 space-y-3">
              {s.card.steps.map((st, n) => (
                <li key={st.t} className="flex gap-3">
                  <span className="bg-brand grid h-7 w-7 shrink-0 place-items-center rounded-full text-sm font-black text-white">{n + 1}</span>
                  <div>
                    <div className="text-sm font-bold">{st.t}</div>
                    <div className="text-xs text-muted">{st.d}</div>
                  </div>
                </li>
              ))}
            </ol>
            <Link href={s.card.cta.href} className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand hover:underline">
              {s.card.cta.label} <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* CONTROLS */}
      <div className="absolute bottom-5 left-6 z-10 flex items-center gap-2 md:left-12">
        <button aria-label="Previous slide" onClick={() => setI((i - 1 + slides.length) % slides.length)}
          className="grid h-8 w-8 place-items-center rounded-full border border-white/15 bg-white/5 hover:bg-white/15">
          <ChevronLeft size={15} />
        </button>
        <button aria-label="Next slide" onClick={() => setI((i + 1) % slides.length)}
          className="grid h-8 w-8 place-items-center rounded-full border border-white/15 bg-white/5 hover:bg-white/15">
          <ChevronRight size={15} />
        </button>
      </div>
      <div className="absolute bottom-6 right-6 z-10 flex gap-1.5 md:right-12">
        {slides.map((_, n) => (
          <button key={n} aria-label={`Go to slide ${n + 1}`} onClick={() => setI(n)}
            className={`h-1.5 rounded-full transition-all ${n === i ? "bg-brand w-7" : "w-3 bg-white/25 hover:bg-white/45"}`} />
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
