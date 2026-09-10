export type Kind = "product" | "service";
export type ProductKind = "STANDARD" | "VEHICLE" | "AVIATION_MARINE" | "VIRTUAL_TOUR";
export type ProductStatus = "ACTIVE" | "DRAFT" | "SUSPENDED";
export type OrderStatus =
  | "PENDING" | "PAID_HELD" | "SHIPPED" | "DELIVERED" | "COMPLETED"
  | "DISPUTED" | "REFUNDED" | "CANCELLED";
export type KycStatus = "PENDING" | "APPROVED" | "REJECTED";
export type LedgerEntryType = "HOLD" | "RELEASE" | "REFUND" | "FEE";

export interface Seller {
  id: string;
  name: string;
  slug: string;
  verified: boolean;
  rating: number;
  reviews: number;
  location: string;
  memberSince: string;
}

export interface Listing {
  id: string;
  kind: Kind;
  productKind?: ProductKind;
  title: string;
  slug: string;
  price: number;          // KES
  compareAt?: number;     // KES
  category: string;
  categorySlug: string;
  condition?: string;
  image: string;
  images?: string[];
  seller: Seller;
  location: string;
  postedAt: string;
  featured?: boolean;
  official?: boolean;
  escrow: boolean;
  description: string;
  specs?: Record<string, string>;
  status?: ProductStatus;
  stock?: number;
}

export interface LedgerRow {
  id: string;
  orderId: string;
  entryType: LedgerEntryType;
  amount: number;
  balanceAfter: number;
  ref: string;
  date: string;
}

export interface OrderRow {
  ref: string;
  item: string;
  image: string;
  price: number;
  status: OrderStatus;
  seller: string;
  date: string;
  escrow: "HELD" | "RELEASED" | "REFUNDED" | "—";
}

export interface KycRow {
  id: string;
  seller: string;
  type: string;
  submitted: string;
  status: KycStatus;
}

const img = (seed: string, w = 640, h = 480) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

const seller = (
  id: string, name: string, slug: string, verified: boolean,
  rating: number, reviews: number, location: string, memberSince: string
): Seller => ({ id, name, slug, verified, rating, reviews, location, memberSince });

export const sellers: Record<string, Seller> = {
  official: seller("s1", "Richkem Official Store", "richkem-official", true, 4.8, 12480, "Nairobi CBD", "2019"),
  phones: seller("s2", "PhoneHub Kenya", "phonehub-kenya", true, 4.6, 3120, "Nairobi CBD", "2020"),
  motors: seller("s3", "AutoDeal Motors", "autodeal-motors", true, 4.7, 890, "Mombasa Road", "2021"),
  home: seller("s4", "Home Essentials KE", "home-essentials", false, 4.3, 540, "Nakuru", "2022"),
  clinic: seller("s5", "Dr. Amina Clinic", "dr-amina-clinic", true, 4.9, 2100, "Westlands, Nairobi", "2018"),
  plumber: seller("s6", "FixIt Plumbing", "fixit-plumbing", true, 4.5, 760, "Kilimani, Nairobi", "2020"),
  law: seller("s7", "Ochieng & Co. Advocates", "ochieng-advocates", true, 4.8, 410, "Upper Hill, Nairobi", "2017"),
  tech: seller("s8", "TechMed Technicians", "techmed", false, 4.2, 190, "Eldoret", "2023"),
};

export const categories = [
  { name: "Phones & Tablets", slug: "phones-tablets", count: 12450 },
  { name: "Electronics", slug: "electronics", count: 9830 },
  { name: "Vehicles", slug: "vehicles", count: 2140 },
  { name: "Home & Office", slug: "home-office", count: 15600 },
  { name: "Fashion", slug: "fashion", count: 22310 },
  { name: "Health & Beauty", slug: "health-beauty", count: 8760 },
  { name: "Aviation & Marine", slug: "aviation-marine", count: 48 },
  { name: "Property", slug: "property", count: 3320 },
  { name: "Services", slug: "services", count: 5640 },
  { name: "Jobs & Gigs", slug: "jobs", count: 1980 },
];

export const serviceCategories = [
  { name: "Doctors & Clinics", slug: "doctors" },
  { name: "Plumbers", slug: "plumbers" },
  { name: "Lawyers", slug: "lawyers" },
  { name: "Mechanics", slug: "mechanics" },
  { name: "Electricians", slug: "electricians" },
  { name: "Cleaning", slug: "cleaning" },
  { name: "Tutors", slug: "tutors" },
  { name: "Event & Catering", slug: "events" },
];

function listing(
  id: string, kind: Kind, title: string, price: number, compareAt: number | undefined,
  category: string, categorySlug: string, sellerKey: keyof typeof sellers,
  seed: string, postedAt: string, opts: Partial<Listing> = {}
): Listing {
  const s = sellers[sellerKey];
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "").slice(0, 70);
  return {
    id, kind, title, slug, price, compareAt, category, categorySlug,
    image: img(seed), images: [img(seed), img(seed + "b"), img(seed + "c")],
    seller: s, location: s.location, postedAt,
    escrow: true, description: `${title} — quality guaranteed. Pay via M-Pesa with escrow protection: your money is held safely until you confirm delivery. Fast delivery countrywide.`,
    ...opts,
  };
}

export const listings: Listing[] = [
  listing("l1", "product", "Samsung Galaxy A55 5G 256GB — Awesome Navy", 42999, 49999, "Phones & Tablets", "phones-tablets", "official", "phone1", "2h ago", { featured: true, official: true, condition: "Brand New", productKind: "STANDARD", specs: { Storage: "256GB", RAM: "8GB", Battery: "5000mAh", Warranty: "24 months", Screen: "6.6\" Super AMOLED" }, stock: 34 }),
  listing("l2", "product", "iPhone 13 128GB — Brand New Sealed", 98500, 112000, "Phones & Tablets", "phones-tablets", "phones", "phone2", "5h ago", { featured: true, condition: "Brand New", productKind: "STANDARD", specs: { Storage: "128GB", Battery: "3240mAh", Warranty: "12 months" }, stock: 12 }),
  listing("l3", "product", "HP EliteBook 840 G8 — i7 16GB 512GB SSD", 78500, 89999, "Electronics", "electronics", "official", "laptop1", "1d ago", { official: true, condition: "Brand New", productKind: "STANDARD", specs: { CPU: "Intel i7 11th Gen", RAM: "16GB", Storage: "512GB SSD" }, stock: 8 }),
  listing("l4", "product", "Toyota Harrier 2015 — Pearl White, 78,000km", 2850000, 3100000, "Vehicles", "vehicles", "motors", "car1", "3h ago", { featured: true, condition: "Foreign Used", productKind: "VEHICLE", escrow: true, specs: { Year: "2015", Mileage: "78,000 km", Transmission: "Automatic", Fuel: "Petrol", Drive: "2WD" } }),
  listing("l5", "product", "Isuzu NPR Truck 2018 — 4T Fridge Body", 6500000, undefined, "Vehicles", "vehicles", "motors", "truck1", "2d ago", { productKind: "VEHICLE", specs: { Year: "2018", Load: "4 Tonnes", Body: "Refrigerated" } }),
  listing("l6", "product", "Cessna 172 Skyhawk — 2006, Excellent Logs", 18500000, undefined, "Aviation & Marine", "aviation-marine", "motors", "plane1", "1w ago", { productKind: "AVIATION_MARINE", specs: { Year: "2006", TT: "3,410 hrs", Engine: "Lycoming IO-360", Avionics: "Garmin G1000" } }),
  listing("l7", "product", "Sea-Doo Jet Ski GTX 230 — 2021", 2350000, 2600000, "Aviation & Marine", "aviation-marine", "motors", "jetski1", "4d ago", { productKind: "AVIATION_MARINE" }),
  listing("l8", "product", "7-Seater Fabric Sofa Set — Grey", 38500, 45000, "Home & Office", "home-office", "home", "sofa1", "6h ago", { featured: true, condition: "Brand New", productKind: "STANDARD", stock: 21 }),
  listing("l9", "product", "Hisense 43\" Smart FHD TV", 23999, 27999, "Electronics", "electronics", "official", "tv1", "8h ago", { official: true, condition: "Brand New", productKind: "STANDARD", stock: 47 }),
  listing("l10", "product", "Virtual Tour: Karen 4BR Townhouse on ½ Acre", 2500, undefined, "Property", "property", "official", "house1", "1d ago", { productKind: "VIRTUAL_TOUR", escrow: false, description: "Book an immersive guided virtual tour of this Karen townhouse. 360° walkthrough with an agent, live Q&A. Fully refundable if you book a physical viewing within 14 days." }),
  listing("l11", "product", "Nike Air Force 1 '07 — White, All Sizes", 8999, 10999, "Fashion", "fashion", "official", "shoes1", "3h ago", { official: true, condition: "Brand New", productKind: "STANDARD", stock: 120 }),
  listing("l12", "product", "Ceramic Non-stick Cookware Set — 12pc", 6499, 8999, "Home & Office", "home-office", "home", "pot1", "1d ago", { condition: "Brand New", productKind: "STANDARD", stock: 63 }),

  listing("v1", "service", "Full Body Medical Check-up — Same Day Results", 6500, 8500, "Doctors & Clinics", "doctors", "clinic", "clinic1", "1h ago"),
  listing("v2", "service", "24/7 Emergency Plumbing & Drain Unblocking", 1500, undefined, "Plumbers", "plumbers", "plumber", "plumb1", "30m ago"),
  listing("v3", "service", "Conveyancing & Land Purchase Legal Support", 45000, undefined, "Lawyers", "lawyers", "law", "law1", "2h ago"),
  listing("v4", "service", "Full Car Service & Computer Diagnostics", 4500, 5500, "Mechanics", "mechanics", "motors", "mech1", "5h ago"),
  listing("v5", "service", "Certified Electrician — House Wiring & Solar", 3000, undefined, "Electricians", "electricians", "tech", "sparky1", "1d ago"),
  listing("v6", "service", "Deep Cleaning — 3BR House (Team of 4)", 5500, 7000, "Cleaning", "cleaning", "tech", "clean1", "6h ago"),
];

export function findListing(slug: string): Listing | undefined {
  return listings.find((l) => l.slug === slug || l.id === slug);
}

export const products = listings.filter((l) => l.kind === "product");
export const services = listings.filter((l) => l.kind === "service");
export const featured = listings.filter((l) => l.featured);

export const flashDeals = [listings[0], listings[8], listings[10], listings[11], listings[1], listings[2]];

export const buyerOrders: OrderRow[] = [
  { ref: "RK-88214", item: "Samsung Galaxy A55 5G 256GB", image: img("phone1", 200, 200), price: 42999, status: "SHIPPED", seller: "Richkem Official Store", date: "Sep 8, 2026", escrow: "HELD" },
  { ref: "RK-88102", item: "Hisense 43\" Smart FHD TV", image: img("tv1", 200, 200), price: 23999, status: "DELIVERED", seller: "Richkem Official Store", date: "Sep 5, 2026", escrow: "HELD" },
  { ref: "RK-87940", item: "7-Seater Fabric Sofa Set — Grey", image: img("sofa1", 200, 200), price: 38500, status: "COMPLETED", seller: "Home Essentials KE", date: "Aug 28, 2026", escrow: "RELEASED" },
  { ref: "RK-87521", item: "Nike Air Force 1 '07", image: img("shoes1", 200, 200), price: 8999, status: "DISPUTED", seller: "Richkem Official Store", date: "Aug 24, 2026", escrow: "HELD" },
  { ref: "RK-87110", item: "Ceramic Cookware Set — 12pc", image: img("pot1", 200, 200), price: 6499, status: "REFUNDED", seller: "Home Essentials KE", date: "Aug 19, 2026", escrow: "REFUNDED" },
];

export const walletLedger: LedgerRow[] = [
  { id: "lg1", orderId: "RK-87940", entryType: "RELEASE", amount: 38500, balanceAfter: 512340, ref: "ESC-2210", date: "Aug 30, 2026 · 14:02" },
  { id: "lg2", orderId: "RK-87940", entryType: "FEE", amount: -1925, balanceAfter: 512340, ref: "ESC-2210", date: "Aug 30, 2026 · 14:02" },
  { id: "lg3", orderId: "RK-88102", entryType: "HOLD", amount: 23999, balanceAfter: 473340, ref: "ESC-2195", date: "Sep 5, 2026 · 09:41" },
  { id: "lg4", orderId: "RK-87521", entryType: "HOLD", amount: 8999, balanceAfter: 449341, ref: "ESC-2181", date: "Aug 24, 2026 · 11:15" },
  { id: "lg5", orderId: "RK-87110", entryType: "REFUND", amount: -6499, balanceAfter: 440342, ref: "ESC-2160", date: "Aug 20, 2026 · 16:48" },
];

export const merchantKyc: KycRow[] = [
  { id: "k1", seller: "Home Essentials KE", type: "Business Permit", submitted: "Sep 9, 2026", status: "PENDING" },
  { id: "k2", seller: "TechMed Technicians", type: "National ID", submitted: "Sep 9, 2026", status: "PENDING" },
  { id: "k3", seller: "AutoDeal Motors", type: "Trade License", submitted: "Sep 8, 2026", status: "APPROVED" },
  { id: "k4", seller: "FixIt Plumbing", type: "National ID", submitted: "Sep 7, 2026", status: "REJECTED" },
];

export const money = (n: number) =>
  "KES " + n.toLocaleString("en-KE");
