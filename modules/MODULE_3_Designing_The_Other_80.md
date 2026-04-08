# Module 3: Designing the Other 80% - Timesheet Edition

**Duration:** 45 minutes  
**Format:** Hands-on exercises beyond code generation

---

## Context (2 min)

In Module 2, you built working code quickly.  
In Module 3, you remove delivery bottlenecks: unclear requirements, missing architecture rationale, weak test strategy, and late security findings.

Pattern for every exercise:
1. AI creates a first draft
2. You verify and improve it
3. Judgment remains human-owned

---

## Exercise 6: Meeting Notes to PRD (10 min)

**Scenario:** You just left a messy planning call for a timesheet feature.

### Steps

1. Open:

`exercises/starter-project/meeting_notes.txt`

2. Ask Copilot Chat:

> Convert these notes into a structured PRD with:
> 1) feature summary, 2) user stories, 3) acceptance criteria, 4) non-functional requirements, 5) open questions, 6) out of scope, 7) rollout plan.

3. Ask a second pass:

> What decisions are missing that could block engineering next sprint?

### Key lesson

> AI compresses documentation latency. Your value is deciding what is true, what is missing, and what should be prioritized.

---

## Exercise 7: ADR for Database + Migration Strategy (10 min)

**Scenario:** Team is debating schema strategy while moving fast in Next.js.

### Steps

Ask Copilot:

> Draft an ADR for this decision: "Use Prisma migrations with SQLite for workshop development (with a future path to Postgres in production)." Include context, decision, alternatives (Postgres + Docker, Drizzle, raw SQL), consequences, and migration guardrails.

Then ask:

> What could go wrong with migration workflows in a team of 8 engineers, and how do we prevent it?

### Key lesson

> Teams repeatedly lose time to undocumented decisions. AI can draft ADRs fast; humans still choose trade-offs.

---

## Exercise 8: Test Strategy as Risk Management (10 min)

**Scenario:** Timesheet logic appears correct, but payroll-impact bugs are expensive.

### Steps

Ask Copilot:

> Generate a test matrix for a timesheet tracker:
> - Unit tests for time calculations
> - Integration tests for API + database writes
> - Edge cases: cross-midnight entries, duplicate submission, negative hours, timezone mismatch
> - Data integrity checks for migrations

Then ask:

> Which 5 tests should run on every PR, and which can run nightly? Justify by risk and runtime.

### Key lesson

> Better engineering is not "more tests." It is better risk prioritization with fast feedback loops.

---

## Exercise 9: Security Pre-Screen (8 min)

**Scenario:** A route is feature-complete and needs pre-review before security queue.

### Steps

1. Open:

`exercises/starter-project/timesheet_security_bug.ts`

2. Ask Copilot:

> Perform a security review. For each issue:
> - Name vulnerability type
> - Explain risk in plain language
> - Provide fixed code
> - Assign severity

3. Verify whether it catches:
- SQL injection
- Missing authN/authZ
- Tenant data leakage risk
- Missing input validation

### Key lesson

> AI pre-screening removes obvious defects before formal review, so security experts focus on ambiguous and high-impact risks.

---

## Exercise 10: AI-Assisted Code Review (5 min)

**Scenario:** You are reviewing the same timesheet endpoint as a senior engineer.

### Steps

Ask Copilot:

> Review this code as a senior engineer and separate feedback into:
> 1) must fix before merge, 2) should fix, 3) future improvements, 4) what is done well.
> Also evaluate alignment with the PRD and ADR.

### Key lesson

> AI can provide a first-pass review; humans remain accountable for architecture, policy, and long-term quality.

---

## Dedicated Rubric: The 5 Pillars of Code Review

Use this checklist when reviewing any PR (human review or AI-assisted review):

1. **Correctness** - Does the change actually satisfy the requirement and handle edge/failure paths?
2. **Readability** - Will another engineer understand and safely modify this code in six months?
3. **Security** - Does this introduce exploitable risk (auth/authz gaps, injection paths, secret exposure)?
4. **Maintainability / Architecture** - Does this align with existing boundaries and patterns without adding long-term complexity?
5. **Testability** - Are tests meaningful for behavior and regressions, not just coverage padding?

### How this maps to review comments

- **Must fix before merge:** Correctness + Security
- **Should fix:** Maintainability / Architecture + Readability
- **Verify with tests:** Testability

---

## Copy/Paste Prompt: AI Reviewer Agent

Use this prompt with Copilot Agent (or any coding agent) for a first-pass PR review:

```text
Review this PR using the 5 Pillars of Code Review:
1) Correctness
2) Readability
3) Security
4) Maintainability/Architecture
5) Testability

Output format:
- Must fix before merge (blocking)
- Should fix (non-blocking)
- Test gaps and suggested tests
- Quick risk summary (High/Medium/Low)
- Final recommendation: Approve / Request Changes

Rules:
- Be specific and cite exact files/functions.
- Prefer concrete fixes over generic advice.
- If uncertain, state assumptions explicitly.
- If there are no findings in a pillar, explicitly say "No findings" for that pillar.
```

### Usage pattern

1. Run the agent on the PR as a first pass.
2. Triage "Must fix before merge" first.
3. Human reviewer makes final merge decision.

---

## Module 3 Summary

| SDLC Phase | AI first draft | Human judgment |
|---|---|---|
| Requirements | PRD from notes | Priorities, scope, constraints |
| Architecture | ADR draft | Trade-offs and standards |
| Testing | Test matrix | Risk-based selection |
| Security | Vulnerability pre-screen | Final risk decisions |
| Review | Structured review comments | Design and direction |

---

## Transition to Module 4

> "Now we combine everything in one build flow: requirement, migration plan, implementation, tests, review, and ADR updates."
