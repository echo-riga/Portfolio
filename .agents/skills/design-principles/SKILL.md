---
name: design-principles
description: Apply the user's reusable UI principles and portfolio-specific layout and content preferences when refining this project.
---

# Portfolio design guidance

## Shared principles

For UI work, read and apply [ui-design.md](../../../public/skills/ui-design.md). It is the source of truth for concise content, immediate understanding, familiar patterns, visual comfort, accessibility, and independent judgment.

For backend decisions, read and apply [backend-approach.md](../../../public/skills/backend-approach.md). It covers requirements, feasibility, justified tool choices, failure handling, and operational handoff.

Keep those public skills self-contained and reusable across projects. Do not copy their detailed instructions here or encode portfolio layouts, LEAPRS workflows, particular services, or framework assumptions into them. This file supplies only this portfolio's application of the shared principles. Later explicit user instructions take precedence.

## Portfolio content and hierarchy

- Prioritize projects, credentials, and technical capabilities. Keep experience and GitHub activity compact without sacrificing readability.
- Keep profile details and recognizable contact icons together. Preserve the dark theme and consistent Inter typography.
- Make personal background secondary: a quiet About me control opens a small, content-sized dialog with a first-principles introduction and a transition to the Skills MDs project.
- Give the Skills MDs project a concise overview and links to the actual UI and backend files. Do not repeat those files' contents in the project dialog.
- Keep the main tech stack selective: show central technologies actually used, and place supporting libraries or implementation techniques in project details. A valid addition is not automatically necessary. Distinguish technologies from custom features and avoid unsupported claims.

## Layout and navigation

- Keep a readable desktop overview with the footer at the bottom where practical. Allow scrolling on narrow screens, short viewports, zoomed views, or longer content instead of shrinking text or clipping content.
- Projects' View full opens /projects. Each collection row opens a project dialog; projects with screenshots use roughly 40% image space and 60% detail space. Image clicks open a larger slider with Back and Next controls.
- Tech stack and credentials use View all dialogs. Apply the shared dialog accessibility and sizing guidance; short content should not inherit a full-height layout.
- Closing the image viewer returns focus to its image control; closing a project returns focus to its opener.

Before finishing, check that a viewer can identify the person, assess the work, and find the next action without instructions. Verify relevant states with available tools and report visual verification limits honestly.
