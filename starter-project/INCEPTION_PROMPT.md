# Inception Prompt - Next.js Timesheet Tracker

Use this prompt in Copilot Agent to bootstrap the project end-to-end.

```text
You are my senior full-stack pair programmer. Bootstrap a production-style MVP called "timesheet-tracker" with the stack and constraints below.

Stack (with rationale):
- Next.js 14+ with TypeScript and App Router - full-stack framework in one codebase, plus type safety for AI-generated code.
- Tailwind CSS - fast, consistent styling with low overhead during workshop builds.
- shadcn/ui - accessible, composable UI primitives so we can ship usable screens quickly without custom component churn.
- Prisma ORM - readable schema + migration workflow for teaching database evolution.
- PostgreSQL via Docker Compose - reproducible local environment and fewer "works on my machine" issues.
- Zod for validation - runtime safety at API boundaries for correctness and security.
- Vitest (or Jest if easier in scaffold) for tests - fast feedback loop to verify behavior and catch regressions.

Core entities:
- User: id, email, displayName
- Project: id, name, clientName (optional), isActive, createdAt
- TimeEntry: id, userId, projectId, entryDate, startTime, endTime, hoursDecimal, notes (optional), billable, createdAt

Functional requirements:
1) Create/list projects
2) Create/list/delete time entries
3) Filter entries by week and project
4) Show weekly total hours per project
5) Reject invalid durations (negative, zero, end before start)

Technical requirements:
- Keep API handlers in `app/api/*/route.ts`
- Create a small data access layer under `lib/`
- Use Tailwind for styling and shadcn/ui components for form/table/card primitives
- Use Prisma migrations (`npx prisma migrate dev`)
- Add at least one follow-up migration after init
- Provide seed data script
- Add `docker-compose.yml` and `.env.example`
- Return consistent error responses

Bootstrap commands to run and verify:
1) `docker compose up -d`
2) `npm install`
3) `npx prisma migrate dev --name init`
4) `npx prisma migrate dev --name add_billable_flag`
5) `npm run dev`

Definition of done checklist:
- App runs locally
- Postgres container is healthy
- Migrations apply cleanly
- Seed data loads
- Project and time-entry flows work
- Weekly totals render in UI
- README includes setup, migration, and reset commands

Execution protocol:
1) Propose file plan first
2) Implement incrementally
3) Run each command and report output
4) If anything fails, fix and retry
5) End with a completed definition-of-done checklist
```
