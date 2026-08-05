<?php
declare(strict_types=1);

require_once __DIR__ . '/../backend/bootstrap.php';

richkem_page([
    'title' => 'Reviews | Richkem Services',
    'description' => 'Profile reviews and ratings.',
    'section' => 'services',
], function () {
    ?>
    <section class="hero-surface">
        <div class="page-shell">
            <p class="eyebrow-label">Reviews</p>
            <h1 class="page-title">What customers are saying.</h1>
        </div>
    </section>

    <section class="section flow">
        <article class="review-card">
            <strong>4.9</strong>
            <p>Great communication and fast response time.</p>
        </article>
        <article class="review-card">
            <strong>4.8</strong>
            <p>Clear pricing and easy contact through WhatsApp.</p>
        </article>
        <article class="review-card">
            <strong>5.0</strong>
            <p>Trusted, professional, and easy to locate.</p>
        </article>
    </section>
    <?php
});
