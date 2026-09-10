# Richkem Services — Skill Registry (.agents)

14 skills installed from `bridgappwebsite/.agents` into this project's `.agents/skills/`. All 14 confirmed present on disk.

## Registry

| # | Skill | Purpose | Applied to Richkem |
|---|-------|---------|--------------------|
| 1 | **caveman** | Ultra-concise, high-density technical communication | This doc + all reporting (see bottom) |
| 2 | **database-design** | Relational DB design, schemas, indexing, migrations | `backend/database/schema.sql` — 6 tables (users, merchants, products, services, orders, escrows) |
| 3 | **frontend-design** | Layout hierarchy, visual balance, color theory, responsive systems | `resources/css/app.css` (1,833 lines, oklch tokens) |
| 4 | **frontend-dev-guidelines** | Coding standards, WCAG 2.1 AA, DOM perf | PRODUCT.md mandates WCAG AA; app.js uses `aria-pressed`/`aria-selected` correctly |
| 5 | **frontend-developer** | HTML5/CSS3/ES6+, GSAP animations, browser APIs | `resources/js/app.js` — Lenis smooth scroll, IntersectionObserver reveals, SVG image fallbacks |
| 6 | **high-end-visual-design** | Premium aesthetics, glassmorphism, gradients, micro-interactions | Radial-gradient backgrounds, layered shadows, custom easings (`--ease-out-expo`) |
| 7 | **mobile-design** | Mobile-first UX, touch targets, viewport perf | 78 PHP pages render mobile-first; viewport meta in `backend/layout.php` |
| 8 | **nextjs-app-router-patterns** | Next.js App Router, Server/Client Components | ⚠️ NOT APPLICABLE — project is PHP + Vite, not Next.js. Kept for future migration. |
| 9 | **nodejs-backend-patterns** | Node.js architecture, Express/Fastify, REST design | ⚠️ PARTIAL — backend is PHP, but API layer (`backend/api/*.php`, controllers→services→repositories) mirrors the same layered pattern |
| 10 | **performance-engineer** | Core Web Vitals, compression, lazy loading, caching | app.js lazy-loads images, async decoding; Vite bundles to `assets/dist` |
| 11 | **ponytail** | Pragmatic software design & architecture | Matches existing structure: routes → controllers → services → repositories |
| 12 | **product-design** | UX strategy, conversion optimization, journey mapping | `PRODUCT.md` defines buyers/merchants/admins, trust-first principles |
| 13 | **redesign-existing-projects** | Modernizing legacy codebases, design system upgrades | Project IS a redesign — premium oklch system replaces generic marketplace look |
| 14 | **security-auditor** | OWASP Top 10, SQLi, CSRF, XSS, hardening | Output escaping via `htmlspecialchars(ENT_QUOTES)` throughout layout; no DB credentials in repo |

## Skill-to-file map

```
.agents/skills/caveman/                    → docs/reports
.agents/skills/database-design/            → backend/database/schema.sql
.agents/skills/frontend-design/            → resources/css/app.css
.agents/skills/frontend-dev-guidelines/    → PRODUCT.md (accessibility section)
.agents/skills/frontend-developer/         → resources/js/app.js (153 lines)
.agents/skills/high-end-visual-design/     → resources/css/app.css (tokens/brand)
.agents/skills/mobile-design/              → backend/layout.php (viewport, responsive)
.agents/skills/nextjs-app-router-patterns/ → (N/A — future Next.js migration)
.agents/skills/nodejs-backend-patterns/    → backend/api/ + controllers/services/repositories
.agents/skills/performance-engineer/       → vite.config.js + app.js (lazy loading)
.agents/skills/ponytail/                   → backend/ layered architecture
.agents/skills/product-design/             → PRODUCT.md
.agents/skills/redesign-existing-projects/ → whole frontend/
.agents/skills/security-auditor/           → escaping in backend/layout.php, backend/helpers.php
```

## How to use these skills
Agents/tools that support `.agents/skills/` auto-load them from this directory. To reuse elsewhere:
```powershell
Copy-Item -Recurse "c:\Users\lewis\Desktop\bridgappwebsite\.agents" -Destination "C:\Path\To\OtherProject\.agents"
```

## Caveman mode (skill #1) — active for all reporting
Rules followed in this project:
- Short sentences. No filler.
- High information density.
- Tables and lists over paragraphs.
- Code over prose when it explains.
- Skip pleasantries. State facts.
