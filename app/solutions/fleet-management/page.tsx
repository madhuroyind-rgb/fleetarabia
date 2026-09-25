import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import EnterprisePage from "@/components/EnterprisePage";
import { breadcrumbJsonLd, pageOpenGraph, webPageJsonLd } from "@/lib/seo";
import {
  ArrowLeftRight,
  CarFront,
  ClipboardList,
  FileWarning,
  Fuel,
  History,
  IdCard,
  Layers,
  MapPin,
  ShieldAlert,
  Smartphone,
  Upload,
  Users,
  Wrench,
} from "lucide-react";

// Claims are limited to docs/seo/product-fact-validation.md (class A) and
// final-page-implementation-spec.md §2.4. Drivers (#drivers) and Fuel (#fuel) are sections here,
// not pages. NOT claimed: live tracking or geofencing, route compliance, driver-behaviour
// scoring, fuel consumption or efficiency logic, fuel-card "integration", RFID, driver training
// or leave, vehicle purchase, disposal or car sales (O-7 open), or tracking hardware.
const PATH = "/solutions/fleet-management";
const TITLE = "Fleet Management Software for Company Fleets | FleetArabia";
const DESCRIPTION =
  "One register for vehicles, drivers and their documents: move vehicles between branches, import fuel-card statements and manage accident cases in one cloud ERP.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: pageOpenGraph(PATH),
};

export default function FleetManagementPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd(PATH, TITLE, DESCRIPTION)} />
      <JsonLd data={breadcrumbJsonLd(PATH)} />
      <EnterprisePage
        eyebrow="Fleet Management"
        title="Fleet management for the vehicles"
        highlight="your business owns"
        description="Keep one register of your vehicles and your drivers, with their documents and expiry dates. Move vehicles between branches, import fuel-card statements, and follow accidents from the police report to settlement, in the same cloud ERP as your contracts and finance."
        secondaryCta={{ label: "See the Cloud ERP", href: "/platform" }}
        proofPoints={["Vehicle Register", "Driver Documents & Expiry", "Fuel-Card Statements"]}
        visual={{
          kind: "flow",
          caption: "One register, many records",
          steps: [
            { label: "Vehicle", icon: CarFront },
            { label: "Movements", icon: ArrowLeftRight },
            { label: "Drivers", icon: IdCard },
            { label: "Fuel", icon: Fuel },
            { label: "Accidents", icon: ShieldAlert },
            { label: "Workshop", icon: Wrench },
          ],
          footer: "Everything is filed against the vehicle",
        }}
        sections={[
          {
            eyebrow: "Vehicles",
            title: "One register for every vehicle",
            text: "Every vehicle has one record: its details, its status and the history of where it has been.",
            items: [
              { icon: CarFront, title: "Vehicle register", text: "Search and filter the fleet, and edit a vehicle's details in one place." },
              { icon: History, title: "Movement history", text: "See every movement a vehicle has made." },
              { icon: ArrowLeftRight, title: "Transfers between branches", text: "Queue a transfer and post it when the vehicle moves to another branch." },
              { icon: Smartphone, title: "On a phone", text: "Staff see vehicles, availability, movements and accidents in the Android app." },
            ],
          },
          {
            id: "drivers",
            eyebrow: "Drivers",
            title: "Driver records, documents and expiry dates",
            text: "Each driver has a profile with their documents. Expiring and missing documents are listed, so renewals are not left to memory.",
            variant: "dark",
            items: [
              { icon: IdCard, title: "Profiles and documents", text: "Keep each driver's profile with their uploaded documents." },
              { icon: FileWarning, title: "Expiring and missing documents", text: "See which licenses and documents are about to expire, and which are missing." },
              { icon: Upload, title: "License import", text: "Import driving license details instead of typing them one by one." },
              { icon: Users, title: "Assignments and incidents", text: "Record which vehicle a driver is assigned to, incidents, and a performance log." },
            ],
          },
          {
            id: "fuel",
            eyebrow: "Fuel",
            title: "Fuel-card statements, imported",
            text: "Fuel spend comes from the fuel-card provider's statement. Import the ENOC or ADNOC statement file instead of re-typing it.",
            columns: 2,
            items: [
              { icon: Fuel, title: "ENOC and ADNOC statements", text: "Import the statement as a file. A check stops the same file being imported twice." },
              { icon: ClipboardList, title: "Fuel spend by vehicle", text: "Review fuel spend by vehicle, card and station.", href: "/integrations#fuel", linkLabel: "Fuel-card statement import →" },
            ],
          },
          {
            eyebrow: "Accidents",
            title: "From the police report to settlement",
            text: "An accident is a case against the vehicle, and it follows the vehicle through repair and settlement.",
            variant: "dark",
            columns: 2,
            items: [
              { icon: ShieldAlert, title: "Accident cases", text: "Record the police report, towing, repair, insurance claim, customer liability and settlement." },
              { icon: ShieldAlert, title: "Damage from inspections", text: "Damage marked at a handover or return inspection can start a case.", href: "/solutions/vehicle-inspection#damage", linkLabel: "Damage and accidents →" },
            ],
          },
          {
            eyebrow: "Who Uses It",
            title: "The people who keep the fleet in order",
            text: "Fleet records are shared, but each role looks after its own part.",
            items: [
              { icon: CarFront, title: "Fleet coordinators", text: "Keep the vehicle register current and post transfers between branches." },
              { icon: IdCard, title: "Driver administrators", text: "Maintain driver profiles and documents and renew what is expiring." },
              { icon: Fuel, title: "Fleet controllers", text: "Import fuel-card statements and review spend by vehicle, card and station." },
              { icon: ShieldAlert, title: "Accident handlers", text: "Follow each accident case from the police report to settlement." },
            ],
          },
          {
            eyebrow: "What Changes Day to Day",
            title: "Records that do not depend on memory",
            text: "Each of these follows directly from how the module is built.",
            variant: "dark",
            items: [
              { icon: FileWarning, title: "Renewals are visible in advance", text: "Expiring and missing driver documents are listed before they lapse." },
              { icon: Upload, title: "Statements are imported, not typed", text: "Fuel-card statements come in as files, and the same file cannot be imported twice." },
              { icon: History, title: "Movements leave a history", text: "Every transfer and movement stays on the vehicle's record." },
              { icon: ShieldAlert, title: "Accidents stay with the vehicle", text: "A case records repair, insurance and settlement in one place." },
            ],
          },
          {
            eyebrow: "Related",
            title: "Where fleet management connects",
            text: "The vehicle register is shared by every other part of FleetArabia.",
            items: [
              { icon: Wrench, title: "Workshop", text: "Servicing and repairs for the vehicles in the register.", href: "/solutions/workshop-management", linkLabel: "Workshop Management →" },
              { icon: MapPin, title: "GPS tracking server", text: "A Traccar GPS tracking server can be connected, configured during implementation.", href: "/integrations#gps", linkLabel: "Integrations →" },
              { icon: Layers, title: "The cloud ERP", text: "Vehicles, contracts and finance in one system.", href: "/platform", linkLabel: "Cloud ERP →" },
            ],
          },
          {
            eyebrow: "FAQ",
            title: "Fleet management: common questions",
            text: "Short answers about what the fleet management module does.",
            variant: "dark",
            columns: 2,
            items: [
              { title: "Is it only for rental companies?", text: "No. The vehicle register, drivers, fuel statements and accident cases apply to any fleet a business owns." },
              { title: "Are license and document expiries flagged?", text: "Yes. Expiring and missing driver documents are listed so they can be renewed in time." },
              { title: "Which fuel-card statements can be imported?", text: "ENOC and ADNOC statement files." },
              { title: "Can it connect to a GPS tracking server?", text: "Yes. FleetArabia can connect to a Traccar GPS tracking server, configured during implementation." },
              { title: "Can vehicles move between branches?", text: "Yes. A transfer is queued and then posted when the vehicle moves." },
              { title: "Where are accidents recorded?", text: "As a case against the vehicle, from the police report and towing through repair, insurance and settlement." },
            ],
          },
        ]}
        finalCtaTitle="See your fleet in one register"
        finalCtaText="Tell us how vehicles and drivers are tracked today, and we'll walk you through the register, drivers and fuel."
      />
    </>
  );
}
