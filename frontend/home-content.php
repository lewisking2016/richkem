<?php
declare(strict_types=1);

$heroProduct = $featuredProducts[1] ?? $featuredProducts[0] ?? [
    'title' => 'Featured product',
    'meta' => 'Marketplace listing',
    'price' => 'View details',
    'image' => '',
];
$previewProducts = array_slice($featuredProducts, 0, 3);
$previewServices = array_slice($serviceProfiles, 0, 3);
$marketCategories = array_slice($productCategories, 0, 4);
$serviceTiles = array_slice($serviceCategories, 0, 4);
?>
<section class="hero">
    <div class="hero__grid">
        <div>
            <span class="eyebrow">Marketplace for products and services</span>
            <h1>Buy products. Book services. Run one trusted storefront.</h1>
            <p class="hero__lede">
                Richkem brings product listings, local service profiles, verification, call buttons, WhatsApp, and M-Pesa-aware selling into one clean experience.
                Buyers can search by need, location, and trust, then contact the right seller without friction.
            </p>

            <form class="searchbar" action="/frontend/search.php" method="get">
                <input type="search" name="q" placeholder="Search doctors, cars, phones, plumbers, inspections..." aria-label="Search the marketplace">
                <select name="scope" aria-label="Search scope">
                    <option>All categories</option>
                    <option>Products</option>
                    <option>Services</option>
                    <option>High-value assets</option>
                </select>
                <button class="btn btn--primary" type="submit">Search now</button>
            </form>

            <div class="chip-row" aria-label="Popular searches">
                <a class="chip" href="/frontend/search.php?q=doctors">Doctors</a>
                <a class="chip" href="/frontend/search.php?q=plumbers">Plumbers</a>
                <a class="chip" href="/frontend/search.php?q=cars">Cars</a>
                <a class="chip" href="/frontend/search.php?q=phones">Phones</a>
                <a class="chip" href="/frontend/search.php?q=aviation">Aviation</a>
                <a class="chip" href="/frontend/search.php?q=beauty">Beauty</a>
            </div>

            <div class="hero__meta">
                <span>Verified profiles</span>
                <span>Escrow payments</span>
                <span>Call and WhatsApp</span>
                <span>Map discovery</span>
            </div>

            <div class="hero__actions">
                <a class="btn btn--primary" href="/merchant/apply.php">Open your store</a>
                <a class="btn btn--ghost" href="/frontend/profile.php">See service profiles</a>
            </div>
        </div>

        <div class="hero__visual">
            <div class="visual-stage">
                <div class="floating-pill">Open now, verified, and ready to call</div>
                <figure class="visual-main">
                    <img src="<?= htmlspecialchars((string) $heroProduct['image'], ENT_QUOTES, 'UTF-8') ?>" alt="Marketplace hero image">
                </figure>
                <div class="floating-card floating-card--left">
                    <strong>Service profile</strong>
                    <p>Business details, opening hours, directions, and one-tap contact.</p>
                </div>
                <div class="floating-card floating-card--right">
                    <strong>Product checkout</strong>
                    <p>For everyday goods, premium assets, and everything in between.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<div class="ticker">
    <div class="ticker__track" aria-label="Marketplace highlights">
        <?php for ($i = 0; $i < 2; $i++): ?>
            <span class="ticker__item">Verified sellers</span>
            <span class="ticker__item">M-Pesa ready</span>
            <span class="ticker__item">Call now buttons</span>
            <span class="ticker__item">WhatsApp chat</span>
            <span class="ticker__item">Map discovery</span>
            <span class="ticker__item">Inspection workflows</span>
            <span class="ticker__item">Business profiles</span>
            <span class="ticker__item">Escrow support</span>
        <?php endfor; ?>
    </div>
</div>

<section class="signals">
    <?php foreach ($stats as $stat): ?>
        <article class="signal reveal-on-scroll" data-reveal>
            <div class="signal__top">
                <span class="signal__label"><?= htmlspecialchars((string) $stat['label'], ENT_QUOTES, 'UTF-8') ?></span>
                <span class="badge">Live</span>
            </div>
            <div class="signal__value"><?= htmlspecialchars((string) $stat['value'], ENT_QUOTES, 'UTF-8') ?></div>
            <p class="signal__foot"><?= htmlspecialchars((string) $stat['note'], ENT_QUOTES, 'UTF-8') ?></p>
        </article>
    <?php endforeach; ?>
</section>

<section class="section reveal-on-scroll" data-reveal>
    <div class="section__head">
        <div>
            <div class="section__kicker">Products</div>
            <h2>A product catalog that helps people compare, trust, and buy with confidence.</h2>
        </div>
        <p class="section-copy">
            Richkem should feel sharp enough for premium inventory and simple enough for everyday shopping, so buyers can move from browse to decision without extra effort.
        </p>
    </div>

    <div class="market-stage">
        <article class="market-feature">
            <div class="market-feature__copy">
                <span class="eyebrow">Searchable by intent</span>
                <h3>Fast-moving goods plus high-value listings in one browsing model.</h3>
                <p>
                    Phones, vehicles, appliances, and premium assets need different buying cues. Richkem keeps the catalog broad, but still makes it easy to understand what needs a quick buy and what needs an inspection, quote, or escrow step.
                </p>
                <div class="tag-row">
                    <span class="tag">Compare prices</span>
                    <span class="tag">Inspection ready</span>
                    <span class="tag">Escrow support</span>
                    <span class="tag">Mobile first</span>
                </div>
            </div>
            <div class="market-feature__media">
                <img src="<?= htmlspecialchars((string) $heroProduct['image'], ENT_QUOTES, 'UTF-8') ?>" alt="<?= htmlspecialchars((string) $heroProduct['title'], ENT_QUOTES, 'UTF-8') ?>">
                <div class="market-feature__caption">
                    <strong><?= htmlspecialchars((string) $heroProduct['title'], ENT_QUOTES, 'UTF-8') ?></strong>
                    <span><?= htmlspecialchars((string) $heroProduct['price'], ENT_QUOTES, 'UTF-8') ?></span>
                </div>
            </div>
        </article>

        <aside class="market-stack">
            <?php foreach ($previewProducts as $card): ?>
                <article class="market-mini">
                    <div class="market-mini__thumb">
                        <img src="<?= htmlspecialchars((string) $card['image'], ENT_QUOTES, 'UTF-8') ?>" alt="<?= htmlspecialchars((string) $card['title'], ENT_QUOTES, 'UTF-8') ?>">
                    </div>
                    <div class="market-mini__copy">
                        <strong><?= htmlspecialchars((string) $card['title'], ENT_QUOTES, 'UTF-8') ?></strong>
                        <p><?= htmlspecialchars((string) ($card['summary'] ?? $card['meta']), ENT_QUOTES, 'UTF-8') ?></p>
                    </div>
                    <span class="badge"><?= htmlspecialchars((string) $card['price'], ENT_QUOTES, 'UTF-8') ?></span>
                </article>
            <?php endforeach; ?>
            <article class="market-mini market-mini--note">
                <div class="market-mini__copy">
                    <strong>Made for trust-led buying</strong>
                    <p>Buyers can move from discovery to contact without guessing who is real or what happens next.</p>
                </div>
            </article>
        </aside>
    </div>

    <div class="category-grid category-grid--market">
        <?php foreach ($marketCategories as $item): ?>
            <article class="category-card">
                <div class="catalog__name"><?= htmlspecialchars((string) $item['name'], ENT_QUOTES, 'UTF-8') ?></div>
                <div class="catalog__count"><?= htmlspecialchars((string) $item['count'], ENT_QUOTES, 'UTF-8') ?></div>
                <div class="category-card__summary"><?= htmlspecialchars((string) ($item['summary'] ?? ''), ENT_QUOTES, 'UTF-8') ?></div>
            </article>
        <?php endforeach; ?>
    </div>
</section>

<section class="section reveal-on-scroll" data-reveal>
    <div class="section__head">
        <div>
            <div class="section__kicker">Services</div>
            <h2>A business profile system that feels local, credible, and easy to contact.</h2>
        </div>
        <p class="section-copy">
            Each professional gets a public face with verified details, opening hours, quick contact, map routing, and a service list that helps people decide fast.
        </p>
    </div>

    <div class="service-stage">
        <article class="service-feature">
            <div class="service-feature__copy">
                <span class="eyebrow">Call-first discovery</span>
                <h3>Profiles should answer who, what, where, and how before the first click.</h3>
                <p>
                    Richkem service pages are not generic directory entries. They should show reputation, hours, category, location, and a direct path to call or message without making the buyer work for it.
                </p>
                <div class="profile-actions">
                    <a class="btn btn--primary" href="/frontend/profile.php">Open profile</a>
                    <a class="btn btn--ghost" href="/frontend/profile-map-directions.php">Get directions</a>
                </div>
            </div>
            <div class="service-feature__panel">
                <?php foreach ($previewServices as $profile): ?>
                    <div class="service-feature__stat">
                        <strong><?= htmlspecialchars((string) $profile['name'], ENT_QUOTES, 'UTF-8') ?></strong>
                        <span><?= htmlspecialchars((string) $profile['category'], ENT_QUOTES, 'UTF-8') ?></span>
                    </div>
                <?php endforeach; ?>
                <div class="service-feature__summary">
                    <span class="badge">Verified</span>
                    <span class="badge">Open now</span>
                    <span class="badge">Bookable</span>
                </div>
            </div>
        </article>

        <div class="service-grid">
            <?php foreach ($previewServices as $profile): ?>
                <article class="service-card">
                    <div class="service-card__head">
                        <strong><?= htmlspecialchars((string) $profile['name'], ENT_QUOTES, 'UTF-8') ?></strong>
                        <span class="badge"><?= htmlspecialchars((string) $profile['status'], ENT_QUOTES, 'UTF-8') ?></span>
                    </div>
                    <div class="service-card__meta"><?= htmlspecialchars((string) $profile['category'], ENT_QUOTES, 'UTF-8') ?>, <?= htmlspecialchars((string) $profile['location'], ENT_QUOTES, 'UTF-8') ?></div>
                    <div class="category-card__summary"><?= htmlspecialchars((string) ($profile['summary'] ?? ''), ENT_QUOTES, 'UTF-8') ?></div>
                    <div class="service-card__stats">
                        <span><?= htmlspecialchars((string) $profile['rating'], ENT_QUOTES, 'UTF-8') ?> rating</span>
                        <span><?= htmlspecialchars((string) $profile['reviews'], ENT_QUOTES, 'UTF-8') ?></span>
                    </div>
                    <div class="profile__actions">
                        <a href="/frontend/profile.php">Call now</a>
                        <a href="/frontend/profile.php">WhatsApp</a>
                    </div>
                </article>
            <?php endforeach; ?>
        </div>

        <div class="category-grid category-grid--service">
        <?php foreach ($serviceTiles as $item): ?>
            <article class="category-card category-card--dark">
                <div class="catalog__name"><?= htmlspecialchars((string) $item['name'], ENT_QUOTES, 'UTF-8') ?></div>
                <div class="catalog__count"><?= htmlspecialchars((string) $item['count'], ENT_QUOTES, 'UTF-8') ?></div>
                <div class="category-card__summary"><?= htmlspecialchars((string) ($item['summary'] ?? ''), ENT_QUOTES, 'UTF-8') ?></div>
            </article>
        <?php endforeach; ?>
    </div>
    </div>
</section>

<section class="section reveal-on-scroll" data-reveal>
    <div class="section__head">
        <div>
            <div class="section__kicker">Store builder</div>
            <h2>Shopify-like seller tools, tuned for products and services together.</h2>
        </div>
        <p class="section-copy">
            Merchants can create a storefront, add products, publish services, manage enquiries, and keep everything in one account instead of splitting their presence across platforms.
        </p>
    </div>

    <div class="builder">
        <div class="builder__copy">
            <span class="eyebrow">Seller experience</span>
            <h3>Create a business presence people can trust.</h3>
            <p>
                A Richkem account is not only a listings page. It is a public business profile, a catalog, a booking hub, a contact point, and a place to build proof of work.
            </p>
            <div class="builder__steps">
                <div class="step">
                    <div class="step__num">1</div>
                    <div>
                        <strong>Add your business</strong>
                        <div class="muted">Choose products, services, or both, then complete your profile and contact details.</div>
                    </div>
                </div>
                <div class="step">
                    <div class="step__num">2</div>
                    <div>
                        <strong>Verify and publish</strong>
                        <div class="muted">Upload credentials, links, service areas, hours, and brand visuals before going live.</div>
                    </div>
                </div>
                <div class="step">
                    <div class="step__num">3</div>
                    <div>
                        <strong>Receive calls and orders</strong>
                        <div class="muted">Buyers contact you directly, request quotes, book work, or pay through trusted flows.</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="builder__dashboard">
            <div class="dashboard__top">
                <div class="metric-card"><span>Store visits</span><strong>12.8k</strong></div>
                <div class="metric-card"><span>Leads today</span><strong>186</strong></div>
                <div class="metric-card"><span>Conversion</span><strong>7.4%</strong></div>
            </div>

            <div class="dashboard__rows">
                <div class="row">
                    <div class="row__left">
                        <div class="row__icon" aria-hidden="true">PC</div>
                        <div>
                            <div class="row__title">Product catalog</div>
                            <div class="row__meta">Drafts, published items, and featured listings.</div>
                        </div>
                    </div>
                    <span class="badge">24 active</span>
                </div>
                <div class="row">
                    <div class="row__left">
                        <div class="row__icon" aria-hidden="true">SB</div>
                        <div>
                            <div class="row__title">Service bookings</div>
                            <div class="row__meta">Calls, appointments, and quotes in one queue.</div>
                        </div>
                    </div>
                    <span class="badge">8 pending</span>
                </div>
                <div class="row">
                    <div class="row__left">
                        <div class="row__icon" aria-hidden="true">TC</div>
                        <div>
                            <div class="row__title">Trust center</div>
                            <div class="row__meta">Licenses, badges, and proof of work for buyers.</div>
                        </div>
                    </div>
                    <span class="badge">Verified</span>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="section reveal-on-scroll" data-reveal>
    <div class="section__head">
        <div>
            <div class="section__kicker">Trust</div>
            <h2>The platform needs trust, not just listings.</h2>
        </div>
        <p class="section-copy">
            Buyers need clear signals before they call, book, or pay. Richkem should make those signals visible at every step.
        </p>
    </div>

    <div class="trust">
        <article class="trust__item">
            <strong>Verified identity</strong>
            <p>KYC, licenses, and business details become visible parts of the storefront instead of hidden admin data.</p>
        </article>
        <article class="trust__item">
            <strong>Escrow support</strong>
            <p>For higher value work, payments can be held and released when the customer confirms delivery or completion.</p>
        </article>
        <article class="trust__item">
            <strong>Location discovery</strong>
            <p>People can search nearby professionals, see directions, and decide quickly when they need help fast.</p>
        </article>
        <article class="trust__item">
            <strong>Clear contact routes</strong>
            <p>Call, WhatsApp, book, or request a quote. Buyers should never have to guess how to reach the seller.</p>
        </article>
    </div>
</section>

<section class="cta reveal-on-scroll" data-reveal>
    <div class="cta__panel">
        <div>
            <h2>Build the marketplace people actually want to use.</h2>
            <p>
                Richkem can become the place where products, services, and trusted businesses meet in one polished flow.
                The next step is to turn the homepage into a full system of searchable categories, storefronts, and checkout journeys.
            </p>
        </div>
        <div class="cta-actions">
            <a class="btn btn--secondary" href="/frontend/search.php">Review products</a>
            <a class="btn btn--primary" href="/merchant/apply.php">Create your account</a>
        </div>
    </div>
</section>
