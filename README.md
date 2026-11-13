# Amani Construction Ltd — Web Platform

Production-oriented Next.js 15 application for **Amani Construction Ltd** (Tanzania / East Africa): public marketing site + secured admin dashboard with PostgreSQL backend.

## Stack

- Next.js 15 App Router, React 18, TypeScript, Tailwind CSS
- PostgreSQL + Prisma ORM
- Cookie sessions (HttpOnly), bcrypt password hashing
- Server Actions for contact/quote submissions and login
- Zod validation on client and server

## Quick start (local)

1. **PostgreSQL** — create a database, then:

```bash
cp .env.example .env
# Set DATABASE_URL and AUTH_SECRET in .env
```

2. **Install & migrate**

```bash
npm install
npx prisma migrate dev --name init
npm run db:seed
npm run dev
```

3. Open http://localhost:3000  
   Admin: http://localhost:3000/admin/login  

**Seeded admin (change immediately):**  
- Email: `admin@amaniconstruction.co.tz`  
- Password: `ChangeMeNow!2026`

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Development server |
| `npm run build` | Production build (`prisma generate` + `next build`) |
| `npm run db:migrate` | Run migrations |
| `npm run db:seed` | Seed settings, content, admin user |
| `npm run db:studio` | Prisma Studio |
| `npm run typecheck` | TypeScript check |
| `npm run lint` | ESLint |

## What is production-ready

- Real password authentication (no “any password” demo login)
- Admin routes gated by session middleware + server session checks
- Contact and quote forms persist to PostgreSQL with unique references
- Role/permission matrix helpers (`src/server/auth/permissions.ts`)
- Audit log table for sensitive actions
- Prisma schema with indexes, enums, FKs
- `.env.example` without secrets

## What still needs external configuration

Wire these for full production ops (adapters are documented; values are env-driven):

- Managed PostgreSQL with backups and TLS
- Resend (or similar) for inquiry notification emails + outbox retries
- Cloudflare R2 for media uploads (presigned URLs)
- Redis-compatible store for distributed rate limiting
- Sentry (or equivalent) for error monitoring
- Custom domain, HTTPS, DNS, verified sender domain

## Security notes

- Never commit `.env`
- Change the seeded admin password on first login
- Rotate `AUTH_SECRET` if compromised
- Do not expose `DATABASE_URL` or storage secrets via `NEXT_PUBLIC_*`
- Production cookies use `Secure` when `NODE_ENV=production`

## Project structure (backend)

```
prisma/                 schema + seed
src/server/
  auth/                 session, permissions
  db/                   Prisma client
  dal/                  data access (server-only)
src/app/actions/        Server Actions (auth, contact, quote)
src/middleware.ts       Admin session gate
```

## Company identity

Branded as **Amani Construction Ltd**. Update contact details and legal copy in Site Settings (DB) or seed before launch. Have legal counsel review Privacy/Terms.

## License

Proprietary — Amani Construction Ltd.
