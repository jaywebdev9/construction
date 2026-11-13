import "server-only";
import { prisma } from "@/server/db/client";

export async function listPublishedTeam() {
  return prisma.teamMember.findMany({
    where: { published: true },
    orderBy: { sortOrder: "asc" },
  });
}

export async function listAllTeamAdmin() {
  return prisma.teamMember.findMany({ orderBy: { sortOrder: "asc" } });
}
