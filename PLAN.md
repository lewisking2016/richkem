# Richkem Services — Rebuild Blueprint

Stack locked: **Next.js 15 + NestJS 11 + PostgreSQL 16 + Prisma + Redis + M-Pesa Daraja**. Hosting: **VPS (cPanel accessible)**. Full redesign. Caveman mode.

---

## 1. Why this architecture holds 100,000+ users

| Concern | Answer |
|---|---|
| Stateless API | NestJS behind Nginx reverse proxy. Need more power? Launch 2nd container, same Postgres. Horizontal scaling ready |
| DB | Postgres on same VPS (or managed later). Connection pooling via Prisma. 100k users ≠ 100k concurrent — realistic peak ~5k concurrent, Postgres on a 4-8GB VPS handles that easily with proper indexes |
| Sessions/state | Stateless JWT (15 min access + 7 day refresh rotation) — no server-side session store to scale |
| Hot data | Redis: search cache (60s), category trees (1h), merchant storefronts (5min), rate-limit counters, M-Pesa idempotency keys |
| Uploads | Local disk via Nginx static serve now, S3-compatible (MinIO on VPS) later — one config flag |
| Realtime (phase 2 chat) | Socket.IO inside NestJS gateway, Redis adapter → scales across instances |

**Bottleneck truth:** the VPS (RAM/CPU) is the ceiling, not the stack. This stack runs Rapido-style load on a 4 vCPU / 8GB box.

## 2. Monorepo layout (single git repo)

```
richkem/
  apps/
    web/        Next.js 15 (App Router, RSC, TS)
    api/        NestJS 11 (REST /v1, OpenAPI, TS)
  packages/
    db/         Prisma schema + migrations + seed
    shared/     Zod schemas, types, KES money utils, M-Pesa types
    ui/         NEW design system (react, tailwind v4, tokens)
  docker-compose.yml   postgres + redis (+ api, web for prod)
  .github/workflows/ci.yml
  PLAN.md  README.md
```

pnpm workspaces. Turbo for build orchestration. One deploy = one VPS box.

## 3. Database v2 (Postgres/Prisma) — the money is in the ledger

Schema v2 fixes v1's gaps: FKs, indexes, **ledger-style escrow** (never mutate balances; every money movement is an immutable row), audit trail.

Core models:

```
User(id, name, email UQ, phone UQ, passwordHash, role[BUYER|SELLER|ADMIN], status, kycStatus, twoFactorEnabled)
KycDocument(id, userId, type, fileKey, status[PENDING|APPROVED|REJECTED], reviewerId?, rejectionReason?, timestamps)
MerchantProfile(id, userId UQ, businessName, slug UQ, category, description, lat, lng, verified, rating?)
Category(id, name, slug UQ, parentId? → Category, kind[PRODUCT|SERVICE])
Product(id, merchantId, categoryId, title, slug, description, priceKes BigInt, compareAtKes?, status[DRAFT|ACTIVE|SUSPENDED|ARCHIVED], stock, kind[STANDARD|VEHICLE|AVIATION_MARINE|VIRTUAL_TOUR], timestamps)
ProductImage(id, productId, fileKey, sortOrder)
Service(id, merchantId, categoryId, title, description, priceFromKes?, location, availability Jsonb)
Order(id, ref UQ, buyerId, merchantId, status, subtotalKes, feeKes, totalKes, timestamps)
OrderItem(id, orderId, productId?, serviceId?, qty, unitPriceKes, titleSnapshot)
Payment(id, orderId, provider[MPESA], phone, amountKes, status[PENDING|SUCCESS|FAILED], checkoutRequestId UQ?, merchantRequestId?, timestamps)
EscrowLedger(id, orderId, entryType[HOLD|RELEASE|REFUND|FEE], amountKes, balanceAfterKes, ref, createdAt)  -- APPEND-ONLY
Dispute(id, orderId, openedBy, reason, status[OPEN|UNDER_REVIEW|RESOLVED_BUYER|RESOLVED_MERCHANT], resolutionNote?, timestamps)
Review(id, orderId UQ, buyerId, merchantId, rating 1-5, comment?, timestamps)
MessageThread(id, orderId?, buyerId, sellerId) / Message(threadId, senderId, body, readAt?)
Notification(id, userId, channel[EMAIL|SMS|PUSH], type, payload Jsonb, sentAt?)
AuditLog(id, actorId?, action, entity, entityId, diff Jsonb, ip, createdAt)
```

- All money = **BigInt kes-cents**. Never floats.
- Every FK declared. Indexes: products(category, status, price), orders(buyer/merchant/status), payments(checkoutRequestId), ledger(orderId), messages(threadId, createdAt).
- Prisma migrations from day one. Seed = real-shaped demo data (not the old Unsplash arrays).

## 4. API design (NestJS, versioned /v1)

Modules: `Auth, Users, Merchants, Catalog, Search, Orders, Payments, Escrow, Disputes, Reviews, Messages, Notifications, Admin`.

- **Auth:** email+password (argon2id), JWT access 15m + refresh rotation 7d w/ reuse detection, role guards (`@Roles(ADMIN)`), account lockout after 5 fails.
- **Validation:** every DTO = Zod via `nestjs-zod`. No raw body touches a service.
- **Money:** `packages/shared` money helpers — parse/format/compare KES cents. No arithmetic outside these.
- **M-Pesa Daraja flow (the heart):**
  1. `POST /v1/orders` (buyer, auth) → creates order `PENDING` + escrow `HOLD` intent
  2. `POST /v1/payments/mpesa/stk` → STK push to buyer phone
  3. Daraja calls `POST /v1/payments/mpesa/callback` (public, IP-allowlisted, **idempotent by CheckoutRequestID**, verifies payload shape)
  4. On SUCCESS → payment SUCCESS → escrow `HOLD` ledger row → notify both parties
  5. Buyer confirms delivery → `POST /v1/orders/:id/confirm` → escrow `RELEASE` row → merchant net of fee
  Richkem fee (e.g. 5%) recorded as `FEE` ledger row at release.
  6. Dispute any time before release → status `UNDER_REVIEW`, admin resolves → `REFUND` or `RELEASE`
  **No code path mutates a balance. All flows append ledger rows. Auditable forever.**
- **Search:** Postgres FTS (tsvector on title+description, GIN index) phase 1. Meilisearch container when >50k listings.
- **Errors:** RFC 7807 problem+json. **OpenAPI** auto-generated → typed frontend client.
- **Rate limits:** Redis token bucket — strict on auth/payment/callback routes.
- **Docs:** swagger at /docs, healthcheck /health (liveness+readiness+db ping).

## 5. Frontend (Next.js 15, full redesign)

- **Design system first** (`packages/ui`): new tokens — fresh palette, type scale, spacing, radii, shadows, motion. High-end, NOT the old look. Tailwind v4 CSS-first tokens. Dark mode day one.
- Key flows (v1): Home → Search/Category → Product (standard/vehicle/aviation variants) → Merchant storefront → Cart → Checkout → M-Pesa STK modal → Order tracking w/ escrow status → Buyer dashboard → Merchant dashboard (products, orders, wallet/ledger view) → Admin (KYC queue, orders, escrows, disputes).
- SEO: server components, metadata API, JSON-LD Product schema, sitemap, OG images.
- Perf budget: LCP < 2.5s, images via next/image + VPS/Nginx, no layout shift.
- A11y: WCAG 2.1 AA per your guidelines skill.
- GSAP allowed for hero/showcase moments only; product pages stay fast.

## 6. Security (non-negotiable for a money platform)

- argon2id password hashing; bcrypt forbidden.
- JWT in httpOnly cookies for web, Bearer for mobile later. Refresh rotation + reuse detection.
- CSRF: SameSite=strict cookies + double-submit for state-changing forms.
- Helmet headers, strict CSP, CORS allowlist (web origin only).
- Rate limits: login 5/15min, STK 3/min/user, search 60/min, register 3/hour/IP.
- M-Pesa callback: verify origin, shape-check payload, idempotent handler, log raw payload.
- AuditLog on: auth events, order/payment/escrow transitions, admin actions.
- Uploads: MIME sniff + extension allowlist (jpg/png/webp/pdf), 5MB cap, randomized keys, never execute.
- Secrets: `.env` never committed; CI checks for leaked keys.

## 7. DevOps on the VPS (cPanel-friendly)

- **Option chosen (cPanel exists):** Node apps via cPanel's "Setup Node.js App" (Passenger) or pm2 + Nginx reverse proxy.
- postgres + redis via docker-compose **or** cPanel PostgreSQL; docker preferred if available.
- Migrations run on deploy: `pnpm --filter db migrate deploy`.
- CI (GitHub Actions): typecheck → lint → unit tests → build all → docker image (optional).
- Backups: nightly `pg_dump` to offsite (B2/S3), 30-day retention. **Non-negotiable with money data.**
- Monitoring: Sentry (both apps), UptimeRobot, pm2 logs + logrotate.
- SSL via cPanel AutoSSL/Let's Encrypt.
- Env matrix: dev / staging (same VPS, subdomain) / prod.

## 8. Build order (v1 milestones)

| # | Milestone | Ships |
|---|-----------|-------|
| M0 | Scaffold monorepo, CI, docker-compose, Prisma schema v2, new design tokens | Skeleton runs green |
| M1 | Auth + users + KYC upload + roles | Buyers/merchants register, login, profiles |
| M2 | Catalog: merchant product CRUD + images + categories + storefronts + search | Real listings live |
| M3 | Orders + M-Pesa STK + escrow ledger + confirm/refund | **Money moves for real** |
| M4 | Admin: KYC review, order/escrow/dispute tools, audit log viewer | Trust ops live |
| M5 | Hardening: rate limits, CSP, backups, Sentry, load test (k6), SEO | Launch-ready |
| Phase 2 | Services booking, chat (Socket.IO), reviews, notifications, wishlists, multi-image zoom etc. | Post-launch |

## 9. Honest effort estimate (solo dev)

- M0: 2–3 days · M1: 1 week · M2: 2 weeks · M3: 2 weeks (Daraja sandbox testing) · M4: 1 week · M5: 1 week
- **≈ 7–9 weeks realistic v1.** Phase 2 adds 4–6 weeks.
- Anyone promising faster is overpromising. Communicate milestones to client weekly.

## 10. Risks

| Risk | Mitigation |
|------|-----------|
| Daraja production credentials take days | Start Daraja sandbox now; prod keys separate track |
| cPanel Node limits (memory, workers) | Fallback: plain VPS without cPanel, pm2+systemd — more control |
| VPS single point of failure | Nightly offsite backups + restore drill in M5 |
| Full redesign = client surprise | Design review gate at M0 — client approves tokens+home mockup BEFORE M1 starts |
| Scope creep mid-build | PLAN.md = contract. Changes = new milestone discussion |

## 11. Immediate next actions

1. Client approves PLAN.md + design direction (M0 gate)
2. `richkem` monorepo scaffold + docker-compose + CI
3. Prisma schema v2 + seed
4. New design tokens + home page mockup → client design review
5. Daraja sandbox app registration (need client's Safaricom portal access or paybill details)
