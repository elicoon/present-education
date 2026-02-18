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

| Type | Description | Screenshots |
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

*27 teacher dashboard screens in `assets/screenshots/teacher-dashboard/`*

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

## Feature Comparison: Present vs. Alternatives (2018–2019)

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
