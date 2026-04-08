# Agentic SDLC Workshop — Overview & Agenda

## SUNY Purchase | Facilitator: Ted Gulesserian

---

## Workshop Title

**Agentic Software Development Lifecycle: Building Software with AI as Your Engineering Partner**

## Workshop Description

Software engineering is being redefined. AI coding assistants can now generate code, propose architectures, write tests, and draft documentation. But coding has always been only about 20% of the work it takes to ship software. The other 80% — gathering requirements, making design decisions, conducting security reviews, managing infrastructure, coordinating teams — is where the real bottlenecks live.

This workshop teaches you to think and work as an **agentic engineer**: someone who directs AI tools across the entire software development lifecycle, applies judgment to verify and refine AI output, and understands where human decision-making is irreplaceable. You will use VS Code with GitHub Copilot to build a real project while learning the principles that separate engineers who *use* AI from engineers who are *replaced* by it.

---

## Learning Objectives

By the end of this workshop, students will be able to:

1. **Explain** why AI-accelerated coding alone does not improve software delivery speed
2. **Use** GitHub Copilot (inline completions and chat) to generate, refactor, and debug code
3. **Apply** AI tools upstream — to requirements, architecture decisions, test plans, and security reviews
4. **Evaluate** AI-generated output for correctness, quality, and hidden failure modes
5. **Articulate** what "agentic engineering" means and how it differs from passive AI consumption
6. **Build** a working project using AI as a collaborative engineering partner

---

## Agenda (3.5 Hours)

| Time | Duration | Module | Activity |
|---|---|---|---|
| 0:00 | 15 min | **Opening** | Welcome, introductions, verify setups |
| 0:15 | 30 min | **Module 1: The Landscape** | Why agentic SDLC matters — industry data, what's changing, the 20% problem |
| 0:45 | 45 min | **Module 2: Your First AI Collaboration** | Hands-on with Copilot — code generation, chat, refactoring, debugging |
| 1:30 | 10 min | **Break** | |
| 1:40 | 45 min | **Module 3: Designing the Other 80%** | AI for requirements, architecture, testing, security, and review |
| 2:25 | 45 min | **Module 4: Capstone Build** | End-to-end project: from spec to deployed feature using agentic workflow |
| 3:10 | 20 min | **Closing** | Reflection, discussion, career implications, resources |

---

## Workshop Flow

### Opening (15 min)
- Quick poll: "How many of you have used an AI coding tool?"
- Verify everyone's Copilot is working (quick test: open a `.ts` file, type a function signature)
- Set expectations: this is a *build* workshop, not a lecture

### Module 1: The Landscape (30 min)
**Theme: Why this matters — and why coding speed is not the point**

- The data: ~50% of agent tool usage is concentrated in software engineering (Anthropic domain data)
- The 20% problem: coding is only a fraction of the SDLC (Bain 2025, Microsoft AI-Native Engineering Flow)
- What's actually scarce: attention, requirement quality, human judgment
- Real-world signal: Block layoffs and the "intelligence tools" thesis
- The 2028 question: what happens when agentic automation scales beyond engineering?
- Discussion: "If coding is only 20% of the system, what are you designing the other 80%?"

### Module 2: Your First AI Collaboration (45 min)
**Theme: Learn the tools — then learn their limits**

- Exercise 1: Bootstrap a Next.js timesheet tracker with an inception prompt
- Exercise 2: Use Copilot Chat to design data model and API shape
- Exercise 3: Refactor generated code into maintainable modules
- Exercise 4: Debug a planted timesheet calculation bug
- Exercise 5: Failure exercise — where AI gives a plausible but incorrect policy implementation
- Debrief: When to trust, when to verify, when to override

### Module 3: Designing the Other 80% (45 min)
**Theme: Push AI upstream — requirements, architecture, testing, review**

- Exercise 6: From vague notes to structured PRD using Copilot Chat
- Exercise 7: Generating an Architecture Decision Record (ADR) from code context
- Exercise 8: AI-generated test cases that catch what requirements missed
- Exercise 9: Security pre-screening a code diff
- Exercise 10: AI-assisted code review — first pass before human judgment
- The pattern: AI produces the first draft; humans apply judgment

### Module 4: Capstone Build (45 min)
**Theme: End-to-end agentic workflow on a real feature**

Students build and extend a **Next.js timesheet tracker** using the full agentic workflow:
1. Write the requirement (with AI assistance)
2. Generate an architecture sketch (with AI)
3. Implement the code with local Postgres + migrations (with Copilot)
4. Generate and run tests (with AI)
5. Conduct a self-review using AI as first-pass reviewer
6. Document the decision in an ADR

### Closing (20 min)
- Reflection: "What surprised you? What worried you?"
- The agentic engineer profile: frame, critique, verify, decide, convert speed into quality
- Career implications: why foundational engineering skills matter *more* with AI, not less
- The preceptorship model: how the industry is thinking about junior-to-senior growth
- Resources and next steps

---

## Materials

| File | Purpose |
|---|---|
| `00_STUDENT_PREP_NOTICE.md` | Send to students before the workshop — laptop setup instructions |
| `01_WORKSHOP_OVERVIEW.md` | This document — agenda and flow |
| `modules/MODULE_1_The_Landscape.md` | Talking points and discussion prompts for Module 1 |
| `modules/MODULE_2_First_AI_Collaboration.md` | Step-by-step exercises for Module 2 |
| `modules/MODULE_3_Designing_The_Other_80.md` | Step-by-step exercises for Module 3 |
| `modules/MODULE_4_Capstone_Build.md` | Capstone project instructions |
| `exercises/starter-project/` | Starter code for hands-on exercises |
| `resources/FURTHER_READING.md` | Articles, papers, and links referenced in the workshop |
| `FACILITATOR_GUIDE.md` | Ted's facilitation notes, timing cues, discussion prompts |
