<?php
declare(strict_types=1);

require_once __DIR__ . '/../backend/bootstrap.php';

richkem_page([
    'title' => 'Map Search | Richkem Services',
    'description' => 'Browse nearby sellers on a map.',
    'section' => 'products',
], function () {
    ?>
    <section class="hero-surface">
        <div class="page-shell">
            <p class="eyebrow-label">Map search</p>
            <h1 class="page-title">Find nearby services and sellers.</h1>
            <p class="page-lead">A map view is essential for urgent services like repairs, healthcare, delivery, and local pickups.</p>
        </div>
    </section>

    <section class="section">
        <div class="panel">
            <div class="empty-state">
                <h2>Map placeholder</h2>
                <p>This page is ready for a live map, pins, clustering, and location-based filters.</p>
            </div>
        </div>
    </section>
    <?php
});
