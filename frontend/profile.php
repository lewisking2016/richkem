<?php
declare(strict_types=1);

require_once __DIR__ . '/../backend/bootstrap.php';

$catalog = richkem_data();
$profile = $catalog['service_profiles'][0] ?? [
    'name' => 'Verified Business',
    'category' => 'General services',
    'location' => 'Nairobi, Kenya',
    'status' => 'Open now',
    'rating' => '4.8',
    'reviews' => '0 reviews',
];
$featureImage = $catalog['featured_products'][0]['image'] ?? '';

richkem_page([
    'title' => 'Service Profile | Richkem Services',
    'description' => 'Business profile, hours, contact details, and services.',
    'section' => 'services',
], function () use ($profile, $featureImage) {
    ?>
    <section class="hero-surface">
        <div class="profile-hero profile-hero--premium">
            <div class="profile-hero__main">
                <p class="eyebrow-label">Business profile</p>
            <h1 class="page-title"><?= htmlspecialchars((string) $profile['name'], ENT_QUOTES, 'UTF-8') ?></h1>
            <p class="page-lead"><?= htmlspecialchars((string) $profile['category'], ENT_QUOTES, 'UTF-8') ?>, <?= htmlspecialchars((string) $profile['location'], ENT_QUOTES, 'UTF-8') ?>. A public profile should feel like a real storefront, with trust, contact, and location all visible at a glance.</p>
            <p class="page-lead"><?= htmlspecialchars((string) ($profile['summary'] ?? 'A trustworthy business profile built for fast contact and easy decisions.'), ENT_QUOTES, 'UTF-8') ?></p>
            <div class="profile-actions">
                <a class="btn btn--primary" href="tel:+254700000000">Call now</a>
                <a class="btn btn--ghost" href="https://wa.me/254700000000">WhatsApp</a>
                <a class="btn btn--ghost" href="/frontend/profile-map-directions.php">Get directions</a>
            </div>
                <div class="tag-row">
                    <span class="tag"><?= htmlspecialchars((string) $profile['status'], ENT_QUOTES, 'UTF-8') ?></span>
                    <span class="tag"><?= htmlspecialchars((string) $profile['rating'], ENT_QUOTES, 'UTF-8') ?> rating</span>
                    <span class="tag"><?= htmlspecialchars((string) $profile['reviews'], ENT_QUOTES, 'UTF-8') ?></span>
                </div>
            </div>
            <div class="profile-hero__aside">
                <div class="profile-hero__image">
                    <img src="<?= htmlspecialchars($featureImage, ENT_QUOTES, 'UTF-8') ?>" alt="<?= htmlspecialchars((string) $profile['name'], ENT_QUOTES, 'UTF-8') ?>">
                </div>
                <div class="kpi"><span>Status</span><strong><?= htmlspecialchars((string) $profile['status'], ENT_QUOTES, 'UTF-8') ?></strong></div>
                <div class="kpi"><span>Rating</span><strong><?= htmlspecialchars((string) $profile['rating'], ENT_QUOTES, 'UTF-8') ?></strong></div>
                <div class="kpi"><span>Reviews</span><strong><?= htmlspecialchars((string) $profile['reviews'], ENT_QUOTES, 'UTF-8') ?></strong></div>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="panel">
            <div class="panel__head">
                <strong>Services offered</strong>
                <span>Book or contact directly</span>
            </div>
            <div class="flow">
                <article class="flow-card">
                    <h3>Consultation</h3>
                    <p>Fast first visit for diagnosis, advice, and next steps, so the buyer knows what the appointment is for before they book.</p>
                </article>
                <article class="flow-card">
                    <h3>Follow-up</h3>
                    <p>Structured follow-up appointments and notes for returning clients who need continuity, reminders, or a second opinion.</p>
                </article>
                <article class="flow-card">
                    <h3>Emergency support</h3>
                    <p>Direct contact for urgent cases and quick availability checks when the customer needs to speak to someone right away.</p>
                </article>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="panel">
            <div class="panel__head">
                <strong>Why this profile works</strong>
                <span>Trust-first layout</span>
            </div>
            <div class="trust">
                <article class="trust__item">
                    <strong>Verified presence</strong>
                    <p>Open hours, category, and location appear immediately so users can decide faster.</p>
                </article>
                <article class="trust__item">
                    <strong>Fast contact</strong>
                    <p>Call and WhatsApp actions stay visible, which is critical for service-led discovery.</p>
                </article>
                <article class="trust__item">
                    <strong>Practical proof</strong>
                    <p>Ratings and reviews are kept close to the primary action instead of buried below the fold.</p>
                </article>
                <article class="trust__item">
                    <strong>Mobile ready</strong>
                    <p>The profile is easy to scan on a phone, which is where most first visits will happen.</p>
                </article>
            </div>
        </div>
    </section>
    <?php
});
