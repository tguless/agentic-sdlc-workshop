# Agentic SDLC Workshop — Laptop Preparation Guide

## SUNY Purchase | Workshop with Ted Gulesserian

**Workshop:** Agentic Software Development Lifecycle — Building Software with AI as Your Engineering Partner

**Description:** This hands-on workshop explores how AI is transforming the entire software development lifecycle — not just code generation, but requirements, architecture, testing, security review, and deployment. You will use VS Code with GitHub Copilot to experience what it means to work as an "agentic engineer": someone who can frame problems, direct AI tools, verify outputs, and apply human judgment where it matters most. You will leave with practical skills for working alongside AI across the full SDLC, a clearer understanding of where the industry is heading, and a portfolio-ready project you built during the session.

---

## Why VS Code Is No Longer Just for Software Engineers

VS Code started as a programmer's editor, but with modern AI agents it has become a general-purpose workbench for knowledge work. You can now use it to draft structured documents, analyze information, automate repetitive workflows, and direct AI tools in one place.

For non-engineering roles, this means:

- **Writers and communicators** can generate and refine high-quality markdown documents, then read them in rendered form.
- **Project and operations teams** can ask AI to turn rough ideas into checklists, plans, and execution steps.
- **Analysts and researchers** can summarize large inputs, compare options, and produce decision-ready outputs faster.
- **Technical and non-technical users alike** can use browser-control tools and AI assistants to automate routine digital tasks.

The key shift is this: VS Code is no longer only where humans write code line by line. It is where humans coordinate AI systems to produce reliable outcomes.

---

## What to Install Before the Workshop

Please complete these steps **before arriving**. We will hit the ground running and will not have time to troubleshoot installations during the session.

### 1. Visual Studio Code (Free)

Download and install from: <https://code.visualstudio.com/>

- Choose the version for your operating system (Windows, macOS, or Linux).
- After installation, open VS Code to confirm it launches.

### 2. GitHub Account (Free)

If you do not already have one, create a free account at: <https://github.com/>

- You will need this for Copilot access and for the exercises.

### 3. GitHub Copilot (Free for Students)

GitHub Copilot is **free for verified students** through GitHub Education.

**Step 1 — Get GitHub Education benefits:**

1. Go to <https://education.github.com/benefits>
2. Click "Get student benefits"
3. Verify your student status using your SUNY Purchase email address (.edu)
4. Approval is usually instant but can take up to a few days — **do this early**

**Step 2 — Install the GitHub Copilot extension in VS Code:**

1. Open VS Code
2. Click the Extensions icon in the left sidebar (or press `Ctrl+Shift+X` / `Cmd+Shift+X`)
3. Search for **"GitHub Copilot"**
4. Install the extension by **GitHub** (look for the verified checkmark)
5. You will be prompted to sign in with your GitHub account — do so
6. After sign-in, you should see a Copilot icon in the bottom status bar

**Step 3 — Verify it works:**

1. Create a new file in VS Code (File > New File)
2. Save it as `test.py`
3. Type `def hello_world():` and press Enter
4. Copilot should suggest a completion in gray text — press Tab to accept
5. If you see suggestions, you are ready

### 4. Git (Free)

Git is the version control tool we will use throughout the workshop.

- **macOS:** Open Terminal and type `git --version`. If prompted to install Xcode Command Line Tools, click Install.
- **Windows:** Download from <https://git-scm.com/download/win>. Use the default installation options.
- **Linux:** Run `sudo apt install git` (Ubuntu/Debian) or `sudo dnf install git` (Fedora).

After installation, configure your identity:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@purchase.edu"
```

### 5. Node.js (Free)

We will build a small project during the workshop that uses JavaScript/TypeScript.

- Download the **LTS version** from <https://nodejs.org/>
- After installation, verify by opening a terminal and running:

```bash
node --version
npm --version
```

Both should return version numbers.

### 6. Docker Desktop (Free)

We will run PostgreSQL locally using Docker Compose during the workshop.

- Download and install Docker Desktop: <https://www.docker.com/products/docker-desktop/>
- Start Docker Desktop and make sure it is running before class.
- Verify installation by running:

```bash
docker --version
docker compose version
```

Both commands should return version numbers.

---

## Recommended VS Code Extensions (Optional but Helpful)

Install these from the VS Code Extensions marketplace:

| Extension | Why |
|---|---|
| **GitHub Copilot Chat** | Conversational AI inside VS Code — we will use this extensively |
| **Markdown Preview Enhanced** | For reading workshop materials directly in VS Code |
| **GitLens** | Visualize git history and blame — useful during exercises |
| **Prisma** | Better schema editing and migration workflows |
| **Tailwind CSS IntelliSense** | Autocomplete and class hints for the UI portion |
| **ESLint** | Linting for JavaScript exercises |

---

## Pre-Workshop Checklist

Run through this checklist the night before:

- [ ] VS Code opens and runs normally
- [ ] GitHub Copilot extension installed and signed in
- [ ] Copilot generates suggestions when you type code (test with a `.ts` or `.tsx` file)
- [ ] `git --version` returns a version number in your terminal
- [ ] `node --version` returns a version number
- [ ] `docker --version` and `docker compose version` return version numbers
- [ ] Docker Desktop launches successfully
- [ ] Laptop is charged / charger is packed

---

## Troubleshooting

**Copilot is not generating suggestions:**
- Make sure you are signed into GitHub inside VS Code (check the Accounts icon in the bottom-left)
- Confirm your GitHub Education benefits are active at <https://education.github.com/>
- Try restarting VS Code

**"Git is not recognized" on Windows:**
- Restart your terminal after installing Git
- If still not working, reinstall Git and ensure "Add to PATH" is selected

**Node.js commands not found:**
- Restart your terminal after installation
- On Windows, use the "Node.js command prompt" that was installed with Node

**Docker commands not found or database won't start:**
- Make sure Docker Desktop is installed and fully running
- Restart Docker Desktop, then rerun `docker compose up -d`
- On Windows, confirm Docker Desktop completed backend setup (WSL2/Hyper-V prompt)

**Need help?**
If you run into issues, email the workshop coordinator before the session. Arrive 15 minutes early if you need last-minute help.

---

*See you at the workshop. Come ready to build.*
