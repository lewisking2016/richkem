<?php
declare(strict_types=1);

require_once __DIR__ . '/../backend/bootstrap.php';

$catalog = richkem_data();
$products = $catalog['featured_products'] ?? [];
$profiles = $catalog['service_profiles'] ?? [];
$query = trim((string)($_GET['q'] ?? ''));

richkem_page([
    'title' => 'Search | Richkem Services',
    'description' => 'Search products and services across Richkem Services.',
    'section' => 'products',
], function () use ($products, $profiles, $query) {
    ?>
    <section class="hero-surface">
        <div class="page-shell search-hero">
            <div>
                <p class="eyebrow-label">Search</p>
                <h1 class="page-title">Find products, services, and trusted sellers.</h1>
                <p class="page-lead">Search by category, location, trust level, or price. Richkem should let buyers move from search to contact without friction.</p>
                <form class="searchbar" action="#" method="get">
                    <input type="search" name="q" value="<?= htmlspecialchars($query, ENT_QUOTES, 'UTF-8') ?>" placeholder="Search anything on Richkem">
                    <select name="scope" aria-label="Search scope">
                        <option>All results</option>
                        <option>Products</option>
                        <option>Services</option>
                    </select>
                    <button class="btn btn--primary" type="submit">Search</button>
                </form>
                <div class="anchor-row">
                    <a href="/frontend/search.php?q=doctors">Doctors</a>
                    <a href="/frontend/search.php?q=vehicles">Vehicles</a>
                    <a href="/frontend/search.php?q=phones">Phones</a>
                    <a href="/frontend/search.php?q=lawyers">Lawyers</a>
                </div>
            </div>

            <aside class="panel search-summary">
                <div class="panel__head">
                    <strong>Search by intent</strong>
                    <span>Fast paths</span>
                </div>
                <div class="list">
                    <div class="list-item">
                        <div>
                            <strong>Products</strong>
                            <div class="list-item__meta">Phones, vehicles, and household goods.</div>
                        </div>
                        <span class="badge">4 featured</span>
                    </div>
                    <div class="list-item">
                        <div>
                            <strong>Services</strong>
                            <div class="list-item__meta">Doctors, lawyers, and technicians.</div>
                        </div>
                        <span class="badge">3 profiles</span>
                    </div>
                    <div class="list-item">
                        <div>
                            <strong>Trust filters</strong>
                            <div class="list-item__meta">Verified, nearby, open now, and quote-ready.</div>
                        </div>
                        <span class="badge">Built in</span>
                    </div>
                </div>
            </aside>
        </div>
    </section>

    <section class="section search-layout split-grid">
        <div class="search-results">
            <?php foreach (array_slice($products, 0, 3) as $index => $item): ?>
                <article class="list-card">
                    <div class="list-card__thumb">
                        <img src="<?= htmlspecialchars($item['image'], ENT_QUOTES, 'UTF-8') ?>" alt="<?= htmlspecialchars($item['title'], ENT_QUOTES, 'UTF-8') ?>">
                    </div>
                    <div>
                        <div class="card__title"><?= htmlspecialchars($item['title'], ENT_QUOTES, 'UTF-8') ?></div>
                        <div class="card__meta"><?= htmlspecialchars($item['meta'], ENT_QUOTES, 'UTF-8') ?></div>
                        <div class="card__summary"><?= htmlspecialchars((string) ($item['summary'] ?? $item['meta']), ENT_QUOTES, 'UTF-8') ?></div>
                        <div class="tag-row">
                            <span class="tag"><?= htmlspecialchars($item['price'], ENT_QUOTES, 'UTF-8') ?></span>
                            <span class="tag"><?= $index === 0 ? 'Top match' : 'Trusted listing' ?></span>
                        </div>
                    </div>
                    <a class="btn btn--ghost" href="/frontend/product-standard.php">View</a>
                </article>
            <?php endforeach; ?>

            <?php foreach (array_slice($profiles, 0, 2) as $profile): ?>
                <article class="list-card">
                    <div class="list-card__thumb">
                        <img src="<?= htmlspecialchars($products[0]['image'] ?? '', ENT_QUOTES, 'UTF-8') ?>" alt="<?= htmlspecialchars($profile['name'] ?? 'Service provider', ENT_QUOTES, 'UTF-8') ?>">
                    </div>
                    <div>
                        <div class="card__title"><?= htmlspecialchars((string) ($profile['name'] ?? ''), ENT_QUOTES, 'UTF-8') ?></div>
                        <div class="card__meta"><?= htmlspecialchars((string) ($profile['category'] ?? ''), ENT_QUOTES, 'UTF-8') ?>, <?= htmlspecialchars((string) ($profile['location'] ?? ''), ENT_QUOTES, 'UTF-8') ?></div>
                        <div class="card__summary"><?= htmlspecialchars((string) ($profile['summary'] ?? 'Trusted local service with direct contact.'), ENT_QUOTES, 'UTF-8') ?></div>
                        <div class="tag-row">
                            <span class="tag"><?= htmlspecialchars((string) ($profile['status'] ?? 'Open now'), ENT_QUOTES, 'UTF-8') ?></span>
                            <span class="tag"><?= htmlspecialchars((string) ($profile['rating'] ?? '4.8'), ENT_QUOTES, 'UTF-8') ?> rating</span>
                        </div>
                    </div>
                    <a class="btn btn--ghost" href="/frontend/profile.php">Open profile</a>
                </article>
            <?php endforeach; ?>
        </div>

        <aside class="stack">
            <div class="info-card">
                <h3>Popular categories</h3>
                <div class="tag-row">
                    <a class="tag" href="/frontend/category.php">Electronics</a>
                    <a class="tag" href="/frontend/category.php">Vehicles</a>
                    <a class="tag" href="/frontend/category.php">Doctors</a>
                    <a class="tag" href="/frontend/category.php">Lawyers</a>
                </div>
            </div>
            <div class="info-card">
                <h3>Search tips</h3>
                <p>Use location words like Nairobi, Westlands, or CBD, then narrow by verified sellers, open hours, and price.</p>
            </div>
            <div class="info-card">
                <h3>Buyer intent</h3>
                <p>People usually search with a problem in mind, so we keep the flow short, direct, and contact-ready.</p>
            </div>
        </aside>
    </section>
    <?php
});
