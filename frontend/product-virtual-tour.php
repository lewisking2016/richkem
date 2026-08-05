<?php
declare(strict_types=1);

require_once __DIR__ . '/../backend/bootstrap.php';

richkem_page([
    'title' => 'Virtual Tour | Richkem Services',
    'description' => 'Immersive product and property tour page.',
    'section' => 'products',
], function () {
    ?>
    <section class="hero-surface">
        <div class="page-shell">
            <p class="eyebrow-label">360 tour</p>
            <h1 class="page-title">Inspect the listing before you buy.</h1>
            <p class="page-lead">Virtual tours should help buyers understand expensive products and assets before they call, book, or pay a deposit.</p>
        </div>
    </section>

    <section class="section">
        <div class="panel">
            <div class="empty-state">
                <h2>Tour viewer placeholder</h2>
                <p>This screen is ready for 360 media, video walkthroughs, or an embedded player.</p>
            </div>
        </div>
    </section>
    <?php
});
