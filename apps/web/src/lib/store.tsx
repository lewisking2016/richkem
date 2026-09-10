"use client";

import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";

export interface CartItem {
  id: string;
  title: string;
  price: number;
  image: string;
  seller: string;
  slug: string;
  kind: "product" | "service";
  qty: number;
}

interface StoreShape {
  cart: CartItem[];
  saved: string[];
  ready: boolean;
  addToCart: (item: Omit<CartItem, "qty">, qty?: number) => void;
  removeFromCart: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
  toggleSaved: (id: string) => void;
  isSaved: (id: string) => boolean;
}

const StoreCtx = createContext<StoreShape | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [saved, setSaved] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const c = localStorage.getItem("richkem.cart");
      const s = localStorage.getItem("richkem.saved");
      if (c) setCart(JSON.parse(c));
      if (s) setSaved(JSON.parse(s));
    } catch {}
    setReady(true);
  }, []);

  useEffect(() => { if (ready) localStorage.setItem("richkem.cart", JSON.stringify(cart)); }, [cart, ready]);
  useEffect(() => { if (ready) localStorage.setItem("richkem.saved", JSON.stringify(saved)); }, [saved, ready]);

  const api = useMemo<StoreShape>(() => ({
    cart,
    saved,
    ready,
    addToCart: (item, qty = 1) =>
      setCart((prev) => {
        const ex = prev.find((p) => p.id === item.id);
        if (ex) return prev.map((p) => (p.id === item.id ? { ...p, qty: p.qty + qty } : p));
        return [...prev, { ...item, qty }];
      }),
    removeFromCart: (id) => setCart((prev) => prev.filter((p) => p.id !== id)),
    setQty: (id, qty) =>
      setCart((prev) =>
        qty <= 0 ? prev.filter((p) => p.id !== id) : prev.map((p) => (p.id === id ? { ...p, qty } : p))
      ),
    clearCart: () => setCart([]),
    cartCount: cart.reduce((a, i) => a + i.qty, 0),
    cartTotal: cart.reduce((a, i) => a + i.qty * i.price, 0),
    toggleSaved: (id) => setSaved((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id])),
    isSaved: (id) => saved.includes(id),
  }), [cart, saved, ready]);

  return <StoreCtx.Provider value={api}>{children}</StoreCtx.Provider>;
}

export function useStore(): StoreShape {
  const ctx = useContext(StoreCtx);
  if (!ctx) throw new Error("useStore must be used inside StoreProvider");
  return ctx;
}
