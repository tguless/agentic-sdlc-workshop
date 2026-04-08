# Module 2: First AI Collaboration - Timesheet Tracker

**Duration:** 45 minutes  
**Format:** Hands-on in VS Code with GitHub Copilot Agent + Chat

---

## Setup Check (2 min)

Before we begin, confirm:
- VS Code is open
- GitHub Copilot extension is installed and signed in
- You can open Copilot Chat (`Ctrl+Shift+I` / `Cmd+Shift+I`)
- Node.js is installed and available in terminal (`node --version`)

---

## Exercise 1: Inception Prompt Bootstrap (10 min)

**Goal:** Use one high-quality prompt to scaffold a full-stack Next.js app with local SQLite and migrations.

### Steps

1. Open Copilot Agent and paste the prompt from:

`exercises/starter-project/INCEPTION_PROMPT.md`

2. Let Copilot execute the bootstrap plan:
- Create Next.js app (TypeScript + App Router)
- Add Prisma
- Configure Prisma for SQLite
- Configure `.env`
- Create first migration and seed script
- Start app and verify health

3. Verify commands run successfully:

```bash
npm install
npx prisma migrate dev --name init
npm run dev
```

### What to notice

- The quality of the initial prompt determines the quality of the generated project structure.
- AI can bootstrap quickly, but you still need to validate the result end-to-end.

### Key lesson

> The fastest way to use AI is to give it a complete target state, explicit constraints, and clear acceptance criteria.

---

## Exercise 2: Shape the Domain Model (8 min)

**Goal:** Use Chat to design schema decisions before writing more code.

### Prompt

Ask Copilot Chat:

> We are building a timesheet tracker where one user can log time across many projects. Propose a Prisma schema with models for `User`, `Project`, and `TimeEntry`. Include constraints to prevent negative hours and overlapping entries for the same user/project/day. Then explain which constraints belong in the DB and which in application logic.

### Apply

1. Review the proposed schema.
2. Keep the simplest version that supports workshop scope.
3. Generate and run a migration:

```bash
npx prisma migrate dev --name add_timesheet_constraints
```

### Key lesson

> Migration-first thinking creates safer iteration: every meaningful schema decision should be encoded in versioned migrations.

---

## Exercise 3: Refactor AI-Generated Code (8 min)

**Goal:** Turn generated code into maintainable structure.

### Steps

1. Ask Copilot:

> Refactor the time-entry API logic into a service layer with clear function boundaries (`createTimeEntry`, `listTimeEntries`, `deleteTimeEntry`). Keep route handlers thin. Add Zod validation at request boundaries.

2. Apply the refactor and verify behavior is unchanged.
3. Ask Copilot:

> What is still wrong with this design if usage grows to 100k entries per month?

### Key lesson

> AI can do first-pass structure. You still decide boundaries, naming, and long-term maintainability.

---

## Exercise 4: Debugging a Planted Bug (8 min)

**Goal:** Practice AI-assisted debugging without blindly trusting the first answer.

### Steps

1. Open:

`exercises/starter-project/buggy_timesheet.ts`

2. Run the file and observe output:

```bash
node exercises/starter-project/buggy_timesheet.ts
```

3. Ask Copilot:

> The expected billable hours are wrong for entries crossing midnight. Find the bug and suggest a fix with tests.

4. Apply the fix and rerun.

### Key lesson

> AI is often good at formula and date-time bugs, but you must verify with executable tests.

---

## Exercise 5: Failure Exercise (9 min)

**Goal:** Experience a plausible but incorrect answer and practice verification discipline.

### Steps

1. Ask Copilot:

> Implement overtime rules for timesheets: regular time up to 8 hours/day, overtime above 8. Keep it simple.

2. It will likely produce a reasonable-looking function.
3. Now ask:

> Generate edge-case tests for timezone boundaries, daylight saving transitions, and entries that span midnight.

4. Run tests and inspect failures.

### Debrief

- "Looks right" is not "is correct."
- Policy logic fails at boundaries first.
- AI confidence can hide domain mistakes.

### Key lesson

> The most dangerous AI output is a confident approximation in a domain with strict rules.

---

## Module 2 Summary

| Exercise | Skill practiced |
|---|---|
| 1. Inception bootstrap | Defining target state and acceptance criteria |
| 2. Domain modeling | Translating requirements into migrations |
| 3. Refactoring | Converting generated output into maintainable code |
| 4. Debugging | Verifying AI-proposed fixes with runtime evidence |
| 5. Failure exercise | Detecting plausible but wrong AI output |

**Throughline:** Prompting is not the job. Engineering judgment is the job.

---

## Transition to Module 3

> "Now that you can build quickly, let's use AI for the other 80%: requirements, architecture decisions, testing strategy, and security review."
