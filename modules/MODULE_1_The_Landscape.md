# Module 1: The Landscape — Why Agentic SDLC Matters

**Duration:** 30 minutes
**Format:** Facilitated discussion with live data and audience interaction

---

## Opening Question (2 min)

> "Raise your hand if you've used ChatGPT, Copilot, or any AI tool to write code."
>
> Now keep your hand up if you've used AI for anything in software development that **wasn't** writing code — like writing requirements, planning architecture, generating test cases, or reviewing someone else's work.

Most hands will drop. That gap is what this workshop is about.

---

## Part 1: Where Are Agents Actually Deployed? (8 min)

**Key data point:** Anthropic's domain distribution shows that nearly **50% of all AI agent tool usage** is concentrated in software engineering.

| Domain | % of tool calls |
|---|---:|
| Software engineering | 49.7% |
| Back-office automation | 9.1% |
| Marketing and copywriting | 4.4% |
| Sales and CRM | 4.3% |
| Finance and accounting | 4.0% |
| Data analysis and BI | 3.5% |
| Everything else | < 3% each |

**What this means:**
1. **Adoption is still early.** If one domain accounts for half of all usage, we have not reached horizontal penetration across industries.
2. **Builders built for themselves first.** Software engineers were the first to adopt because they could apply agents to their own workflow immediately.
3. **Massive opportunity outside of engineering.** The next wave will be back-office, marketing, sales, finance, research, and operations.

**Discussion prompt:** *"You are the first generation entering the workforce where AI is already embedded in the tools you'll use every day. What does it mean that software engineering is the beachhead? What other domains could benefit?"*

---

## Part 2: The 20% Problem (10 min)

This is the most important reframe of the workshop.

### The data

**Bain & Company (2025)** analyzed SaaS developer teams across companies with 2,000–20,000 employees:
- Writing and testing code accounts for only **25–35%** of idea-to-launch time
- Teams using AI coding assistants see **10–15% productivity boosts**
- Those gains often **don't translate into business outcomes** because saved time isn't redirected

**Microsoft's AI-Native Engineering Flow (2025)** — a three-month experiment with one human engineer and six AI agents:
- Pure implementation dropped from ~50% of engineering time to **single digits**
- Strategic work (planning, architecture, reviews) jumped to **73% of human effort**
- Manual coding was just **5%** of the work

### The implication

> Even if AI doubles your coding speed, you've only accelerated a fraction of the machine.

**What's actually slowing teams down?**
- Messy requirements meetings that produce vague notes
- Security reviews that stall momentum for weeks
- Infrastructure requests sitting in approval queues
- The gap between what someone meant and what got written down

**The bottleneck is not implementation. It's alignment.**

### The shift that matters

| From | To |
|---|---|
| Typing faster | Clarifying faster |
| Generating more code | Reviewing more carefully |
| Output volume | Decision quality |
| "AI writes my code" | "AI helps me think" |

---

## Part 3: What's Happening in the Real World (5 min)

### Signal 1: Block (Square) Layoffs

Jack Dorsey cut roughly half of Block's workforce, stating that "intelligence tools" let a smaller team build and run the company. An ML engineer who had been *using* AI tools daily — and was *building* automation tools — was still laid off. Dorsey predicts many firms will reach the same conclusion within a year.

**Takeaway:** Being an AI user is table stakes. The question is whether you can do the judgment work that AI cannot.

### Signal 2: The Acceleration Curve

Matt Shumer (Feb 2026) described the current moment as a "Feb 2020 moment" — the point where exponential change becomes undeniable. Key claims:
- GPT-5.3 Codex and Opus 4.6 shifted workflows to "describe in English, come back to shipped software"
- Models are now helping build the next models (recursive improvement)
- Anthropic's CEO estimates 50% of entry-level white-collar work could be automated in 1–5 years

### Signal 3: The 2028 Thought Experiment

Citrini Research stress-tested a scenario where agentic automation scales beyond engineering:
- Consumer agents optimize purchases and payments, collapsing middle layers
- "Ghost GDP" — productivity gains that don't translate into income
- The first wave (agentic coding) compresses SaaS and consulting

**Discussion prompt:** *"Does this feel like a threat, an opportunity, or both? What's the difference between someone who thrives in this environment and someone who doesn't?"*

---

## Part 4: What Is an Agentic Engineer? (5 min)

An agentic engineer is **not** "someone who writes prompts."

An agentic engineer is someone who can:

1. **Frame ambiguous goals** for AI systems — turn vague asks into clear, bounded problems
2. **Critique and verify** generated solutions — catch when AI is "locally correct but globally wrong"
3. **Detect weak abstractions** and hidden failure modes — see what the AI cannot
4. **Decide when to trust, steer, or override** an agent — calibrate confidence appropriately
5. **Convert execution speed into durable quality** — use time saved for thinking, not just shipping

This profile is built through **guided practice**, not passive consumption of AI output.

> "AI can generate code, but it cannot donate experience." — Russinovich & Hanselman, CACM 2026

**This workshop is your first guided practice session.**

---

## Transition to Module 2

> "Now that we understand the landscape, let's get our hands dirty. We're going to start by learning what Copilot can do — and then we're going to learn where it breaks."
