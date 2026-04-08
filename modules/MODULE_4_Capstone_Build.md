# Module 4: Capstone Build - Next.js Timesheet Tracker

**Duration:** 45 minutes  
**Format:** Individual or pair build using full agentic workflow

---

## The Challenge

Build and ship a working **timesheet tracker** where a user can:
- Create projects
- Log time entries against projects
- View entries for a selected week
- See total hours per project

Use **Next.js + Prisma + Postgres (Docker Compose)** with migration-driven schema changes.

---

## Inception Prompt (Copy/Paste)

Paste this into Copilot Agent as your bootstrap instruction:

```text
You are my senior full-stack pair programmer. Bootstrap a production-style MVP called "timesheet-tracker" with the stack and constraints below.

Stack:
- Next.js 14+ with TypeScript and App Router
- Prisma ORM
- PostgreSQL running via Docker Compose
- Zod for request validation
- Minimal UI with server/client components as needed

Core domain:
- User (single local demo user is fine)
- Project (name, clientName optional, active flag)
- TimeEntry (projectId, entryDate, startTime, endTime, hoursDecimal, notes optional, billable boolean)

Requirements:
1) Create project
2) List projects
3) Create time entry for a project
4) List time entries by week
5) Show weekly totals per project
6) Prevent negative duration and end < start
7) Seed sample data

Deliverables:
- `docker-compose.yml` for postgres
- `.env.example` and `.env` (DATABASE_URL)
- Prisma schema in `prisma/schema.prisma`
- Initial migration
- Seed script
- API routes under `app/api/*`
- Basic UI under `app/*`
- `README.md` with setup + migration commands

Migration workflow:
- Use `npx prisma migrate dev` for schema changes
- Include at least one follow-up migration beyond init (e.g., add `billable` or index)

Quality guardrails:
- Keep route handlers thin
- Put data access in small service/repository functions
- Validate all write payloads with Zod
- Return consistent JSON error shape

Execution protocol:
1) Propose file plan first
2) Implement files
3) Run and report: `docker compose up -d`, `npm install`, `npx prisma migrate dev --name init`, `npm run dev`
4) If command fails, fix and retry
5) End with a checklist proving each requirement is met
```

---

## Step-by-Step Workflow

### Step 1: Requirement (5 min)

Ask Copilot Chat:

> Turn the capstone challenge into a concise PRD with user stories, acceptance criteria, out-of-scope, and non-functional constraints.

Save as `REQUIREMENT.md`.

---

### Step 2: Architecture + ADR (5 min)

Ask:

> Draft ADR-001 for "Prisma + Postgres via Docker Compose for local development." Include alternatives and trade-offs.

Save as `ADR-001.md`.

---

### Step 3: Implement + Migrations (15 min)

Use the inception prompt to scaffold and implement.

Run:

```bash
docker compose up -d
npm install
npx prisma migrate dev --name init
npx prisma migrate dev --name add_billable_flag
npm run dev
```

---

### Step 4: Generate and Run Tests (8 min)

Ask Copilot:

> Generate tests for timesheet calculations and API routes. Cover cross-midnight entries, invalid payloads, and weekly aggregate totals.

Run tests and fix failures.

---

### Step 5: Self-Review (5 min)

Ask Copilot:

> Review this project as a senior engineer. Separate findings into must-fix, should-fix, and future improvements. Also check alignment with REQUIREMENT.md and ADR-001.md.

Apply must-fix issues if time permits.

---

### Step 6: ADR Update (2 min)

Update `ADR-001.md` with:
- What changed during implementation
- Migration lessons learned
- What you would change in v2

---

## Debrief Questions (5 min, facilitated)

1. Where did AI save the most time?
2. Where did AI increase risk?
3. Which migration decision was easiest to get wrong?
4. What would you automate next in this workflow?

---

## What You Practiced

| Step | AI contribution | Human contribution |
|---|---|---|
| Requirement | Drafted PRD | Clarified scope and policy |
| Architecture | Drafted ADR | Chose trade-offs |
| Implementation | Scaffolded code | Directed structure and validation |
| Migration | Generated schema changes | Controlled safety and sequence |
| Testing | Proposed coverage | Prioritized high-risk cases |
| Review | First-pass critique | Final engineering judgment |

This is agentic SDLC in practice: use AI for speed, keep humans accountable for correctness and direction.
