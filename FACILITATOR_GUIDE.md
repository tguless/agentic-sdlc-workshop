# Facilitator Guide — Agentic SDLC Workshop

**For:** Ted Gulesserian
**Venue:** SUNY Purchase
**Duration:** 3.5 hours (with one 10-minute break)

---

## Before the Workshop

### One Week Before
- [ ] Send `00_STUDENT_PREP_NOTICE.md` to students (or convert to email)
- [ ] Confirm room has Wi-Fi, power outlets, and a projector/screen
- [ ] Test your own VS Code + Copilot setup on the projector
- [ ] Prepare a backup hotspot in case campus Wi-Fi is unreliable
- [ ] Print 5–10 copies of the prep checklist for students who didn't read the email

### Day Of — Arrive 30 Minutes Early
- [ ] Connect to the projector and verify screen is visible from back of room
- [ ] Open VS Code with Copilot, confirm it's working on the projector
- [ ] Have the exercise files pre-loaded so you can demo without delay
- [ ] Write on the board or project: Wi-Fi name/password, workshop URL (if applicable)

---

## Facilitation Philosophy

This workshop is **build-first, not lecture-first**. The ratio should feel like:

| Activity | % of time |
|---|---|
| Students typing / experimenting | 55% |
| Facilitated discussion / Q&A | 25% |
| Presentation / talking points | 20% |

**Your role:** Guide, not lecturer. Introduce concepts briefly, then get students building. Walk the room during exercises. Ask questions that make students think critically about AI output.

**Energy management:** Module 1 is the most lecture-heavy. Keep it tight (30 min max). The energy rises in Module 2 when students start building. Module 3 is where the "aha" moments happen. Module 4 is flow state — protect it.

---

## Module-by-Module Notes

### Opening (0:00 – 0:15)

**Goal:** Establish energy, verify setups, set expectations.

- Quick personal intro: your background, why you care about this topic
- Quick poll: "How many have used AI for code?" → "How many for anything besides code?" → The gap is the workshop
- **Setup check:** Have everyone open a `.ts` file, type a function signature, confirm Copilot suggests. Help anyone who's stuck. If someone doesn't have Copilot working, pair them with a neighbor
- Set the frame: *"This is not a lecture about AI. This is a build session where you'll experience what it feels like to work with AI across the full software development lifecycle. By the end, you'll have built something real."*

**Timing note:** Don't let setup drag past 15 min. If someone has a deep technical issue, offer to help at the break and have them pair with a neighbor for now.

---

### Module 1: The Landscape (0:15 – 0:45)

**Goal:** Establish why this matters. Create urgency without panic.

**Key talking points (keep to 30 min):**

1. **The agent deployment data** (3 min)
   - Show the domain chart. ~50% software engineering.
   - "You're entering the workforce at ground zero of this transformation. Software engineers are the first to be affected — and the first to benefit."

2. **The 20% problem** (7 min)
   - This is the biggest reframe. Spend time here.
   - Bain data: coding is 25–35% of idea-to-launch. AI coding gains are 10–15%.
   - Microsoft data: implementation dropped to single digits. 73% became strategic work.
   - "Even if AI makes coding infinitely fast, you've only fixed a fraction of the problem."
   - Draw on the board: a pipeline with "Requirements → Design → Code → Test → Security → Deploy → Monitor" — circle "Code" and write "20%". Circle everything else and write "80%".

3. **Real-world signals** (5 min)
   - Block layoffs: the ML engineer who used AI daily and still got laid off
   - The acceleration curve: models helping build models
   - Don't dwell on doom — pivot to: "The people who thrive are the ones who can do the judgment work that AI cannot."

4. **What is an agentic engineer?** (5 min)
   - Frame, critique, verify, decide, convert speed into quality
   - "This profile is built through guided practice — which is exactly what we're about to do."

5. **Discussion** (10 min)
   - *"If coding is only 20% of the system, what are you designing the other 80%?"*
   - *"What skills do you think matter more in this world? What skills matter less?"*
   - Let students talk. This is where buy-in happens.

**Facilitation tips:**
- Watch for anxiety in the room when discussing layoffs/automation. Acknowledge it directly: *"It's rational to feel uncertain. The point of this workshop is to build the skills that make you valuable, not to scare you."*
- If students push back with "but AI will just get better," agree — and redirect: *"Which is why the skill is judgment and verification, not memorizing syntax."*

---

### Module 2: First AI Collaboration (0:45 – 1:30)

**Goal:** Get hands on keyboard. Build confidence with the tool, then introduce failure.

**Flow:**
- Brief intro (2 min): "We're going to do five exercises. The first four teach you what Copilot can do. The fifth teaches you where it breaks."
- Exercises 1–4 (34 min): Students work independently. Walk the room. Help with setup issues. Ask students what they notice.
- Exercise 5 — The Failure Exercise (9 min): This is the most important exercise in Module 2. Frame it: *"I want you to experience what it feels like to accept a confident, wrong answer from AI."*

**Things to watch for:**
- Students who accept every Copilot suggestion without reading it — gently ask: "What did that line do? Do you agree with it?"
- Students who are frustrated that Copilot isn't working well — check their context (is the file saved? does it have the right extension?)
- Students who finish early — challenge them: "Can you make Copilot generate something wrong on purpose? What does that teach you about its limits?"

**Key moment:** After Exercise 5, pause the room. Ask: *"How many of you accepted the email validation function without checking if it actually handles the RFC edge cases?"* Most hands. *"That's exactly how bugs ship in production. The AI's suggestion passes the PR review because it looks plausible."*

---

### Break (1:30 – 1:40)

- Announce: "10-minute break. When we come back, we're going beyond code."
- Use this time to check in with anyone who was struggling

---

### Module 3: Designing the Other 80% (1:40 – 2:25)

**Goal:** The "aha" module. Students experience AI applied to the non-coding parts of the SDLC.

**This is where the workshop thesis becomes real.** Students go from "AI writes code for me" to "AI helps me think about the whole problem."

**Flow:**
- Brief intro (2 min): "Remember the 20% problem? We're now designing the other 80%."
- Exercise 6 — PRD from meeting notes (10 min): This one gets laughs. The meeting notes are deliberately messy and realistic. Students see an AI turn chaos into structure in seconds.
- Exercise 7 — ADR from code (10 min): Good for students who have done any team project. Even if they haven't, the concept of "documenting why you built it that way" clicks.
- Exercise 8 — Test generation (10 min): The reveal is when AI flags gaps between the spec and the code. That's the value.
- Exercise 9 — Security pre-screen (8 min): The `timesheet_security_bug.ts` route is deliberately vulnerable. Students should find SQL injection and auth gaps quickly. The question is whether AI catches *everything*.
- Exercise 10 — Code review (5 min): Quick exercise connecting back to the "AI does first pass, human does judgment pass" pattern.

**Dedicated rubric to project during code review (2-3 min):**
- **Correctness:** does it do what the requirement says, including edge/failure cases?
- **Readability:** can someone else safely modify this later?
- **Security:** auth/authz, injection, secrets, and data exposure risks
- **Maintainability/Architecture:** aligns with patterns and boundaries, avoids long-term complexity
- **Testability:** meaningful unit/integration tests for behavior and regressions

**How to coach comment priority:**
- **Must fix before merge:** correctness + security
- **Should fix:** maintainability/architecture + readability
- **Verify with tests:** testability

**Key discussion after Exercise 9:**
- *"In a real company, this code would sit in a security review queue for eleven days. If AI catches the obvious issues before it enters the queue, the security reviewer focuses on the genuinely ambiguous risks. The queue drains faster."*
- Connect to the bottleneck-instagram content: *"The bottleneck shifts from typing to clarifying, from implementation to alignment, from output to review capacity."*

**Facilitation tip:** If time is tight, you can compress Exercises 9 and 10 into one combined exercise.

---

### Module 4: Capstone Build (2:25 – 3:10)

**Goal:** Flow state. Students build a real thing using the full agentic workflow.

**Setup (2 min):**
- Present the three options. Recommend Option A for beginners, Option B for intermediate, Option C for advanced
- *"You have 40 minutes. The goal is not perfect code. The goal is to practice the full workflow: requirement → architecture → code → test → review → document."*
- *"Work individually or in pairs. Use Copilot freely. I'll be walking around."*

**During the build (35 min):**
- Walk the room. Ask questions, don't give answers:
  - "How much of your time is coding vs. planning?"
  - "Did you accept a suggestion you weren't sure about?"
  - "What would you do differently if you had another hour?"
- If someone finishes early, challenge them: "Can you add a feature that the original PRD didn't specify? How does that change your ADR?"

**Debrief (5 min):**
- Ask the four debrief questions from the module guide
- The most powerful answer is usually to question 1: students realize they spent most of their time thinking, not typing

---

### Closing (3:10 – 3:30)

**Goal:** Synthesis, career framing, send them off inspired.

**Key points (10 min):**

1. **What you practiced today:**
   - Not "how to use Copilot" — how to work as an agentic engineer
   - Frame, critique, verify, decide, convert speed into quality

2. **The preceptorship model:**
   - Russinovich & Hanselman argue: AI is seniority-biased. Seniors get a multiplier; juniors face "AI drag"
   - The solution: guided practice, mentorship, learning *with* AI instead of *from* AI
   - *"You are at the start of your career. The engineers who will lead teams in 10 years are the ones who build judgment now — not the ones who outsource it to AI."*

3. **The career frame:**
   - Being an AI user is table stakes. Everyone will use AI.
   - The differentiator: Can you frame ambiguous problems? Can you catch when AI is wrong? Can you make the design decisions that determine whether faster output becomes faster outcomes?
   - *"The winning strategy is not 'faster coding' or 'new role titles,' but redesigning end-to-end flow so AI removes friction across the whole lifecycle."*

**Open discussion (8 min):**
- *"What surprised you today?"*
- *"What worried you?"*
- *"What are you going to try tomorrow?"*

**Close (2 min):**
- Point to `resources/FURTHER_READING.md` for continued learning
- Thank them. End with energy.

---

## Emergency Fallbacks

| Problem | Solution |
|---|---|
| Wi-Fi goes down | Have students work with files they've already created. Copilot has some offline capability for inline suggestions. Shift to peer review and discussion |
| Copilot is down for everyone | Pivot to a discussion-based format: walk through the exercises conceptually, use screenshots or pre-built examples |
| Student can't get Copilot working | Pair with neighbor. Don't let one person's setup issue slow the room |
| Running behind schedule | Cut Exercise 10 (code review) in Module 3. Reduce capstone to 30 min. Keep the closing discussion |
| Running ahead of schedule | Extend the capstone. Add a "present your feature" round where 2-3 students demo what they built |
| Hostile/skeptical student | Acknowledge the concern. "You might be right that AI won't replace engineers. This workshop is about making you more effective either way." Redirect to practical skills |

---

## Room Setup

- **Ideal:** Seminar-style tables where students can see each other and the projector
- **Acceptable:** Lecture hall rows with power strips
- **Need:** Reliable Wi-Fi, one power outlet per 2-3 students, projector/screen visible from all seats
