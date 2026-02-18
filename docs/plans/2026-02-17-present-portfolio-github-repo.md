# Present Education Portfolio GitHub Repo

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Create a compelling public GitHub repository that showcases the Present Education startup (2017-2019) as a portfolio artifact for potential employers, highlighting Eli's creativity, technical depth, and business execution.

**Architecture:** The repo is a documentation/artifact repo with two interactive components: (1) a static HTML clickable prototype using the original 2018-2019 design images, hosted on GitHub Pages, and (2) a richly visual README. All sensitive personal/financial data is excluded.

**Tech Stack:** Vanilla HTML + CSS + JS (prototype) · Markdown (docs) · GitHub Pages (hosting). No build step, no framework.

---

## Source Material Reference

All artifacts live in: `/home/eli/projects/present/Present - Reference/`

Key paths used throughout:
- **Final app design exports (45 screens):** `Product Development/Design/Present Final Export (3.17.19)/PNG exports/`
- **Teacher web dashboard (28 screens):** `Product Development/Design/Web/Teacher/Rev 8 7-23/`
- **Android framed mockups:** `Product Development/App Store Submission/Android Submission Screens/Android model pics/`
- **iOS App Store screens:** `Product Development/App Store Submission/iOS Submission Screens/Resized/`
- **State management wireframes:** `Product Development/Wireframes/State Management/`
- **Feature demo videos:** `Pilot/Student Onboarding Video/Present Video Recordings/`
- **Branding:** `Sales & Marketing/Branding/`
- **Architecture diagrams:** `Product Development/Tech Stack - Architecture/`
- **Pilot overview image:** `Pilot/Early Planning/Present Overview for Teachers.jpg`
- **Shutdown letter:** `Shut Down Letter.docx`
- **Retrospective outline:** `Retrospective Article.docx`
- **Pitch deck:** `Sales & Marketing/Pitch Materials/Present Pitch Deck.pptx`
- **Teacher illustration:** `Sales & Marketing/Branding/PRSTteacherart_800px_by_492px.png`

### Final Export Screen Index (45 screens — primary source for prototype & docs)

```
AUTHENTICATION
  1.0 Splash screen.png
  1.1 login_unfilled.png
  1.2 login_filled.png
  1.2.1 login filled_invalid pw.png
  1.3 login_forgot password.png
  1.4 login_reset password.png
  1.5 login_complete profile.png

PROFILE
  2.0 profile_default.png
  2.1 profile_edit.png
  2.2 profile_change pw.png
  2.3 profile_changes saved notification.png

ATTENDANCE
  3.0 attendance_class starting_50.png
  3.1 attendance_class starting_20.png
  3.2 you are present.png
  3.3 you are absent.png
  3.4 you are tardy.png
  3.5 emergency mode.png

LEARNING CHECKS (STUDENT)
  4.0 learning check.png
  4.1 selected question.png
  4.2 incorrect answer.png
  4.3 correct answer.png
  4.3.1 incorrect answer long.png
  4.4 incorrect answer.png
  4.5 scroll.png
  4.5.1 scroll with button.png
  4.6 text field answer.png
  4.6.1 text field answer.png
  5.0.1 Different question types.png

RESULTS (TEACHER/STUDENT)
  5.0 Results view.png
  5.1 Results expand_correct answer.png
  5.2 Results expand_incorrect answer.png
  5.3 Results class dropdown.png
  5.4 Results class dropdown_all.png
  5.4 Results class dropdown_correct.png
  5.4 Results class dropdown_incorrect.png
  5.5 Results class_correct.png
  5.6 Results class_incorrect.png

SCHEDULE
  6.0 schedule.png
  6.1 class details.png

TEMPERATURE CHECK
  7.0 temperature check_default.png
  7.1 temperature check_option 2.png
  7.2 temperature check_option 2.png
  7.3 temperature check_option 2.png
  7.4 temperature check_option 2.png
```

---

## Privacy Rules (apply throughout)

**Include:** Business docs, brand assets, App Store screenshots, architecture diagrams, pilot materials (anonymized), shutdown letter, pitch deck visuals, product specs, wireframes, design exports.

**Exclude:** SSNs, home addresses, salary/compensation details, specific investment amounts, personal student data from pilot CSV files, individual cap table entries with names, personal email addresses.

---

## Task 1: Create GitHub Repo & Directory Structure

**Files:**
- Create: new GitHub repo `present-education` (public)

**Step 1: Create the repo via gh CLI**

```bash
gh repo create present-education \
  --public \
  --description "Present Education — EdTech startup (2017-2019). Classroom smartphone management platform. iOS + Android, shipped to App Store, piloted at Portland Public Schools." \
  --clone \
  --gitignore Node \
  --license MIT
cd present-education
```

Expected: Repo created at `github.com/[username]/present-education`, cloned locally.

**Step 2: Set up full directory structure**

```bash
mkdir -p \
  assets/branding \
  assets/screenshots/ios \
  assets/screenshots/android \
  assets/screenshots/app-screens \
  assets/screenshots/teacher-dashboard \
  assets/architecture \
  assets/wireframes \
  assets/pilot \
  prototype/screens/app \
  prototype/screens/dashboard \
  prototype/css \
  prototype/js \
  docs \
  pitch
```

**Step 3: Add `.gitattributes` for large PNG handling**

```bash
cat > .gitattributes << 'EOF'
*.png filter=lfs diff=lfs merge=lfs -text
*.jpg filter=lfs diff=lfs merge=lfs -text
*.mov filter=lfs diff=lfs merge=lfs -text
*.mp4 filter=lfs diff=lfs merge=lfs -text
*.pdf filter=lfs diff=lfs merge=lfs -text
*.psd filter=lfs diff=lfs merge=lfs -text
EOF
git lfs install
```

**Step 4: Initial commit**

```bash
git add .gitattributes .gitignore
git commit -m "chore: initialize present-education portfolio repo with LFS"
git push
```

---

## Task 2: Extract & Copy Visual Assets

**Goal:** Copy all usable visual artifacts from the source archive into the repo. No sensitive data.

**Step 1: Copy final app design exports (primary set — 45 screens)**

```bash
SRC="/home/eli/projects/present/Present - Reference/Product Development/Design/Present Final Export (3.17.19)/PNG exports"
DEST="assets/screenshots/app-screens"
cp "$SRC/"*.png "$DEST/"
```

**Step 2: Copy iOS App Store submission screens**

```bash
SRC="/home/eli/projects/present/Present - Reference/Product Development/App Store Submission/iOS Submission Screens/Resized"
DEST="assets/screenshots/ios"
cp "$SRC/"*.png "$DEST/"
```

**Step 3: Copy Android framed mockups**

```bash
SRC="/home/eli/projects/present/Present - Reference/Product Development/App Store Submission/Android Submission Screens/Android model pics"
DEST="assets/screenshots/android"
cp "$SRC/"*.png "$DEST/"
```

**Step 4: Copy teacher web dashboard screens**

```bash
SRC="/home/eli/projects/present/Present - Reference/Product Development/Design/Web/Teacher/Rev 8 7-23"
DEST="assets/screenshots/teacher-dashboard"
# Copy all PNGs recursively, flatten directory
find "$SRC" -name "*.png" -exec cp {} "$DEST/" \;
```

**Step 5: Copy branding assets**

```bash
SRC="/home/eli/projects/present/Present - Reference/Sales & Marketing/Branding"
cp "$SRC/Logo/Full Color/"* assets/branding/ 2>/dev/null || true
cp "$SRC/Color Palette.PNG" assets/branding/
cp "$SRC/PRSTteacherart_800px_by_492px.png" assets/branding/teacher-illustration.png
```

**Step 6: Copy architecture diagrams**

```bash
SRC="/home/eli/projects/present/Present - Reference/Product Development/Tech Stack - Architecture"
cp "$SRC/"*.png assets/architecture/ 2>/dev/null || true
```

**Step 7: Copy pilot overview and state management wireframes**

```bash
cp "/home/eli/projects/present/Present - Reference/Pilot/Early Planning/Present Overview for Teachers.jpg" \
   assets/pilot/

SRC="/home/eli/projects/present/Present - Reference/Product Development/Wireframes/State Management"
cp "$SRC/"*.png assets/wireframes/ 2>/dev/null || true
```

**Step 8: Also copy app screens to prototype/screens/app (prototype needs its own copy)**

```bash
cp assets/screenshots/app-screens/*.png prototype/screens/app/
cp assets/screenshots/teacher-dashboard/*.png prototype/screens/dashboard/
```

**Step 9: Commit all assets**

```bash
git add assets/ prototype/screens/
git commit -m "feat: add all design assets, screenshots, and branding (2018-2019 originals)"
git push
```

---

## Task 3: Write the Shutdown Letter Doc

**Files:**
- Create: `docs/shutdown-letter.md`

**Step 1: Create the file with the full original text**

```markdown
# Shutdown Letter

*August 2019*

---

Dear Present Users, Supporters, Investors, and Friends,

At Present Education, we have spent the last 18 months doing our best to fight smartphone addiction in the next generation and giving teachers the tools they need to manage technology in their classrooms. We have always been driven by a mission of reducing teacher workloads and helping young adults develop lifelong healthy relationships with their technology. Through this year-and-a-half, Present has experienced ups and downs, obstacles and breakthroughs, however we always saw a clear future ahead.

Unfortunately, after assessing our pilot run, the state of our technology, the company's limited resources, and the challenges of the education-technology industry, we have decided to shut Present down.

Of course this single outcome does not fully capture an 18 month journey of developing, deploying, and maintaining such a complex product. We would be remiss if we did not thank the incredible supporters and champions we encountered throughout the process. From investors and advisors who gave us their precious time, to an optimistic principal who gave us a chance to pilot, to the teachers and students who used our product in their classrooms, we have much to be grateful for.

Though this is the end for Present, it is not the end of the smartphone addiction battle. We still fear for the challenges of growing up in a generation where smartphones are the norm, not the exception. We hope that the major technology companies who create the phones and apps we use will make this a strategic priority in their missions.

For those of you who are interested in learning more about the process we have undergone and the challenges we faced, we plan to write a longer examination of the factors that caused us to fail and how we could have done things differently.

Once again, thank you for all of your support,

Eli Coon, Ian Garrett, and Nauvin Ghorashian
*Present Education*
```

**Step 2: Commit**

```bash
git add docs/shutdown-letter.md
git commit -m "docs: add original shutdown letter from August 2019"
git push
```

---

## Task 4: Write the Retrospective (Highest Impact Item)

**Files:**
- Create: `docs/retrospective.md`

The retrospective was outlined in 2019 but never completed. This is the highest-leverage document in the repo — it demonstrates intellectual honesty, self-awareness, and the kind of founder-level reflection that is rare and valued by employers.

**Step 1: Read the retrospective outline first**

```
/home/eli/projects/present/Present - Reference/Retrospective Article.docx
```

The outline covers: Introduction · Timeline · Challenge 1: Technical robustness · Challenge 2: Implementation challenges (policy consistency, teacher enforcement, student buy-in, teacher buy-in, parent buy-in, district concerns)

**Step 2: Write the retrospective scaffold**

Claude writes the full scaffold below; Eli personalizes with specific memories and anecdotes before publishing.

Target: ~2,000 words. Tone: honest, reflective, forward-looking. Not bitter.

```markdown
# What We Built, Why It Failed, and What I Know Now
*A retrospective on Present Education (2017–2019)*
*Written in 2025, six years later*

---

## The Idea

[START HERE: A specific classroom moment — a teacher you observed losing 10 minutes chasing phones.
What made you believe this was a solvable problem? What did you see that others missed?]

We believed the problem wasn't that students had phones — it was that no one had designed
a tool that respected both teacher authority and student autonomy simultaneously.

## What We Built

Present was a mobile app (iOS + Android) that let teachers temporarily lock distracting
native apps on student-owned phones during class — no special hardware, no pocket pouches,
no confiscation. Students marked themselves "Present" at the start of class, and the app
locked out texting, social media, and games. Teachers could run real-time learning checks,
temperature checks, and see who needed help — all from a web dashboard.

We incorporated in February 2018, raised ~$60K from founders and family, outsourced
development to a team in Pune, India, and launched to the App Store and Google Play in
November 2018. By spring 2019, we had a signed contract with Portland Public Schools
and were live in two Spanish classes at Lincoln High School.

We shut down in August 2019.

## The Pilot

[PERSONALIZE: What was it like the first day teachers actually used it in a class?
What did you observe in the classroom? What surprised you?]

The Lincoln High School pilot ran from October 2018 to May 2019. Two Spanish teachers —
with real class rosters, real students, real assignments. We surveyed students weekly,
tracked attendance data, and observed classes. We built onboarding scripts for teachers,
parent FAQ docs, opt-out forms. We completed Portland Public Schools' full IT security
questionnaire (the IRIS process). We ran it like a real enterprise deployment, because it was.

Numbers: 2 teachers · 8+ class sections · ~200–300 students · 6 months active.

## What Went Wrong

### 1. The Technical Problem Was Harder Than We Thought

Locking apps on Android required deep OS-level hooks via Android's Accessibility Service
API — a powerful API designed for disability accommodations that we were using for a
completely different purpose. It worked, but it was fragile. A dropped WebSocket
connection mid-class didn't just mean a UI glitch; it meant a teacher's phone management
disappeared mid-lesson.

iOS was worse. Apple's sandboxing made true app locking impossible without Mobile Device
Management (MDM) enrollment, which required district-level IT setup — a 6-month process
by itself. We had planned to use a supervised mode workaround; it worked inconsistently.

[PERSONALIZE: Specific technical moment that crystallized this for you?]

### 2. We Needed More Than One Yes

K-12 adoption isn't a single sale. It requires:
- The teacher to feel the pain (not all did)
- The students to accept it (many didn't)
- The parents to consent (opt-out friction)
- The district IT team to approve (FERPA, COPPA, security reviews)
- The principal to champion it

We got some of these. We didn't get all of them simultaneously in the same classroom.

One of our pilot teachers told us honestly: "I didn't realize phones were that big of
a problem." That sentence reframed everything. We had built a solution to a problem not
every teacher felt they had.

### 3. We Were Too Early

Apple launched Screen Time in iOS 12 in September 2018 — the same month we were
ramping up our pilot. Google launched Digital Wellbeing in Android 9 that same year.
These were the first OS-level tools acknowledging the problem we were building for.

Post-COVID, "device management in schools" went from a nice-to-have to a school board
mandate. GoGuardian raised $200M. Bark for Schools became widely adopted. Yondr (the
phone pouch company we competed with) scaled to thousands of schools.

We were solving the right problem. We were 3–4 years early, with $60K and an outsourced
development team.

### 4. Outsourcing at This Stage Was a Mistake

AppInventiv was professional. Their work was competent. But the development model —
milestone-based, offshore, timezone-separated — introduced a delay amplifier at every
step. When a milestone slipped two weeks, the next milestone compressed. Change requests
accumulated. By milestone 8 of 8, we were debugging features we'd spec'd 10 months earlier.

We should have raised more before starting, hired a local iOS engineer from day one, and
built with someone who could walk into a classroom with us.

[PERSONALIZE: Specific AppInventiv moment that illustrates this?]

### 5. $60K Wasn't Enough Runway for This Market

K-12 sales cycles run 9–12 months from first contact to signed contract. Our Lincoln
pilot contract took 6 months of meetings, legal review, security questionnaires, and
board approval. We had 18 months of total runway. The math never worked.

We burned most of our capital on development before we'd proven that schools would
actually change their behavior to use the product.

## What I'd Do Differently

1. **Raise $500K before writing a line of code.** The sales cycle alone demands it.
2. **Start with a teacher-owned tool, not a device management tool.** Lower the
   compliance barrier. Get teachers addicted to the engagement features first;
   introduce locking as an optional power feature later.
3. **Hire a local engineer as co-founder, not a vendor.** Shared stakes,
   shared timezone, shared classroom visits.
4. **Find the teacher who feels the pain deeply** — not just one who's open to
   trying — and build the whole product around their workflow.
5. **Go incredibly deep in one district before expanding.** We were already thinking
   about California and Texas. We should have been thinking about one school.

## What's Changed Since 2019

The market we built for now exists. Schools are actively purchasing device management
tools. The conversation about student phone use has gone from "is this a problem?"
to bipartisan legislation in multiple states. Apple and Google built features into
their OSes that validate the problem we were trying to solve.

We just didn't have the resources or timing to be the ones who solved it.

## What It Was Worth

[PERSONALIZE: End with your own reflection on what this experience gave you.]

I ran a real company. I filed incorporation papers, opened a business bank account,
negotiated a contract with a school district, managed offshore developers across
timezones, built a product that shipped to two app stores, and wrote a shutdown letter
to our users when the time came.

I learned what I didn't know — about sales cycles, about product-market fit, about
the difference between a problem that exists and a problem someone will change their
behavior to solve. Those lessons didn't come from a book.

I'd do it again.

---

*Eli Coon, 2025*
```

**Step 3: Eli personalizes before publishing**

Eli should fill in the `[PERSONALIZE]` sections with specific memories. The scaffold is publishable as-is; personal touches make it great.

**Step 4: Commit**

```bash
git add docs/retrospective.md
git commit -m "docs: add startup retrospective — 2019 shutdown with 2025 hindsight"
git push
```

---

## Task 5: Write the README

**Files:**
- Create: `README.md`

**Step 1: Write the full README**

Use this exact structure — it is designed for GitHub's markdown renderer:

```markdown
<p align="center">
  <img src="assets/pilot/Present Overview for Teachers.jpg" width="700"
       alt="Present — what we built for teachers" />
</p>

<h1 align="center">Present Education</h1>
<p align="center">
  <strong>EdTech startup · Portland, OR · 2017–2019</strong><br/>
  <em>"Goodbye Fortnite. Hello learning."</em>
</p>

<p align="center">
  <a href="prototype/index.html">Interactive Demo</a> ·
  <a href="docs/retrospective.md">Retrospective</a> ·
  <a href="docs/shutdown-letter.md">Shutdown Letter</a> ·
  <a href="docs/product-features.md">Feature Walkthrough</a>
</p>

---

Present was a classroom smartphone management platform — iOS and Android apps that let
teachers temporarily lock distracting native apps on student-owned devices, and run
real-time learning checks, from a single web dashboard.

We incorporated in February 2018. Piloted at Lincoln High School (Portland Public
Schools) with 200+ students. Shipped to the App Store and Google Play in November 2018.
Shut down in August 2019.

This repo is an archive of that work: the designs, the docs, the pitch deck, and
a full retrospective written six years later.

---

## The Problem

| Stat | Source |
|------|--------|
| 90%+ of teenagers own smartphones | NCES |
| 75% feel compelled to respond immediately to notifications | Kajeet |
| Students who have phones present score 6.4% lower on tests | London School of Economics |
| Average teacher spends 5-8 min/class on phone enforcement | EdWeek survey |
| 1:1 device programs cost $300–$500/student in hardware alone | — |

Teachers weren't failing. The tools were.

---

## What We Built

<!-- 3-column screenshot grid -->
<p align="center">
  <img src="assets/screenshots/ios/Countdown Timer.png" width="180" />
  <img src="assets/screenshots/ios/Learning Checks.png" width="180" />
  <img src="assets/screenshots/ios/IDGI - Present.png" width="180" />
  <img src="assets/screenshots/ios/Temp Check.png" width="180" />
</p>

### Student App Features

| Feature | What it does |
|---------|-------------|
| **Phone Lock** | Blocks messaging, social media, and games during class via Android Accessibility Service / iOS supervised mode |
| **Attendance** | 48-second countdown window to mark "Present" — late marks as Tardy automatically |
| **Learning Checks** | Teacher sends multiple-choice or short-answer questions; students answer in real-time |
| **Temperature Check** | Anonymous 5-point sentiment check ("How's everyone doing?") shown as a thermometer |
| **IDGI Button** | Discreet "I Don't Get It" signal — no hand-raising, no embarrassment |
| **Emergency Mode** | Always-visible panic unlock — no student is ever truly trapped |
| **Pause/Resume** | Teacher temporarily lifts the lock (for approved tools, tests) without ending class |

[→ Full walkthrough with screenshots: docs/product-features.md](docs/product-features.md)

---

## Architecture

<p align="center">
  <img src="assets/architecture/PresentGeneralApplicationFlow.png" width="700"
       alt="Present application architecture" />
</p>

**Stack:** Swift (iOS) · Java (Android) · Angular (teacher web) · Node.js + Express + Socket.io (backend) · MongoDB · Firebase Cloud Messaging · AWS

**Key architectural decisions:**
- Offline-first: SQLite on-device for lock state; syncs when reconnected
- Real-time: WebSocket (Socket.io) for instant teacher ↔ student updates
- Three-tier DB: local lock DB / LMS credentials / user identity
- LMS integrations: Canvas, Google Classroom, Clever, Schoology

[→ Full architecture doc](docs/architecture.md)

---

## The Pilot

**School:** Lincoln High School, Portland Public Schools
**Contract:** Signed October 2018 ([view SOW](pitch/))
**Duration:** October 2018 – May 2019 (6 months active)
**Teachers:** 2 (Spanish department)
**Students:** ~200–300 across 8+ class sections
**Compliance:** Completed PPS IRIS security questionnaire, FERPA data policies,
  parent opt-out forms, Service Level Agreement

---

## Business

**Pricing:** $0.99/student/month · target 250-student school = $247.50 MRR
**Market:** 1.4M middle/high school teachers in the US; initial focus on OR/WA/CA

**Competitors tracked:**

| Competitor | Approach | Our edge |
|-----------|----------|---------|
| Yondr | Physical phone pouches | No hardware required |
| GoGuardian | Network-based filtering | Works on student-owned devices |
| Lightspeed Systems | MDM for district-owned devices | BYOD native |
| FlipD | Voluntary app | Non-circumventable lock |
| iOS Screen Time | OS-level (launched same year) | Cross-platform, teacher-controlled |

**Advisors:** 12, including Bill Kelly (founder, Learning.com), Eric Rosenfeld (Oregon
Angel Fund), Pam Knowles (ex-PPS Board member), Jay Keuter (PPS Strategic Partnerships)

---

## The Team

| Name | Role | Background |
|------|------|-----------|
| Eli Coon | CEO | Ex-Deloitte strategy consultant · Faculty, Catlin Gabel School · CMC grad |
| Ian Garrett | CTO | Software engineer · Founder, Emerald Media IT department · U of Oregon |
| Nauvin Ghorashian | Head of Product | Ex-Intel operations manager · PSU engineering |

---

## Why We Shut Down

After 18 months, we faced a convergence of: technical robustness challenges (OS-level
phone locking was fragile), insufficient runway for K-12 sales cycles (9–12 months
from first meeting to signed contract), and multi-stakeholder adoption friction
(students, teachers, parents, and district IT all had to say yes simultaneously).

We were also, in hindsight, 3–4 years early. The market for school device management
that exists today in 2024 didn't fully exist in 2019.

→ [Read the original shutdown letter](docs/shutdown-letter.md)
→ [Read the full retrospective](docs/retrospective.md)

---

## Explore This Archive

| Section | Contents |
|---------|----------|
| [Interactive Demo](prototype/index.html) | Click through the original 2018-2019 designs |
| [docs/product-features.md](docs/product-features.md) | Complete feature walkthrough with screenshots |
| [docs/architecture.md](docs/architecture.md) | Technical architecture deep-dive |
| [docs/retrospective.md](docs/retrospective.md) | Full post-mortem, written 2025 |
| [docs/shutdown-letter.md](docs/shutdown-letter.md) | Original August 2019 shutdown letter |
| [pitch/](pitch/) | Investor pitch deck and product overview |
| [assets/](assets/) | All branding, screenshots, and design files |

---

*Present Education Inc. was incorporated February 2, 2018 in Oregon.
All product designs © 2018-2019 Present Education Inc.*
```

**Step 2: Verify image paths exist**

```bash
grep -oP 'src="\K[^"]+' README.md | while read f; do
  [ -f "$f" ] && echo "OK: $f" || echo "MISSING: $f"
done
```

Fix any missing paths before committing.

**Step 3: Commit**

```bash
git add README.md
git commit -m "docs: add main README with full startup story, stats, and screenshots"
git push
```

---

## Task 6: Write Comprehensive Product Features Doc

**Files:**
- Create: `docs/product-features.md`

This document is the most detailed in the repo. For every feature: what it is, who uses it, a numbered step-by-step user flow, embedded screenshots with exact paths, design rationale, and what we learned in the pilot.

**Write `docs/product-features.md` with the following full content:**

---

```markdown
# Present Education — Complete Product Feature Walkthrough

This document covers every feature of the Present platform as it existed in November 2018
at App Store launch. Screenshots are from the final design export (March 2019).

**Two interfaces:**
- **Student mobile app** (iOS + Android) — what students used in class
- **Teacher web dashboard** — what teachers controlled from a browser

---

## Table of Contents

1. [Onboarding & Authentication](#1-onboarding--authentication)
2. [Phone Locking — Core Mechanic](#2-phone-locking--core-mechanic)
3. [Attendance / "Present" Check-In](#3-attendance--present-check-in)
4. [Emergency Mode](#4-emergency-mode)
5. [Learning Checks](#5-learning-checks)
6. [Learning Check Results](#6-learning-check-results)
7. [Temperature Check](#7-temperature-check)
8. [IDGI — I Don't Get It](#8-idgi--i-dont-get-it)
9. [Pause & Resume](#9-pause--resume)
10. [Schedule View](#10-schedule-view)
11. [Student Profile](#11-student-profile)
12. [Teacher Web Dashboard](#12-teacher-web-dashboard)
13. [Admin Dashboard](#13-admin-dashboard)

---

## 1. Onboarding & Authentication

**Who uses it:** Students (first setup) and teachers
**When:** Once per device, then on each session

### Student Login Flow

```
STEP 1                    STEP 2                    STEP 3
┌─────────────────┐       ┌─────────────────┐       ┌─────────────────┐
│                 │       │  📧 Email        │       │  ✅ Profile     │
│   [P logo]      │  →    │  🔒 Password     │  →    │  Complete       │
│   present       │       │                 │       │                 │
│                 │       │  [Log In]       │       │  First name     │
│   [Log In]      │       │  Forgot pw?     │       │  Last name      │
│   [Register]    │       │                 │       │  [Continue]     │
└─────────────────┘       └─────────────────┘       └─────────────────┘
Splash screen             Login form                Profile completion
```

<img src="../assets/screenshots/app-screens/1.0 Splash screen.png"
     width="220" alt="Splash screen" />
<img src="../assets/screenshots/app-screens/1.1 login_unfilled.png"
     width="220" alt="Login unfilled" />
<img src="../assets/screenshots/app-screens/1.2 login_filled.png"
     width="220" alt="Login filled" />

**Error states:**

<img src="../assets/screenshots/app-screens/1.2.1 login filled_invalid pw.png"
     width="220" alt="Invalid password state" />
<img src="../assets/screenshots/app-screens/1.3 login_forgot password.png"
     width="220" alt="Forgot password" />
<img src="../assets/screenshots/app-screens/1.4 login_reset password.png"
     width="220" alt="Reset password" />

**Step-by-step student onboarding:**
1. Student receives email invite from teacher (sent via teacher dashboard)
2. Opens app → sees splash screen with Present logo
3. Taps **Log In** → enters school email and temporary password
4. If first login: completes profile (first name, last name)
5. App verifies enrollment in teacher's class roster
6. Taken to home screen (schedule view)

**Design rationale:** We used email-based accounts (not phone numbers) because students
in many districts don't have consistent phone numbers, but school email is universal.
The 2-step login was optimized for speed — teachers set up the whole class before first use.

**Pilot learning:** Email address quality was a significant friction point. Many student
emails in Doug Siegel's roster had typos or were outdated. We built a bounce-tracking
system to identify failed invitations and worked with the teacher to correct them.

---

## 2. Phone Locking — Core Mechanic

**Who uses it:** Students (experience), Teachers (control)
**When:** From when teacher starts class until teacher ends or pauses it

This is the defining feature of Present. When a teacher starts class from the web
dashboard, all enrolled students' phones enter "locked" state — native apps (Instagram,
Messages, Snapchat, etc.) are blocked. Only the Present app remains accessible.

### How It Works Technically

**Android:** The app registers as an Accessibility Service at install time. When the
teacher starts class via a WebSocket message from the server, the app intercepts any
attempt to switch to a blocked app and immediately brings Present back to foreground.

**iOS:** Requires Apple's Guided Access / supervised mode configuration. In a district
MDM enrollment, this works reliably. For BYOD (our use case), it required students
to enable Guided Access manually — a significant UX friction we never fully solved.

### Lock State Diagram

```
Teacher Dashboard                    Student Phone
      │                                    │
      │  ── Start Class ──────────────► LOCKED
      │                                    │
      │  ── Pause ────────────────────► PAUSED (unlocked temporarily)
      │                                    │
      │  ── Resume ───────────────────► LOCKED
      │                                    │
      │  ── End Class ────────────────► UNLOCKED
      │                                    │
      │  [Student loses WiFi]              │
      │                            ► LOCAL LOCK (SQLite)
      │  [WiFi restored]           ► SYNC with server
```

<img src="../assets/wireframes/Class in session - locks active.png"
     width="600" alt="State diagram: locks active" />

<img src="../assets/wireframes/Class in session - locks paused.png"
     width="600" alt="State diagram: locks paused" />

**What's always accessible (even when locked):**
- The Present app itself
- Emergency unlock button (see [Emergency Mode](#4-emergency-mode))
- School-approved apps (configurable by teacher/admin)

**Pilot learning:** The lock mechanic was the most technically fragile part of the
product. Android's accessibility service worked well on Pixel devices; inconsistent
on Samsung (who layer their own UI on top). iOS supervised mode required IT setup
that Portland Public Schools was not equipped to do for BYOD at the time.

---

## 3. Attendance / "Present" Check-In

**Who uses it:** Students
**When:** First 2 minutes of class (configurable)

The attendance window is the first thing a student sees when a teacher starts class.
A countdown timer gives students a window to mark themselves as "Present" by tapping
a single button. Students who miss the window are automatically marked Tardy (if they
arrive during class) or Absent.

### Student Flow

```
STEP 1: Class starts              STEP 2: Mark yourself
┌─────────────────┐               ┌─────────────────┐
│ Class starting  │               │ Class starting  │
│                 │               │                 │
│  [⬤⬤⬤⬤⬤⬤⬤⬤⬤] │               │  [⬤⬤⬤⬤⬤⬤⬤⬤ ] │
│   50% present   │    time ──►   │   80% present   │
│                 │               │                 │
│  [MARK PRESENT] │               │  [MARK PRESENT] │
└─────────────────┘               └─────────────────┘
```

<img src="../assets/screenshots/app-screens/3.0 attendance_class starting_50.png"
     width="220" alt="Class starting — 50% present" />
<img src="../assets/screenshots/app-screens/3.1 attendance_class starting_20.png"
     width="220" alt="Class starting — 20% remaining" />

**After marking:**

<img src="../assets/screenshots/app-screens/3.2 you are present.png"
     width="220" alt="You are present" />
<img src="../assets/screenshots/app-screens/3.3 you are absent.png"
     width="220" alt="You are absent" />
<img src="../assets/screenshots/app-screens/3.4 you are tardy.png"
     width="220" alt="You are tardy" />

**State outcomes:**
- **Present:** Tapped the button within the attendance window
- **Absent:** Did not tap in time (teacher can override)
- **Tardy:** Joined after the window closed (teacher can mark manually)

**Design rationale:** The circular progress indicator showing percentage of class
that had checked in was a deliberate social mechanism — seeing "only 20% present"
creates mild peer pressure to tap quickly. This was intentional.

**Pilot learning:** Some students gamed attendance by opening the app just to mark
present, then setting their phone down and ignoring it. We added post-attendance
engagement tracking (did they interact with any other features?) to give teachers
a fuller picture than attendance alone.

---

## 4. Emergency Mode

**Who uses it:** Students
**When:** Any time during a locked class session

The emergency unlock was a non-negotiable design requirement. A student must ALWAYS
be able to use their phone in a genuine emergency — calling 911, contacting a parent,
alerting school staff.

Tapping Emergency immediately:
1. Fully unlocks the phone (bypasses all restrictions)
2. Sends a notification to the teacher dashboard ("Student X has exited Present")
3. Logs the event with timestamp for review

This was also our answer to parents' most common concern: "What if my child needs
to reach me?" The answer: they always can. Present doesn't trap anyone.

<img src="../assets/screenshots/app-screens/3.5 emergency mode.png"
     width="220" alt="Emergency mode" />

```
┌─────────────────────────────┐
│  🚨 Emergency Mode         │
│                             │
│  Your phone is now          │
│  fully unlocked.            │
│                             │
│  Your teacher has been      │
│  notified.                  │
│                             │
│  [Return to Present]        │
└─────────────────────────────┘
```

**Pilot learning:** Students occasionally used Emergency as a way to exit Present
(not for actual emergencies). The teacher notification created enough social
accountability that genuine abuse was rare. We considered adding a confirmation
step ("This is a real emergency") but decided the friction was worse than the
occasional exit abuse — a genuinely scared student should not be delayed.

---

## 5. Learning Checks

**Who uses it:** Students (answering), Teachers (creating and sending)
**When:** During class, anytime the teacher sends a question

Learning Checks let teachers send real-time formative assessment questions to the
entire class simultaneously. Students answer on their phones; results appear on the
teacher dashboard instantly. No paper, no waiting, no calling on individuals.

### Question Types

| Type | Description | Screenshot |
|------|-------------|-----------|
| Multiple choice | 2–5 answer options, one correct | screens 4.0–4.4 |
| Short answer | Text field, teacher reviews | screen 4.6 |

### Student Answering Flow

**Step 1: Question arrives**
```
┌─────────────────────────────┐
│  📝 Learning Check          │
│                             │
│  "Which of the following    │
│   signed the Declaration    │
│   of Independence?"         │
│                             │
│  ○ Thomas Jefferson         │
│  ○ Abraham Lincoln          │
│  ○ George Washington        │
│  ○ Benjamin Franklin        │
│                             │
│         [Submit]            │
└─────────────────────────────┘
```

<img src="../assets/screenshots/app-screens/4.0 learning check.png"
     width="220" alt="Learning check question" />
<img src="../assets/screenshots/app-screens/4.1 selected question.png"
     width="220" alt="Answer selected" />

**Step 2: Feedback on submission**

<img src="../assets/screenshots/app-screens/4.2 incorrect answer.png"
     width="220" alt="Incorrect answer feedback" />
<img src="../assets/screenshots/app-screens/4.3 correct answer.png"
     width="220" alt="Correct answer feedback" />
<img src="../assets/screenshots/app-screens/4.3.1 incorrect answer long.png"
     width="220" alt="Incorrect with explanation" />

**Short answer variant:**

<img src="../assets/screenshots/app-screens/4.6 text field answer.png"
     width="220" alt="Short answer text field" />

**Multiple question types overview:**

<img src="../assets/screenshots/app-screens/5.0.1 Different question types.png"
     width="400" alt="Question type variants" />

**Design rationale:** Immediate individual feedback (correct/incorrect shown right
away) was chosen over waiting for the whole class to submit first. This was a
deliberate departure from Kahoot-style quiz tools, which create performance anxiety
by showing a live leaderboard. We wanted formative, not competitive.

**Pilot learning:** Teachers loved Learning Checks in concept but found the question
creation workflow in the web dashboard slow. Teachers wanted to build a question library
in advance, not create questions live. This was on our M8 roadmap but wasn't fully built
before shutdown.

---

## 6. Learning Check Results

**Who uses it:** Teachers (primary), Students (their own results)
**When:** After a learning check concludes

Results give teachers an immediate view of class comprehension — overall correct
percentage, per-answer breakdown, and ability to drill into individual responses.

### Teacher Results Dashboard

```
┌──────────────────────────────────────────────────┐
│  Learning Check Results                  [Filter▼]│
│                                                   │
│  Q: Which signed the Declaration?                 │
│  ████████████████░░░░  74% correct               │
│                                                   │
│  ► Thomas Jefferson ✓  ████████████  18 students │
│  ► Abraham Lincoln     ██            3 students   │
│  ► George Washington   ████          6 students   │
│  ► Benjamin Franklin   █             2 students   │
└──────────────────────────────────────────────────┘
```

<img src="../assets/screenshots/app-screens/5.0 Results view.png"
     width="400" alt="Results overview" />

**Drilling into responses:**

<img src="../assets/screenshots/app-screens/5.1 Results expand_correct answer.png"
     width="220" alt="Correct answer detail" />
<img src="../assets/screenshots/app-screens/5.2 Results expand_incorrect answer.png"
     width="220" alt="Incorrect answer detail" />

**Filtering by response type:**

<img src="../assets/screenshots/app-screens/5.3 Results class dropdown.png"
     width="220" alt="Filter dropdown" />
<img src="../assets/screenshots/app-screens/5.5 Results class_correct.png"
     width="220" alt="Correct responses view" />
<img src="../assets/screenshots/app-screens/5.6 Results class_incorrect.png"
     width="220" alt="Incorrect responses view" />

**Design rationale:** The filter controls (All / Correct / Incorrect) let teachers
quickly identify which students need follow-up. Rather than displaying names publicly,
teachers viewed the aggregate first — then drilled into specific students. This
prevented public shaming of struggling students.

---

## 7. Temperature Check

**Who uses it:** Students
**When:** Anytime during class (teacher-triggered)

Temperature Check is an anonymous pulse poll — a single "How are you doing with this
material?" question, answered on a 5-point scale represented visually as a thermometer.
Results aggregate on the teacher dashboard in real-time.

The metaphor is intentional: a temperature check is a health check. Not a grade.

### Student Interface

```
┌─────────────────────────────┐
│  🌡️ Temperature Check      │
│                             │
│  How well do you understand │
│  today's material?          │
│                             │
│  😊 Totally get it          │
│  🙂 Mostly there            │
│  😐 Kind of following       │
│  😕 Getting lost            │
│  😟 Very confused           │
│                             │
└─────────────────────────────┘
```

<img src="../assets/screenshots/app-screens/7.0 temperature check_default.png"
     width="220" alt="Temperature check default" />
<img src="../assets/screenshots/app-screens/7.1 temperature check_option 2.png"
     width="220" alt="Temperature check variant 1" />
<img src="../assets/screenshots/app-screens/7.2 temperature check_option 2.png"
     width="220" alt="Temperature check variant 2" />

**Design rationale:** We went through 4 interface variants (7.0–7.4) during design
iteration. The key design tension: the response must feel safe (anonymous, no
judgment) while still being meaningful to teachers. We landed on emoji faces over
numeric scales because emoji read as less clinical.

**Pilot learning:** Students engaged with Temperature Check more readily than Learning
Checks. Anonymous pulse checks are lower stakes than quiz answers. Teachers could
see if the room was "cold" (confused) and adjust instruction in real time.

---

## 8. IDGI — "I Don't Get It"

**Who uses it:** Students
**When:** Anytime during class, self-initiated

IDGI (I Don't Get It) is a discreet help signal. A student taps the button when they're
lost or need help — without raising their hand, without interrupting class, without anyone
else knowing. The teacher's dashboard shows an aggregate "help needed" count that rises
as more students signal.

This addresses a real classroom dynamic: students who are confused often don't ask for
help because they don't want to look dumb in front of peers. IDGI makes asking for help
invisible.

```
┌─────────────────────────────┐
│                             │
│   [?] I Don't Get It        │
│                             │
│   Tap to signal your        │
│   teacher privately.        │
│   They'll see you need      │
│   help — no one else will.  │
│                             │
│   You've sent 1 signal ✓    │
│                             │
└─────────────────────────────┘
```

<img src="../assets/screenshots/ios/IDGI - Present.png"
     width="300" alt="IDGI feature — I Don't Get It" />

**Teacher dashboard view:** The teacher sees a count like "4 students need help"
rising in real-time. No names. Just a number — which tells the teacher whether
to stop and re-explain or keep going.

**Design rationale:** Anonymity was non-negotiable here. We considered letting
teachers see which students signaled (for follow-up), but focus groups with
teachers told us students would never use IDGI if they thought they could be
identified. The aggregate is more useful anyway — "12 out of 30 students are lost"
tells a teacher more than a name list.

---

## 9. Pause & Resume

**Who uses it:** Teachers
**When:** During a locked class, when students need to temporarily access other apps

Teachers can pause the class lock without ending the session — useful for:
- Students need to access a different learning app (Khan Academy, Duolingo, etc.)
- A student has a legitimate reason to use their phone
- Technical troubleshooting

**Teacher initiates pause → all student phones unlock simultaneously**
**Teacher resumes → all student phones re-lock simultaneously**

The WebSocket-based real-time sync made this feel instant — the teacher taps Resume
and within 1–2 seconds, all phones in the room lock back.

**Video demo:** `Pilot/Student Onboarding Video/Present Video Recordings/Pause and resume class.mov`

**Pilot learning:** Pause/Resume was the feature teachers loved most unexpectedly.
They used it as a reward mechanism ("finish this task and I'll pause for 2 minutes")
and as a practical tool for any approved app activity.

---

## 10. Schedule View

**Who uses it:** Students
**When:** Between classes, to see what's coming

Students can view their full class schedule — day, week, or month — with color-coded
classes by department. Tapping a class shows details: teacher name, room, current period.

```
┌─────────────────────────────┐
│  📅 My Schedule    Mon Apr 1│
│                             │
│  8:00  ████ AP Spanish      │
│  9:30  ████ US History      │
│  11:00 ████ AP Calculus     │
│  12:30      Lunch           │
│  1:30  ████ English Lit     │
│  3:00  ████ Physics         │
│                             │
└─────────────────────────────┘
```

<img src="../assets/screenshots/app-screens/6.0 schedule.png"
     width="220" alt="Schedule view" />
<img src="../assets/screenshots/app-screens/6.1 class details.png"
     width="220" alt="Class detail view" />

**Design rationale:** The schedule view solved a real adoption problem — students
needed a reason to open Present proactively, not just reactively when class started.
By being their class schedule too, Present became part of their daily routine.

---

## 11. Student Profile

**Who uses it:** Students
**When:** Settings, password changes, emergency contact updates

<img src="../assets/screenshots/app-screens/2.0 profile_default.png"
     width="220" alt="Profile default" />
<img src="../assets/screenshots/app-screens/2.1 profile_edit.png"
     width="220" alt="Profile edit mode" />
<img src="../assets/screenshots/app-screens/2.2 profile_change pw.png"
     width="220" alt="Change password" />
<img src="../assets/screenshots/app-screens/2.3 profile_changes saved notification.png"
     width="220" alt="Profile saved confirmation" />

**Fields:** Name · School email · Emergency contact (name + phone) · Password change

**Emergency contact** was added after parent feedback — a parent wanted to know that
their child could always contact them even during a Present-locked class. Emergency
contact is always accessible regardless of lock state (in the same Emergency Mode flow).

---

## 12. Teacher Web Dashboard

**Who uses it:** Teachers
**When:** Before, during, and after class

The teacher dashboard is a browser-based Angular web app — not a mobile app. Teachers
used it from a laptop or desktop at their desk or podium.

**Core teacher flows from the dashboard:**
1. Set up class roster (import from Google Classroom / CSV)
2. Create learning check questions in advance
3. Start class → triggers lock on all student phones
4. Monitor real-time attendance as students check in
5. Push a learning check → watch results come in live
6. Send a temperature check → see sentiment aggregate
7. See IDGI count rise → adjust instruction
8. Pause / Resume / End class

**Dashboard states:**

```
BEFORE CLASS STARTS          CLASS IN SESSION
┌────────────────────┐       ┌────────────────────┐
│ Period 3 Spanish   │       │ Period 3 Spanish    │
│ No class active    │       │ ● LIVE             │
│                    │       │                    │
│ [Start Class]      │       │ Attendance: 22/27  │
│                    │       │ IDGI: 3 students   │
│ 27 students        │       │                    │
│ 5 questions ready  │       │ [Send Learning Chk]│
│                    │       │ [Temp Check]       │
│                    │       │ [Pause] [End Class]│
└────────────────────┘       └────────────────────┘
```

**Key dashboard screens available:**

| Screen | Path |
|--------|------|
| Login | `assets/screenshots/teacher-dashboard/1.Login_unfilled.png` |
| Dashboard (class not started) | `assets/screenshots/teacher-dashboard/` |
| Dashboard (class in session) | `assets/screenshots/teacher-dashboard/` |
| Learning check creation | `assets/screenshots/teacher-dashboard/` |
| Results view | `assets/screenshots/teacher-dashboard/` |
| Schedule (weekly) | `assets/screenshots/teacher-dashboard/` |
| Attendance management | `assets/screenshots/teacher-dashboard/` |

*28 total teacher dashboard screens in `assets/screenshots/teacher-dashboard/`*

---

## 13. Admin Dashboard

**Who uses it:** School administrators, IT coordinators
**When:** Initial setup, ongoing user management

The admin dashboard let school administrators (not just individual teachers) manage
the platform at a school-wide level.

**Admin capabilities:**
- Create and manage block/period schedules (school master schedule import)
- Add/remove teachers
- Add/remove students (CSV bulk import or manual)
- Manage course assignments
- View school-wide usage reports
- Configure approved app whitelist (apps students can access during a lock)
- Manage parent notification settings

**LMS integrations for admin setup:**
- Google Classroom (OAuth)
- Canvas (API key)
- Clever (district SSO)
- Schoology (API)
- Manual CSV import (for districts without LMS)

**Design rationale:** The admin layer was critical for district-wide adoption. Without
a way for IT to manage the platform at scale, every teacher had to do their own setup
— which didn't work. Admin was our answer to the "who owns this?" question at the
district level.

---

## Feature Comparison: Present vs. Alternatives (2018-2019)

| Feature | Present | Yondr | GoGuardian | Screen Time | FlipD |
|---------|---------|-------|-----------|-------------|-------|
| App locking | ✅ | ✅ (physical) | ✅ (network) | ✅ (parent-set) | ✅ |
| Works on BYOD | ✅ | ✅ | ❌ | ❌ (per-device) | ✅ |
| Teacher controls | ✅ | ❌ | ✅ | ❌ | ❌ |
| Learning checks | ✅ | ❌ | ❌ | ❌ | ❌ |
| Real-time dashboard | ✅ | ❌ | ✅ | ❌ | ❌ |
| Anonymous IDGI | ✅ | ❌ | ❌ | ❌ | ❌ |
| Emergency unlock | ✅ | ❌ | ❌ | ✅ | ✅ |
| LMS integration | ✅ | ❌ | ✅ | ❌ | ❌ |
| No hardware needed | ✅ | ❌ | ✅ | ✅ | ✅ |
| Cost/student/month | $0.99 | ~$2.50 | ~$3.00 | Free | Free |

---

*All screenshots from Present Education final design export, March 2019.*
*Product designed by Melinda Chu and AppInventiv. App developed by AppInventiv.*
```

**Step 2: Commit**

```bash
git add docs/product-features.md
git commit -m "docs: add comprehensive product feature walkthrough with all screenshots"
git push
```

---

## Task 7: Write Architecture & Supporting Docs

**Files:**
- Create: `docs/architecture.md`
- Create: `docs/lessons-learned.md`

**Step 1: Write `docs/architecture.md`**

Source files to read first:
- `Product Development/Tech Stack - Architecture/` (all .png and .docx)
- `Notes/Code - Architecture Notes/Code Archicture.docx`
- `Finance/DD Materials/3.2 Systems and Controls.docx`

Contents:
- Three-tier database rationale (local SQLite / intermediary / login DB)
- WebSocket real-time sync (Socket.io) — why not polling
- Offline-first design for unreliable school WiFi
- LMS integration architecture (OAuth/SAML bridging)
- State machine for class lock/pause/unlock/emergency
- Security model (FERPA, COPPA considerations)
- What we'd architect differently today (Firebase Realtime DB / Supabase / push to background service)

**Step 2: Write `docs/lessons-learned.md`**

Shorter companion to the retrospective — bulleted list organized by category:
- Technical lessons (OS-level locking, WebSocket reliability, offline sync)
- Product lessons (adoption barriers, multi-stakeholder buy-in)
- Business lessons (K-12 sales cycles, runway math, outsourced dev)
- What worked (pilot operational model, teacher onboarding materials, brand)

**Step 3: Commit**

```bash
git add docs/architecture.md docs/lessons-learned.md
git commit -m "docs: add architecture deep-dive and lessons learned"
git push
```

---

## Task 8: Build Interactive HTML Prototype

**Files:**
- Create: `prototype/index.html` — entry point / mode selector
- Create: `prototype/student-app.html` — mobile student app flows
- Create: `prototype/teacher-dashboard.html` — teacher web dashboard flows
- Create: `prototype/css/styles.css` — shared styles + phone/browser frame
- Create: `prototype/js/navigation.js` — screen switching logic

**Goal:** A static HTML site using the original 2018-2019 design images as full-screen
backgrounds, with clickable hotspot `<div>` overlays. Visitors can click through every
student and teacher flow exactly as it looked when shipped. Hosted on GitHub Pages.

**No framework. No build step. Pure HTML + CSS + JS.**

---

### Step 1: Build the shared CSS (phone frame + browser frame)

Write `prototype/css/styles.css`:

```css
/* Reset */
* { margin: 0; padding: 0; box-sizing: border-box; }
body { background: #1a1a2e; font-family: 'Nunito Sans', sans-serif; min-height: 100vh; }

/* ── Phone frame (student app) ── */
.phone-frame {
  width: 390px;
  height: 844px;
  background: #000;
  border-radius: 50px;
  padding: 12px;
  box-shadow: 0 0 0 2px #333, 0 20px 60px rgba(0,0,0,0.5);
  position: relative;
  margin: 0 auto;
}
.phone-screen {
  width: 100%;
  height: 100%;
  border-radius: 40px;
  overflow: hidden;
  position: relative;
  background: #fff;
}
.phone-screen img.screen-bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* ── Browser frame (teacher dashboard) ── */
.browser-frame {
  width: 1200px;
  background: #2d2d2d;
  border-radius: 10px;
  overflow: hidden;
  margin: 0 auto;
  box-shadow: 0 20px 60px rgba(0,0,0,0.5);
}
.browser-chrome {
  background: #3c3c3c;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.browser-dot { width: 12px; height: 12px; border-radius: 50%; }
.browser-dot.red { background: #ff5f57; }
.browser-dot.yellow { background: #ffbd2e; }
.browser-dot.green { background: #28c840; }
.browser-url {
  background: #fff;
  border-radius: 6px;
  padding: 4px 12px;
  font-size: 13px;
  color: #555;
  flex: 1;
  margin-left: 8px;
}
.browser-screen {
  position: relative;
  width: 100%;
}
.browser-screen img.screen-bg {
  width: 100%;
  display: block;
}

/* ── Clickable hotspots ── */
.hotspot {
  position: absolute;
  cursor: pointer;
  /* Debug: uncomment to visualize hotspots */
  /* background: rgba(255,100,100,0.3); border: 2px solid red; */
  border-radius: 8px;
  transition: background 0.15s;
}
.hotspot:hover { background: rgba(255,255,255,0.15); }

/* ── Navigation bar ── */
.nav {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(10px);
  border-radius: 30px;
  padding: 10px 24px;
  display: flex;
  gap: 16px;
  z-index: 100;
}
.nav a {
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  opacity: 0.7;
  transition: opacity 0.2s;
}
.nav a:hover, .nav a.active { opacity: 1; }

/* ── Screen wrapper ── */
.screen-wrapper {
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 40px 20px 80px;
  gap: 20px;
}
.screen-wrapper.active { display: flex; }

.screen-label {
  color: rgba(255,255,255,0.5);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;
}

/* ── Entry page ── */
.entry-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  gap: 32px;
  color: #fff;
  text-align: center;
  padding: 40px;
}
.entry-logo { font-size: 48px; font-weight: 800; letter-spacing: -2px; }
.entry-subtitle { opacity: 0.6; font-size: 16px; max-width: 400px; line-height: 1.5; }
.entry-cards {
  display: flex;
  gap: 24px;
  margin-top: 16px;
}
.entry-card {
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 16px;
  padding: 32px;
  cursor: pointer;
  transition: all 0.2s;
  min-width: 200px;
  text-decoration: none;
  color: #fff;
}
.entry-card:hover {
  background: rgba(255,255,255,0.14);
  transform: translateY(-2px);
}
.entry-card-icon { font-size: 36px; margin-bottom: 12px; }
.entry-card-title { font-size: 20px; font-weight: 700; }
.entry-card-desc { font-size: 13px; opacity: 0.6; margin-top: 6px; }
```

---

### Step 2: Build the JavaScript navigation engine

Write `prototype/js/navigation.js`:

```javascript
// Screen definitions: [id, imagePath, hotspots[]]
// Each hotspot: { top, left, width, height, target } (all percentages)

const STUDENT_SCREENS = [
  {
    id: 'splash',
    label: 'Splash Screen',
    img: 'screens/app/1.0 Splash screen.png',
    hotspots: [
      { top: '72%', left: '10%', width: '80%', height: '8%', target: 'login-empty',
        label: 'Log In' },
    ]
  },
  {
    id: 'login-empty',
    label: 'Login',
    img: 'screens/app/1.1 login_unfilled.png',
    hotspots: [
      { top: '65%', left: '10%', width: '80%', height: '8%', target: 'login-filled',
        label: 'Fill in credentials' },
      { top: '76%', left: '30%', width: '40%', height: '6%', target: 'forgot-password',
        label: 'Forgot password?' },
    ]
  },
  {
    id: 'login-filled',
    label: 'Login (filled)',
    img: 'screens/app/1.2 login_filled.png',
    hotspots: [
      { top: '72%', left: '10%', width: '80%', height: '8%', target: 'schedule',
        label: 'Log In' },
    ]
  },
  {
    id: 'forgot-password',
    label: 'Forgot Password',
    img: 'screens/app/1.3 login_forgot password.png',
    hotspots: [
      { top: '72%', left: '10%', width: '80%', height: '8%', target: 'reset-password',
        label: 'Send Reset Email' },
    ]
  },
  {
    id: 'reset-password',
    label: 'Reset Password',
    img: 'screens/app/1.4 login_reset password.png',
    hotspots: [
      { top: '72%', left: '10%', width: '80%', height: '8%', target: 'login-empty',
        label: 'Back to Login' },
    ]
  },
  {
    id: 'schedule',
    label: 'Schedule View',
    img: 'screens/app/6.0 schedule.png',
    hotspots: [
      { top: '20%', left: '5%', width: '90%', height: '12%', target: 'class-details',
        label: 'View AP Spanish' },
      { top: '10%', left: '80%', width: '15%', height: '8%', target: 'profile',
        label: 'Profile' },
    ]
  },
  {
    id: 'class-details',
    label: 'Class Details',
    img: 'screens/app/6.1 class details.png',
    hotspots: [
      { top: '5%', left: '5%', width: '15%', height: '8%', target: 'schedule',
        label: 'Back' },
    ]
  },
  {
    id: 'profile',
    label: 'Profile',
    img: 'screens/app/2.0 profile_default.png',
    hotspots: [
      { top: '30%', left: '5%', width: '90%', height: '8%', target: 'profile-edit',
        label: 'Edit Profile' },
      { top: '45%', left: '5%', width: '90%', height: '8%', target: 'change-pw',
        label: 'Change Password' },
      { top: '5%', left: '5%', width: '15%', height: '8%', target: 'schedule',
        label: 'Back' },
    ]
  },
  {
    id: 'profile-edit',
    label: 'Edit Profile',
    img: 'screens/app/2.1 profile_edit.png',
    hotspots: [
      { top: '80%', left: '10%', width: '80%', height: '8%', target: 'profile-saved',
        label: 'Save' },
    ]
  },
  {
    id: 'profile-saved',
    label: 'Profile Saved',
    img: 'screens/app/2.3 profile_changes saved notification.png',
    hotspots: [
      { top: '5%', left: '5%', width: '15%', height: '8%', target: 'profile',
        label: 'Back' },
    ]
  },
  {
    id: 'change-pw',
    label: 'Change Password',
    img: 'screens/app/2.2 profile_change pw.png',
    hotspots: [
      { top: '80%', left: '10%', width: '80%', height: '8%', target: 'profile-saved',
        label: 'Save' },
    ]
  },
  // ── ATTENDANCE FLOW ──
  {
    id: 'class-starting-50',
    label: 'Class Starting (50%)',
    img: 'screens/app/3.0 attendance_class starting_50.png',
    hotspots: [
      { top: '75%', left: '10%', width: '80%', height: '10%', target: 'you-are-present',
        label: 'Mark Present' },
    ]
  },
  {
    id: 'class-starting-20',
    label: 'Class Starting (80% in)',
    img: 'screens/app/3.1 attendance_class starting_20.png',
    hotspots: [
      { top: '75%', left: '10%', width: '80%', height: '10%', target: 'you-are-present',
        label: 'Mark Present' },
    ]
  },
  {
    id: 'you-are-present',
    label: 'You Are Present ✓',
    img: 'screens/app/3.2 you are present.png',
    hotspots: [
      { top: '85%', left: '10%', width: '80%', height: '8%', target: 'learning-check',
        label: 'Continue to class' },
      { top: '5%', left: '75%', width: '20%', height: '8%', target: 'emergency',
        label: 'Emergency' },
    ]
  },
  {
    id: 'you-are-absent',
    label: 'You Are Absent',
    img: 'screens/app/3.3 you are absent.png',
    hotspots: [
      { top: '5%', left: '75%', width: '20%', height: '8%', target: 'emergency',
        label: 'Emergency' },
    ]
  },
  {
    id: 'you-are-tardy',
    label: 'You Are Tardy',
    img: 'screens/app/3.4 you are tardy.png',
    hotspots: [
      { top: '80%', left: '10%', width: '80%', height: '8%', target: 'learning-check',
        label: 'Continue' },
    ]
  },
  {
    id: 'emergency',
    label: 'Emergency Mode',
    img: 'screens/app/3.5 emergency mode.png',
    hotspots: [
      { top: '80%', left: '10%', width: '80%', height: '8%', target: 'you-are-present',
        label: 'Return to Present' },
    ]
  },
  // ── LEARNING CHECKS ──
  {
    id: 'learning-check',
    label: 'Learning Check',
    img: 'screens/app/4.0 learning check.png',
    hotspots: [
      { top: '40%', left: '5%', width: '90%', height: '10%', target: 'answer-selected',
        label: 'Select answer A' },
      { top: '52%', left: '5%', width: '90%', height: '10%', target: 'answer-selected',
        label: 'Select answer B' },
      { top: '64%', left: '5%', width: '90%', height: '10%', target: 'answer-selected',
        label: 'Select answer C' },
      { top: '76%', left: '5%', width: '90%', height: '10%', target: 'answer-selected',
        label: 'Select answer D' },
    ]
  },
  {
    id: 'answer-selected',
    label: 'Answer Selected',
    img: 'screens/app/4.1 selected question.png',
    hotspots: [
      { top: '88%', left: '10%', width: '80%', height: '8%', target: 'correct-answer',
        label: 'Submit (correct)' },
    ]
  },
  {
    id: 'correct-answer',
    label: 'Correct! ✓',
    img: 'screens/app/4.3 correct answer.png',
    hotspots: [
      { top: '88%', left: '10%', width: '80%', height: '8%', target: 'results-view',
        label: 'See Results' },
    ]
  },
  {
    id: 'incorrect-answer',
    label: 'Incorrect ✗',
    img: 'screens/app/4.2 incorrect answer.png',
    hotspots: [
      { top: '88%', left: '10%', width: '80%', height: '8%', target: 'results-view',
        label: 'See Results' },
    ]
  },
  // ── RESULTS ──
  {
    id: 'results-view',
    label: 'Results Overview',
    img: 'screens/app/5.0 Results view.png',
    hotspots: [
      { top: '35%', left: '5%', width: '90%', height: '12%', target: 'results-correct',
        label: 'View correct responses' },
      { top: '50%', left: '5%', width: '90%', height: '12%', target: 'results-incorrect',
        label: 'View incorrect responses' },
      { top: '10%', left: '70%', width: '25%', height: '8%', target: 'results-dropdown',
        label: 'Filter' },
    ]
  },
  {
    id: 'results-dropdown',
    label: 'Results Filter',
    img: 'screens/app/5.3 Results class dropdown.png',
    hotspots: [
      { top: '40%', left: '5%', width: '90%', height: '8%', target: 'results-view',
        label: 'All' },
      { top: '50%', left: '5%', width: '90%', height: '8%', target: 'results-correct',
        label: 'Correct only' },
      { top: '60%', left: '5%', width: '90%', height: '8%', target: 'results-incorrect',
        label: 'Incorrect only' },
    ]
  },
  {
    id: 'results-correct',
    label: 'Correct Responses',
    img: 'screens/app/5.5 Results class_correct.png',
    hotspots: [
      { top: '5%', left: '5%', width: '15%', height: '8%', target: 'results-view',
        label: 'Back' },
    ]
  },
  {
    id: 'results-incorrect',
    label: 'Incorrect Responses',
    img: 'screens/app/5.6 Results class_incorrect.png',
    hotspots: [
      { top: '5%', left: '5%', width: '15%', height: '8%', target: 'results-view',
        label: 'Back' },
    ]
  },
  // ── TEMPERATURE CHECK ──
  {
    id: 'temp-check',
    label: 'Temperature Check',
    img: 'screens/app/7.0 temperature check_default.png',
    hotspots: [
      { top: '30%', left: '5%', width: '90%', height: '12%', target: 'you-are-present',
        label: '😊 Totally get it' },
      { top: '44%', left: '5%', width: '90%', height: '12%', target: 'you-are-present',
        label: '🙂 Mostly there' },
      { top: '58%', left: '5%', width: '90%', height: '12%', target: 'you-are-present',
        label: '😐 Kind of following' },
      { top: '72%', left: '5%', width: '90%', height: '12%', target: 'you-are-present',
        label: '😕 Getting lost' },
    ]
  },
];

// Current screen state
let currentStudentScreen = 'splash';

function renderStudentScreen(screenId) {
  const screen = STUDENT_SCREENS.find(s => s.id === screenId);
  if (!screen) return;
  currentStudentScreen = screenId;

  const phoneScreen = document.getElementById('phone-screen');
  const screenLabel = document.getElementById('screen-label');

  // Clear existing content
  phoneScreen.innerHTML = '';

  // Background image
  const img = document.createElement('img');
  img.src = screen.img;
  img.className = 'screen-bg';
  img.alt = screen.label;
  phoneScreen.appendChild(img);

  // Add hotspots
  screen.hotspots.forEach(h => {
    const hotspot = document.createElement('div');
    hotspot.className = 'hotspot';
    hotspot.style.top = h.top;
    hotspot.style.left = h.left;
    hotspot.style.width = h.width;
    hotspot.style.height = h.height;
    hotspot.title = h.label;
    hotspot.addEventListener('click', () => renderStudentScreen(h.target));
    phoneScreen.appendChild(hotspot);
  });

  // Update label
  if (screenLabel) screenLabel.textContent = screen.label;

  // Update browser URL if on dashboard
  updateHistory(screenId);
}

function updateHistory(screenId) {
  const url = new URL(window.location);
  url.searchParams.set('screen', screenId);
  history.replaceState(null, '', url);
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const initial = params.get('screen') || 'splash';
  if (document.getElementById('phone-screen')) {
    renderStudentScreen(initial);
  }
});
```

---

### Step 3: Build the student app HTML

Write `prototype/student-app.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Present — Student App Demo</title>
  <link rel="stylesheet" href="css/styles.css" />
  <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800&display=swap" rel="stylesheet" />
</head>
<body>
  <div class="screen-wrapper active">
    <p class="screen-label" id="screen-label">Splash Screen</p>

    <div class="phone-frame">
      <div class="phone-screen" id="phone-screen">
        <!-- Populated by JS -->
      </div>
    </div>

    <!-- Quick-nav to key flows -->
    <div style="display:flex; gap:8px; flex-wrap:wrap; justify-content:center; max-width:500px;">
      <button onclick="renderStudentScreen('splash')"
              style="background:rgba(255,255,255,0.1);border:none;color:#fff;padding:6px 14px;border-radius:20px;cursor:pointer;font-size:13px;">
        ← Splash
      </button>
      <button onclick="renderStudentScreen('class-starting-50')"
              style="background:rgba(255,255,255,0.1);border:none;color:#fff;padding:6px 14px;border-radius:20px;cursor:pointer;font-size:13px;">
        Attendance →
      </button>
      <button onclick="renderStudentScreen('learning-check')"
              style="background:rgba(255,255,255,0.1);border:none;color:#fff;padding:6px 14px;border-radius:20px;cursor:pointer;font-size:13px;">
        Learning Check →
      </button>
      <button onclick="renderStudentScreen('temp-check')"
              style="background:rgba(255,255,255,0.1);border:none;color:#fff;padding:6px 14px;border-radius:20px;cursor:pointer;font-size:13px;">
        Temp Check →
      </button>
      <button onclick="renderStudentScreen('emergency')"
              style="background:rgba(255,100,100,0.2);border:none;color:#fff;padding:6px 14px;border-radius:20px;cursor:pointer;font-size:13px;">
        🚨 Emergency
      </button>
    </div>
  </div>

  <nav class="nav">
    <a href="index.html">Home</a>
    <a href="student-app.html" class="active">Student App</a>
    <a href="teacher-dashboard.html">Teacher Dashboard</a>
  </nav>

  <script src="js/navigation.js"></script>
</body>
</html>
```

---

### Step 4: Build the teacher dashboard HTML

Write `prototype/teacher-dashboard.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Present — Teacher Dashboard Demo</title>
  <link rel="stylesheet" href="css/styles.css" />
  <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800&display=swap" rel="stylesheet" />
</head>
<body>
  <div class="screen-wrapper active" style="max-width:1300px; margin:0 auto;">
    <p class="screen-label" id="dashboard-label">Teacher Dashboard — Login</p>

    <div class="browser-frame">
      <div class="browser-chrome">
        <div class="browser-dot red"></div>
        <div class="browser-dot yellow"></div>
        <div class="browser-dot green"></div>
        <div class="browser-url">app.presenteducation.org/dashboard</div>
      </div>
      <div class="browser-screen" id="dashboard-screen">
        <!-- Populated by JS or static images per screen -->
        <img src="screens/dashboard/1.Login_unfilled.png"
             style="width:100%;display:block;" id="dashboard-img"
             alt="Teacher dashboard" />

        <!-- Hotspot overlay for login button -->
        <div class="hotspot" id="dashboard-hotspot"
             style="top:58%;left:30%;width:40%;height:7%;"
             onclick="loadDashboardScreen('class-idle')"
             title="Log In"></div>
      </div>
    </div>

    <!-- Quick-nav to key dashboard screens -->
    <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center;max-width:800px;margin-top:8px;">
      <button onclick="loadDashboardScreen('login')"
              style="background:rgba(255,255,255,0.1);border:none;color:#fff;padding:6px 14px;border-radius:20px;cursor:pointer;font-size:13px;">
        Login
      </button>
      <button onclick="loadDashboardScreen('class-idle')"
              style="background:rgba(255,255,255,0.1);border:none;color:#fff;padding:6px 14px;border-radius:20px;cursor:pointer;font-size:13px;">
        Dashboard (idle)
      </button>
      <button onclick="loadDashboardScreen('class-active')"
              style="background:rgba(255,255,255,0.1);border:none;color:#fff;padding:6px 14px;border-radius:20px;cursor:pointer;font-size:13px;">
        Class in session
      </button>
      <button onclick="loadDashboardScreen('lc-question-list')"
              style="background:rgba(255,255,255,0.1);border:none;color:#fff;padding:6px 14px;border-radius:20px;cursor:pointer;font-size:13px;">
        Learning Checks
      </button>
      <button onclick="loadDashboardScreen('schedule-weekly')"
              style="background:rgba(255,255,255,0.1);border:none;color:#fff;padding:6px 14px;border-radius:20px;cursor:pointer;font-size:13px;">
        Schedule
      </button>
    </div>
  </div>

  <nav class="nav">
    <a href="index.html">Home</a>
    <a href="student-app.html">Student App</a>
    <a href="teacher-dashboard.html" class="active">Teacher Dashboard</a>
  </nav>

  <script>
    // Map screen names to image filenames from teacher dashboard directory
    // These filenames need to match what was actually copied into prototype/screens/dashboard/
    const DASHBOARD_SCREENS = {
      'login':            { img: '1.Login_unfilled.png', label: 'Login' },
      'class-idle':       { img: '2.Dashboard_class starting inactive.png', label: 'Dashboard — No Class Active' },
      'class-active':     { img: '3.Dashboard_class in session.png', label: 'Dashboard — Class in Session' },
      'lc-question-list': { img: '8.LearningChecks_question list.png', label: 'Learning Checks — Question List' },
      'lc-results':       { img: '14.LearningChecks_results.png', label: 'Learning Check Results' },
      'schedule-weekly':  { img: '15.Schedule_weekly collapsed.png', label: 'Schedule — Weekly View' },
      'schedule-monthly': { img: '17.Schedule_monthly view.png', label: 'Schedule — Monthly View' },
    };

    function loadDashboardScreen(id) {
      const screen = DASHBOARD_SCREENS[id];
      if (!screen) return;
      document.getElementById('dashboard-img').src = 'screens/dashboard/' + screen.img;
      document.getElementById('dashboard-label').textContent = 'Teacher Dashboard — ' + screen.label;
      // Remove old hotspot
      document.getElementById('dashboard-hotspot').style.display = 'none';
    }
  </script>
</body>
</html>
```

---

### Step 5: Build the entry page

Write `prototype/index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Present Education — Interactive Demo</title>
  <link rel="stylesheet" href="css/styles.css" />
  <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800&display=swap" rel="stylesheet" />
</head>
<body>
  <div class="entry-page">
    <div>
      <div class="entry-logo" style="color:#83CACC;">present</div>
      <div class="entry-subtitle">
        Interactive prototype using original 2018–2019 designs.<br/>
        Click to explore every flow as it existed at launch.
      </div>
    </div>

    <div class="entry-cards">
      <a href="student-app.html" class="entry-card">
        <div class="entry-card-icon">📱</div>
        <div class="entry-card-title">Student App</div>
        <div class="entry-card-desc">
          Login · Attendance · Learning Checks ·
          Temperature Check · IDGI · Emergency Mode
        </div>
      </a>

      <a href="teacher-dashboard.html" class="entry-card">
        <div class="entry-card-icon">💻</div>
        <div class="entry-card-title">Teacher Dashboard</div>
        <div class="entry-card-desc">
          Class management · Real-time attendance ·
          Learning check results · Schedule view
        </div>
      </a>
    </div>

    <div style="color:rgba(255,255,255,0.4); font-size:13px; max-width:400px; line-height:1.6;">
      All screens are original Present Education designs from 2018–2019.
      This prototype is static — no backend, no data collection.
      <a href="../docs/product-features.md"
         style="color:#83CACC;">Read the full feature walkthrough →</a>
    </div>
  </div>
</body>
</html>
```

---

### Step 6: Enable GitHub Pages

```bash
# In the repo root, create a gh-pages config
# GitHub Pages serves from /prototype when configured as subdirectory
# OR: serve from root and set prototype/ as homepage

# Option A: Serve prototype/ as the GitHub Pages root
# Go to: Settings → Pages → Source → Deploy from branch → main → /prototype

# Option B (simpler): Copy prototype files to root-level /docs folder for GH Pages
# (GitHub Pages supports serving from /docs on main branch)
cp -r prototype/* docs/demo/
# Then set Pages source to: main branch, /docs folder
```

Easier approach: add a root `index.html` that redirects to `prototype/index.html`:

```bash
cat > index.html << 'EOF'
<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="refresh" content="0;url=prototype/index.html" />
</head>
<body>
  <a href="prototype/index.html">Go to prototype</a>
</body>
</html>
EOF
```

### Step 7: Calibrate hotspot positions

The hotspot percentages in `navigation.js` are estimated. After the first deploy,
open each screen and verify that clickable areas align with actual button positions
in the design images. Adjust `top`/`left`/`width`/`height` values as needed.

```bash
# View locally before pushing
cd prototype && python3 -m http.server 8080
# Open http://localhost:8080 in browser
# Click through each screen and adjust hotspot positions
```

### Step 8: Commit prototype

```bash
git add prototype/
git commit -m "feat: add interactive HTML prototype with original 2018-2019 designs"
git push
```

Add to README under a new section:
```markdown
## Interactive Prototype

→ **[Click to explore the original 2018-2019 designs](https://[username].github.io/present-education/prototype/)**

Student app (iOS) + Teacher web dashboard, fully clickable.
No backend — all original designs from final export, March 2019.
```

---

## Task 9: Add Pitch Deck & Business Artifacts

**Files:**
- Add to repo: `pitch/present-pitch-deck.pdf`
- Add to repo: `pitch/product-overview-oct-2018.pdf`

**Step 1: Export pitch deck to PDF**

```bash
mkdir -p pitch
libreoffice --headless --convert-to pdf \
  "/home/eli/projects/present/Present - Reference/Sales & Marketing/Pitch Materials/Present Pitch Deck.pptx" \
  --outdir pitch/

libreoffice --headless --convert-to pdf \
  "/home/eli/projects/present/Present - Reference/Sales & Marketing/Pitch Materials/Present Overview 10-10-18.pptx" \
  --outdir pitch/
```

**Step 2: Review both PDFs before committing**

Open each PDF. Verify:
- [ ] No SSNs or home addresses
- [ ] No specific investment amounts or cap table data
- [ ] Advisor/team bios are OK (public-facing info)

**Step 3: Commit**

```bash
git add pitch/
git commit -m "feat: add investor pitch deck and product overview (Oct 2018)"
git push
```

---

## Task 10: Final Polish & Publish

**Step 1: Add GitHub repo topics**

```bash
gh repo edit present-education \
  --add-topic edtech \
  --add-topic startup \
  --add-topic ios \
  --add-topic android \
  --add-topic nodejs \
  --add-topic mongodb \
  --add-topic startup-postmortem \
  --add-topic classroom-technology \
  --add-topic github-pages
```

**Step 2: Enable GitHub Pages**

Go to: `github.com/[username]/present-education` → Settings → Pages
- Source: Deploy from branch
- Branch: main · Folder: / (root)
- Save

Verify prototype is live at `https://[username].github.io/present-education/prototype/`

**Step 3: Update README with live prototype link**

Replace the placeholder `[username]` in the README prototype link with the actual URL.

**Step 4: Pin repo to GitHub profile**

Go to your GitHub profile → Customize pins → Add `present-education`.

**Step 5: Verify everything looks right**

```bash
gh browse
```

Checklist:
- [ ] README renders correctly with all images
- [ ] Prototype link works on GitHub Pages
- [ ] All docs are linked correctly from README
- [ ] No sensitive data visible in any committed file

**Step 6: LinkedIn post (high-leverage)**

Suggested framing:
> "In 2018-2019, I co-founded an EdTech startup called Present Education. We built an
> iOS + Android app that let teachers manage classroom phone use, piloted at Portland
> Public Schools with 200+ students, shipped to the App Store, and shut down 18 months
> later. I just published the full archive — designs, pitch deck, architecture docs,
> and a retrospective written 6 years later. Link in comments."

Attach: the teacher illustration or best App Store screenshot.

---

## Execution Notes

**Task priority order (by employer impact):**
1. Task 4 (Retrospective) — most unique, most shareable
2. Task 5 (README) — first thing every visitor sees
3. Task 8 (Prototype) — most interactive, most memorable
4. Task 6 (Features doc) — most detailed, most impressive depth
5. Tasks 1–3 and 7, 9, 10 — scaffolding

**Time estimates:**
- Tasks 1–3: ~1 hour (setup + shutdown letter)
- Task 4 (Retrospective): ~2 hours (scaffold + Eli personalizes)
- Task 5 (README): ~2 hours
- Task 6 (Features doc): ~3 hours (writing + screenshot verification)
- Task 7 (Architecture): ~2 hours
- Task 8 (Prototype): ~4–6 hours (build + hotspot calibration)
- Tasks 9–10: ~1 hour

**Total: ~15–17 hours for the full repo.**

Eli must personally review Tasks 4 and 5 before publishing — Claude writes the scaffold, Eli adds voice, memory, and any corrections to facts.

---

## Privacy Checklist (run before every push)

- [ ] No SSNs anywhere
- [ ] No home addresses (business addresses OK)
- [ ] No individual salary or investment amounts
- [ ] No student names or personal student data
- [ ] No personal email addresses (except Eli's, if he chooses)
- [ ] Pitch deck reviewed: no cap table with individual amounts
- [ ] Teacher/student name fields in designs: check if any real names in mockups
- [ ] Shutdown letter: original is clean (remove elicoon@gmail.com if desired)
