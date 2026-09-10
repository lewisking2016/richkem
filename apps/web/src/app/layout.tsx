import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import BottomNav from "@/components/bottom-nav";

export const metadata: Metadata = {
  title: { default: "Richkem — Kenya's trusted marketplace", template: "%s · Richkem" },
  description: "Buy products, book services and shop high-value assets with M-Pesa escrow protection.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen pb-16 lg:pb-0">
        <Header />
        <main className="mx-auto min-h-[60vh] max-w-6xl px-4 py-5">{children}</main>
        <Footer />
        <BottomNav />
      </body>
    </html>
  );
}
