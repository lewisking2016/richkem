# Richkem Design Doctrine — "Better than Jumia & Jiji"

Based on live user research (Trustpilot, Reddit r/Kenya, App Store reviews, UX case studies, 2026 trend reports).

## 1. Their documented weaknesses

### Jumia
| # | Weakness | Evidence |
|---|----------|----------|
| J1 | Refund pain, slow delivery, ignored emails | Trustpilot 1.2★ (236 reviews) · App Store reviews: "refused to process refunds, took too long, didn't respond" |
| J2 | Product page overload — delivery info unscannable, promos distract | UX audit of Jumia PDP (designer community): "too overloaded… promotions visually distracting" |
| J3 | Unverified sellers + inconsistent prices create uncertainty | Medium UX case study on trust & delivery transparency |
| J4 | Checkout friction | App review walkthroughs |
| J5 | 1.5★ Trustpilot Kenya (127 reviews) | Trustpilot jumia.co.ke |

### Jiji
| # | Weakness | Evidence |
|---|----------|----------|
| G1 | "Flooded with scammers" — even sellers get 100% scam replies | Reddit r/Kenya thread (6 months ago) |
| G2 | No payment protection by default — buyers self-vet, told "never prepay" | Jiji's own safety tips; mzuri.co.ke scam guide |
| G3 | Unverified listings attract fake agents (rentals especially) | 2026 rental-scam guide |
| G4 | Rude/absent support | App Store review |
| G5 | 2.3★ Trustpilot | Trustpilot jiji.co.ke |

## 2. Our moves (each weakness → design decision)

| They fail at | Richkem design move |
|---|---|
| J2/J1 overload & distraction | **Calm density**: one accent color, one hero message, ruthless hierarchy. Delivery + escrow info as a scannable 3-icon strip. No screaming sale banners |
| G1/G3 scams & fakes | **Verification as visual language**: KYC badge on every card/profile, "ID & license verified" states, report button always visible |
| G2 no protection | **Escrow is the brand**: green shield on every listing, price quote always paired with "protected", checkout shows exactly when money moves. Jumia/Jiji can't copy this — it's product, not paint |
| J3 price inconsistency | **Price trust**: compare-at strikethrough, "You save" computed honestly, wallet ledger public per order |
| J1 refund pain | **Refund clarity**: dispute button present at every escrow stage; "no-show = full refund in 24h" states on service bookings |
| Both: heavy, dated | **Fast & current**: zero JS animation libs, CSS-only motion, system font stack + one display font, ~110kB first load, 2026 "soft spatial" aesthetic — layered soft shadows, 2.0 glass header, calm warm neutrals |

## 3. The aesthetic (frontend-developer + high-end-visual-design skills)

- **Identity**: Richkem Jungle Green `#0f8a47` (primary brand + trust color) with deep ink `#141414`, warm paper `#faf9f7`. Icon language: Lucide icons only — no emojis anywhere in the product (design rule, enforced by sweep)
- **Type scale**: tight tracking, heavy weights for prices/headers (marketplace scan-ability)
- **Elevation**: 3-level soft shadow system (rest/hover/pop) instead of borders-everywhere
- **Motion**: 160ms ease-out micro-interactions — card lift, image zoom, badge pop; `prefers-reduced-motion` respected
- **Glass**: header uses backdrop-blur glass on scroll (glassmorphism 2.0, used sparingly)
- **Mobile-first**: bottom nav, 44px touch targets, horizontal category rails

## 4. Client one-liner
> "Jumia overwhelms you and Jiji exposes you. Richkem is the marketplace that feels calm and keeps every shilling escrow-protected — and the design shows it on every screen."
