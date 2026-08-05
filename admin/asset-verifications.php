<?php
declare(strict_types=1);

require_once __DIR__ . '/../includes/bootstrap.php';

richkem_page([
    'title' => 'Asset Verifications | Richkem Services',
    'description' => 'High-value asset verification queue.',
    'section' => 'sell',
], function () {
    ?>
    <section class="hero-surface"><div class="page-shell"><h1 class="page-title">Asset verifications</h1></div></section>
    <section class="section flow">
        <article class="flow-card"><h3>Car inspection</h3><p>Report uploaded.</p></article>
        <article class="flow-card"><h3>Vessel papers</h3><p>Waiting for review.</p></article>
        <article class="flow-card"><h3>Aviation docs</h3><p>Broker approval required.</p></article>
    </section>
    <?php
});
