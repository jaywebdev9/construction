import "server-only";
import { prisma } from "@/server/db/client";
import type { ProjectCategory } from "@prisma/client";

export async function listPublishedProjects(options?: {
  category?: ProjectCategory;
  search?: string;
}) {
  return prisma.project.findMany({
    where: {
      published: true,
      ...(options?.category ? { category: options.category } : {}),
      ...(options?.search
        ? {
            OR: [
              { title: { contains: options.search, mode: "insensitive" } },
              { location: { contains: options.search, mode: "insensitive" } },
            ],
          }
        : {}),
    },
    orderBy: [{ featured: "desc" }, { updatedAt: "desc" }],
  });
}

export async function getPublishedProjectBySlug(slug: string) {
  return prisma.project.findFirst({
    where: { slug, published: true },
  });
}

export async function listFeaturedProjects(limit = 3) {
  return prisma.project.findMany({
    where: { published: true, featured: true },
    orderBy: { updatedAt: "desc" },
    take: limit,
  });
}

export async function listAllProjectsAdmin() {
  return prisma.project.findMany({
    orderBy: { updatedAt: "desc" },
  });
}

export async function getProjectById(id: string) {
  return prisma.project.findUnique({ where: { id } });
}
