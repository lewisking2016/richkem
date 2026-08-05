<?php
declare(strict_types=1);

require_once __DIR__ . '/../backend/bootstrap.php';

richkem_page([
    'title' => 'Updates | Richkem Services',
    'description' => 'Profile updates and announcements.',
    'section' => 'services',
], function () {
    ?>
    <section class="hero-surface">
        <div class="page-shell">
            <p class="eyebrow-label">Updates</p>
            <h1 class="page-title">Announcements and business updates.</h1>
        </div>
    </section>

    <section class="section stack">
        <article class="info-card"><h3>Holiday hours</h3><p>Closed on Sunday, open weekdays from 8am.</p></article>
        <article class="info-card"><h3>New service</h3><p>Now offering same-day consultations and follow-ups.</p></article>
        <article class="info-card"><h3>Promotion</h3><p>Limited-time discount for first-time bookings.</p></article>
    </section>
    <?php
});
