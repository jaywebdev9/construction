import "server-only";
import { prisma } from "@/server/db/client";

export async function listPublishedServices() {
  return prisma.service.findMany({
    where: { published: true },
    orderBy: { sortOrder: "asc" },
  });
}

export async function getPublishedServiceBySlug(slug: string) {
  return prisma.service.findFirst({
    where: { slug, published: true },
  });
}

export async function listAllServicesAdmin() {
  return prisma.service.findMany({ orderBy: { sortOrder: "asc" } });
}
