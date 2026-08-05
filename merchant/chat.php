<?php
declare(strict_types=1);

require_once __DIR__ . '/../includes/bootstrap.php';

richkem_page([
    'title' => 'Merchant Chat | Richkem Services',
    'description' => 'Merchant negotiation room.',
    'section' => 'sell',
], function () {
    ?>
    <section class="hero-surface">
        <div class="page-shell split-grid">
            <div>
                <p class="eyebrow-label">Negotiation room</p>
                <h1 class="page-title">Talk to clients and send quotes.</h1>
                <p class="page-lead">This is where merchants should manage offers, questions, and service details without leaving the platform.</p>
            </div>
            <div class="stack">
                <div class="info-card"><strong>Client request</strong><p>Needs service on Saturday morning.</p></div>
                <div class="info-card"><strong>Merchant reply</strong><p>Quote sent with available time slot.</p></div>
            </div>
        </div>
    </section>
    <?php
});
