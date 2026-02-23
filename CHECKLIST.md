# APEX QUANTS LLP — Website Build Checklist

### All Sections (Post-Hero)

---

## HOW TO USE THIS CHECKLIST

* Work **one section per session** with your AI coder
* Start each session by pasting the **Master Prompt v1.0** first, then the specific section spec below
* Mark `[x]` when each item is done and reviewed on localhost
* Each section should be committed to git before moving to the next

---

## ✅ SECTION 1 — HERO

> *See Master Prompt v1.0 — already specified in full*

* [ ] Nav with logo, links, CTA button
* [ ] Hero copy (eyebrow, H1, subhead, CTA buttons)
* [ ] Background (CSS gradient + dot grid OR Antigravity image)
* [ ] Particle canvas animation
* [ ] Load animation sequence (staggered)
* [ ] Brand divider `——— ✦ ———`
* [ ] Stat strip with animated counters
* [ ] Fully responsive (mobile, tablet, desktop)
* [ ] `prefers-reduced-motion` fallback
* [ ] SEO meta in BaseLayout.astro

---

## 📋 SECTION 2 — ABOUT / WHO WE ARE

**Component:** `About.astro`

**Placement:** Immediately after Hero

**Purpose:** Establish firm identity, quant credibility, and EEAT authority

### Layout

Two-column on desktop: **Left column** = large section number + heading + body copy | **Right column** = AI-generated abstract image OR a minimal animated visual (e.g. slowly rotating geometric shape in neon green CSS)

### Checklist

* [ ] Section label: `◆ ABOUT THE FIRM` (monospace, neon green, small caps)
* [ ] Headline: *"Built at the Intersection of Quantitative Finance and Engineering Excellence"*
* [ ] Body copy: 3 paragraphs from the improved copy in Master Prompt
* [ ] Large decorative number `01` in top-left of section (very large, `#1A1A1A` color — subtle)
* [ ] Right column: Antigravity image OR CSS animated geometric (neon green triangle/hexagon slowly rotating)
* [ ] Antigravity prompt: *"dark abstract precision engineering visualization, geometric grid structures, subtle neon green luminescence, pure black background, architectural technical mood, no text"*
* [ ] Brand divider at section bottom
* [ ] Scroll-triggered fade-up animation on text block
* [ ] Responsive: stacks to single column on mobile, image goes below text

### Copy Notes

* First paragraph must mention: hedge funds, fintech, capital markets — for EEAT
* Second paragraph: mention "mathematical precision" and "microseconds" — quant signals
* Third paragraph: list client types explicitly

---

## 📋 SECTION 3 — CORE TECHNOLOGY SERVICES

**Component:** `TechServices.astro`

**Placement:** After About

**Purpose:** Showcase tech stack breadth — speaks to enterprise/startup clients

### Layout

Heading block (full width) → 2×3 or 3×2 grid of service cards on desktop, 1-col on mobile. Each card: icon (line style, neon green) + service name (neon green) + 2-line description (white).

### Checklist

* [ ] Section label: `◆ CORE TECHNOLOGY` (monospace, neon green)
* [ ] Section number: `02` (decorative, dark)
* [ ] Headline: *"Full-Stack Engineering for the Demands of Modern Finance"*
* [ ] Subheadline (intro paragraph, max 2 lines)
* [ ] 7 service cards — all from improved copy in Master Prompt:
  * [ ] Custom Application Development
  * [ ] SaaS & Multi-Tenant Architecture
  * [ ] API & Microservices Engineering
  * [ ] Cloud & DevOps Automation
  * [ ] AI & Machine Learning Systems
  * [ ] Data & Enterprise Engineering
  * [ ] Cybersecurity & Compliance Engineering
* [ ] Card structure: `border: 1px solid #1A1A1A` | `background: #0D0D0D` | `padding: 2rem` | hover → border color shifts to `#A8FF00` + very subtle neon green glow `box-shadow`
* [ ] Each card has a relevant line icon (Heroicons or Lucide — neon green fill)
* [ ] Cards stagger fade-up on IntersectionObserver (0.1s delay between each)
* [ ] No hover border-radius change — keep sharp corners throughout
* [ ] Brand divider at section bottom
* [ ] Responsive: 3-col → 2-col → 1-col

### Icon Mapping (use Lucide or Heroicons)

| Service             | Icon           |
| ------------------- | -------------- |
| Custom App Dev      | `code-2`     |
| SaaS Architecture   | `layers`     |
| API & Microservices | `git-branch` |
| Cloud & DevOps      | `cloud`      |
| AI & ML             | `cpu`        |
| Data Engineering    | `database`   |
| Cybersecurity       | `shield`     |

---

## 📋 SECTION 4 — QUANTITATIVE & FINANCIAL ENGINEERING

**Component:** `QuantServices.astro`

**Placement:** After Core Tech

**Purpose:** The differentiator section — where Apex stands apart from generic dev shops

### Layout

**Different visual treatment from Section 3** — this should feel more premium, more "quant desk." Use a numbered list format (`01.` `02.` etc.) instead of cards. Left: large number + service name | Right: description. Full-width single column, generously spaced.

### Checklist

* [ ] Section label: `◆ QUANTITATIVE ENGINEERING` (monospace, neon green)
* [ ] Section number: `03` (decorative, dark)
* [ ] Headline: *"Institutional-Grade Quantitative Infrastructure"*
* [ ] Intro paragraph (2 lines max)
* [ ] 7 services in numbered list format — all from improved copy in Master Prompt:
  * [ ] `01` — Algorithmic Trading Development
  * [ ] `02` — High-Frequency & Low-Latency Architecture
  * [ ] `03` — Quantitative Research & Signal Development
  * [ ] `04` — Statistical Arbitrage & Market Neutrality
  * [ ] `05` — Portfolio Construction & Risk Modelling
  * [ ] `06` — Execution Algorithms
  * [ ] `07` — Market Analysis & Forecasting
* [ ] Number: `Syne 900`, very large (`4rem`), neon green, low opacity (`0.4`) — decorative
* [ ] Service name: `Syne 700`, white, `1.25rem`
* [ ] Description: `DM Sans`, `#CCCCCC`, `1rem`
* [ ] Thin neon green horizontal rule between each item
* [ ] Antigravity image (full-width or right-aligned): *"dark financial market data visualization, candlestick chart patterns and algorithmic waveforms as glowing green lines on pure black, terminal aesthetic, cinematic lighting, no text"* — place as a full-bleed band either above or below the list
* [ ] Scroll-triggered: each row slides in from left, staggered 0.1s
* [ ] Brand divider at section bottom
* [ ] Responsive: numbers shrink, layout stays single-column

### Key Requirement

This section **must** use the technical quant terms: TWAP, VWAP, VaR, CVaR, Monte Carlo, HMM, Alpha, Regime Detection — these are EEAT signals that build authority with search engines and instantly signal expertise to professional clients.

---

## 📋 SECTION 5 — WHY PARTNER WITH US

**Component:** `WhyUs.astro`

**Placement:** After Quant Services

**Purpose:** Overcome objections, reinforce differentiation, build trust

### Layout

2×2 grid of "pillar" blocks. Each pillar: large neon green icon + bold heading + paragraph. Clean, spacious, no card borders — just whitespace doing the work.

### Checklist

* [ ] Section label: `◆ WHY APEX QUANTS`
* [ ] Section number: `04` (decorative, dark)
* [ ] Headline: *"Why Leading Firms Choose APEX QUANTS LLP"*
* [ ] 4 pillars from improved copy:
  * [ ] Quant-Native Expertise
  * [ ] Security-First Architecture
  * [ ] Cloud-Native Scalability
  * [ ] Automation-Driven Efficiency
* [ ] Each pillar: icon (large, `3rem`, neon green) + heading (white, Syne 700) + body (`#CCCCCC`, DM Sans)
* [ ] Background: `#0D0D0D` (slight lift from pure black — visual breathing room)
* [ ] No card borders — whitespace is the separator
* [ ] Subtle neon green glow dot/accent near section heading
* [ ] Scroll animation: 2×2 grid items fade up, top row first then bottom row (0.2s stagger)
* [ ] Brand divider at section bottom
* [ ] Responsive: 2×2 → 1×4 on mobile

---

## 📋 SECTION 6 — INDUSTRIES WE SERVE

**Component:** `Industries.astro`

**Placement:** After Why Us

**Purpose:** Quickly communicate client types — helps prospects self-identify

### Layout

Horizontal scrolling tag/badge row OR a simple 3-col icon + label grid. Keep this section compact — it shouldn't compete with the services sections for attention. Max height `300px` on desktop.

### Checklist

* [ ] Section label: `◆ INDUSTRIES SERVED`
* [ ] Section number: `05` (decorative)
* [ ] Headline: *"Engineering for the Firms That Cannot Afford to Fail"* (one line)
* [ ] 6 industry badges/tiles:
  * [ ] Hedge Funds & Prop Trading Desks
  * [ ] Fintech Startups & Scaleups
  * [ ] Asset Management Firms
  * [ ] Crypto & Digital Asset Platforms
  * [ ] Enterprise Financial Institutions
  * [ ] Quantitative Research Labs
* [ ] Each tile: small relevant icon (neon green) + label (white, Syne SemiBold)
* [ ] Tile style: `border: 1px solid #2A2A2A`, `background: transparent`, `padding: 1.25rem 1.75rem`
* [ ] Hover: border → neon green, background → `#0D0D0D`
* [ ] Fade-in animation on scroll
* [ ] Responsive: wraps naturally, min 2 per row on mobile

---

## 📋 SECTION 7 — SOCIAL PROOF / TRUST SIGNALS

**Component:** `TrustSignals.astro`

**Placement:** After Industries

**Purpose:** Build credibility — most important trust-building section for B2B

### Layout

Top: 2–3 testimonial quotes (large quote mark, italic, author info below) | Bottom: technology/partner logos row (AWS, GCP, Azure, etc.)

### Checklist

* [ ] Section label: `◆ TRUSTED BY`
* [ ] Section number: `06` (decorative)
* [ ] Headline: *"Trusted by Operators Who Cannot Afford to Be Wrong"*
* [ ] 2–3 testimonial cards (use placeholder copy from Master Prompt until real quotes available):
  * [ ] Large neon green quotation mark `"` as decorative element
  * [ ] Quote text: white, italic, `DM Sans`, `1.125rem`
  * [ ] Author: neon green name + white title/firm, `JetBrains Mono` for firm name
  * [ ] Card: `border-left: 3px solid #A8FF00` (the brand's signature left-border treatment)
  * [ ] Background: `#0D0D0D`
* [ ] **Add a placeholder banner:** `"Real client testimonials coming soon — references available upon engagement"` — honest, professional
* [ ] Tech stack / partner logos strip below testimonials:
  * [ ] AWS, Google Cloud, Microsoft Azure logos (white/monochrome versions)
  * [ ] Row label: `INFRASTRUCTURE PARTNERS` (mono, small, `#CCCCCC`)
  * [ ] Very subtle separator line above logos
* [ ] Stat callout bar (repeat 1–2 key stats from Hero for reinforcement):
  * [ ] `50+ Systems Architected` | `99.9% Uptime Delivered` | `<5ms Latency Benchmarks`
* [ ] Fade animation on scroll
* [ ] Responsive: testimonials stack on mobile, logo row wraps

---

## 📋 SECTION 8 — CONTACT / FINAL CTA

**Component:** `Contact.astro`

**Placement:** Second to last, before footer

**Purpose:** Convert — primary conversion point of the page

### Layout

Full-width dark section. Left: headline + body copy + contact details | Right: simple contact form (Name, Company, Email, Message, Submit). Background: very subtle Antigravity image at `opacity: 0.08`.

### Checklist

* [ ] Section label: `◆ GET IN TOUCH`
* [ ] Section number: `07` (decorative)
* [ ] Headline: *"Let's Architect Your Next System"*
* [ ] Body copy: 2 paragraphs from improved copy in Master Prompt
* [ ] Contact details block:
  * [ ] Website: `www.apexquants.com` (neon green link)
  * [ ] Email: `info@apexquants.com` (neon green link, `mailto:`)
  * [ ] Phone: `+91 986-772-4923` (white)
  * [ ] Icons: use Lucide `globe`, `mail`, `phone` (neon green, `1.125rem`)
* [ ] Contact form:
  * [ ] Fields: Name | Company | Email | Message (textarea)
  * [ ] Field style: `background: #0D0D0D`, `border: 1px solid #2A2A2A`, white text, `padding: 0.875rem 1rem`
  * [ ] Focus state: border → `#A8FF00`, subtle neon glow `box-shadow`
  * [ ] Submit button: black text on neon green background, full width, `font-weight: 700`, no border-radius
  * [ ] Button hover: background → `#C8FF40`
  * [ ] Form action: Netlify Forms (`netlify` attribute) OR Formspree endpoint — add as comment placeholder
  * [ ] No native browser validation styling — custom CSS
* [ ] Antigravity bg prompt: *"minimal dark abstract, single glowing neon green geometric form, vast black negative space, ultra clean luxury technology, no text"*
* [ ] Responsive: stacks to single column, form below copy on mobile

---

## 📋 SECTION 9 — FOOTER

**Component:** `Footer.astro`

**Placement:** Last element

**Purpose:** Navigation, legal, brand reinforcement

### Checklist

* [ ] Logo mark + `APEX QUANTS LLP` wordmark (top left)
* [ ] Tagline below logo: *"Crafting Code. Engineering Excellence. Elevating Businesses."* (`#CCCCCC`, small)
* [ ] 3-column footer links:
  * [ ] **Services:** Core Technology | Quantitative Engineering | AI & ML | Cloud & DevOps
  * [ ] **Company:** About | Why Us | Industries | Contact
  * [ ] **Connect:** `info@apexquants.com` | `+91 986-772-4923` | LinkedIn (if applicable)
* [ ] Column headings: `Syne 700`, neon green, small caps, `0.75rem`
* [ ] Links: white, `DM Sans`, `0.875rem`, hover → neon green
* [ ] Brand divider `——— ✦ ———` above copyright line
* [ ] Copyright: `© 2025 APEX QUANTS LLP. All Rights Reserved.` (`#CCCCCC`, mono, `0.75rem`)
* [ ] Background: `#050505` (very slightly lighter than pure black for visual separation)
* [ ] Responsive: 3-col → 1-col stack, logo centered on mobile

---

## GLOBAL ITEMS (Done once, used everywhere)

* [ ] `BrandDivider.astro` — reusable `——— ✦ ———` component with props for color (default neon green)
* [ ] `global.css` — all CSS custom properties, reset, base typography, scrollbar styling (dark, neon green thumb)
* [ ] `BaseLayout.astro` — font imports, SEO meta, canonical URL, OG tags, favicon
* [ ] Custom scrollbar: `scrollbar-color: #A8FF00 #0D0D0D` (Firefox) + webkit pseudo-elements
* [ ] Smooth scroll: `scroll-behavior: smooth` on `html`
* [ ] Page transition: optional — very subtle opacity fade between sections on initial load (CSS only, no JS library needed)
* [ ] 404 page: `404.astro` — on-brand, dark, neon green, with "Return Home" CTA

---

## BUILD ORDER (Recommended Session Sequence)

| Session | Build                                                 | Est. Time |
| ------- | ----------------------------------------------------- | --------- |
| 1       | Hero + Nav + BaseLayout + global.css                  | ~45 min   |
| 2       | About + BrandDivider component                        | ~20 min   |
| 3       | Core Technology Services (cards)                      | ~25 min   |
| 4       | Quant & Financial Engineering (numbered list)         | ~25 min   |
| 5       | Why Partner + Industries                              | ~20 min   |
| 6       | Trust Signals + testimonials                          | ~25 min   |
| 7       | Contact form + Footer                                 | ~30 min   |
| 8       | Final review: animations, responsiveness, performance | ~30 min   |
| 9       | Deploy to Vercel/Netlify + domain connect             | ~15 min   |

---

*End of Section Checklist — APEX QUANTS LLP*
