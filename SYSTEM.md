# Richkem Services — Full System Analysis

Generated: Sept 10, 2026. Skill mode: **caveman** (dense, no fluff).

## 1. What this project IS

- Kenyan marketplace platform: **ecommerce + service discovery + business storefronts** in one.
- Name: **Richkem Services**. Currency: KES. Payments: **M-Pesa**.
- Goal: faster, clearer, more premium than Jumia/Jiji-type competitors.
- 3 user types: **Buyers**, **Merchants**, **Platform Admins**.
- Trust-first: escrow payments, KYC verification, dispute handling.
- Status: **front-end prototype**. Data is static PHP arrays. No live DB, no real auth, no real payments yet.

## 2. Stack

| Layer | Tech | Notes |
|-------|------|-------|
| Language | PHP 8+ (`strict_types` everywhere) | Plain PHP, no framework |
| Build | **Vite 6** | Bundles `resources/js/app.js` + `resources/css/app.css` → `assets/dist/` |
| JS libs | Lenis (smooth scroll), GSAP, Swiper, Splide | Only Lenis wired so far |
| CSS | Hand-rolled design system, 1,833 lines | oklch color tokens, custom easings |
| Fonts | Onest (Google Fonts) | 400–800 weights |
| DB | MySQL schema defined, **not connected** | `backend/database/schema.sql` |
| Server | PHP built-in dev via `router.php` | `php -S localhost:8000 router.php` |
| Tests | None | 0 detected |
| Auth | None | Pages only, no sessions/sessions logic |

## 3. Directory map

```
index.php                 → loads frontend/index.php
router.php                → dev router: /path → path.php, else 404
backend/
  config.php              → app name, contact, payments config
  bootstrap.php           → helpers + data load
  helpers.php             → richkem_page() layout fn, nav links, asset URLs
  layout.php              → master HTML shell (header/nav/footer)
  site-data.php           → ALL demo content (featured products, profiles, stats)
  routes/api.php          → 5 API routes
  api/                    → health, search, categories, profiles, dashboard-summary
  controllers/            → BaseController, SearchController
  services/               → CatalogService (search/filter logic)
  repositories/           → CatalogRepository (data source)
  validators/             → search.schema.php
  database/schema.sql     → 6-table MySQL schema
frontend/                 → 28 public pages (home, search, product, checkout, escrow, auth)
merchant/                 → 14 merchant pages (dashboard, KYC, inventory, orders, wallet, chat)
dashboard/                → 6 buyer pages (orders, escrows, inbox, chat, settings)
admin/                    → 8 admin pages (users, KYC queue, escrows, disputes, verifications)
includes/                 → second layout kit (header/footer/layout/bootstrap/site-data)
resources/
  css/app.css             → 1,833 lines, full design system
  js/app.js               → 153 lines: Lenis, reveals, tabs, filters, image fallbacks
assets/dist/              → built output (app.js 23.3 kB / app.css 25.8 kB)
```

**78 PHP pages/views total.**

## 4. Backend architecture

```
Request → router.php → backend/api/*.php
                        → Controller (SearchController)
                          → Service (CatalogService — business logic)
                            → Repository (CatalogRepository — data access)
```

- Clean layered pattern. Same discipline as Node/Express best practice — just in PHP.
- Data currently comes from `backend/site-data.php` (static arrays), not MySQL.
- `backend/database/schema.sql` is future-ready: users, merchants, products, services, orders, escrows.

## 5. Database schema (defined, not live)

| Table | Key columns |
|-------|-------------|
| users | name, email (unique), phone, password_hash, role (buyer default) |
| merchants | user_id, business_name, category, lat/lng, verified flag |
| products | merchant_id, title, slug, price, category, status (draft default) |
| services | merchant_id, title, price_from, location, availability JSON |
| orders | buyer_id, merchant_id, product_id, amount, status |
| escrows | order_id, amount, status (held default), released_at |

Gaps: no indexes beyond PKs/unique email, no FKs declared, no payments/transactions table, no reviews/messages/notifications tables.

## 6. Frontend system

- **Design tokens**: oklch colors, 4 radii, 2 shadows, 2 easings. Premium light theme.
- **Interactions**: Lenis smooth scroll, scroll-reveal via IntersectionObserver, tab groups, filter groups, mode switches, image error fallbacks (auto SVG placeholder).
- **Stagger system**: CSS `--stagger` var set per-child on 17 selector groups.
- **A11y**: aria-pressed/aria-selected toggles, semantic landmarks, reduced-motion support declared in PRODUCT.md.
- **Perf**: lazy images, async decode, defer script, single CSS/JS bundle. Gzip ~13 kB total.

## 7. Feature coverage by module

| Module | Pages | What exists | What's fake |
|--------|-------|-------------|-------------|
| Storefront | 28 | Home, search + map view, product detail (standard/vehicle/aviation/virtual tour), category, cart, checkout, payment success/fail, mpesa-waiting, profile, reviews, escrow emails | Cart/checkout/payment are UI-only |
| Merchant | 14 | Apply, KYC, dashboard, add product (2-step), inventory, services, orders, bookings, wallet, chat | No persistence, no real uploads |
| Buyer | 6 | Dashboard, orders, escrows, inbox, chat, settings | Same |
| Admin | 8 | Login, dashboard, users, user-detail, KYC queue, escrows, disputes, asset verifications | Same |
| API | 5 | health, search, categories, profiles, dashboard-summary | Search works over static data |
| Comms | 5 | Escrow locked/released emails, reset password email, contract + invoice + inspection PDFs | Static templates, PHP-native PDFs |

## 8. What's GOOD

1. Architecture is clean: helpers → layout → pages; controllers/services/repos.
2. Consistent escaping (`htmlspecialchars ENT_QUOTES`) in layout.
3. Design system is genuinely premium — oklch, tokens, easings, fallbacks.
4. All 3 user roles fully mocked end-to-end. Great for stakeholder demos.
5. Vite build is fast (222 ms) and output is tiny.
6. PRODUCT.md is strong product thinking (trust-first, anti-references).

## 9. What's BROKEN / MISSING (priority order)

| # | Issue | Severity |
|---|-------|----------|
| 1 | No real auth — login/register pages have no backend | 🔴 Blocker for launch |
| 2 | No DB connection — schema.sql never loaded | 🔴 Blocker |
| 3 | No M-Pesa integration — payment pages are mockups | 🔴 Blocker |
| 4 | No escrow engine — statuses hardcoded | 🔴 Blocker |
| 5 | No CSRF tokens, no sessions, no rate limiting | 🔴 Security |
| 6 | Dup layout systems: `backend/layout.php` AND `includes/` — drift risk | 🟠 Consolidate |
| 7 | No FKs/indexes in schema; no migrations tooling | 🟠 |
| 8 | Zero tests | 🟠 |
| 9 | Mixed responsibilities: pages query data directly via helpers | 🟡 |
| 10 | No file uploads (KYC docs, product images) | 🟡 |
| 11 | Hardcoded Unsplash images everywhere — replace with product media | 🟡 |
| 12 | No sitemap/SEO meta beyond title+description | 🟢 |

## 10. Run it

```bash
npm install          # if needed
npm run build        # vite → assets/dist
php -S localhost:8000 router.php
# open http://localhost:8000
```

## 11. Recommended build order (next 4 milestones)

1. **M1 — Real auth + DB**: load schema.sql, PDO connection, sessions, register/login/logout, role middleware.
2. **M2 — Catalog live**: merchants CRUD products, image uploads, real search over MySQL.
3. **M3 — Payments**: M-Pesa STK push (Daraja API), order lifecycle, escrow state machine (held → released/disputed).
4. **M4 — Admin trust tools**: KYC review workflow, dispute resolution, notifications (email/SMS).

## 12. Skills applied

See `SKILLS.md` — all 14 installed at `.agents/skills/`, each mapped to project files. caveman + security-auditor + ponytail were actively used for this analysis.
