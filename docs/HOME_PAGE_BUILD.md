# HOME PAGE BUILD

This document defines the production build plan for the Hummingbird Sanctuaries homepage.

Before building, Claude must read:
- PROJECT_BIBLE.md
- SITE_ARCHITECTURE.md
- WEBSITE_AUDIT.md
- COMPONENT_SYSTEM.md
- ASSET_PLAN.md
- HOME_PAGE_PLAN.md
- HOME_PAGE_WIREFRAME.md
- HOME_PAGE_COPY.md
- DESIGN_TOKENS.md

---

# BUILD GOAL

Build a production-ready luxury nonprofit homepage.

The homepage must feel:
- cinematic
- premium
- emotional
- trustworthy
- spacious
- international
- human-centered

---

# REQUIRED FILES

Use:
- index.html
- style.css
- script.js

Do not put all CSS inside HTML.

---

# HOMEPAGE SECTION ORDER

1. Navigation
2. Hero
3. Impact Stats
4. Mission Intro
5. Programs Preview
6. Sanctuary Immersion
7. Stories
8. Trust / Transparency
9. Donation Experience
10. Partners
11. Final Emotional CTA
12. Footer

---

# HTML RULES

- Use semantic HTML.
- Use section elements.
- Use clear class names.
- Keep structure readable.
- Add accessibility labels where useful.
- Avoid unnecessary div nesting.

---

# CSS RULES

- Use CSS variables from DESIGN_TOKENS.md.
- Keep colors consistent.
- Use reusable classes.
- Build responsive layout.
- Use premium spacing.
- Avoid random one-off styling.
- Keep all main CSS in style.css.

---

# JAVASCRIPT RULES

Use script.js only for:
- mobile navigation
- scroll reveal
- subtle interactions

Do not overuse JavaScript.

---

# RESPONSIVE RULES

The homepage must look premium on:
- desktop
- tablet
- mobile

Mobile must feel:
- spacious
- readable
- cinematic
- easy to navigate

---

# ANIMATION RULES

Allowed:
- fade-in
- soft reveal
- hover lift
- subtle parallax
- smooth header transition

Forbidden:
- bouncing
- spinning
- flashy motion
- aggressive animations

---

# PLACEHOLDER ASSET RULE

Until final images/videos are purchased, use temporary high-quality placeholder images.

All placeholder assets must be easy to replace later.

Use clear comments like:
PLACEHOLDER HERO IMAGE
PLACEHOLDER STORY IMAGE

---

# SQUARESPACE TRANSFER RULE

The homepage must be built in a way that can later be split into:
- HTML sections for Code Blocks
- CSS for Custom CSS
- JavaScript for Code Injection Footer

---

# CLAUDE BUILD PROMPT

Use this prompt in Claude inside Cursor:

Read all documents in the docs folder before making changes.

Build the production-ready homepage for Hummingbird Sanctuaries using index.html, style.css, and script.js.

Follow PROJECT_BIBLE.md, COMPONENT_SYSTEM.md, DESIGN_TOKENS.md, HOME_PAGE_WIREFRAME.md, HOME_PAGE_COPY.md, and ASSET_PLAN.md.

The design must feel like a world-class cinematic humanitarian foundation website.

Create:
- premium navigation
- cinematic hero
- impact stats
- mission section
- programs grid
- sanctuary immersion section
- stories section
- trust/transparency section
- donation section
- partners strip
- final emotional CTA
- large premium footer

Use clean semantic HTML, responsive CSS, subtle animations, and maintain Squarespace transfer compatibility.

Do not create random colors, random layouts, or inconsistent components.

---

# FIRST BUILD CHECKLIST

After Claude builds, verify:
- index.html is not empty
- style.css contains full design system
- script.js only contains needed interactions
- homepage opens with Live Server
- mobile view works
- design follows the Project Bible
- donation CTA is visible
- page feels premium, not generic