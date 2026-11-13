import "server-only";
import { prisma } from "@/server/db/client";
import { nanoid } from "nanoid";
import type { InquiryStatus } from "@prisma/client";

function makeReference(prefix: string) {
  const year = new Date().getFullYear();
  return `${prefix}-${year}-${nanoid(8).toUpperCase()}`;
}

export async function createContactInquiry(input: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}) {
  return prisma.inquiry.create({
    data: {
      reference: makeReference("INQ"),
      name: input.name.trim(),
      email: input.email.trim().toLowerCase(),
      phone: input.phone?.trim() || null,
      message: input.message.trim(),
      source: "contact",
      status: "new",
    },
  });
}

export async function createQuoteRequest(input: {
  name: string;
  email: string;
  phone: string;
  company?: string;
  projectType: string;
  location: string;
  scope: string;
  budget?: string;
  timeline?: string;
}) {
  return prisma.quoteRequest.create({
    data: {
      reference: makeReference("QTE"),
      name: input.name.trim(),
      email: input.email.trim().toLowerCase(),
      phone: input.phone.trim(),
      company: input.company?.trim() || null,
      projectType: input.projectType,
      location: input.location.trim(),
      scope: input.scope.trim(),
      budget: input.budget?.trim() || null,
      timeline: input.timeline?.trim() || null,
      status: "new",
    },
  });
}

export async function listInquiriesAdmin() {
  return prisma.inquiry.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      notes: { orderBy: { createdAt: "asc" } },
      assignedTo: { select: { id: true, name: true } },
    },
  });
}

export async function updateInquiryStatus(
  id: string,
  status: InquiryStatus,
  actorId?: string
) {
  const updated = await prisma.inquiry.update({
    where: { id },
    data: { status },
  });
  await prisma.auditLog.create({
    data: {
      actorId,
      action: "inquiry.status_change",
      resource: "inquiry",
      resourceId: id,
      metadata: { status },
    },
  });
  return updated;
}

export async function addInquiryNote(
  inquiryId: string,
  text: string,
  author: { id?: string; name: string }
) {
  return prisma.inquiryNote.create({
    data: {
      inquiryId,
      text: text.trim(),
      authorId: author.id,
      authorName: author.name,
    },
  });
}
