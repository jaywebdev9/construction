import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "1",
    slug: "building-construction",
    title: "Building Construction",
    category: "building-construction",
    shortDescription:
      "Full-service construction of residential, commercial, and institutional buildings from foundations to handover.",
    description:
      "We deliver complete building packages with disciplined programme management, quality control, and clear communication. Our teams coordinate structural, architectural, and services trades to produce durable, well-finished buildings.",
    scope: [
      "New-build construction",
      "Structural frames and envelopes",
      "MEP installation and coordination",
      "Internal finishes",
      "External works and landscaping",
    ],
    approach: [
      "Early engagement on buildability and programme",
      "Detailed method statements and quality plans",
      "Regular progress reporting and site coordination",
      "Snagging, commissioning, and orderly handover",
    ],
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
    published: true,
    order: 1,
  },
  {
    id: "2",
    slug: "civil-engineering-infrastructure",
    title: "Civil Engineering & Infrastructure",
    category: "civil-engineering",
    shortDescription:
      "Roads, bridges, drainage, and civil works delivered with engineering rigour and site discipline.",
    description:
      "Our civil engineering capability covers a range of infrastructure works. We focus on constructability, temporary works, and adherence to specification under varying site conditions.",
    scope: [
      "Road and pavement construction",
      "Bridge and structural concrete works",
      "Drainage and stormwater systems",
      "Earthworks and retaining structures",
      "Utility trenches and ducts",
    ],
    approach: [
      "Thorough site investigation and temporary works design",
      "Programme sequencing around weather and access",
      "Material testing and quality assurance",
      "Safety and traffic management on live sites",
    ],
    image:
      "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1200&q=80",
    published: true,
    order: 2,
  },
  {
    id: "3",
    slug: "residential-construction",
    title: "Residential Construction",
    category: "residential",
    shortDescription:
      "Homes and residential schemes designed for comfort, durability, and climate-responsive living.",
    description:
      "From individual houses to multi-unit developments, we build residential projects with attention to detailing, finishes, and the practical needs of homeowners and developers.",
    scope: [
      "Private residences and villas",
      "Multi-unit residential buildings",
      "Estate infrastructure",
      "Interior finishes packages",
      "Landscaping and external works",
    ],
    approach: [
      "Clear scope definition and change control",
      "Material selection for climate and maintenance",
      "Coordination with interior designers where required",
      "Client walkthroughs and staged handover",
    ],
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    published: true,
    order: 3,
  },
  {
    id: "4",
    slug: "commercial-industrial",
    title: "Commercial & Industrial Construction",
    category: "commercial-industrial",
    shortDescription:
      "Offices, warehouses, and industrial facilities built for performance and operational efficiency.",
    description:
      "We construct commercial and industrial facilities that support the operational needs of tenants and owners, with attention to structure, services capacity, and future flexibility.",
    scope: [
      "Office and mixed-use buildings",
      "Warehouses and logistics facilities",
      "Industrial workshops and plants",
      "Fit-out and base-build packages",
      "Yards, access, and external works",
    ],
    approach: [
      "Early services and structural coordination",
      "Programme certainty for tenant fit-out windows",
      "Health, safety, and environmental controls",
      "Documentation and as-built records",
    ],
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
    published: true,
    order: 4,
  },
  {
    id: "5",
    slug: "renovation-refurbishment",
    title: "Renovation & Refurbishment",
    category: "renovation",
    shortDescription:
      "Upgrades, repairs, and adaptive reuse of existing buildings with minimal disruption.",
    description:
      "Renovation projects require careful assessment, sequencing, and respect for existing fabric. We manage phased works so that occupied buildings can continue to function where required.",
    scope: [
      "Structural repairs and strengthening",
      "Services upgrades",
      "Envelope and roof works",
      "Interior refurbishment",
      "Accessibility improvements",
    ],
    approach: [
      "Condition surveys and risk assessment",
      "Phased programmes to maintain occupancy",
      "Protection of existing finishes and systems",
      "Clear communication with building users",
    ],
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
    published: true,
    order: 5,
  },
  {
    id: "6",
    slug: "project-management",
    title: "Project Management",
    category: "project-management",
    shortDescription:
      "Independent project management and construction management services for clients and developers.",
    description:
      "We provide structured project management support from pre-construction through delivery, helping clients control cost, programme, quality, and risk.",
    scope: [
      "Pre-construction planning",
      "Tender and procurement support",
      "Construction management",
      "Cost and programme monitoring",
      "Handover and defects management",
    ],
    approach: [
      "Clear governance and reporting",
      "Risk registers and mitigation tracking",
      "Stakeholder coordination",
      "Transparent decision logs",
    ],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
    published: true,
    order: 6,
  },
  {
    id: "7",
    slug: "structural-finishing",
    title: "Structural & Finishing Works",
    category: "structural-finishing",
    shortDescription:
      "Specialist structural packages and high-quality finishing trades for building projects.",
    description:
      "Whether as part of a full build or as a specialist package, we deliver structural concrete and finishing works to consistent standards.",
    scope: [
      "Reinforced concrete works",
      "Formwork and falsework",
      "Plastering and rendering",
      "Tiling and wet areas",
      "Joinery and fixed furniture",
    ],
    approach: [
      "Method statements and inspection test plans",
      "Material approval and sample panels",
      "Trade sequencing and protection",
      "Final quality inspections",
    ],
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80",
    published: true,
    order: 7,
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug && s.published);
}

export function getPublishedServices(): Service[] {
  return services.filter((s) => s.published).sort((a, b) => a.order - b.order);
}
