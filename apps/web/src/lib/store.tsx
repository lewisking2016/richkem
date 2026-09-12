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

export type OrderStatus = "PENDING" | "PAID_HELD" | "SHIPPED" | "DELIVERED" | "COMPLETED" | "DISPUTED" | "REFUNDED" | "CANCELLED";

export interface UserOrder {
  ref: string;
  item: string;
  image: string;
  price: number;
  status: OrderStatus;
  seller: string;
  date: string;
  escrow: "HELD" | "RELEASED" | "REFUNDED" | "—";
}

export interface UserListing {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
  stock: number;
  status: "ACTIVE" | "DRAFT";
  createdAt: string;
}

export interface UserBooking {
  id: string;
  what: string;
  who: string;
  when: string;
  deposit: number;
  status: "PENDING" | "PAID_HELD" | "COMPLETED" | "CANCELLED";
}

interface StoreShape {
  cart: CartItem[];
  saved: string[];
  orders: UserOrder[];
  listings: UserListing[];
  bookings: UserBooking[];
  ready: boolean;
  addToCart: (item: Omit<CartItem, "qty">, qty?: number) => void;
  removeFromCart: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
  toggleSaved: (id: string) => void;
  isSaved: (id: string) => boolean;
  placeOrder: (delivery: number) => UserOrder;
  updateOrder: (ref: string, patch: Partial<UserOrder>) => void;
  addListing: (l: Omit<UserListing, "id" | "createdAt">) => void;
  addBooking: (b: Omit<UserBooking, "id">) => void;
  updateBookingStatus: (id: string, status: UserBooking["status"]) => void;
}

const StoreCtx = createContext<StoreShape | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [saved, setSaved] = useState<string[]>([]);
  const [orders, setOrders] = useState<UserOrder[]>([]);
  const [listings, setListings] = useState<UserListing[]>([]);
  const [bookings, setBookings] = useState<UserBooking[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const c = localStorage.getItem("richkem.cart");
      const s = localStorage.getItem("richkem.saved");
      const o = localStorage.getItem("richkem.orders");
      const l = localStorage.getItem("richkem.listings");
      const b = localStorage.getItem("richkem.bookings");
      if (c) setCart(JSON.parse(c));
      if (s) setSaved(JSON.parse(s));
      if (o) setOrders(JSON.parse(o));
      if (l) setListings(JSON.parse(l));
      if (b) setBookings(JSON.parse(b));
    } catch {}
    setReady(true);
  }, []);

  useEffect(() => { if (ready) localStorage.setItem("richkem.cart", JSON.stringify(cart)); }, [cart, ready]);
  useEffect(() => { if (ready) localStorage.setItem("richkem.saved", JSON.stringify(saved)); }, [saved, ready]);
  useEffect(() => { if (ready) localStorage.setItem("richkem.orders", JSON.stringify(orders)); }, [orders, ready]);
  useEffect(() => { if (ready) localStorage.setItem("richkem.listings", JSON.stringify(listings)); }, [listings, ready]);
  useEffect(() => { if (ready) localStorage.setItem("richkem.bookings", JSON.stringify(bookings)); }, [bookings, ready]);

  const api = useMemo<StoreShape>(() => ({
    cart,
    saved,
    orders,
    listings,
    bookings,
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
    placeOrder: (delivery) => {
      const ref = "RK-" + Math.floor(10000 + Math.random() * 90000);
      const date = new Date().toLocaleDateString("en-KE", { month: "short", day: "numeric", year: "numeric" });
      const newOrders: UserOrder[] = cart.map((i, idx) => ({
        ref: idx === 0 ? ref : `${ref}-${idx + 1}`,
        item: i.title,
        image: i.image,
        price: i.price * i.qty,
        status: "PAID_HELD",
        seller: i.seller,
        date,
        escrow: "HELD",
      }));
      setOrders((prev) => [...newOrders, ...prev]);
      return newOrders[0];
    },
    updateOrder: (ref, patch) =>
      setOrders((prev) => prev.map((o) => (o.ref === ref || o.ref.startsWith(ref + "-") ? { ...o, ...patch } : o))),
    addListing: (l) =>
      setListings((prev) => [{ ...l, id: "u" + Date.now(), createdAt: new Date().toISOString() }, ...prev]),
    addBooking: (b) => setBookings((prev) => [{ ...b, id: "BK-" + Math.floor(300 + Math.random() * 700) }, ...prev]),
    updateBookingStatus: (id, status) =>
      setBookings((prev) => prev.map((b) => (b.id === id ? { ...b, status } : b))),
  }), [cart, saved, orders, listings, bookings, ready]);

  return <StoreCtx.Provider value={api}>{children}</StoreCtx.Provider>;
}

export function useStore(): StoreShape {
  const ctx = useContext(StoreCtx);
  if (!ctx) throw new Error("useStore must be used inside StoreProvider");
  return ctx;
}
