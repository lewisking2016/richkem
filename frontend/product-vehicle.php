<?php
declare(strict_types=1);

require_once __DIR__ . '/../backend/bootstrap.php';

$catalog = richkem_data();
$item = $catalog['featured_products'][1] ?? [
    'title' => 'Vehicle listing',
    'meta' => 'Inspection-ready vehicle',
    'summary' => 'A vehicle listing with trust cues and a clear inspection path.',
    'price' => 'View price',
    'image' => '',
];

richkem_page([
    'title' => 'Vehicle Listing | Richkem Services',
    'description' => 'Vehicle listing detail page with inspection-first flow.',
    'section' => 'products',
], function () use ($item) {
    ?>
    <section class="split-grid hero-surface">
        <div class="page-grid">
            <img class="page-card" src="<?= htmlspecialchars($item['image'], ENT_QUOTES, 'UTF-8') ?>" alt="<?= htmlspecialchars($item['title'], ENT_QUOTES, 'UTF-8') ?>">
            <div class="flow">
                <div class="flow-card"><h3>Mileage</h3><p>Low verified mileage and service history.</p></div>
                <div class="flow-card"><h3>Inspection</h3><p>Book inspection before payment or deposit.</p></div>
                <div class="flow-card"><h3>Financing</h3><p>Support for deposit and lender conversations.</p></div>
            </div>
        </div>
        <div>
            <p class="eyebrow-label">Vehicle listing</p>
            <h1 class="page-title"><?= htmlspecialchars($item['title'], ENT_QUOTES, 'UTF-8') ?></h1>
            <p class="page-lead"><?= htmlspecialchars($item['meta'], ENT_QUOTES, 'UTF-8') ?></p>
            <p class="page-lead"><?= htmlspecialchars($item['summary'], ENT_QUOTES, 'UTF-8') ?></p>
            <div class="kpi"><span>Starting price</span><strong><?= htmlspecialchars($item['price'], ENT_QUOTES, 'UTF-8') ?></strong></div>
            <div class="profile-actions">
                <a class="btn btn--primary" href="/frontend/checkout.php">Book inspection</a>
                <a class="btn btn--ghost" href="/frontend/product-virtual-tour.php">View tour</a>
            </div>
            <div class="info-card">
                <h3>Inspection checklist</h3>
                <div class="list">
                    <div class="list-item"><span>Engine</span><strong>Verified and road tested</strong></div>
                    <div class="list-item"><span>Chassis</span><strong>Verified and inspected</strong></div>
                    <div class="list-item"><span>Documents</span><strong>Review required before release</strong></div>
                </div>
            </div>
        </div>
    </section>
    <?php
});
