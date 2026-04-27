# Inception Prompt - Next.js Timesheet Tracker

Use this prompt in Copilot Agent to bootstrap the project end-to-end.

```text
You are my senior full-stack pair programmer. Bootstrap a production-style MVP called "timesheet-tracker" with the stack and constraints below.

Stack (with rationale):
- Next.js 14+ with TypeScript and App Router - full-stack framework in one codebase, plus type safety for AI-generated code.
- Tailwind CSS - fast, consistent styling with low overhead during workshop builds.
- shadcn/ui - accessible, composable UI primitives so we can ship usable screens quickly without custom component churn.
- Prisma ORM - readable schema + migration workflow for teaching database evolution.
- SQLite (via Prisma datasource) - zero extra database install for class while still teaching relational modeling and migrations.
- Zod for validation - runtime safety at API boundaries for correctness and security.
- Vitest (or Jest if easier in scaffold) for tests - fast feedback loop to verify behavior and catch regressions.
- We want ot make sure if we want each page to have own social media sharing icon we can do it, meaning we want to be able to accomodate server generated pages. 

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
- Add `.env.example` (if needed) and document local DB location (for example `prisma/dev.db`)
- Return consistent error responses

Bootstrap commands to run and verify:
1) `npm install`
2) `npx prisma migrate dev --name init`
3) `npx prisma migrate dev --name add_billable_flag`
4) `npm run dev`

Definition of done checklist:
- App runs locally
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
