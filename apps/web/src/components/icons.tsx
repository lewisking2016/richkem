import {
  Smartphone, Laptop, Car, Sofa, Shirt, Sparkles, Plane, Home, Wrench, Briefcase,
  Stethoscope, Scale, Ruler, Calculator, MonitorSmartphone, Presentation, Building2, Map,
  Ship, Truck, HardHat, Cog, Package, User, Building, LayoutDashboard, ShoppingBag,
  ShieldCheck, Heart, MessageCircle, Settings, CalendarDays, BadgeCheck, LineChart,
  IdCard, Swords, Users, Tag, Zap, GraduationCap, PartyPopper, Wallet,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const categoryIcons: Record<string, LucideIcon> = {
  "phones-tablets": Smartphone,
  electronics: Laptop,
  vehicles: Car,
  "home-office": Sofa,
  fashion: Shirt,
  "health-beauty": Sparkles,
  "aviation-marine": Plane,
  property: Home,
  services: Wrench,
  jobs: Briefcase,
};

export const serviceCategoryIcons: Record<string, LucideIcon> = {
  doctors: Stethoscope,
  plumbers: Wrench,
  lawyers: Scale,
  mechanics: Cog,
  electricians: Zap,
  cleaning: Sparkles,
  tutors: GraduationCap,
  events: PartyPopper,
};

export const proCategoryIcons: Record<string, LucideIcon> = {
  doctors: Stethoscope,
  lawyers: Scale,
  engineers: Ruler,
  accountants: Calculator,
  it: MonitorSmartphone,
  consultants: Presentation,
  architects: Building2,
  surveyors: Map,
};

export const ecoGroupIcons: Record<string, LucideIcon> = {
  containers: Ship,
  vehicles: Truck,
  machinery: HardHat,
  parts: Cog,
  logistics: Package,
};

export const sidebarIcons: Record<string, LucideIcon> = {
  dashboard: LayoutDashboard,
  orders: ShoppingBag,
  escrow: ShieldCheck,
  saved: Heart,
  messages: MessageCircle,
  settings: Settings,
  products: Tag,
  bookings: CalendarDays,
  wallet: Wallet,
  verification: BadgeCheck,
  overview: LineChart,
  kyc: IdCard,
  disputes: Swords,
  users: Users,
};

export const PersonIcon = User;
export const BusinessIcon = Building;
