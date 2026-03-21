# Land2Sea Detailing — Claude Code Context

## What this is
Business website for Land2Sea Detailing, a car detailing company based in Winnipeg, MB.
Services: Interior resets, paint correction, ceramic coatings, decon washes.
Owner contact: kaidenadolf@gmail.com

## Live site
https://www.land2sea-detailing.com

## Stack
- Node.js/Express backend (server.js) — serves static files with clean URL routing
- Tailwind CSS via CDN (no build step)
- Custom CSS in `css/style.css` (design system, animations)
- FontAwesome 6 via CDN (icons)
- Vanilla JS only — no frameworks

## Deployment
- Hosted on Railway, auto-deploys on push to `main`
- Push to GitHub → Railway picks it up in ~1 min
- Config: `railway.toml` (NIXPACKS builder, `node server.js`)

## Startup (local)
```
node server.js
# Serves on http://localhost:3000
```

## File Map
```
server.js              — Express entry point, clean URL routing + 404
index.html             — Homepage (hero, about snippet, gallery, testimonials, CTA)
about.html             — Brand story, car culture, team/gallery
packages.html          — Service packages and pricing
correction.html        — Paint correction service detail page
book.html              — Booking page (JotForm embed)
faq.html               — FAQ accordion
service-area.html      — Service area map (Winnipeg, St. Adolphe, Île-des-Chênes)
blog-community-review.html — Blog/car culture post
privacy.html           — Privacy policy
404.html               — Custom 404 page
css/style.css          — PRIMARY stylesheet (design tokens, animations, components)
style.css              — Root-level duplicate (ignore, use css/style.css)
js/main.js             — PRIMARY JS (mobile menu, scroll reveal, active nav)
script.js              — Legacy slideshow JS (not used on main pages)
images/                — All site images (WebP preferred, some JPG/JPEG)
sitemap.xml            — XML sitemap (clean URLs, no .html)
robots.txt             — Crawler rules
```

## Design System (css/style.css)
```css
--l2s-blue: #3B82F6      /* Primary brand blue */
--l2s-orange: #F97316    /* Accent orange */
--glow-blue: rgba(59,130,246,0.5)
--glow-orange: rgba(249,115,22,0.5)
--dark-bg: #0f172a       /* Page background */
--card-bg: #1e293b       /* Card/section background */
```
Font: Montserrat (300, 400, 700, 900) via Google Fonts

## Key CSS Classes
- `.glass-nav` — Frosted glass nav
- `.interactive-card` — Glass card with hover glow
- `.btn-shine` — Button with shine effect on hover
- `.reveal` → `.reveal.active` — Scroll fade-in (driven by IntersectionObserver in js/main.js)
- `.float-btn` → `.float-btn.visible` — Floating "Book Now" button (appears after 300px scroll)
- `.img-zoom` — Image zoom on hover
- `.promo-banner` — Orange shimmer banner (dismissible via localStorage)
- `.accent-orange` — Orange text (used for "2" in LAND2SEA logo)

## Clean URL Rules
URLs have NO .html extension:
- `/` → index.html
- `/about` → about.html
- `/packages` → packages.html
- `/book` → book.html
- etc.
Visiting `/about.html` 301-redirects to `/about` automatically.
Internal links must NOT include .html.

## Absolute Rules
1. No build tools — static site only, no webpack/bundler/npm build
2. No hardcoded colors — use CSS variables from :root in css/style.css
3. No new CSS files — add styles to css/style.css
4. No new JS files — add JS to js/main.js
5. Mobile must work — test below 375px
6. Never add .html to internal hrefs
7. One H1 per page only
8. All img tags need alt attributes
