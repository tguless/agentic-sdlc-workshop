# Timesheet Tracker

Production-style MVP for tracking project time entries with weekly totals.

## Stack

- Next.js 14 + TypeScript + App Router
- Tailwind CSS + shadcn/ui-style components
- Prisma ORM + SQLite
- Zod validation
- Vitest tests

## Features

- Create and list projects
- Create, list, and delete time entries
- Filter entries by week and project
- Weekly total hours per project
- API-level duration validation (rejects zero/negative/end-before-start)
- Consistent JSON API error shape

## Local Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Apply initial migration:
   ```bash
   npx prisma migrate dev --name init
   ```
3. Apply follow-up migration:
   ```bash
   npx prisma migrate dev --name add_billable_flag
   ```
4. Seed local database:
   ```bash
   npm run prisma:seed
   ```
5. Start app:
   ```bash
   npm run dev
   ```

Open `http://localhost:3000`.

## Database Location

- SQLite file: `prisma/dev.db`
- Environment variable: `DATABASE_URL="file:./prisma/dev.db"` in `.env`
- Example env file: `.env.example`

## Useful Commands

- Run lint:
  ```bash
  npm run lint
  ```
- Run tests:
  ```bash
  npm run test
  ```
- Regenerate Prisma client:
  ```bash
  npm run prisma:generate
  ```
- Reset DB (keeps migration history):
  ```bash
  npm run db:reset
  ```
