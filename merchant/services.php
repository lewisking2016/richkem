<?php
declare(strict_types=1);

require_once __DIR__ . '/../includes/bootstrap.php';

richkem_page([
    'title' => 'Services | Richkem Services',
    'description' => 'Merchant services manager.',
    'section' => 'sell',
], function () {
    ?>
    <section class="hero-surface"><div class="page-shell"><h1 class="page-title">Services</h1></div></section>
    <section class="section flow">
        <article class="flow-card"><h3>Service listing</h3><p>Publish services with pricing, timing, and areas served.</p></article>
        <article class="flow-card"><h3>Availability</h3><p>Show open now, booking today, or emergency response.</p></article>
        <article class="flow-card"><h3>Contact</h3><p>Phone, WhatsApp, and booking actions in one place.</p></article>
    </section>
    <?php
});
