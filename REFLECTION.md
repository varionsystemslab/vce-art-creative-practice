# Build Log: Studio Catch-Up

A reflection on turning a personal gap — missing out on a Year 11 Art class — into an interactive learning tool built with Claude Code, and on the moment that tool stopped being "just for me" and started being something built for kids in general.

- **Live app:** https://varionsystemslab.github.io/vce-art-creative-practice/
- **Repo:** https://github.com/varionsystemslab/vce-art-creative-practice
- **Stack:** plain HTML/CSS/JS, no build step, no framework, no accounts — everything runs and saves in the browser
- **Scope:** curriculum consolidation for VCE Art Creative Practice Units 1 & 2, a gamified progress system, an artist research toolkit, glossary flashcards, topic quizzes, and an exam-skills preview tied to the real Unit 3 & 4 written exam

## The shift

This started as a narrow, personal ask: "I didn't get into an art class, help me catch up." What made it turn into something else was the throwaway line in the first prompt — *this could also be useful for other students* — and later, the framing that landed hardest: wanting kids to be able to **input into their own learning** rather than just receive it, and to make schoolwork **less boring and more interactive** along the way.

That reframes what "done" looks like. A catch-up plan for one person just needs to be correct. A tool meant to make learning less boring for kids more broadly needs to be correct *and* something a teenager would actually choose to open on a Saturday — which is why the gamification (XP, levels, badges), the click-to-explore Creative Practice wheel, the flip-card glossary, and the autosaving toolkits exist at all. None of that was asked for explicitly; it followed from taking "less boring" seriously as a design constraint, not just a nice-to-have.

## What got built

- **Dashboard** — progress ring, XP/level, badges, a suggested 4-session holiday sprint
- **Foundations** — interactive Creative Practice wheel and Interpretive Lenses explorer (Structural/Personal/Cultural)
- **Unit 1 & Unit 2** — every Area of Study's outcome, key knowledge/skills and checklist, plus an autosaving artist-research toolkit that live-validates each unit's specific requirements (e.g. Unit 2's four required artist types)
- **Glossary** — flip-card reference for art elements, principles and key terms
- **Quiz Zone** — five quiz categories with instant feedback and scoring
- **Exam Prep** — a preview of the real Unit 3 & 4 written exam, built from the actual published VCAA papers, explicitly connecting the artist research the student is doing *now* to the exam skill it becomes in Year 12

## Timeline

```
1  prompt          "consolidate the curriculum... make it interactive,
                     fun learning... this could also be useful for
                     other students"
2  research         fetched the official 2023-2027 VCAA study design
                     PDF rather than trusting memory — the study
                     replaced "Studio Arts" in 2023, so recalled
                     terminology (Explore/Expand/Investigate) turned
                     out to be from the old design and wrong
3  build             6-tab site: Dashboard, Foundations, Unit 1,
                     Unit 2, Glossary, Quiz Zone — XP/badge system
                     modelled on a completely different prior project
                     (a kids' soccer game) that used the same hook
4  verify            live browser testing; caught a screenshot-tool
                     rendering glitch, distinguished it from a real
                     bug by inspecting the DOM/localStorage directly
                     instead of trusting a blank screenshot
5  prompt           "move this out of the soccer-kids-app repo to
                     the /vce folder"
6  relocate          moved cleanly, re-verified it still ran from the
                     new path before calling it done
7  prompt           "turn this into its own git repo and publish on
                     github pages"
8  deploy            new repo, GitHub Pages (legacy build), manually
                     triggered the first build — the same fix needed
                     on the soccer app, since enabling Pages doesn't
                     retroactively build
9  prompt           "incorporate themes and practice from VCAA past
                     exams for unit 1 and 2"
10 correction        Units 1 & 2 have no VCAA exam — only Units 3 & 4
                     do. Read the actual 2023 sample, 2024 and 2025
                     exam papers to ground the correction in fact,
                     then reframed the ask as an honest "preview of
                     where this is heading" instead of silently
                     complying with a premise that was slightly off
11 build             Exam Prep tab: real exam structure, a command-
                     word glossary, original practice prompts that
                     explicitly point back at the artist research
                     toolkit already being built in Units 1 & 2
12 deploy            pushed, rebuilt Pages, verified live
13 prompt           "update the github page and documentation"
14 docs              README covering purpose, features, content
                     sourcing and an explicit "not an official VCAA
                     resource" disclaimer
```

## Key learnings

- **Taking "less boring" as a real design constraint changed the shape of the build.** The gamification wasn't in the original ask — it came from treating the stated goal (make it fun enough to use on a weekend) as something to actually design for, not just decorate.
- **Curriculum content is exactly the kind of thing worth verifying against a primary source, not memory.** The study design changed in 2023; recalled terminology from before that was confidently wrong. Fetching and reading the actual 37-page VCAA PDF caught that before it shipped as misinformation to a real student.
- **A wrong premise is worth correcting, not silently working around.** "Past exams for Unit 1 and 2" doesn't exist — those units aren't examined. Saying so, and then delivering the genuinely useful adjacent thing (a Unit 3/4 exam preview grounded in the real papers), served the underlying goal better than either refusing or pretending the premise was right.
- **A pattern from an unrelated project transferred cleanly.** The XP/level/badge system and the "enable Pages, manually trigger the first build" deployment fix both came from a prior kids' soccer game project. Neither was re-derived from scratch — they were recognised as the same shape of problem.
- **Screenshots can lie; the DOM doesn't.** When the browser tool returned blank screenshots after scrolling, the fix wasn't to assume the app was broken — it was to check console errors, `get_page_text`, and `localStorage` directly, which confirmed the app was fine and the screenshot tool was glitching.

## Gaps / limitations

- **Progress doesn't follow a student across devices.** Everything saves to `localStorage` — no accounts, which is good for privacy and zero setup, but a student switching between a phone and a laptop starts fresh on each.
- **Not an official resource.** Content is adapted from the real VCAA study design and exam papers, but this is an independent build with no VCAA endorsement — worth a standing disclaimer, not a one-time caveat.
- **No automated tests.** Every check in this build was a live browser interaction (clicks, form fills, DOM inspection). A future content change could regress something with nothing catching it automatically.
- **Exam Prep is necessarily forward-looking only.** Because Units 1 & 2 have no VCAA exam, there's no authentic "past paper" to build that section from for the actual units this site covers — it's honest about being a preview of what's next, not a rehearsal of what's already been tested.

## Opportunities unlocked

- The repo + Pages pipeline is live and already proven twice (soccer app, this one), so the next "add X" request goes prompt → commit → redeployed URL in one sitting.
- The Dashboard/Foundations/Units/Glossary/Quiz/Exam-Prep shape isn't specific to Art Creative Practice — it's a template. The same structure could carry a different VCE study, or a different kid's different gap.
- The artist research toolkit already has a print button; a natural next step is exporting it as something to paste directly into a visual diary or hand a teacher.
- "For my kids" is a bigger mandate than "for me" — if that's the direction this keeps going, the next real design question isn't more content, it's whether multiple kids need separate, private progress on the same device.
