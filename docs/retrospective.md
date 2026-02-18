# What We Built, Why It Failed, and What I Know Now
*A retrospective on Present Education (2017–2019)*
*Written in 2026, six years later*

---

## The Idea

It started with mock trial.

I was coaching high school students in the evenings — a volunteer extracurricular, something they had chosen to do with their time. And they were on their phones constantly. Not in defiance of me; just reflexively. During drills, during breaks, in the hallways between sessions. The technology was filling every gap.

That bothered me for two reasons. First, they were choosing to be there. This wasn't a required class. They signed up. And they still couldn't be fully present. Second, I noticed what the phones were replacing: talking to each other. Looking around the room, I kept seeing the same thing — kids next to each other, alone together, scrolling.

I started to think this was a bigger pattern than one mock trial team. The phone wasn't the problem. The problem was that nobody had designed a tool that helped young people have a healthier relationship with their technology. Teachers were on their own, improvising with pouches and warnings and honor systems that didn't work.

We thought we could build something better.

---

## What We Built

Present was a mobile app — iOS and Android — that let teachers temporarily lock distracting native apps on student-owned phones during class. No special hardware. Students marked themselves "Present" at the start of class. The app blocked texting, Instagram, Snapchat. Teachers ran real-time learning checks and temperature checks from a web dashboard, and could see who was confused, who needed help, who had checked in.

We incorporated in February 2018. We outsourced development to a firm in Pune, India. We launched to the App Store and Google Play in November 2018. By spring 2019, we had a signed contract with Portland Public Schools and were live in two Spanish classes at Lincoln High School.

We shut down in August 2019.

---

## The Pilot

The most important thing I learned in Doug Siegel's classroom was that behavior change is the hardest thing to do.

We had built something that required everyone — students, teachers, parents, IT — to do something different. And that's a much harder ask than it sounds.

Initially, the students resisted. That was expected. What I didn't expect was what happened a few weeks in: students started coming to us and telling us how much more fun class was with everyone engaged together. The phones were down, the whole room was present, and it turned out that was actually a better experience — even for the students who'd been most reluctant.

That shift taught me something important. The students weren't the adoption barrier. They could get there. The harder problem was everything else.

---

## What Went Wrong

### 1. The Math of Reliability

Here's the problem I couldn't solve: a 2,000-student school where each student takes six classes per day. At a 0.1% failure rate — one in a thousand — that's still 10 students every single class period who can't get their phone unlocked. That's a parent complaint every day. That's a teacher spending the first five minutes of class troubleshooting instead of teaching.

We never got to the point where I was confident enough in our technical implementation to believe we'd beaten that number. And without that confidence, scaling was a non-starter.

The phone locking itself was fragile. Android worked through an Accessibility Service — powerful but inconsistent across devices and manufacturers. iOS was worse; true app locking on student-owned devices required either MDM enrollment (a months-long district IT process) or Guided Access (which required students to configure it manually, which they wouldn't). We never fully solved the iOS problem.

### 2. The Stakeholder Problem

Getting a school to adopt something new isn't one sale. It's five.

The teacher has to feel the pain deeply enough to change their routine. The students have to accept it. The parents have to consent. The district IT team has to approve it from a security and compliance standpoint. And the principal has to champion it.

One of our pilot teachers told us honestly: "I didn't realize phones were that big of a problem for me." That sentence reframed a lot. We had built a solution and then gone looking for the people who felt the problem. That's the wrong order.

Parents were also skeptical in a way we underestimated. The idea of their child not having free access to their phone during the school day — even temporarily, even with an emergency unlock always available — made a lot of parents uncomfortable. We had good answers. But having good answers isn't the same as having addressed the objection before it became a barrier.

### 3. K-12 Budget Cycles

Public school districts don't make fast decisions. Our Lincoln High School contract took six months of meetings, legal review, IT security questionnaires, and board approval. That's normal for K-12. It's just incompatible with being a cash-strapped early-stage startup that needs to show traction.

The math never worked: nine-to-twelve month sales cycles, a small number of schools we could realistically target, and a limited runway. We burned most of our capital on development before we'd proven that schools would actually change their behavior to use the product.

### 4. The Team We Had Wasn't the Team We Needed

I'll be direct about this: I didn't have the skills or experience to know what I needed to make this successful. I knew the problem. I believed in the solution. I didn't have the technical depth to evaluate what we were building, to know when something was "good enough for now" versus "this will break us at scale," or to push back effectively when the implementation fell short.

Outsourcing development to a firm overseas made this harder. The work was professional. But milestone-based, timezone-separated development meant every change request added weeks. When something broke, we were debugging features we'd specified ten months earlier. We had a product that none of us fully understood or controlled.

A startup accelerator would have helped. More importantly, having a technical co-founder who could walk into that classroom with me, debug something on the spot, and understand the gap between what we'd built and what we needed — that would have changed what we built.

---

## What I'd Do Differently

1. **Get into an accelerator.** YC, Techstars, whatever was relevant. Not for the money — for the structure, the network, and the forcing function of people who've seen these failure modes before.

2. **Build the team first, then the product.** A technical partner who co-owned the problem and could work alongside me in the classroom. Not a vendor.

3. **Start with the teacher who feels the pain deeply.** Not just one who's open to trying. Find the teacher who's losing their mind over phones every day and build the whole thing around their specific workflow. Get that one classroom working perfectly before thinking about the next one.

4. **Solve reliability before thinking about scale.** Nothing else matters if a teacher can't trust the product to work every class, every day, without exceptions.

5. **Know what you don't know.** This is the hard one. I thought I understood what was required. I didn't, and I didn't know I didn't know it. That gap is expensive.

---

## What's Changed Since 2019

The market we were building for now exists.

Apple launched Screen Time and Google launched Digital Wellbeing that same year we were running our pilot — the first acknowledgment from the OS companies that this was a real problem. Post-COVID, school device management went from optional to urgent. GoGuardian raised hundreds of millions. Bark for Schools scaled broadly. Several states passed legislation limiting phone use in schools. Yondr — the phone pouch company we were competing with — is now in thousands of schools.

We were right about the problem. We just didn't have the resources or the timing to be the ones who solved it.

---

## What It Was Worth

I ran a real company. I filed incorporation papers, opened a business bank account, negotiated a contract with a school district, managed offshore developers across time zones, built a product that shipped to two app stores, and wrote a shutdown letter when the time came.

More than any of that: I learned how to be independent and self-driven when there are no deadlines outside the ones you set for yourself. Nobody is going to tell you what to do or when to do it. You either build that capacity or you don't. Present built it.

I'd do it again.

---

*Eli Coon, 2026*
