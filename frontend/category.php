<?php
declare(strict_types=1);

require_once __DIR__ . '/../backend/bootstrap.php';

$catalog = richkem_data();
$productCategories = $catalog['product_categories'] ?? [];
$serviceCategories = $catalog['service_categories'] ?? [];

richkem_page([
    'title' => 'Categories | Richkem Services',
    'description' => 'Browse product and service categories on Richkem Services.',
    'section' => 'products',
], function () use ($productCategories, $serviceCategories) {
    ?>
    <section class="hero-surface">
        <div class="page-shell">
            <p class="eyebrow-label">Categories</p>
            <h1 class="page-title">Browse everything from products to professional services.</h1>
            <p class="page-lead">Categories should feel curated, not crowded. Buyers can move between fast-moving products and trusted service providers with the same experience.</p>
        </div>
    </section>

    <section class="section">
        <div class="section__head">
            <div>
                <div class="section__kicker">Products</div>
                <h2>Universal product catalog</h2>
            </div>
        </div>
        <div class="category-grid">
            <?php foreach ($productCategories as $item): ?>
                <article class="category-card">
                    <div class="card__title"><?= htmlspecialchars((string) $item['name'], ENT_QUOTES, 'UTF-8') ?></div>
                    <div class="card__meta"><?= htmlspecialchars((string) $item['count'], ENT_QUOTES, 'UTF-8') ?></div>
                    <div class="category-card__summary"><?= htmlspecialchars((string) ($item['summary'] ?? ''), ENT_QUOTES, 'UTF-8') ?></div>
                </article>
            <?php endforeach; ?>
        </div>
    </section>

    <section class="section">
        <div class="section__head">
            <div>
                <div class="section__kicker">Services</div>
                <h2>Professional service directory</h2>
            </div>
        </div>
        <div class="category-grid">
            <?php foreach ($serviceCategories as $item): ?>
                <article class="category-card category-card--dark">
                    <div class="card__title"><?= htmlspecialchars((string) $item['name'], ENT_QUOTES, 'UTF-8') ?></div>
                    <div class="card__meta"><?= htmlspecialchars((string) $item['count'], ENT_QUOTES, 'UTF-8') ?></div>
                    <div class="category-card__summary"><?= htmlspecialchars((string) ($item['summary'] ?? ''), ENT_QUOTES, 'UTF-8') ?></div>
                </article>
            <?php endforeach; ?>
        </div>
    </section>
    <?php
});
