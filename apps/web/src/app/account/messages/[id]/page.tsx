"use client";

import { use, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Send, ShieldCheck, Phone } from "lucide-react";

interface Msg { me: boolean; text: string; time: string }

const seed: Msg[] = [
  { me: false, text: "Karibu Wanjiku! Your Samsung Galaxy A55 is packed and ready.", time: "09:41" },
  { me: true, text: "Asante! When will it arrive in Kilimani?", time: "09:43" },
  { me: false, text: "Courier comes through today between 2–4pm. You'll get an SMS when he's 30 minutes away.", time: "09:45" },
  { me: true, text: "Perfect. The escrow shows HELD — I'll confirm delivery once I've checked it.", time: "09:47" },
  { me: false, text: "Exactly right. Check it well before releasing. Any issue, chat me here first.", time: "09:48" },
];

export default function Conversation({ params }: { params: Promise<{ id: string }> }) {
  use(params);
  const [msgs, setMsgs] = useState<Msg[]>(seed);
  const [draft, setDraft] = useState("");

  const send = () => {
    if (!draft.trim()) return;
    const time = new Date().toLocaleTimeString("en-KE", { hour: "2-digit", minute: "2-digit" });
    setMsgs((m) => [...m, { me: true, text: draft.trim(), time }]);
    setDraft("");
    setTimeout(() => {
      setMsgs((m) => [...m, { me: false, text: "Received — let me check and get back to you in a few minutes.", time }]);
    }, 1200);
  };

  return (
    <div className="mx-auto flex max-w-md flex-col" style={{ height: "calc(100vh - 200px)", minHeight: 480 }}>
      {/* HEADER */}
      <div className="card flex items-center gap-3 p-3">
        <Link href="/account/messages" className="grid h-9 w-9 place-items-center rounded-lg hover:bg-gray-100"><ArrowLeft size={18} /></Link>
        <span className="bg-brand grid h-10 w-10 place-items-center rounded-full font-black text-white">R</span>
        <div className="min-w-0 flex-1">
          <div className="truncate text-sm font-bold">Richkem Official Store</div>
          <div className="text-[11px] text-money">● online · replies in ~5 min</div>
        </div>
        <button className="grid h-9 w-9 place-items-center rounded-lg hover:bg-gray-100"><Phone size={17} className="text-muted" /></button>
      </div>

      {/* MESSAGES */}
      <div className="card mt-2 flex-1 space-y-2.5 overflow-y-auto p-4">
        <div className="text-money mx-auto flex w-fit items-center gap-1.5 rounded-full bg-money-50 px-3 py-1 text-[11px] font-semibold">
          <ShieldCheck size={11} /> Chat history is kept for dispute evidence
        </div>
        {msgs.map((m, i) => (
          <div key={i} className={`flex ${m.me ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[80%] rounded-2xl px-3.5 py-2 text-sm ${m.me ? "bg-brand text-white" : "bg-gray-100 text-ink"}`}>
              <p>{m.text}</p>
              <div className={`mt-0.5 text-right text-[10px] ${m.me ? "text-white/70" : "text-muted"}`}>{m.time}</div>
            </div>
          </div>
        ))}
      </div>

      {/* COMPOSER */}
      <div className="card mt-2 flex items-center gap-2 p-2">
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Type a message…"
          className="input !h-10 flex-1 !border-0 !bg-gray-50"
        />
        <button onClick={send} aria-label="Send" className="btn btn-primary !h-10 !px-3.5"><Send size={16} /></button>
      </div>
    </div>
  );
}
