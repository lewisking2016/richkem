<?php
declare(strict_types=1);

require_once __DIR__ . '/../includes/bootstrap.php';

richkem_page([
    'title' => 'Dispute Detail | Richkem Services',
    'description' => 'Dispute resolution view.',
    'section' => 'sell',
], function () {
    ?>
    <section class="hero-surface"><div class="page-shell"><h1 class="page-title">Dispute detail</h1></div></section>
    <section class="section flow">
        <article class="flow-card"><h3>Evidence</h3><p>Photos, chat logs, and payment trail.</p></article>
        <article class="flow-card"><h3>Decision</h3><p>Refund, split, or release funds.</p></article>
        <article class="flow-card"><h3>Notes</h3><p>Admin comments and audit history.</p></article>
    </section>
    <?php
});
