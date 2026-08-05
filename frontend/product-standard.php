<?php
declare(strict_types=1);

require_once __DIR__ . '/../backend/bootstrap.php';

$catalog = richkem_data();
$item = $catalog['featured_products'][0] ?? [
    'title' => 'Featured product',
    'meta' => 'Marketplace listing',
    'summary' => 'A clear, trust-ready product listing.',
    'price' => 'View price',
    'image' => '',
];

richkem_page([
    'title' => 'Product | Richkem Services',
    'description' => 'Standard product detail page.',
    'section' => 'products',
], function () use ($item) {
    ?>
    <section class="split-grid hero-surface">
        <div class="page-grid">
            <img class="page-card" src="<?= htmlspecialchars($item['image'], ENT_QUOTES, 'UTF-8') ?>" alt="<?= htmlspecialchars($item['title'], ENT_QUOTES, 'UTF-8') ?>">
            <div class="meta-row">
                <span class="badge badge--good">In stock</span>
                <span class="badge">Verified seller</span>
                <span class="badge">M-Pesa ready</span>
            </div>
        </div>
        <div>
            <p class="eyebrow-label">Product detail</p>
            <h1 class="page-title"><?= htmlspecialchars($item['title'], ENT_QUOTES, 'UTF-8') ?></h1>
            <p class="page-lead"><?= htmlspecialchars($item['meta'], ENT_QUOTES, 'UTF-8') ?></p>
            <p class="page-lead"><?= htmlspecialchars($item['summary'], ENT_QUOTES, 'UTF-8') ?></p>
            <div class="kpi"><span>Price</span><strong><?= htmlspecialchars($item['price'], ENT_QUOTES, 'UTF-8') ?></strong></div>
            <div class="profile-actions">
                <a class="btn btn--primary" href="/frontend/cart.php">Add to cart</a>
                <a class="btn btn--ghost" href="/frontend/search.php">Continue browsing</a>
            </div>
            <div class="info-card">
                <h3>Key details</h3>
                <div class="list">
                    <div class="list-item"><span>Condition</span><strong>New and verified</strong></div>
                    <div class="list-item"><span>Delivery</span><strong>Same day in Nairobi</strong></div>
                    <div class="list-item"><span>Protection</span><strong>Secure checkout and seller verification</strong></div>
                </div>
            </div>
        </div>
    </section>
    <?php
});
