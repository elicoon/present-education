# Lessons Learned — Present Education (2017–2019)

Bulleted companion to the [full retrospective](retrospective.md).
Organized by category for quick reference.

---

## Technical

- **Accessibility Service ≠ app management.** Android's Accessibility Service API works, but it's designed for disability accommodations. It's fragile across manufacturers, blocked by Samsung's UI layer, and a moving target across OS versions. Using it for lock enforcement was a structural risk we didn't fully appreciate until the pilot.

- **0.1% failure rate is catastrophic at classroom scale.** A 2,000-student school with six classes per day means 10+ students with locked phones every period. Never accept a reliability target you haven't stress-tested at actual usage volume.

- **iOS BYOD locking is unsolved.** Guided Access requires manual per-device configuration by the student. MDM-enrolled devices are the only path to reliable iOS app management. We built for BYOD and painted ourselves into a corner.

- **Offline-first should be a day-one constraint, not a retrofit.** We bolted on SQLite local state after our first connectivity failure in the pilot. Design for the network being absent; treat connectivity as a bonus, not an assumption.

- **Real-time WebSocket connections at scale need infrastructure to match.** Socket.io worked in the pilot. At 100+ concurrent classrooms, managing persistent connections becomes an ops problem. Firebase Realtime DB or Supabase subscriptions would have reduced that surface area significantly.

- **Build the thing you can debug in the classroom.** When a lock failed mid-class, we needed to diagnose remotely across a timezone gap. A local engineer who could walk into the classroom and instrument the device in real time would have changed how quickly we found and fixed issues.

---

## Product

- **Behavior change is the real product.** We built tools. The harder problem was changing how teachers, students, and parents thought about phones in class. The technology was secondary to the behavior change required to use it.

- **Students aren't the adoption barrier.** Initial resistance from students is real, but temporary. Within weeks of adoption, students in our pilot were reporting that class felt more engaging. The harder sell was teachers and parents.

- **Find the teacher who feels the pain deeply.** We piloted with teachers who were willing to try — not teachers who were losing their minds over phone disruption every day. The strongest product-market fit comes from the user who needs it most, not the user who's most open to experimentation.

- **Don't design for the average teacher; design for the worst day.** Teachers are managing 30 students, a lesson plan, a whiteboard, and unexpected interruptions. Any feature that added cognitive load during class was a feature that wouldn't get used.

- **The schedule view was more valuable than we expected.** Giving students a reason to open the app proactively — not just reactively when class started — was critical to making the lock feel less adversarial. Habit formation matters.

- **Anonymous signals get used. Named signals don't.** Temperature Check and IDGI had higher engagement than Learning Checks precisely because they were anonymous. Students will tell you they're confused if no one knows it's them.

---

## Business

- **K-12 sales cycles are 9–12 months, minimum.** Our Lincoln High School contract took 6 months from first conversation to signed paper. That's fast for K-12. Budget cycles, IT reviews, board approvals, and legal review are not compressible. Plan your runway accordingly.

- **You need more than one yes.** Selling into a school requires simultaneous buy-in from the teacher, students, parents, district IT, and the principal. Getting four of five doesn't work — any one stakeholder can kill adoption.

- **$60K isn't enough to navigate a 9-month sales cycle.** Capital consumed by development before proving behavioral change left too little runway to iterate through the full sales process. Raise more before you build, or build less before you raise.

- **Outsourcing development at pre-product-market-fit is a mistake.** Milestone-based offshore development introduced a delay amplifier at every change request. By the time a bug was diagnosed, spec'd, and fixed, it was three weeks later. You need engineers who can iterate with you in the classroom, not across a timezone.

- **An accelerator would have compressed the learning curve.** Networks, advisors who'd seen these failure modes before, and a structured cohort forcing deadlines we didn't have. We tried to build without those rails.

- **Timing matters and you can't fully control it.** Apple launched Screen Time the same month we began our pilot. Google launched Digital Wellbeing that year. We were building for a problem that the OS companies were just beginning to acknowledge. Three years later, the market was ready. We weren't there to meet it.

---

## What Worked

- **The brand and product design were strong.** The visual identity, the Melinda Chu illustrations, the app UI — these held up. Teachers and students responded positively to the product feel. We were not building something ugly.

- **The pilot operational model was real.** We completed a full IRIS security review, signed a contract, produced onboarding materials, ran weekly student surveys, and observed classes. We ran a real enterprise pilot, not a friendly handshake. That discipline was right.

- **Temperature Check and IDGI were genuinely useful.** Teachers who used them regularly said they changed how they adjusted instruction mid-class. The engagement features — separate from the locking — had legs on their own.

- **The Pause/Resume mechanic was loved.** Giving teachers a way to temporarily lift the lock without ending class — and use it as a reward — was emergent behavior we didn't design for. It became one of the most-used features.

- **We shipped.** Two app stores, a web dashboard, a backend, LMS integrations, a school district contract. Most startups never get there. We did.

---

*Present Education Inc. was incorporated February 2, 2018 in Oregon. Shut down August 2019.*
