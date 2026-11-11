import type { Article } from "@/types";

export const articles: Article[] = [
  {
    id: "1",
    slug: "building-for-climate-in-east-africa",
    title: "Building for Climate in East Africa",
    category: "Design & Delivery",
    excerpt:
      "Practical considerations for thermal comfort, material durability, and construction sequencing in a tropical climate.",
    content: `## Context

Construction in East Africa requires careful attention to climate: high temperatures, seasonal rainfall, humidity, and intense solar radiation all influence design and delivery decisions.

## Key considerations

- Orientation and shading to reduce cooling loads
- Material selection for durability and low maintenance
- Drainage and moisture management during and after construction
- Sequencing works around the rainy season where possible

## Delivery implications

Method statements, temporary works, and quality control must account for weather. Early coordination between design and construction teams improves outcomes.

*This is sample demo content for the frontend. Replace with verified company insights.*`,
    coverImage:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80",
    author: "[Author Name]",
    publishedAt: "2024-09-12",
    published: true,
  },
  {
    id: "2",
    slug: "quality-control-on-site",
    title: "Quality Control That Holds Up on Site",
    category: "Quality",
    excerpt:
      "How inspection test plans, sample panels, and clear hold points support consistent delivery.",
    content: `## Why it matters

Quality is not only a final inspection outcome. It is the result of planned checks, approved materials, and trade sequencing that protects finished work.

## Practical tools

- Inspection and test plans agreed early
- Sample panels for critical finishes
- Hold points before covering work
- Clear non-conformance processes

*Demo article. Replace with company-authored content.*`,
    coverImage:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
    author: "[Author Name]",
    publishedAt: "2024-07-03",
    published: true,
  },
  {
    id: "3",
    slug: "safety-culture-beyond-checklists",
    title: "Safety Culture Beyond Checklists",
    category: "HSE",
    excerpt:
      "Checklists are necessary but not sufficient. Building a site culture that supports safe decisions every day.",
    content: `## Beyond compliance

Safety systems provide structure. Culture determines whether people stop work when something feels wrong and whether near-misses are reported.

## What helps

- Visible leadership on site
- Practical inductions and toolbox talks
- Recognition of good practice
- Learning from incidents without blame culture

*Sample content for demonstration only.*`,
    coverImage:
      "https://images.unsplash.com/photo-1581094794329-c8112c4e5190?w=1200&q=80",
    author: "[Author Name]",
    publishedAt: "2024-05-20",
    published: true,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug && a.published);
}

export function getPublishedArticles(): Article[] {
  return articles
    .filter((a) => a.published)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}
