import { Factory, FileCheck, ShieldCheck, HardHat, Building2, Zap, Droplets, Gavel } from 'lucide-react';
import { ServiceCategory } from './types';

export const COMPANY_INFO = {
  name: "Vegvisir Solutions",
  tagline: "Industrial Consultants",
  phone: "+91 8074121840",
  email: "vegvisirsol@gmail.com",
  address: "Hyderabad, Telangana, India", // Inferring location based on APPCB/TSPCB/HMDA references
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "industry-registration",
    title: "Industry Registration",
    icon: FileCheck,
    description: "Complete setup and registration services for new and existing industries.",
    items: [
      "Udyam Registration",
      "Industrial Entrepreneur Memorandum (IEM)",
      "Single Desk Portal Registration",
      "MSME Registration",
      "TS iPass Registration"
    ]
  },
  {
    id: "pollution-control",
    title: "Pollution Control Board",
    icon: Droplets,
    description: "End-to-end environmental compliance and approvals (APPCB / TSPCB).",
    items: [
      "Consent for Establishment - CFE",
      "Consent for Operation - CFO",
      "Consent for Establishment Expansion",
      "Consent for Operation Expansion",
      "Environmental Audit Report (Form V)",
      "Monitoring Reports (Air, Water, etc.)",
      "Compliance Reports",
      "E.T.P / S.T.P / RO Erection & O&M"
    ]
  },
  {
    id: "factories-dept",
    title: "Department of Factories",
    icon: Factory,
    description: "Safety compliance, plan approvals, and licensing for factory operations.",
    items: [
      "New Factory Plan Approval (CFE)",
      "New Factory Running Licence (CFO)",
      "Revised / Expansion Factory Plan Approvals",
      "Amendment of Factory Running Licence",
      "Structural Stability Certificate",
      "On Site Emergency Plan",
      "Safety Audit Report",
      "Hazop / Hara Reports",
      "Factory Annual Report Submission",
      "Testing of Equipment"
    ]
  },
  {
    id: "urban-development",
    title: "Urban Development & Panchayat",
    icon: Building2,
    description: "Approvals from HMDA, GHMC, DTCP, TSIIC, APIIC, and Gram Panchayat.",
    items: [
      "New Building Plan Approvals",
      "Occupancy for New Building Plan Approvals",
      "Revision or Expansion of Building Plan Approvals",
      "Occupancy for Revision or Expansion",
      "PREDCR Work",
      "Building Completion Certificate",
      "Structural Stability Certificate",
      "Land Conversion",
      "Total Station Work",
      "Building Insurance"
    ]
  },
  {
    id: "misc-departments",
    title: "Other Statutory Departments",
    icon: Gavel,
    description: "Ground Water, Electricity, Labour, and Fire Services compliance.",
    items: [
      "Ground Water Dept: Permission for New Bore Wells",
      "Electricity Dept: Feasibility Certificate from Discoms",
      "Electricity Dept: CEIG Plan Approvals",
      "Labour Dept: New Labour Licence",
      "Labour Dept: Labour Licence Amendment",
      "Fire Services Department Approvals",
      "PESO Approvals",
      "Boiler Department Approvals"
    ]
  }
];

export const CORE_VALUES = [
  {
    title: "Expertise",
    desc: "Deep understanding of statutory regulations across Telangana and Andhra Pradesh."
  },
  {
    title: "Efficiency",
    desc: "Streamlined processes to get your approvals faster, minimizing downtime."
  },
  {
    title: "Integrity",
    desc: "Transparent consulting with a focus on long-term compliance and safety."
  }
];