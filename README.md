# Minimal portfolio

A compact dark portfolio built with Next.js App Router, React, TypeScript, and plain CSS. The homepage prioritizes projects and tech stack, with a compact profile, GitHub calendar, work history, education, and credentials. Projects' **View all** opens a separate `/projects` page with one project per row and three screenshot previews. Rows open a 40% images / 60% details modal. Clicking a screenshot opens an image slider over that modal, with Back/Next buttons and arrow-key navigation. Closing the slider returns to the project; closing the project returns to its row. Tech stack and credentials stay in **View all** modals. The desktop homepage uses one viewport of height at widths of 1100px or more and heights of 740px or more. Projects and Technologies share the remaining desktop height, with larger project previews and evenly spaced technology groups. Shorter desktop viewports use tighter spacing and keep project tools in the detail modal. Smaller screens stack content and scroll for readability.

## Run locally

Use Node.js 20.9 or newer.

```sh
npm install
npm run dev
```

Open http://localhost:3000. On Windows PowerShell, use `npm.cmd` if script execution policy blocks `npm`.

## Customize

- Edit `src/lib/portfolio.ts` for your name, initials, location, email, `techGroups`, experience, education, credentials, and project details. Personal details, technologies, projects, and credentials are placeholders; experience and education contain the supplied entries, GitHub is connected to `echo-riga`, and the role is Full Stack Developer.
- Name and location are set to Jericho Riga, Pasig, Philippines. LinkedIn is connected to the supplied profile; GitHub, LinkedIn, and email use accessible icon-only controls. The email address remains a placeholder until you replace it.
- The homepage shows up to two projects, grouped technologies, and two credentials. Projects' **View all** opens `/projects`; clicking a row or a homepage project opens its modal directly, with no extra **View details** step. Tech stack and credentials open large modals with the full collection.
- Add certification verification links to each credential's `url` field. Empty URLs display plain text. The supplied internship, ISITE, Java second-place, and HackerRank certificates link to their images in `public/credentials/`; achievements without matching images remain plain text.
- Set each project's `sourceUrl` to show **View source code** and `liveUrl` to show **Visit website**. Missing URLs hide those actions. Studio's **Visit website** opens its working, explicitly labeled sample site at `/demos/studio`. Replace it with your real deployed project URL when ready.
- Place screenshots in `public/projects/` and add `{ src: "/projects/your-image.png", alt: "A description of this view" }` to a project's `images` array. Add at least three images for a complete collection row. Its third image shows a **+** overlay, with the count of additional images when present. All images appear in the project modal and can be enlarged in the slider. The included SVG images are explicitly labeled sample previews, not screenshots of real projects.
- Edit each project's `description`, `brief`, `features`, `approach`, and `tools` for the **What it is**, **Features**, and **Implementation** sections.
- Edit `techGroups` for languages, frontend/mobile, backend, databases, AI/integrations, authentication, background processing, and tools/platforms. These contain the supplied stack. Background processing reflects LEAPRSv2's custom TypeScript upload queue, IndexedDB persistence, resumable uploads, and retry backoff. The homepage shows a compact selection; **View all** shows every category. Work history and education are separate, so ongoing study is not mistaken for a current job.
- Edit `src/app/globals.css` for colors, typography, and spacing. Edit `src/components/portfolio-modals.tsx` for modal content. Project detail artwork uses simple placeholder marks; replace `ProjectVisual` in `src/components/portfolio.tsx` with screenshots when ready.
- Replace `src/app/icon.svg` with your own favicon. Typography uses self-hosted Inter Variable with medium body text and semibold headings; no external font requests are required.
- The contact links open an email client. Set your real email before publishing; there is no contact-form backend.

## GitHub activity

`githubUsername` is set to `echo-riga`. The server fetches the public GitHub contribution calendar and caches it for one hour. No token or environment variables are required. A dark tooltip shows the contribution count and date on hover. Keyboard users can focus the calendar and inspect days with arrow keys; Escape dismisses the tooltip. This uses GitHub's public calendar HTML rather than a versioned API; if its markup changes or GitHub is unavailable, the site shows the dated saved snapshot in `src/lib/github-snapshot.json`. A different username will show an unavailable message if its live fetch fails, rather than another person's saved data.

## Verify

```sh
npm run typecheck
npm run build
```

## Deploy to Vercel

Push this folder to a GitHub, GitLab, or Bitbucket repository, then import it as a new project in Vercel. Select **Next.js** as the framework and keep the default build and output settings. No environment variables or extra Vercel configuration are required.

Official deployment guide: https://nextjs.org/docs/app/getting-started/deploying
