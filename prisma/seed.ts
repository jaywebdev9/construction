import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  await prisma.siteSetting.upsert({
    where: { id: "default" },
    update: {},
    create: {
      id: "default",
      companyName: "Amani Construction Ltd",
      tagline: "Precision. Craft. Delivery.",
      description:
        "Amani Construction Ltd delivers quality buildings and civil infrastructure across Tanzania and East Africa with disciplined project management, safety leadership, and lasting craftsmanship.",
      address: "Plot 12, Ohio Street, Dar es Salaam, Tanzania",
      phone: "+255 22 211 4500",
      email: "info@amaniconstruction.co.tz",
      officeHours: "Monday – Friday, 08:00 – 17:00",
      registrationDetails: "Registered in the United Republic of Tanzania",
      linkedin: "https://www.linkedin.com/",
      facebook: "https://www.facebook.com/",
    },
  });

  const passwordHash = await bcrypt.hash("ChangeMeNow!2026", 12);

  const admin = await prisma.user.upsert({
    where: { email: "admin@amaniconstruction.co.tz" },
    update: { status: "ACTIVE", role: "SUPER_ADMIN" },
    create: {
      email: "admin@amaniconstruction.co.tz",
      name: "System Administrator",
      status: "ACTIVE",
      role: "SUPER_ADMIN",
      emailVerified: true,
    },
  });

  await prisma.account.deleteMany({
    where: { userId: admin.id, providerId: "credential" },
  });
  await prisma.account.create({
    data: {
      userId: admin.id,
      accountId: admin.email,
      providerId: "credential",
      password: passwordHash,
    },
  });

  const projectCount = await prisma.project.count();
  if (projectCount === 0) {
    await prisma.project.createMany({
      data: [
        {
          slug: "harbour-view-residence",
          title: "Harbour View Residence",
          location: "Dar es Salaam",
          category: "residential",
          status: "completed",
          completionDate: "2024-08",
          summary:
            "A contemporary multi-unit residential development with refined materials and strong indoor-outdoor connection.",
          description:
            "Harbour View Residence balances density with liveability. The design prioritises natural light, cross-ventilation, and durable finishes suited to the coastal climate.",
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
          ],
          featured: true,
          published: true,
        },
        {
          slug: "industrial-logistics-hub",
          title: "Industrial Logistics Hub",
          location: "Arusha",
          category: "industrial",
          status: "completed",
          completionDate: "2023-11",
          summary:
            "Large-span warehouse and office facility designed for efficient goods handling and future expansion.",
          description:
            "Flexible warehouse space, secured yards, and supporting offices. Structural system selected for speed of erection and clear spans.",
          scope: [
            "Steel-frame warehouse",
            "Office block",
            "External hardstanding",
            "Drainage and utilities",
          ],
          coverImage:
            "https://images.unsplash.com/photo-1581094794329-c8112c4e5190?w=1600&q=80",
          gallery: [
            "https://images.unsplash.com/photo-1581094794329-c8112c4e5190?w=1200&q=80",
          ],
          featured: true,
          published: true,
        },
        {
          slug: "coastal-road-bridge",
          title: "Coastal Road Bridge Works",
          location: "Tanga Region",
          category: "infrastructure",
          status: "completed",
          completionDate: "2022-06",
          summary:
            "Reinforced concrete bridge and approach works for a regional road improvement programme.",
          description:
            "Multi-span reinforced concrete bridge with approach embankments, drainage, and safety features.",
          scope: [
            "Piling and foundations",
            "Substructure and superstructure",
            "Approach roads",
            "Drainage and protection works",
          ],
          coverImage:
            "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1600&q=80",
          gallery: [
            "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1200&q=80",
          ],
          featured: true,
          published: true,
        },
      ],
    });
  }

  const serviceCount = await prisma.service.count();
  if (serviceCount === 0) {
    await prisma.service.createMany({
      data: [
        {
          slug: "building-construction",
          title: "Building Construction",
          category: "building-construction",
          shortDescription:
            "Full-service construction of residential, commercial, and institutional buildings.",
          description:
            "We deliver complete building packages with disciplined programme management and quality control.",
          scope: [
            "New-build construction",
            "Structural frames and envelopes",
            "MEP installation",
            "Internal finishes",
          ],
          approach: [
            "Early engagement on buildability",
            "Quality plans and method statements",
            "Progress reporting and coordination",
          ],
          image:
            "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
          published: true,
          sortOrder: 1,
        },
        {
          slug: "civil-engineering-infrastructure",
          title: "Civil Engineering & Infrastructure",
          category: "civil-engineering",
          shortDescription:
            "Roads, bridges, drainage, and civil works delivered with engineering rigour.",
          description:
            "Infrastructure capability focused on constructability, temporary works, and specification adherence.",
          scope: [
            "Road and pavement construction",
            "Bridge and structural concrete",
            "Drainage systems",
            "Earthworks",
          ],
          approach: [
            "Site investigation and temporary works",
            "Weather-aware sequencing",
            "Material testing and QA",
          ],
          image:
            "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1200&q=80",
          published: true,
          sortOrder: 2,
        },
        {
          slug: "residential-construction",
          title: "Residential Construction",
          category: "residential",
          shortDescription:
            "Homes and residential schemes designed for comfort and durability.",
          description:
            "From individual houses to multi-unit developments with attention to detailing and finishes.",
          scope: [
            "Private residences",
            "Multi-unit buildings",
            "Estate infrastructure",
            "Interior finishes",
          ],
          approach: [
            "Clear scope and change control",
            "Climate-appropriate materials",
            "Staged handover",
          ],
          image:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
          published: true,
          sortOrder: 3,
        },
        {
          slug: "commercial-industrial",
          title: "Commercial & Industrial Construction",
          category: "commercial-industrial",
          shortDescription:
            "Offices, warehouses, and industrial facilities built for performance.",
          description:
            "Commercial and industrial facilities supporting operational needs with flexible services capacity.",
          scope: [
            "Office and mixed-use",
            "Warehouses and logistics",
            "Industrial workshops",
            "External works",
          ],
          approach: [
            "Early services coordination",
            "Programme certainty",
            "HSE controls",
          ],
          image:
            "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
          published: true,
          sortOrder: 4,
        },
      ],
    });
  }

  const teamCount = await prisma.teamMember.count();
  if (teamCount === 0) {
    await prisma.teamMember.createMany({
      data: [
        {
          name: "Grace Mwangi",
          role: "Managing Director",
          bio: "Leads strategy, client relationships, and delivery culture at Amani Construction.",
          photo:
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
          qualifications: ["BSc Civil Engineering"],
          sortOrder: 1,
          published: true,
        },
        {
          name: "Daniel Okello",
          role: "Technical Director",
          bio: "Oversees engineering standards, constructability reviews, and technical quality.",
          photo:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80",
          qualifications: ["MSc Structural Engineering"],
          sortOrder: 2,
          published: true,
        },
        {
          name: "Amina Hassan",
          role: "Project Manager",
          bio: "Leads site delivery teams and client reporting on assigned projects.",
          photo:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80",
          sortOrder: 3,
          published: true,
        },
        {
          name: "Joseph Kimaro",
          role: "HSE Manager",
          bio: "Responsible for health, safety, and environmental systems across sites.",
          photo:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80",
          sortOrder: 4,
          published: true,
        },
      ],
    });
  }

  const articleCount = await prisma.article.count();
  if (articleCount === 0) {
    await prisma.article.createMany({
      data: [
        {
          slug: "building-for-climate-in-east-africa",
          title: "Building for Climate in East Africa",
          category: "Design & Delivery",
          excerpt:
            "Practical considerations for thermal comfort, material durability, and construction sequencing in a tropical climate.",
          content:
            "## Context\n\nConstruction in East Africa requires careful attention to climate: high temperatures, seasonal rainfall, and humidity influence design and delivery.\n\n## Key considerations\n\n- Orientation and shading\n- Durable material selection\n- Drainage and moisture management\n- Sequencing around the rainy season",
          coverImage:
            "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80",
          author: "Grace Mwangi",
          publishedAt: new Date("2024-09-12"),
          status: "published",
        },
        {
          slug: "quality-control-on-site",
          title: "Quality Control That Holds Up on Site",
          category: "Quality",
          excerpt:
            "How inspection test plans, sample panels, and hold points support consistent delivery.",
          content:
            "## Why it matters\n\nQuality is the result of planned checks, approved materials, and trade sequencing that protects finished work.\n\n## Practical tools\n\n- Inspection and test plans\n- Sample panels\n- Hold points before covering work",
          coverImage:
            "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
          author: "Daniel Okello",
          publishedAt: new Date("2024-07-03"),
          status: "published",
        },
      ],
    });
  }

  console.log("Seed complete.");
  console.log("Admin login: admin@amaniconstruction.co.tz");
  console.log("Password: ChangeMeNow!2026");
  console.log("Change this password immediately after first login.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
