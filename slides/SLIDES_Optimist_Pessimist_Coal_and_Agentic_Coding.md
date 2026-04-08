# Optimist vs. pessimist — cheap capability and agentic coding

_Deck notes: Each `---` is a slide break (works in Marp, Slidev, and many Markdown-to-deck tools). Adapt titles to your template._

---

## Slide 1 — Title

**Two reads on the same trend**

Optimist: cheaper software capability unlocks *new* value  
Pessimist: automation eats the *first rung* of the career ladder  

---

## Slide 2 — The “coal” pattern (what actually happened)

**Historical anchor: not magic—economics**

British economist **William Stanley Jevons** studied Britain’s dependence on coal in **_The Coal Question_ (1865)**. He observed a counterintuitive pattern:

- **Better technology** (notably more efficient steam power) meant **less coal per unit of useful work**.
- That lowered the **effective cost** of doing things with coal—the same idea as “coal got cheaper to *use*, even when the nominal price of coal wasn’t the whole story.”
- **Total coal use rose**, because the savings **expanded** where coal-powered work made sense: factories, railways, shipping, metals, and tasks that had previously been **too expensive to bother with at scale**.

Economists now often group this under the **Jevons paradox** and the broader **rebound effect**: when a resource becomes cheaper *per unit of outcome*, people deploy it **more widely and more intensely**, not only for the old jobs.

**Sources (for your speaker notes or a “further reading” slide):**

- [Yale Energy History — W. Stanley Jevons, *The Coal Question* (1865)](https://energyhistory.yale.edu/w-stanley-jevons-the-coal-question-1865/)
- [Wikipedia — Jevons paradox](https://en.wikipedia.org/wiki/Jevons_paradox)
- [Economics Help — Jevons Paradox (definition & explanation)](https://www.economicshelp.org/blog/220917/economics/jevons-paradox-definition-and-explanation/)

---

## Slide 3 — Optimist read: agentic coding as “cheaper energy for building”

**If you’re an optimist, the analogy looks like this**

- Coal didn’t only replace older fuels; it **lowered the cost curve for industrial work**, which **created** new uses that had been marginal before.
- **Agentic coding lowers the cost curve for software creation and change.**
- Companies often **bought packaged software** because **custom software that did exactly what they wanted** was too slow, too risky, or too expensive relative to the payoff.
- If “build exactly what we need” drops toward the **same order of cost** as “buy something close enough,” many organizations will **shift the margin**:
  - tighter fit to workflow,
  - fewer compromises,
  - more automation of **their** edge cases—not only the vendor’s median customer.

**One-liner for the room:** *Cheaper capability doesn’t only make old work faster; it makes new work economical.*

---

## Slide 4 — Pessimist read: who gets squeezed first?

**If you’re a pessimist, the worry is structural**

- When tools absorb **repeatable, well-scoped implementation** work, the **first jobs at risk** are often the ones built on **lots of supervised repetition**: classic **entry-level software engineering** tasks (small features, boilerplate, straightforward bugs, test scaffolding) that historically trained judgment through volume.
- If hiring for those rungs falls—or the bar rises to “prove you can own ambiguity on day one”—**pathways into the profession** can narrow unless education and org design **replace** that apprenticeship with something else (stronger systems thinking earlier, more review of AI output, clearer ownership of quality and security).

**Optional facilitator question (neutral framing):** *Which parts of engineering are genuinely “commodity labor,” and which parts are “judgment under uncertainty”—and how do we teach the second without the first?*

---

## Slide 5 — Assembly as a labor-market intuition pump

**Very few people “code” here—but the economics tug in opposite directions**

Think about **assembly language** today:

- The **total pool of paying work** in raw assembly is **small** compared with higher-level stacks—most product value is built above that layer, and compilers handle the rest.
- The **number of engineers** who are fluent, productive, and credible in assembly is also **small**.

Those two facts pull wages in **opposite directions**:

- **Scarcity of talent** → specialists can still be **hard to replace**, which supports **high compensation** for the narrow niches where assembly expertise truly matters (certain embedded systems, security tooling, runtimes, performance cliffs).
- **Thin demand / small market** → there simply aren’t **that many seats** at the table; most engineers never need to live there full time, which **caps** how large the overall profession can be at that layer.

**Talk track:** Don’t treat “scarce skill” as automatically “rich frontier.” A skill can be **rare** and **not** a **growth** category if the **buyer budget** for that skill stays small.

---

## Slide 6 — Higher-level languages under agentic pressure (same *shape* of debate)

**Agentic coding can push “human-at-keyboard” work up the stack—like assembly did, but faster**

If agents reliably shoulder more of the **mechanics** of implementation in mainstream languages, you can get a **similar market shape**—not a literal collapse of those languages, but a shift where:

- **Less human time** is spent turning **clear specs** into **obvious code**, and  
- **More human time** is spent on **problem framing, trade-offs, review, integration, and accountability**.

That can mean **fewer traditional “implementer” headcount** for some workflows **and** **persistent demand** for people who can steer outcomes when the easy layer is automated—except the “rare skill” may be **judgment**, not syntax.

**Crucial difference from assembly:** agents are **not** humans. They don’t carry **stake**, **taste**, or **operational responsibility** for whether the shipped thing **actually helps**.

---

## Slide 7 — Who decides “useful”?

**Agents generate; humans steer**

- A model can produce **locally plausible** code, tests, and refactors all day. It does **not** automatically answer: *Is this the right product? For the right user? Under the right constraints? With acceptable risk?*
- **Usefulness** is a property of **fit to reality**—users, incentives, compliance, economics, maintenance—so the scarce role becomes **ownership of the loop**: clarify goals, define “done,” catch drift, reject bad shortcuts, and stay accountable when it breaks.

**One-liner:** *Agentic coding changes who “types”; it does not remove who “decides.”*

---

## Slide 8 — Same fact pattern, different emphasis (synthesis)

| Lens | Core claim |
|------|------------|
| **Optimist** | Lower cost per unit of software outcome **expands** what’s worth building; **custom** becomes competitive with **generic**. |
| **Pessimist** | Automation **front-loads** productivity and **back-loads** responsibility; **junior-shaped work** may shrink before new ladders appear. |

**Closing line (if you want one):** *Cheap capability (coal, compilers, agents) usually increases total deployment of the capability—but **who gets paid** depends on **demand for the layer humans still own**: fit, risk, and outcomes.*
