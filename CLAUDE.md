# Land2Sea Detailing Website

Winnipeg car detailing business. Est. 2020. Community-driven brand with car culture/drift scene roots.

## Pages
- `index.html` — homepage
- `about.html` — about us page
- `packages.html` — detailing packages
- `correction.html` — paint correction
- `book.html` — booking page
- `faq.html`, `privacy.html`, `service-area.html`, `404.html`
- `blog-community-review.html` — community review blog post

## Shared Nav/Banner Pattern (used on every page)
All pages use a **fixed wrapper div** that contains the promo banner + nav together, so the banner always sits above the nav:

```html
<div class="fixed top-0 w-full z-50">
  <div id="promoBanner" class="promo-banner ..."> ... </div>
  <script>/* dismiss logic */</script>
  <nav class="w-full glass-nav"> ... </nav>
</div>
```

- Nav height: `h-20` (80px)
- Promo banner: ~36-40px tall, dismissible via localStorage
- Hero sections use `pt-32` to clear the fixed nav+banner

## Styles
- Tailwind CSS via CDN (`https://cdn.tailwindcss.com`)
- Custom styles: `css/style.css`
- Font: Montserrat (Google Fonts)
- JS: `script.js` + `js/main.js`

## Brand Colors
- Blue: `text-blue-500` / `#3B82F6`
- Orange: `text-orange-500` / `bg-orange-600` / `#F97316`
- Dark background: `bg-slate-950` / `#0f172a`
- Card background: `bg-slate-800` / `#1e293b`

## Key CSS Classes
- `.glass-nav` — frosted glass nav background
- `.promo-banner` — orange gradient promo bar
- `.btn-shine` — shine animation on buttons
- `.reveal` / `.reveal.active` — scroll reveal animation
- `.float-btn` / `.float-btn.visible` — floating Book Now button (appears after 300px scroll)
- `.interactive-card` — hover lift effect on gallery cards
- `.accent-orange` — orange color for the "2" in LAND2SEA logo

## About Page Notes
- "Our Culture" button links to `blog-community-review.html`
- Gallery is 6 images (2 rows of 3): detail-1.JPG, detail-2.jpg, detail-3.JPG, wheel_pic.JPG, interior_clean.JPG, IMG_7390.jpeg
- Community pillars section has 4 cards: Car Culture, All Cars Welcome, Community First, Content & Entertainment

## Images (in /images/)
- `hero.webp`, `shop.webp`, `correction.webp`, `interior.webp`
- `detail-1.JPG`, `detail-2.jpg`, `detail-3.JPG`
- `wheel_pic.JPG`, `interior_clean.JPG`, `IMG_7390.jpeg`
- `process-video.mp4`, `mission-action (1).mp4`
- `test1.jpg`, `detail-2cops.JPG`, `complete3.JPG`
- `favicon.png`
