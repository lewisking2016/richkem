// Ecosystem extension: people (professionals), companies/businesses, containers, machinery, logistics.

export type ProviderType = "person" | "company";
export type ProviderKind =
  | "doctor" | "lawyer" | "engineer" | "consultant" | "architect" | "accountant"
  | "surveyor" | "it" | "driver" | "broker" | "clearing" | "logistics" | "garage" | "clinic" | "shop";

export interface Provider {
  id: string;
  type: ProviderType;
  kind: ProviderKind;
  name: string;            // person name or company name
  slug: string;
  tagline: string;
  specialities: string[];  // e.g. ["Cardiology", "Pediatrics"]
  rating: number;
  reviews: number;
  verified: boolean;
  location: string;
  county: string;
  experienceYears: number;
  priceFrom: number;       // KES
  image: string;
  memberSince: string;
  openingHours?: string;
  teamSize?: number;       // companies
  certifications?: string[];
  bio: string;
}

export type ContainerType = "20FT" | "40FT" | "40FT_HC" | "REEFER" | "FLAT_RACK" | "TANK";
export type VehicleKind = "SALOON" | "SUV" | "PICKUP" | "TRUCK" | "TRAILER" | "BUS" | "MOTORBIKE" | "PLANT";

const img = (seed: string, w = 640, h = 480) => `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const providers: Provider[] = [
  {
    id: "p1", type: "person", kind: "doctor", name: "Dr. Amina Yusuf",
    slug: "dr-amina-yusuf", tagline: "Consultant Physician & Cardiologist",
    specialities: ["Cardiology", "Hypertension", "Diabetes management"],
    rating: 4.9, reviews: 412, verified: true, location: "The Norfolk Towers, Kijabe St", county: "Nairobi",
    experienceYears: 14, priceFrom: 3500, image: img("doctor1"), memberSince: "2019",
    openingHours: "Mon–Fri 8:00–17:00 · Sat 9:00–13:00",
    certifications: ["MBChB UoN", "MMed Internal Medicine", "KMPDC licensed"],
    bio: "Consultant physician with 14 years in public and private practice. Runs a modern cardiac screening unit with same-day lab results.",
  },
  {
    id: "p2", type: "person", kind: "lawyer", name: "Adv. Brian Ochieng",
    slug: "adv-brian-ochieng", tagline: "Conveyancing, Land & Commercial Law",
    specialities: ["Land transfers", "Title searches", "Commercial contracts"],
    rating: 4.8, reviews: 156, verified: true, location: "Rehema House, Kimathi St", county: "Nairobi",
    experienceYears: 11, priceFrom: 15000, image: img("lawyer1"), memberSince: "2020",
    openingHours: "Mon–Fri 8:30–17:00",
    certifications: ["LLB Moi University", "LSK member", "ICPSK certified"],
    bio: "Property and commercial lawyer. Handles land purchases end-to-end: searches, agreements, stamp duty and transfers at the lands registry.",
  },
  {
    id: "p3", type: "person", kind: "engineer", name: "Eng. Faith Wanjiru",
    slug: "eng-faith-wanjiru", tagline: "Civil Engineer — Structural Design & Supervision",
    specialities: ["Structural design", "Site supervision", "Soil tests"],
    rating: 4.7, reviews: 88, verified: true, location: "Nyayo Cafe Rd", county: "Kiambu",
    experienceYears: 9, priceFrom: 25000, image: img("engineer1"), memberSince: "2021",
    openingHours: "Mon–Sat 8:00–18:00",
    certifications: ["BSc Civil Eng JKUAT", "EBK registered", "NCA approved"],
    bio: "Residential and commercial structural engineer. Designs, stamps and supervises builds to county approval standard.",
  },
  {
    id: "p4", type: "person", kind: "accountant", name: "CPA Kevin Mutiso",
    slug: "cpa-kevin-mutiso", tagline: "Tax Filing, KRA Compliance & Bookkeeping",
    specialities: ["KRA returns", "eTIMS onboarding", "Payroll", "Audit prep"],
    rating: 4.6, reviews: 203, verified: true, location: "Moi Avenue", county: "Mombasa",
    experienceYears: 8, priceFrom: 5000, image: img("accountant1"), memberSince: "2021",
    openingHours: "Mon–Sat 8:00–18:00 · Remote OK",
    certifications: ["CPA(K)", "ICAK member", "eTIMS certified"],
    bio: "Helps SMEs stay KRA-compliant: returns, eTIMS, tax health-checks and monthly books. Remote across all 47 counties.",
  },
  {
    id: "p5", type: "person", kind: "it", name: "Dennis Kimani",
    slug: "dennis-kimani-it", tagline: "IT Support, Networks & CCTV Installer",
    specialities: ["Office networks", "CCTV & biometrics", "PC repair"],
    rating: 4.5, reviews: 74, verified: false, location: "Oginga Odinga St", county: "Kisumu",
    experienceYears: 6, priceFrom: 2500, image: img("itguy1"), memberSince: "2023",
    openingHours: "Mon–Sat 8:00–19:00 · Emergency 24/7",
    bio: "Home and office IT: LAN setup, CCTV, access control and same-day repairs. KSh 2,500 call-out covers diagnosis.",
  },
  {
    id: "c1", type: "company", kind: "clearing", name: "Mombasa Road Clearing & Forwarding Ltd",
    slug: "mombasa-road-clearing", tagline: "Customs clearing agent — Port of Mombasa & ICD Nairobi",
    specialities: ["Customs clearance", "Duty calculation", "Container transport"],
    rating: 4.7, reviews: 341, verified: true, location: "Mombasa Road", county: "Nairobi",
    experienceYears: 17, priceFrom: 35000, image: img("clearing1"), memberSince: "2018",
    openingHours: "Mon–Fri 8:00–18:00 · Sat 9:00–14:00", teamSize: 48,
    certifications: ["KRA licensed agent", "KIFWA member", "Bonded warehouse partner"],
    bio: "Full-service clearing and forwarding. We clear 20FT/40FT containers, handle KRA entries, and deliver to any county with our own fleet.",
  },
  {
    id: "c2", type: "company", kind: "logistics", name: "SafariLine Freight Ltd",
    slug: "safariline-freight", tagline: "FTL/LTL trucking, warehousing & last-mile",
    specialities: ["Full truck load", "Cold chain", "Bonded transit"],
    rating: 4.6, reviews: 190, verified: true, location: "Industrial Area", county: "Nairobi",
    experienceYears: 12, priceFrom: 45000, image: img("freight1"), memberSince: "2019",
    openingHours: "24/7 operations desk", teamSize: 120,
    certifications: ["ISO 9001", "Transit bond licensed", "GPS-tracked fleet"],
    bio: "60-truck fleet on Northern Corridor. FTL, LTL, cold chain and warehousing with live GPS tracking for every shipment.",
  },
  {
    id: "c3", type: "company", kind: "garage", name: "Gulf Auto Garage & Bodyworks",
    slug: "gulf-auto-garage", tagline: "Vehicle import inspection, service & bodyworks",
    specialities: ["Pre-purchase inspection", "Engine rebuilds", "Paint & body"],
    rating: 4.5, reviews: 121, verified: true, location: "Baba Dogo Rd", county: "Nairobi",
    experienceYears: 15, priceFrom: 6500, image: img("garage1"), memberSince: "2020",
    openingHours: "Mon–Sat 8:00–18:00", teamSize: 22,
    certifications: ["NCA registered", "Authorised inspection partner"],
    bio: "Pre-purchase inspections for imports and local buys with a written 40-point report. Full service, engine rebuilds and bodyworks.",
  },
  {
    id: "c4", type: "company", kind: "clinic", name: "Nakuru Family Health Centre",
    slug: "nakuru-family-health", tagline: "Outpatient clinic — lab, maternity & dental",
    specialities: ["General outpatient", "Maternity", "Dental", "Lab"],
    rating: 4.8, reviews: 502, verified: true, location: "Kenyatta Ave", county: "Nakuru",
    experienceYears: 21, priceFrom: 1200, image: img("clinic1"), memberSince: "2017",
    openingHours: "24/7 · Maternity & emergency", teamSize: 35,
    certifications: ["KMPDC registered", "NHIF/SHA accredited"],
    bio: "Full outpatient clinic with in-house lab, ultrasound and dental. NHIF/SHA accredited. Emergency line staffed 24/7.",
  },
  {
    id: "c5", type: "company", kind: "shop", name: "Eldoret Agri Machinery Co.",
    slug: "eldoret-agri-machinery", tagline: "Tractors, plant machinery & farm implements",
    specialities: ["Tractor sales", "Harvesters", "Spare parts"],
    rating: 4.4, reviews: 67, verified: true, location: "Kapsoya", county: "Uasin Gishu",
    experienceYears: 13, priceFrom: 850000, image: img("agri1"), memberSince: "2021",
    openingHours: "Mon–Sat 8:00–17:30", teamSize: 18,
    certifications: ["Authorised dealer", "After-sales service centre"],
    bio: "New and second-hand tractors, planters and harvesters with financing options, spare parts and county-wide field service.",
  },
];

export interface EcoListing {
  id: string;
  group: "containers" | "vehicles" | "machinery" | "parts" | "logistics";
  title: string;
  slug: string;
  price: number;
  unit?: string;           // "per trip", "per day", "20FT", etc.
  location: string;
  sellerId: string;        // Provider.id
  image: string;
  specs: Record<string, string>;
  description: string;
  escrow: boolean;
  postedAt: string;
}

export const ecoListings: EcoListing[] = [
  {
    id: "e1", group: "containers", title: "40FT High Cube Container — Cargo Worthy",
    slug: "40ft-high-cube-container-cargo-worthy", price: 850000, unit: "one-time",
    location: "Mombasa", sellerId: "c1", image: img("container40"),
    specs: { Size: "40FT HC", Condition: "Cargo Worthy", CSC: "Valid to 2028", Doors: "Rear double" },
    description: "Wind and water tight 40FT high cube, CSC plated. Ideal for storage or conversion. Haulage to your site arranged countrywide.",
    escrow: true, postedAt: "1d ago",
  },
  {
    id: "e2", group: "containers", title: "20FT Shipping Container — One Trip",
    slug: "20ft-shipping-container-one-trip", price: 520000, unit: "one-time",
    location: "Nairobi ICD", sellerId: "c1", image: img("container20"),
    specs: { Size: "20FT STD", Condition: "One trip", CSC: "Valid to 2029" },
    description: "Barely used 20FT container straight off one voyage. Lock box fitted. Delivery crane truck available.",
    escrow: true, postedAt: "3d ago",
  },
  {
    id: "e3", group: "containers", title: "Reefer 40FT Cold Container — Working",
    slug: "reefer-40ft-cold-container-working", price: 1450000, unit: "one-time",
    location: "Mombasa", sellerId: "c1", image: img("reefer1"),
    specs: { Size: "40FT Reefer", Unit: "Thermo King", Temp: "-25°C to +25°C" },
    description: "Working reefer with serviced Thermo King unit. Cold storage or cold-chain transport ready.",
    escrow: true, postedAt: "5d ago",
  },
  {
    id: "e4", group: "logistics", title: "Container Haulage Mombasa → Nairobi",
    slug: "container-haulage-mombasa-nairobi", price: 65000, unit: "per 20FT",
    location: "Mombasa → Nairobi", sellerId: "c2", image: img("haulage1"),
    specs: { Route: "MSA→NBO", Transit: "18–24h", Fleet: "GPS tracked", Insurance: "Included" },
    description: "Fixed-rate container haulage on the Northern Corridor. Escrow-protected: pay on loading confirmation, funds released at POD.",
    escrow: true, postedAt: "6h ago",
  },
  {
    id: "e5", group: "logistics", title: "Sea Freight China → Mombasa (Consolidated)",
    slug: "sea-freight-china-mombasa", price: 180, unit: "per CBM",
    location: "Guangzhou → Mombasa", sellerId: "c2", image: img("seafreight"),
    specs: { Transit: "30–35 days", Mode: "LCL / FCL", Includes: "Customs + delivery quote" },
    description: "Consolidated sea freight per CBM with customs clearing bundled. Weekly sailings from Guangzhou and Yiwu.",
    escrow: true, postedAt: "2d ago",
  },
  {
    id: "e6", group: "vehicles", title: "Isuzu FRR 2016 — 7T Dropside, Locally Used",
    slug: "isuzu-frr-2016-7t-dropside", price: 4300000, unit: "one-time",
    location: "Nairobi", sellerId: "c3", image: img("frr1"),
    specs: { Year: "2016", Payload: "7 Tonnes", Body: "Dropside", Mileage: "310,000 km" },
    description: "Fleet-maintained FRR with fresh DVLT inspection. Service records available. Inspection report escrow-locked.",
    escrow: true, postedAt: "1d ago",
  },
  {
    id: "e7", group: "vehicles", title: "Massey Ferguson 375 Tractor — Refurbished",
    slug: "massey-ferguson-375-tractor-refurbished", price: 1650000, unit: "one-time",
    location: "Eldoret", sellerId: "c5", image: img("tractor1"),
    specs: { HP: "75", Hours: "4,200 (refurb)", Implements: "Plough + trailer included" },
    description: "Fully refurbished MF 375 with new clutch, tyres and hydraulics. 6-month engine warranty. Free delivery within 200km.",
    escrow: true, postedAt: "4d ago",
  },
  {
    id: "e8", group: "machinery", title: "Excavator 20T — CAT 320D, For Hire",
    slug: "excavator-20t-cat-320d-for-hire", price: 14000, unit: "per day",
    location: "Nakuru", sellerId: "c5", image: img("excavator1"),
    specs: { Model: "CAT 320D", Weight: "20T", Operator: "Included", Fuel: "Client" },
    description: "Certified operator included. Road haulage to site charged per km. Minimum 3-day hire.",
    escrow: true, postedAt: "8h ago",
  },
  {
    id: "e9", group: "parts", title: "Genuine Isuzu NPR Filter & Service Kit",
    slug: "isuzu-npr-filter-service-kit", price: 12500, unit: "kit",
    location: "Nairobi CBD", sellerId: "c3", image: img("parts1"),
    specs: { Fits: "NPR/NQR 2010–2020", Origin: "Japan genuine", Includes: "Oil, fuel, air filters" },
    description: "Genuine service kit with same-day courier countrywide. Bulk discounts for fleets.",
    escrow: true, postedAt: "1d ago",
  },
];

export const providerById = (id: string) => providers.find((p) => p.id === id);
export const providerBySlug = (slug: string) => providers.find((p) => p.slug === slug);
export const ecoBySlug = (slug: string) => ecoListings.find((e) => e.slug === slug);

export const proCategories = [
  { slug: "doctors", label: "Doctors & Health", icon: "🩺" },
  { slug: "lawyers", label: "Lawyers", icon: "⚖️" },
  { slug: "engineers", label: "Engineers", icon: "📐" },
  { slug: "accountants", label: "Accountants & Tax", icon: "📊" },
  { slug: "it", label: "IT & Tech", icon: "🖥️" },
  { slug: "consultants", label: "Consultants", icon: "💼" },
  { slug: "architects", label: "Architects", icon: "🏗️" },
  { slug: "surveyors", label: "Surveyors", icon: "🗺️" },
];

export const ecoGroups = [
  { slug: "containers", label: "Containers", icon: "🚢", blurb: "20FT · 40FT · reefer · storage" },
  { slug: "vehicles", label: "Vehicles & Trucks", icon: "🚛", blurb: "saloon to 7T trucks" },
  { slug: "machinery", label: "Plant Machinery", icon: "🏗️", blurb: "excavators · tractors · hire" },
  { slug: "parts", label: "Spare Parts", icon: "⚙️", blurb: "genuine kits · fleet parts" },
  { slug: "logistics", label: "Logistics & Freight", icon: "📦", blurb: "haulage · sea freight · clearing" },
];
