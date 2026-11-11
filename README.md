# Premium Construction Company — Frontend

Frontend-only implementation of a public website and admin dashboard for a construction / civil engineering firm.

**Design direction:** Premium Industrial Editorial  
**Stack:** Next.js 15 (App Router), React 18, TypeScript, Tailwind CSS, React Hook Form, Zod, Lucide React

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Admin: [http://localhost:3000/admin/login](http://localhost:3000/admin/login) — any email/password works (demo only).

```bash
npm run build
npm run typecheck
npm run lint
```

## Public routes

| Path | Description |
|------|-------------|
| `/` | Editorial homepage |
| `/about` | Company overview, values, HSE placeholders |
| `/services` | Service index |
| `/services/[slug]` | Service detail |
| `/projects` | Portfolio with category filters + search |
| `/projects/[slug]` | Project case study |
| `/team` | Leadership placeholders |
| `/insights` | Article index |
| `/insights/[slug]` | Article detail |
| `/contact` | Contact details + form |
| `/request-a-quote` | Multi-step quote form |
| `/careers` | Empty state |
| `/privacy`, `/terms` | Draft legal placeholders |

## Admin routes

| Path | Description |
|------|-------------|
| `/admin/login` | Demo sign-in |
| `/admin` | Dashboard KPIs + recent inquiries |
| `/admin/projects` | Table, search, status filter |
| `/admin/projects/new` | New project form skeleton |
| `/admin/projects/[id]` | Edit project form |
| `/admin/services` | List + publish toggle |
| `/admin/inquiries` | Table + detail panel, status change, notes |
| `/admin/team` | Cards + publish toggle |
| `/admin/settings` | Company fields (localStorage) |
| `/admin/testimonials`, `/insights`, `/media`, `/pages`, `/seo`, `/users` | Module shells |

## Design system

- **Palette:** charcoal `#111315`, graphite `#252A2D`, off-white `#F4F2ED`, concrete `#D8D5CE`, amber `#C9953B`
- **Fonts:** Manrope (display), Inter (body) via `next/font`
- Tokens in `tailwind.config.ts` and `src/app/globals.css`

## Mock data

All content under `src/lib/mock-data/`. Company identity uses placeholders (`[Company Name]`, etc.). Sample projects, team names, and articles are **demo only**.

## Demo-only behaviours

- Forms validate and show success states locally; nothing is POSTed
- Admin status/notes/publish toggles update React state (and settings use localStorage)
- Login accepts any credentials
- Image “uploads” are not connected to storage
- No real email, CRM, maps, or WhatsApp integration

## Backend handoff checklist

- Replace mock repositories with typed API/database adapters
- Connect inquiry and quote forms to validated server endpoints
- Add real authentication and role permissions
- Connect image/document uploads to object storage
- Email notifications, audit logging, rate limiting, observability
- Verified SEO content and structured data

## Notes

- Initial market assumption: Tanzania / East Africa — copy stays neutral and editable
- Structured for future Swahili localization
- Target WCAG 2.2 AA practices: semantics, focus, labels, reduced-motion
