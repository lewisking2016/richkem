<?php
declare(strict_types=1);

require_once __DIR__ . '/../backend/bootstrap.php';

$catalog = richkem_data();
$item = $catalog['featured_products'][2] ?? [
    'title' => 'Aviation and marine listing',
    'meta' => 'High-value asset',
    'summary' => 'A serious listing for buyers who need a broker-led closing flow.',
    'price' => 'Request quote',
    'image' => '',
];

richkem_page([
    'title' => 'Aviation and Marine Listing | Richkem Services',
    'description' => 'Ultra-high-value asset page with broker-style support.',
    'section' => 'products',
], function () use ($item) {
    ?>
    <section class="split-grid hero-surface">
        <div class="page-grid">
            <img class="page-card" src="<?= htmlspecialchars($item['image'], ENT_QUOTES, 'UTF-8') ?>" alt="<?= htmlspecialchars($item['title'], ENT_QUOTES, 'UTF-8') ?>">
            <div class="flow">
                <div class="flow-card"><h3>Flight or sea hours</h3><p>Track critical usage history.</p></div>
                <div class="flow-card"><h3>Certificates</h3><p>Attach inspection and compliance docs.</p></div>
                <div class="flow-card"><h3>Broker contact</h3><p>Route serious buyers to a closing specialist.</p></div>
            </div>
        </div>
        <div>
            <p class="eyebrow-label">Aviation and marine</p>
            <h1 class="page-title"><?= htmlspecialchars($item['title'], ENT_QUOTES, 'UTF-8') ?></h1>
            <p class="page-lead"><?= htmlspecialchars($item['meta'], ENT_QUOTES, 'UTF-8') ?></p>
            <p class="page-lead"><?= htmlspecialchars($item['summary'], ENT_QUOTES, 'UTF-8') ?></p>
            <div class="kpi"><span>Price</span><strong><?= htmlspecialchars($item['price'], ENT_QUOTES, 'UTF-8') ?></strong></div>
            <div class="profile-actions">
                <a class="btn btn--primary" href="/frontend/checkout.php">Request broker call</a>
                <a class="btn btn--ghost" href="/frontend/inspection-report-view.php">View report</a>
            </div>
            <div class="info-card">
                <h3>Closing flow</h3>
                <p>Use escrow, legal review, and broker-managed negotiation for serious high-value purchases. Every step should reduce risk before money moves.</p>
            </div>
        </div>
    </section>
    <?php
});
