export type ProjectStatus = "completed" | "ongoing" | "planned";
export type ProjectCategory =
  | "residential"
  | "commercial"
  | "industrial"
  | "infrastructure"
  | "institutional"
  | "renovation";

export interface Project {
  id: string;
  slug: string;
  title: string;
  location: string;
  category: ProjectCategory;
  status: ProjectStatus;
  completionDate?: string;
  summary: string;
  description: string;
  scope: string[];
  coverImage: string;
  gallery: string[];
  client?: string;
  featured?: boolean;
  seoTitle?: string;
  seoDescription?: string;
  published: boolean;
}

export type ServiceCategory =
  | "building-construction"
  | "civil-engineering"
  | "residential"
  | "commercial-industrial"
  | "renovation"
  | "project-management"
  | "structural-finishing";

export interface Service {
  id: string;
  slug: string;
  title: string;
  category: ServiceCategory;
  shortDescription: string;
  description: string;
  scope: string[];
  approach: string[];
  image: string;
  published: boolean;
  order: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
  qualifications?: string[];
  order: number;
  published: boolean;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: string;
  publishedAt: string;
  published: boolean;
  seoTitle?: string;
  seoDescription?: string;
}

export interface Inquiry {
  id: string;
  reference: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  serviceType?: string;
  projectType?: string;
  location?: string;
  message: string;
  status: "new" | "in-progress" | "quoted" | "won" | "lost" | "archived";
  assignedTo?: string;
  notes: { id: string; text: string; createdAt: string; author: string }[];
  createdAt: string;
  updatedAt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  company?: string;
  quote: string;
  projectId?: string;
  published: boolean;
}

export interface SiteSettings {
  companyName: string;
  tagline: string;
  description: string;
  logo?: string;
  address: string;
  phone: string;
  email: string;
  whatsapp?: string;
  officeHours: string;
  social: {
    linkedin?: string;
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
  registrationDetails?: string;
}

export interface NavItem {
  label: string;
  href: string;
}
