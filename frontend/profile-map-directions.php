<?php
declare(strict_types=1);

require_once __DIR__ . '/../backend/bootstrap.php';

richkem_page([
    'title' => 'Directions | Richkem Services',
    'description' => 'Profile map directions and hours.',
    'section' => 'services',
], function () {
    ?>
    <section class="hero-surface">
        <div class="page-shell">
            <p class="eyebrow-label">Directions</p>
            <h1 class="page-title">Find the business quickly.</h1>
            <p class="page-lead">Show the address, operating hours, and a clear route so the buyer knows where to go before they call.</p>
        </div>
    </section>

    <section class="section">
        <div class="split-grid">
            <div class="info-card">
                <h3>Operating hours</h3>
                <div class="list">
                    <div class="list-item"><span>Monday - Friday</span><strong>8:00 - 18:00</strong></div>
                    <div class="list-item"><span>Saturday</span><strong>9:00 - 14:00</strong></div>
                    <div class="list-item"><span>Sunday</span><strong>Closed</strong></div>
                </div>
            </div>
            <div class="panel">
                <div class="empty-state">
                    <h2>Map placeholder</h2>
                    <p>Route, pin, and directions module can be inserted here later.</p>
                </div>
            </div>
        </div>
    </section>
    <?php
});
