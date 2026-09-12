import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import BottomNav from "@/components/bottom-nav";
import { StoreProvider } from "@/lib/store";

export const metadata: Metadata = {
  title: { default: "Richkem — Kenya's trusted marketplace", template: "%s · Richkem" },
  description: "Buy products, book services and shop high-value assets with M-Pesa escrow protection.",
};

const noFlash = `try{var t=localStorage.getItem("richkem.theme");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlash }} />
      </head>
      <body className="min-h-screen pb-16 lg:pb-0">
        <StoreProvider>
          <Header />
          <main className="mx-auto min-h-[60vh] max-w-6xl px-4 py-5">{children}</main>
          <Footer />
          <BottomNav />
        </StoreProvider>
      </body>
    </html>
  );
}
