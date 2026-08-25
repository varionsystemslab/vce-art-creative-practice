# Studio Catch-Up — VCE Art Creative Practice, Units 1 & 2

**Live site:** https://varionsystemslab.github.io/vce-art-creative-practice/

An interactive, self-paced catch-up resource for VCE **Art Creative Practice** Units 1 & 2, built for students who missed the class in Year 11 but need to be ready for Unit 3 & 4. No sign-up, no build step — open the link and start working through it over holidays and weekends.

## Why this exists

Art Creative Practice Units 3 & 4 assume you already know the Creative Practice cycle, the three Interpretive Lenses, and how to research an artist's practice — normally built up over a full year of Unit 1 & 2 classes. This site consolidates that curriculum into a single, self-directed resource with practice, checklists and progress tracking, so it can be worked through independently.

It's also intentionally usable by any other student in the same position, not just one person — everything runs client-side with no account required.

## What's in it

- **Dashboard** — overall progress ring, XP/level, badges, and a suggested 4-session holiday sprint
- **Foundations** — an interactive Creative Practice wheel (Research & Exploration, Experimentation & Development, Refinement & Resolution, Reflection & Evaluation) and the three Interpretive Lenses (Structural, Personal, Cultural), each with Making/Responding detail
- **Unit 1** and **Unit 2** — every Area of Study's description, outcome, key knowledge/skills and official assessment-task suggestions, plus:
  - A catch-up checklist per Area of Study
  - An **artist research toolkit** (autosaving grid) that tracks the specific artist requirements for each unit — e.g. Unit 2's four required artist conditions (Aboriginal or Torres Strait Islander artist, collaborative artist, historical/traditional artist, contemporary artist)
  - A studio prompt generator and a reflection journal
- **Glossary** — flip-card reference for the 9 art elements, 11 art principles, and 8 key VCAA terms, plus a browsable list of recognised art forms
- **Quiz Zone** — topic quizzes (Foundations, Unit 1, Unit 2, Exam Skills, Mixed) with instant feedback
- **Exam Prep** — a preview of the Unit 3 & 4 written examination (Units 1 & 2 themselves are **not** examined — they're school-assessed). Covers real exam structure, a command-word glossary, and original practice prompts modelled on the published question patterns
- **XP / levels / badges** — lightweight gamification (Apprentice → Emerging Artist → Practising Artist → Studio Master) to make self-paced study less of a slog

All progress is stored in the browser's `localStorage` — nothing is sent to a server, and progress is per-device.

## Content sources

Curriculum content (areas of study, outcomes, key knowledge/skills, the Creative Practice, Interpretive Lenses, art elements/principles, key terms) is adapted directly from the official **VCAA Art Creative Practice Study Design 2023–2027**.

Exam Prep content is based on the structure of the real, published VCAA papers (2023 sample examination, 2024 and 2025 written examinations) — format, mark allocations and command words only. No actual exam questions, sources, or artwork images are reproduced; all practice prompts are original.

This is an unofficial, independently built study aid — not an official VCAA resource. Always check current requirements against [vcaa.vic.edu.au](https://www.vcaa.vic.edu.au/curriculum/vce-curriculum/vce-study-designs/art-creative-practice/vce-art-creative-practice).

## Tech

Plain HTML/CSS/JS — no framework, no build step, no dependencies.

```
index.html
css/style.css
js/
  data.js       curriculum + quiz + exam-prep content
  progress.js   XP/level/badge/localStorage engine
  quiz.js       quiz rendering + scoring
  app.js        navigation + all UI wiring
```

To run locally:

```bash
python3 -m http.server 8000
```

then open `http://localhost:8000`.

Deployed via GitHub Pages (`legacy` build, serving `main` branch root).
