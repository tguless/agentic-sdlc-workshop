# Beyond “writing code”: agents across the software delivery supply chain

_Deck notes: Each `---` is a slide break (Marp, Slidev, etc.). Tune product names to your org’s stack._

---

## Slide 1 — Title

**SDLC ≠ typing**

Holistic agents across the **software delivery supply chain** — from evidence → decisions → build → verify → ship → learn  

---

## Slide 2 — The delivery chain (why “just code” misses the point)

**Software delivery is a pipeline of decisions, not a monolith**

| Stage | Examples of “non-code” work that still ships software |
|-------|------------------------------------------------------|
| **Discover** | user research, competitive scans, compliance constraints |
| **Decide** | trade-offs, risk acceptance, architecture, standards |
| **Design** | APIs, data models, threat models, UX flows |
| **Build** | implementation *and* automation, migrations, docs |
| **Verify** | tests, reviews, performance, accessibility, security checks |
| **Release & operate** | rollout plans, observability, incident response, feedback loops |

**Talk track:** Agents help most when you treat the **whole chain** as promptable, reviewable work—not when you only accelerate the editor.

---

## Slide 3 — Research assistants: doing it *right*, with receipts

**Grounded research changes the quality bar**

Tools in this family (examples you can demo):

- **Google NotebookLM** — works from **your source library** (docs, PDFs, specs, policies). Answers and summaries are **anchored to what you uploaded**, which reduces “confident nonsense” compared to generic chat. Use it to **compare sources**, extract requirements, and pressure-test assumptions **against the materials your team already trusts**.
- **“Deep research” workflows** (e.g., multi-step research modes in major assistants) — automate **iterative search → reading → synthesis**, producing **longer briefs** with **citations** you can click back to.

**Why it matters for SDLC:** the bottleneck is often **unknown unknowns** (“what’s industry practice here?”, “what did legal say?”, “what broke last time?”). Research tools turn that into **checkable claims** instead of vibes.

**Optional links (speaker notes):**

- [NotebookLM](https://notebooklm.google/)
- Frame “deep research” generically unless you standardize on one vendor feature name.

---

## Slide 4 — From research to *durable* engineering artifacts

**Don’t let the insight die in chat history**

Turn what you learned into **durable, versioned** records:

- **Architecture Decision Records (ADRs)** — short, time-stamped decisions: *context*, *decision*, *consequences*, *status*. Perfect for “why we chose X over Y.”
- **Living documents** that outlive a single sprint:
  - **Engineering standards** (testing, observability, API conventions)
  - **Threat models / data handling notes**
  - **Runbooks** and **on-call playbooks**
  - **Product requirements** that link to metrics and non-goals

**Talk track:** Research tools help you **gather evidence**; ADRs and handbooks help you **encode the verdict** so the whole system—not just one senior engineer—behaves consistently.

---

## Slide 5 — Why long-lived documents matter *especially* for agents

**Agents are strong—but by default they’re *locally* coherent unless you give them a keel**

Without durable docs, an agent optimizes for **local coherence**: the next patch *sounds* right.

With durable docs, you can force alignment to **global coherence**:

- **Guardrails** — “we don’t do that here” (auth patterns, PII rules, repo layout)
- **Stable vocabulary** — same names for services, domains, error codes
- **Decision memory** — avoids re-litigating ADR #12 every session
- **Reviewable diffs** — doc updates become **audit trails of intent**

**One-liner:** Chat is volatile; **Git + docs are the steering wheel** for a fleet of agents.

---

## Slide 6 — Where this breaks: the context window is finite

**The transition problem: “everything important” does not fit in prompt**

Even with perfect docs, an agent cannot load **the whole org brain** every time.

Typical failure modes:

- **Lost thread** after long sessions or compaction
- **Wrong mental model** — reads *some* files, misses the policy doc
- **Inconsistent execution** across parallel sessions or multiple contributors

**Talk track:** The industry isn’t debating *whether* context is limited; it’s debating **what belongs in-context vs. what must be fetched, delegated, or tracked externally**.

---

## Slide 7 — Orchestration: task systems as “shared memory” for agent armies

**You need a flight deck, not a hundred sticky notes**

Example pattern: **Beads** (lightweight, **Git-friendly** task/issue layer popularized in agent workflows)

- **Persistent tasks** survive session restarts (“what were we doing?”)
- **Dependencies** (“A blocks B”) let tools or agents query **what’s ready**
- **Epics / grouping** structure large efforts so work stays navigable
- **Shared state across agents** reduces duplication and dropped follow-ups

**Talk track:** When many agents (or many *runs* of one agent) touch a repo, **centralized task state** is how you prevent thrash.

**Further reading (Beads / adjacent ideas):**

- [Introducing Beads: A coding agent memory system — Steve Yegge (Medium)](https://steve-yegge.medium.com/introducing-beads-a-coding-agent-memory-system-637d7d92514a)
- [Long-running Agentic Work with Beads — DoltHub Blog](https://www.dolthub.com/blog/2026-01-27-long-running-agentic-work-with-beads/)

---

## Slide 8 — Anthropic-shaped controls: **Subagents** vs **Skills**

**Two complementary answers to “we’re out of context”**

| Mechanism | What it is | What problem it solves |
|-----------|------------|-------------------------|
| **Subagents** | Delegated workers with **fresh / separate context** | Long jobs split into focused chunks; parallel exploration without one mega-transcript |
| **Skills** (e.g. `SKILL.md` bundles) | **Reusable playbooks**—instructions + optional assets, loaded **when needed** | Standardize recurring workflows without pasting a novel into every prompt |

**Skills + progressive disclosure:** load **metadata first**, pull in deeper instructions only when the skill triggers—**spending tokens deliberately**, not dumping the handbook up front.

**Official / primary docs (speaker notes):**

- [Agent Skills overview — Claude API Docs](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview)
- [Introduction to subagents — Anthropic Courses](https://anthropic.skilljar.com/introduction-to-subagents)

---

## Slide 9 — Synthesis: one operating model

**Stack the layers**

1. **Evidence layer** — grounded research (NotebookLM-style libraries, deep research) → **citations and depth**
2. **Memory layer** — **ADRs + standards + runbooks** → stable intent
3. **Coordination layer** — **task graphs** (e.g. Beads-style) → multi-session, multi-agent alignment
4. **Context engineering layer** — **Skills** (load on demand) + **Subagents** (partition work) → stay inside the window without dumbing down the task

**Closing line:** Holistic SDLC with agents is **knowledge work at scale**: you win when **truth is documented**, **work is tracked**, and **context is budgeted**.
