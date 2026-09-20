import {
  Bus,
  Car,
  CarTaxiFront,
  ChartColumn,
  Fuel,
  IdCard,
  KeyRound,
  MapPin,
  Plug,
  ReceiptText,
  ShieldAlert,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";

// One icon per module. One list, so the homepage and the Solutions page can never
// disagree about how a module is shown.
export const MODULE_ICONS: Record<string, LucideIcon> = {
  "Car Rental Management": Car,
  "Leasing Management": KeyRound,
  "Chauffeur & Limousine": CarTaxiFront,
  "Bus Transportation": Bus,
  "Workshop Management": Wrench,
  "Business Intelligence & Analytics": ChartColumn,
  "Vehicle Damage & Claims (VDR)": ShieldAlert,
  "Billing & Revenue Management": ReceiptText,
  "ERP Integration Platform": Plug,
  "GPS Tracking & Geo-Fencing": MapPin,
  "Driver Management": IdCard,
  "Fuel Management": Fuel,
  "CRM & Customer Experience": Users,
};
