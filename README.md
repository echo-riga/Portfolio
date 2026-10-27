# Jericho Riga's Portfolio

A personal portfolio built with Next.js App Router, React, TypeScript, and CSS. It presents projects, technologies, work experience, education, credentials, and public GitHub activity in a compact dark interface with self-hosted Inter typography.

## Features

- Desktop overview with profile and contact links, featured projects, technologies, experience, GitHub activity, and credentials.
- A separate /projects page with project rows and detail dialogs.
- Project dialogs with a 40% image / 60% detail layout on wide screens; screenshots open a larger slider with keyboard navigation.
- Technology and credential dialogs for the complete collections.
- Responsive layouts that allow smaller screens to scroll while keeping text and controls readable.
- Public GitHub contribution calendar with keyboard controls and a saved fallback snapshot.

## Run locally

Use Node.js 20.9 or newer and npm.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. On Windows PowerShell, use npm.cmd if execution policy blocks npm.

## Content and source

| Path | Purpose |
| --- | --- |
| [src/lib/portfolio.ts](src/lib/portfolio.ts) | Profile, links, projects, technologies, experience, education, and credentials |
| [src/components](src/components) | Overview, project views, and dialogs |
| [src/app/globals.css](src/app/globals.css) | Theme, typography, spacing, and responsive layouts |
| [public/projects](public/projects) | Project screenshots |
| [public/credentials](public/credentials) | Credential evidence |
| [src/lib/github.ts](src/lib/github.ts) | GitHub calendar fetching and fallback behavior |
| [src/app/icon.svg](src/app/icon.svg) | Favicon |

Set each project's sourceUrl and liveUrl to enable its source and website links. Empty URLs hide those actions. Add screenshots through each project's images array with descriptive alt text. Credential URLs link to their supporting evidence.

The profile currently uses hello@example.com; replace it before using the contact link. Some project entries explicitly await fuller details. The sample page at /demos/studio remains in the source tree, separate from the current project collection.

## GitHub activity

The calendar uses the public contribution HTML for echo-riga and caches successful fetches for one hour. No token or environment variables are required. If GitHub is unavailable or changes its markup, the site uses the dated [saved snapshot](src/lib/github-snapshot.json). A different username does not inherit that fallback data.

## Verify and build

```sh
npm run typecheck
npm run build
npm start
```

## Deployment

Import the repository into Vercel as a Next.js project, or use a Node.js host that runs npm run build followed by npm start. The GitHub calendar requires outbound access for live data. No application environment variables are required.
