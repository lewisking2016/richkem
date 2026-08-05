<?php
declare(strict_types=1);

require_once __DIR__ . '/../includes/bootstrap.php';

richkem_page([
    'title' => 'KYC Queue | Richkem Services',
    'description' => 'Verification queue.',
    'section' => 'sell',
], function () {
    ?>
    <section class="hero-surface"><div class="page-shell"><h1 class="page-title">KYC queue</h1></div></section>
    <section class="section flow">
        <article class="flow-card"><h3>Doctor license</h3><p>Pending review.</p></article>
        <article class="flow-card"><h3>Business ID</h3><p>Approved.</p></article>
        <article class="flow-card"><h3>KRA PIN</h3><p>Needs clarification.</p></article>
    </section>
    <?php
});
