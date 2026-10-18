---
name: design-principles
description: Apply the user's brand, presentation, layout, and content preferences when refining this portfolio.
---

# Portfolio design guidance

Preserve the design already established in the repository. Inspect the current components and `src/app/globals.css` before changing UI; they are the source of truth when this guidance and the implementation differ. Later explicit user instructions take precedence.

## Character and visual system

- Treat the site as a personal, brand-led professional portfolio—not a product app or admin dashboard. Its compact overview is a presentation choice, not a cue to introduce SaaS styling or application chrome.
- Keep the character minimal, technical, calm, and precise. Favor strong hierarchy, real project imagery, and restrained details over decorative spectacle or generic portfolio effects.
- Preserve the near-black background, charcoal panels, fine gray borders, warm white text, muted gray secondary text, and desaturated sage accent defined by the existing CSS variables. Avoid gradients, loud accent colors, glass effects, oversized shadows, and ornamental backgrounds unless explicitly requested.
- Use Inter Variable throughout. Headings are compact and semibold with slightly tight tracking; supporting text is quieter but remains comfortably readable.
- Keep surfaces restrained: thin borders, modest corner radii, compact padding, and subtle color changes on hover. Reserve the deeper shadow and blurred backdrop for layered dialogs.
- Motion stays quiet and functional: short color and border transitions, no ambient animation, and no required motion when reduced motion is preferred.

## Portfolio content and hierarchy

- Keep the homepage as a fast professional overview. A viewer should immediately find the name, role, location, contact links, current experience, GitHub activity, featured work, technologies, and strongest credentials.
- Keep identity and recognizable contact icons together at the top. About me remains a quiet secondary control that opens a small, content-sized dialog with a concise personal introduction.
- Projects and technologies are the main body of the page. Experience and GitHub activity remain compact supporting evidence; credentials form a clear full-width section below the main work area.
- Feature the first two projects on the homepage with a preview image, short outcome-oriented summary, and only a few representative tools. Keep the project count visible and route View all to `/projects`.
- Keep the homepage technology list selective: three core groups with a few skills and a `+N` remainder. The full technology dialog may show every group.
- Show two credentials on the homepage and place the complete list in its View all dialog. Credential names that have evidence should link directly to it.
- Keep copy concise, factual, and specific. Use sentence case. Separate what a project is, its features, and its implementation; do not turn technical mechanisms into marketing claims or list unsupported capabilities.

## Layout and navigation

- Preserve the centered 1200px maximum-width composition and its asymmetric desktop columns: the left side is slightly wider for identity, activity, and projects; the right side supports experience and technologies.
- On large, sufficiently tall screens, keep the complete homepage overview within the viewport when practical. Compress spacing selectively on shorter desktops. On tablets, narrow screens, zoomed views, and longer content, allow natural vertical scrolling instead of shrinking text or clipping controls.
- At mobile widths, stack the overview, project/technology areas, credentials, project rows, and project-dialog columns into a readable single-column flow. Project previews may move above their copy on the narrowest screens.
- Keep the footer quiet and pushed to the bottom when content is shorter than the viewport.
- Projects' View all opens `/projects`. Each project is a single familiar row with category/year, title, description, tools, up to three previews, and a restrained open indicator. Text-only projects use the same hierarchy without an empty image area.
- Opening a project uses a native dialog. Projects with screenshots use roughly 40% image space and 60% detail space on wide screens; the image panel stays visible while long details scroll. Text-only projects use a compact, content-led dialog.
- Clicking a project image opens a larger lightbox above the project dialog. Keep the image contained, show its description and position, support Arrow Left/Right, and use explicit Back and Next controls with disabled endpoints.
- Technology and credential View all actions use content-sized native dialogs. Do not force short collections or About me into a full-height modal.

## Interaction and accessibility

- Preserve the visible skip link, semantic section headings, descriptive image text, keyboard focus rings, and sufficiently large contact and dialog controls.
- Use links for navigation and external destinations; use buttons for dialogs and local interaction. Keep familiar labels such as About me, View all, Back, Next, and Close.
- Native dialogs should close with their close control, Escape, or a click outside the dialog surface. Prevent the page behind them from scrolling.
- Move focus into an opened dialog. Closing the image lightbox returns focus to the exact image control that opened it; closing a portfolio dialog returns focus to its trigger.
- GitHub activity remains a compact full-year contribution grid with keyboard navigation, a readable tooltip, a textual total, and a useful unavailable state.

Before finishing, verify desktop, short-viewport, tablet, and mobile behavior where relevant. Check that the person, strongest work, evidence, and next action are understandable without instructions, and report any visual verification limits honestly.
