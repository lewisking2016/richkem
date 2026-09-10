import Link from "next/link";
import { ReactNode } from "react";
import { sidebarIcons } from "./icons";

export interface NavItem { href: string; label: string; icon: string }

export function AccountShell({
  title, name, meta, items, active, children, accent = "brand",
}: {
  title: string; name: string; meta: string; items: NavItem[];
  active: string; children: ReactNode; accent?: "brand" | "jiji" | "ink";
}) {
  const accentBg = accent === "jiji" ? "bg-jiji" : accent === "ink" ? "bg-ink" : "bg-brand";
  return (
    <div className="grid gap-6 lg:grid-cols-[230px_1fr]">
      <aside className="card h-max p-3 max-lg:order-2">
        <div className="flex items-center gap-3 p-2">
          <span className={`${accentBg} grid h-10 w-10 place-items-center rounded-full font-black text-white`}>{name[0]}</span>
          <div className="min-w-0">
            <div className="truncate text-sm font-bold">{name}</div>
            <div className="truncate text-xs text-muted">{meta}</div>
          </div>
        </div>
        <div className="mt-2 border-t pt-2">
          <div className="px-2 pb-1 text-[11px] font-extrabold uppercase tracking-wide text-muted">{title}</div>
          {items.map((i) => {
            const Icon = sidebarIcons[i.icon] ?? sidebarIcons.dashboard;
            return (
              <Link key={i.href} href={i.href}
                className={`flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-semibold ${i.href === active ? `${accentBg} text-white` : "text-muted hover:bg-gray-50 hover:text-ink"}`}>
                <Icon size={17} strokeWidth={2.1} />{i.label}
              </Link>
            );
          })}
        </div>
      </aside>
      <section className="min-w-0 max-lg:order-1">{children}</section>
    </div>
  );
}

export function StatCard({ n, t, sub, money: isMoney, tone = "default" }: {
  n: string; t: string; sub?: string; money?: boolean; tone?: "default" | "good" | "warn" | "bad";
}) {
  const tones = { default: "", good: "text-money", warn: "text-warn", bad: "text-danger" };
  return (
    <div className="card p-4">
      <div className={`text-xl font-extrabold ${tones[tone]}`}>{n}</div>
      <div className="text-xs font-semibold">{t}</div>
      {sub && <div className="text-[11px] text-muted">{sub}</div>}
    </div>
  );
}

export function StatusPill({ s }: { s: string }) {
  const map: Record<string, string> = {
    COMPLETED: "bg-money-50 text-money", RELEASED: "bg-money-50 text-money",
    PAID_HELD: "bg-jiji-50 text-jiji", SHIPPED: "bg-jiji-50 text-jiji",
    HELD: "bg-jiji-50 text-jiji", PENDING: "bg-warn-50 text-warn",
    DELIVERED: "bg-brand-50 text-brand", DISPUTED: "bg-danger-50 text-danger",
    REFUNDED: "bg-danger-50 text-danger", CANCELLED: "bg-gray-100 text-muted",
    APPROVED: "bg-money-50 text-money", REJECTED: "bg-danger-50 text-danger",
    "—": "bg-gray-100 text-muted",
  };
  return <span className={`badge ${map[s] ?? "bg-gray-100 text-muted"}`}>{s.replace("_", " ")}</span>;
}
