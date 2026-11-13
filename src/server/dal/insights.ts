import "server-only";
import { prisma } from "@/server/db/client";

export async function listPublishedArticles() {
  return prisma.article.findMany({
    where: { status: "published" },
    orderBy: { publishedAt: "desc" },
  });
}

export async function getPublishedArticleBySlug(slug: string) {
  return prisma.article.findFirst({
    where: { slug, status: "published" },
  });
}
