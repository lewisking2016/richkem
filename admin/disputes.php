<?php
declare(strict_types=1);

require_once __DIR__ . '/../includes/bootstrap.php';

richkem_page([
    'title' => 'Disputes | Richkem Services',
    'description' => 'Dispute queue.',
    'section' => 'sell',
], function () {
    ?>
    <section class="hero-surface"><div class="page-shell"><h1 class="page-title">Disputes</h1></div></section>
    <section class="section flow">
        <article class="flow-card"><h3>Order mismatch</h3><p>Open.</p></article>
        <article class="flow-card"><h3>Service delay</h3><p>Open.</p></article>
        <article class="flow-card"><h3>Refund request</h3><p>Reviewing.</p></article>
    </section>
    <?php
});
