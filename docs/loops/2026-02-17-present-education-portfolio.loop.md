# LIVING_PLAN: Present Education Portfolio GitHub Repo

<!--
RALPH LOOP TEMPLATE
===================
This document is the single source of truth for sequential agent iterations.
Each agent reads this fresh, executes ONE step, updates this doc, then exits.
Any agent can resume work from this document alone — no context dependencies.

AGENT CONTRACT:
1. Read this entire document before taking action
2. Execute ONLY the step marked [CURRENT]
3. Update Step Outputs, Discoveries, and Next Action before exiting
4. Never skip ahead or batch multiple steps
5. If blocked, document the blocker and propose resolution
-->

## Metadata

| Field | Value |
|-------|-------|
| **Workflow Type** | `feature` |
| **Status** | `in-progress` |
| **Iteration** | `3` |
| **Max Iterations** | `20` |
| **Created** | 2026-02-17 |
| **Last Updated** | 2026-02-17 23:20 |
| **Owner** | Eli Coon |
| **Project** | `/home/eli/projects/present` |

---

## Objective

**Goal:** Create a compelling public GitHub repository (`present-education`) that showcases the Present Education EdTech startup (2017-2019) as a portfolio artifact — with a richly visual README, interactive HTML prototype using original designs, comprehensive feature docs, and a retrospective.

### Acceptance Criteria

- [ ] GitHub repo `present-education` is public and accessible
- [ ] README renders correctly with all images on GitHub
- [ ] Interactive HTML prototype is live on GitHub Pages, all student + teacher flows clickable
- [ ] `docs/product-features.md` covers all 13 features with screenshots and step-by-step flows
- [ ] `docs/retrospective.md` is written (scaffold + Eli personalizes)
- [ ] `docs/shutdown-letter.md` contains original August 2019 text
- [ ] `docs/architecture.md` covers three-tier DB, WebSocket, offline-first, LMS integrations
- [ ] Pitch deck PDF committed to `pitch/`
- [ ] No sensitive data (SSNs, home addresses, student PII, investment amounts) in any committed file
- [ ] Repo topics set, pinned to GitHub profile

### Scope Boundaries

- Not addressing: Writing actual backend code for a new version of the app
- Not addressing: Deploying any live server-side functionality
- Not addressing: Sensitive legal documents (cap table, personal agreements)
- Not addressing: Individual student data from pilot CSVs

---

## Key Files

| File | Purpose |
|------|---------|
| `/home/eli/projects/present/docs/plans/2026-02-17-present-portfolio-github-repo.md` | Full implementation plan — 10 tasks with exact commands and file paths |
| `/home/eli/projects/present/docs/loops/2026-02-17-present-education-portfolio.loop.md` | This loop document — source of truth for progress |
| `Present - Reference/Product Development/Design/Present Final Export (3.17.19)/PNG exports/` | 45 final app design screens — primary source for prototype and docs |
| `Present - Reference/Product Development/Design/Web/Teacher/Rev 8 7-23/` | 28 teacher dashboard screens |
| `Present - Reference/Product Development/App Store Submission/iOS Submission Screens/Resized/` | 5 polished iOS App Store screenshots |
| `Present - Reference/Sales & Marketing/Branding/` | Full logo system, color palette, teacher illustration |
| `Present - Reference/Product Development/Tech Stack - Architecture/` | Architecture diagrams (PNGs) |
| `Present - Reference/Pilot/Early Planning/Present Overview for Teachers.jpg` | Hero image for README |
| `Present - Reference/Shut Down Letter.docx` | Original shutdown letter (August 2019) |
| `Present - Reference/Retrospective Article.docx` | Retrospective outline (never completed — scaffold needed) |
| `Present - Reference/Sales & Marketing/Pitch Materials/Present Pitch Deck.pptx` | Investor pitch deck |

---

## Steps

### Step 1: Create GitHub Repo & Directory Structure
**Status:** [DONE]

**Purpose:** Create the public `present-education` repo, set up all directories, enable Git LFS for large assets, make first commit.

**Inputs:**
- GitHub account (gh CLI configured)
- Plan file at `/home/eli/projects/present/docs/plans/2026-02-17-present-portfolio-github-repo.md`

**Actions:**
- Run `gh repo create present-education --public ...` (see plan Task 1, Step 1)
- `cd present-education && mkdir -p assets/branding assets/screenshots/ios ...` (see plan Task 1, Step 2)
- Add `.gitattributes` for Git LFS (plan Task 1, Step 3)
- Initial commit + push

**Expected Outputs:**
- Repo live at `github.com/[username]/present-education`
- Directory skeleton committed
- Plan file and loop file committed to the repo

**Actual Outputs:**
```
Repo: https://github.com/elicoon/present-education
Commit: f650f47 — "chore: initialize repo with directory structure, plan, and loop doc"
12 files committed (plan, loop doc, .gitkeep placeholders for all asset dirs)
```

**Verification:** `gh repo view present-education --web` opens the repo successfully.

---

### Step 2: Extract & Copy Visual Assets
**Status:** [DONE]

**Purpose:** Copy all design exports, screenshots, branding, and architecture diagrams from the source archive into the repo. This is a prerequisite for all doc writing and the prototype.

**Inputs:**
- Cloned `present-education` repo (from Step 1)
- Source archive at `/home/eli/projects/present/Present - Reference/`

**Actions:**
- Copy final app design exports (45 screens) → `assets/screenshots/app-screens/`
- Copy iOS App Store screens → `assets/screenshots/ios/`
- Copy Android framed mockups → `assets/screenshots/android/`
- Copy teacher dashboard screens (28) → `assets/screenshots/teacher-dashboard/`
- Copy branding assets (logos, color palette, teacher illustration) → `assets/branding/`
- Copy architecture diagrams → `assets/architecture/`
- Copy pilot overview image → `assets/pilot/`
- Copy state management wireframes → `assets/wireframes/`
- Also copy app screens + dashboard screens to `prototype/screens/` for prototype use
- Commit all

**Expected Outputs:**
- `assets/` populated with 80+ image files
- `prototype/screens/` populated for prototype use

**Actual Outputs:**
```
app-screens: 44 files
ios: 5 files (Countdown Timer, IDGI, Learning Checks, Schedule View, Temp Check)
android: 5 framed device mockups
teacher-dashboard: 27 files
branding: 9 files (logos, color palette, teacher illustration)
architecture: 2 files (PresentGeneralApplicationFlow.png, PresentTechStack.png)
pilot: 1 file (Present Overview for Teachers.jpg)
wireframes: 3 files (state management diagrams)
prototype/screens/app: 44 files (copy of app-screens)
prototype/screens/dashboard: 27 files (copy of teacher-dashboard)
Total repo size: 30MB — commit 93915ae
```

**Verification:** `ls assets/screenshots/app-screens/ | wc -l` returns ~45.

---

### Step 3: Write Shutdown Letter Doc
**Status:** [CURRENT]

**Purpose:** Commit the original August 2019 shutdown letter as `docs/shutdown-letter.md`.

**Inputs:**
- Full letter text (already extracted — see Discoveries section)

**Actions:**
- Write `docs/shutdown-letter.md` with full letter text
- Remove personal email address if present
- Commit

**Expected Outputs:**
- `docs/shutdown-letter.md` committed

**Actual Outputs:**
```
[To be filled after execution]
```

**Verification:** `gh browse` → navigate to `docs/shutdown-letter.md` — renders cleanly.

---

### Step 4: Write the Retrospective
**Status:** [NEXT]

**Purpose:** Write the full retrospective scaffold in `docs/retrospective.md`. Eli personalizes before publishing.

**Inputs:**
- Retrospective outline from `Present - Reference/Retrospective Article.docx`
- All context from the 8 parallel agent reports (see Discoveries)
- Full scaffold structure in plan Task 4

**Actions:**
- Read `Retrospective Article.docx` outline first
- Write full ~2,000-word scaffold following the structure in the plan
- Include `[PERSONALIZE]` markers for Eli to fill in
- Commit with note that Eli should review before publishing

**Expected Outputs:**
- `docs/retrospective.md` — complete scaffold, ~2,000 words

**Actual Outputs:**
```
[To be filled after execution]
```

**Verification:** Document is readable end-to-end; `[PERSONALIZE]` sections clearly marked; no placeholder text left in non-marked sections.

---

### Step 5: Write the README
**Status:** [NEXT]

**Purpose:** Write the centerpiece `README.md` with full startup story, stats, screenshots, architecture, pilot facts, business model, team, and links to all docs.

**Inputs:**
- Assets copied in Step 2 (image paths must exist)
- Shutdown letter (Step 3), retrospective (Step 4) committed
- Full README structure in plan Task 5

**Actions:**
- Write full `README.md` using structure in plan
- Embed real asset paths (verify they exist with a glob check)
- Run image path verification script
- Commit

**Expected Outputs:**
- `README.md` renders on GitHub with all images loading

**Actual Outputs:**
```
[To be filled after execution]
```

**Verification:** `gh browse` — all images render, all links resolve, no broken references.

---

### Step 6: Write Comprehensive Product Features Doc
**Status:** [NEXT]

**Purpose:** Write `docs/product-features.md` — the most detailed document in the repo. Covers all 13 features with step-by-step flows, embedded screenshots (exact paths), ASCII art diagrams, design rationale, and pilot learnings.

**Inputs:**
- Assets copied in Step 2
- Full features doc content in plan Task 6 (complete, production-ready content already written)

**Actions:**
- Write `docs/product-features.md` using the exact content in plan Task 6
- Verify all screenshot paths reference files that actually exist in `assets/`
- Adjust any paths that don't match actual filenames
- Commit

**Expected Outputs:**
- `docs/product-features.md` — covers all 13 features, ~5,000+ words with screenshots

**Actual Outputs:**
```
[To be filled after execution]
```

**Verification:** Check that every `<img src=` path resolves to a real file. Run path check script from plan.

---

### Step 7: Write Architecture & Lessons Learned Docs
**Status:** [NEXT]

**Purpose:** Write `docs/architecture.md` (technical deep dive) and `docs/lessons-learned.md` (bulleted companion to retrospective).

**Inputs:**
- Source files: `Product Development/Tech Stack - Architecture/` PNGs and DOCX
- `Notes/Code - Architecture Notes/Code Archicture.docx`
- `Finance/DD Materials/3.2 Systems and Controls.docx`

**Actions:**
- Read the architecture source files first
- Write `docs/architecture.md` covering: three-tier DB, WebSocket, offline-first, LMS integrations, state machine, security model, what we'd do differently today
- Write `docs/lessons-learned.md` — bulleted lists by category (technical, product, business, what worked)
- Commit both

**Expected Outputs:**
- `docs/architecture.md`
- `docs/lessons-learned.md`

**Actual Outputs:**
```
[To be filled after execution]
```

**Verification:** Both files render cleanly on GitHub. Architecture doc references images from `assets/architecture/`.

---

### Step 8: Build Interactive HTML Prototype
**Status:** [NEXT]

**Purpose:** Build the static HTML + CSS + JS clickable prototype using the original 2018-2019 design images. Entry page, student app (phone frame), teacher dashboard (browser frame). Hosted on GitHub Pages.

**Inputs:**
- `prototype/screens/app/` — 45 design PNG exports (from Step 2)
- `prototype/screens/dashboard/` — 28 teacher dashboard PNGs (from Step 2)
- Full prototype code in plan Task 8 (CSS, JS, HTML for all 3 files)

**Actions:**
- Write `prototype/css/styles.css` (full CSS from plan)
- Write `prototype/js/navigation.js` (all 30+ screen definitions + navigation engine from plan)
- Write `prototype/student-app.html`
- Write `prototype/teacher-dashboard.html`
- Write `prototype/index.html` (entry page)
- Run locally to verify: `cd prototype && python3 -m http.server 8080`
- Calibrate hotspot positions by opening each screen and checking alignment
- Enable GitHub Pages via `gh` CLI or settings
- Commit

**Expected Outputs:**
- Prototype live at `https://[username].github.io/present-education/prototype/`
- Student app: all flows clickable (login → schedule → attendance → learning check → results → temp check)
- Teacher dashboard: all screens navigable via quick-nav buttons

**Actual Outputs:**
```
[To be filled after execution]
```

**Verification:** Open the live GitHub Pages URL. Click through every student flow. Verify teacher dashboard loads all 5 screen states.

---

### Step 9: Add Pitch Deck & Business Artifacts
**Status:** [NEXT]

**Purpose:** Export the investor pitch deck and product overview from PPTX to PDF and commit to `pitch/`.

**Inputs:**
- `Present - Reference/Sales & Marketing/Pitch Materials/Present Pitch Deck.pptx`
- `Present - Reference/Sales & Marketing/Pitch Materials/Present Overview 10-10-18.pptx`
- LibreOffice available for headless PDF conversion

**Actions:**
- `mkdir -p pitch`
- LibreOffice headless convert both PPTX files to PDF
- Review each PDF: no SSNs, no home addresses, no cap table amounts
- Commit to `pitch/`

**Expected Outputs:**
- `pitch/Present Pitch Deck.pdf`
- `pitch/Present Overview 10-10-18.pdf`

**Actual Outputs:**
```
[To be filled after execution]
```

**Verification:** Open both PDFs. Privacy checklist passes. Both readable.

---

### Step 10: Final Polish & Publish
**Status:** [NEXT]

**Purpose:** Set repo topics, enable GitHub Pages, update README with live prototype URL, verify everything, pin to GitHub profile.

**Inputs:**
- All prior steps complete
- GitHub Pages URL confirmed

**Actions:**
- `gh repo edit present-education --add-topic edtech ...` (8 topics)
- Enable GitHub Pages (Settings → Pages → main branch)
- Update README: replace `[username]` placeholder with actual GitHub username
- Run final privacy checklist
- `gh browse` and verify README renders correctly
- Pin repo to GitHub profile (manual step)

**Expected Outputs:**
- Repo polished and fully public
- GitHub Pages live with prototype
- All acceptance criteria checked

**Actual Outputs:**
```
[To be filled after execution]
```

**Verification:** Run through all 10 acceptance criteria in the Objective section. Check each box.

---

## Discoveries

| Iteration | Discovery | Impact |
|-----------|-----------|--------|
| 0 | Present Education Inc. was incorporated Feb 2, 2018 in Oregon. CEO: Eli Coon (35%), CTO: Ian Garrett (20%), Head of Product: Nauvin Ghorashian (20%), Coon Family Trust (20%). | Team structure is clear for README and docs. |
| 0 | App actually shipped to iOS App Store AND Google Play in November 2018. | Huge portfolio signal — not a side project. Mention prominently. |
| 0 | 45 final design export PNGs exist at `Present Final Export (3.17.19)/PNG exports/` — complete, production-quality screens. | Primary source for prototype and features doc. |
| 0 | 28 teacher web dashboard screens exist at `Design/Web/Teacher/Rev 8 7-23/`. | Full teacher flow prototypable. |
| 0 | 10 feature demo .mov videos exist in `Pilot/Student Onboarding Video/Present Video Recordings/` (~99MB total). | Can reference in docs; too large to commit without LFS. |
| 0 | Lincoln High School pilot: 2 Spanish teachers (Doug Siegel, Erik Velasquez), 200-300 students, 8+ class sections, 6-month active pilot. Signed contract with Portland Public Schools (8MB). | Key proof point for README. |
| 0 | Retrospective article is just an outline — the full article was never written. | Highest-impact opportunity: write it now with 6-year hindsight. |
| 0 | Shutdown letter is fully written, clean, no sensitive data (just remove elicoon@gmail.com). | Can be committed verbatim. |
| 0 | Tech stack: Swift (iOS) · Java (Android) · Angular (web) · Node.js + Express + Socket.io (backend) · MongoDB · Firebase · AWS | For README and architecture doc. |
| 0 | ~$60K raised total from founders + Coon Family Trust. $23K left at shutdown. $9.6K owed to AppInventiv. | Do NOT include these amounts in any public doc. |
| 0 | AppInventiv (India) was the outsourced dev shop. S-PRO (Ukraine) also had an NDA. Melinda Chu was the UI designer. | Mention appropriately in retrospective; no personal addresses. |
| 0 | LMS integrations planned/built: Canvas, Google Classroom, Clever, Schoology + CSV import. | Tech credibility point for architecture doc. |
| 0 | The `compaction-reread.js` hook exits silently for regular (non-handler/non-worker) sessions. | This loop doc + handoff skill are our continuity mechanism. |
| 0 | 106 founder meeting notes spanning 18 months exist in `Notes/Founders Meeting Notes/`. July 17, 2019 meeting was the emergency pivot discussion. | Rich source material for retrospective personalization. |

---

## What Failed

| Iteration | Approach | Why It Failed | Lesson |
|-----------|----------|---------------|--------|
| | | | |

---

## Blockers

### Active Blockers

*None*

### Resolved Blockers

*None*

---

## Next Action

**For Iteration 1:**

1. **Read:** This loop document (especially Discoveries) + plan Task 1 in `/home/eli/projects/present/docs/plans/2026-02-17-present-portfolio-github-repo.md`
2. **Execute:** Step 1 — Create GitHub repo, directory structure, Git LFS config, commit plan + loop files
3. **Watch for:** `gh` CLI authentication issues; LFS install errors; whether to use `gh repo create` or `git init` first
4. **Update:** Actual Outputs for Step 1; mark Step 1 [DONE], Step 2 [CURRENT]; increment Iteration to 2; update Last Updated timestamp

---

## Iteration Log

| Iteration | Timestamp | Step Executed | Outcome | Duration |
|-----------|-----------|---------------|---------|----------|
| 0 | 2026-02-17 22:00 | Setup/Planning | Loop document created, plan finalized | ~3h |

---

## Verification Log

| Timestamp | Check | Result | Evidence |
|-----------|-------|--------|----------|
| | | | |

---

## Exit Checklist

- [x] Step outputs recorded with actual values (not placeholders)
- [x] Discoveries section updated if anything learned
- [x] What Failed section updated if approach didn't work
- [x] Blockers section updated if stuck
- [x] Next Action section updated with specific instructions
- [x] Iteration count incremented in Metadata
- [x] Last Updated timestamp refreshed
- [x] Status field reflects current state
