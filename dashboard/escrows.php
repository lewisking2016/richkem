<?php
declare(strict_types=1);

require_once __DIR__ . '/../includes/bootstrap.php';

richkem_page([
    'title' => 'Escrows | Richkem Services',
    'description' => 'Buyer escrow jobs.',
    'section' => 'account',
], function () {
    ?>
    <section class="hero-surface"><div class="page-shell"><h1 class="page-title">Escrows</h1></div></section>
    <section class="section flow">
        <article class="flow-card"><h3>Milestone 1</h3><p>Inspection completed.</p></article>
        <article class="flow-card"><h3>Milestone 2</h3><p>Work in progress.</p></article>
        <article class="flow-card"><h3>Milestone 3</h3><p>Confirm completion.</p></article>
    </section>
    <?php
});
