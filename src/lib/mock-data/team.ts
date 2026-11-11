import type { TeamMember } from "@/types";

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "[Leadership Name]",
    role: "Managing Director",
    bio: "Responsible for overall strategy, client relationships, and the delivery culture of the firm. Placeholder profile pending confirmed team details.",
    photo:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80",
    order: 1,
    published: true,
  },
  {
    id: "2",
    name: "[Leadership Name]",
    role: "Technical Director",
    bio: "Oversees engineering standards, constructability reviews, and technical quality across projects. Placeholder profile.",
    photo:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
    order: 2,
    published: true,
  },
  {
    id: "3",
    name: "[Team Member Name]",
    role: "Project Manager",
    bio: "Leads site delivery teams and client reporting on assigned projects. Placeholder profile.",
    photo:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80",
    order: 3,
    published: true,
  },
  {
    id: "4",
    name: "[Team Member Name]",
    role: "HSE Manager",
    bio: "Responsible for health, safety, and environmental systems across sites and offices. Placeholder profile.",
    photo:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80",
    order: 4,
    published: true,
  },
];

export function getPublishedTeam(): TeamMember[] {
  return teamMembers
    .filter((m) => m.published)
    .sort((a, b) => a.order - b.order);
}
