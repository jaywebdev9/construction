import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    slug: "harbour-view-residence",
    title: "Harbour View Residence",
    location: "Dar es Salaam",
    category: "residential",
    status: "completed",
    completionDate: "2024-08",
    summary:
      "A contemporary multi-unit residential development with refined material palette and strong indoor-outdoor connection.",
    description:
      "Harbour View Residence is a carefully planned residential scheme that balances density with liveability. The design prioritises natural light, cross-ventilation, and durable finishes suitable for the coastal climate. Construction was delivered under a fixed programme with close coordination between architectural, structural, and MEP teams.",
    scope: [
      "Full building construction",
      "Structural works",
      "MEP installation",
      "External works and landscaping",
      "Finishing and handover",
    ],
    coverImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
    ],
    featured: true,
    published: true,
  },
  {
    id: "2",
    slug: "industrial-logistics-hub",
    title: "Industrial Logistics Hub",
    location: "Arusha",
    category: "industrial",
    status: "completed",
    completionDate: "2023-11",
    summary:
      "Large-span warehouse and office facility designed for efficient goods handling and future expansion.",
    description:
      "This logistics hub provides flexible warehouse space, secured yards, and supporting office accommodation. The structural system was selected for speed of erection and long clear spans. Site works included drainage, access roads, and utility connections.",
    scope: [
      "Steel-frame warehouse construction",
      "Office block",
      "External hardstanding",
      "Drainage and utilities",
      "Security and access control infrastructure",
    ],
    coverImage:
      "https://images.unsplash.com/photo-1581094794329-c8112c4e5190?w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1581094794329-c8112c4e5190?w=1200&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
    ],
    featured: true,
    published: true,
  },
  {
    id: "3",
    slug: "civic-centre-renovation",
    title: "Civic Centre Renovation",
    location: "Mwanza",
    category: "renovation",
    status: "ongoing",
    summary:
      "Sensitive renovation and upgrade of an existing public building while maintaining operations.",
    description:
      "Phased renovation of a civic facility involving structural assessment, services upgrades, improved accessibility, and refreshed public interiors. Works are sequenced to minimise disruption to ongoing use of the building.",
    scope: [
      "Structural repairs",
      "MEP upgrades",
      "Accessibility improvements",
      "Interior fit-out",
      "External fabric repairs",
    ],
    coverImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
    ],
    published: true,
  },
  {
    id: "4",
    slug: "coastal-road-bridge",
    title: "Coastal Road Bridge Works",
    location: "Tanga Region",
    category: "infrastructure",
    status: "completed",
    completionDate: "2022-06",
    summary:
      "Reinforced concrete bridge and approach works forming part of a regional road improvement programme.",
    description:
      "Construction of a multi-span reinforced concrete bridge with associated approach embankments, drainage, and safety features. Quality control and programme adherence were critical given seasonal weather constraints.",
    scope: [
      "Piling and foundations",
      "Substructure and superstructure",
      "Approach roads",
      "Drainage and protection works",
      "Safety barriers and signage",
    ],
    coverImage:
      "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1200&q=80",
    ],
    published: true,
  },
  {
    id: "5",
    slug: "garden-courtyard-villas",
    title: "Garden Courtyard Villas",
    location: "Dodoma",
    category: "residential",
    status: "completed",
    completionDate: "2024-02",
    summary:
      "Cluster of courtyard houses designed for climate-responsive living and shared landscape quality.",
    description:
      "A small residential scheme organised around shared courtyards and private outdoor spaces. Construction focused on thermal mass, shading, and durable local materials where appropriate.",
    scope: [
      "Villa construction",
      "Shared landscape and courtyards",
      "Boundary and access works",
      "Services connections",
    ],
    coverImage:
      "https://images.unsplash.com/photo-1600047509807-ba8f04d8a6ed?w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600047509807-ba8f04d8a6ed?w=1200&q=80",
    ],
    published: true,
  },
  {
    id: "6",
    slug: "commercial-office-podium",
    title: "Commercial Office Podium",
    location: "Dar es Salaam",
    category: "commercial",
    status: "ongoing",
    summary:
      "Mixed-use commercial podium with flexible office floor plates and active ground floor frontage.",
    description:
      "Development of a commercial podium providing lettable office space above ground-floor retail and service areas. Emphasis on efficient cores, services distribution, and a clear public realm interface.",
    scope: [
      "Substructure and superstructure",
      "MEP and vertical transportation",
      "Envelope and cladding",
      "Internal fit-out (base build)",
      "External works",
    ],
    coverImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
    ],
    featured: true,
    published: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug && p.published);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured && p.published);
}

export function getProjectsByCategory(category?: ProjectCategory): Project[] {
  if (!category) return projects.filter((p) => p.published);
  return projects.filter((p) => p.category === category && p.published);
}
