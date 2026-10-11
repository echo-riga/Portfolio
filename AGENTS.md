# Portfolio agent instructions

For UI design, layout, typography, navigation, and user-facing copy changes, read and apply [design-principles](.agents/skills/design-principles/SKILL.md).

Preserve the user's design principles:

- Don't state what's implied.
- Don't make me think.
- Follow established design patterns.
- Make the interface comfortable to look at and use, like physical ergonomics.

For this portfolio, prioritize a readable desktop overview: profile and contact icons together, projects and tech stack as the main content, compact experience and GitHub activity, and clearly readable credentials. Keep the dark theme and consistent Inter typography. Let smaller screens scroll when necessary to preserve readability and usable controls.

These preferences guide design choices; later explicit user instructions take precedence.

Keep the homepage compact. Projects' "View all" opens `/projects`, where each row opens a project modal with 40% image space and 60% detail space. Clicking an image opens a larger image slider over that modal. Tech stack and credentials continue to use "View all" modals.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
