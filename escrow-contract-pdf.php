<?php
declare(strict_types=1);

require_once __DIR__ . '/backend/bootstrap.php';

richkem_page([
    'title' => 'Escrow Contract | Richkem Services',
    'description' => 'Escrow milestone agreement template.',
    'section' => 'home',
], function () {
    ?>
    <section class="hero-surface">
        <div class="page-shell">
            <p class="eyebrow-label">Escrow contract</p>
            <h1 class="page-title">Milestone agreement</h1>
            <p class="page-lead">Use this page for service jobs that need clear completion conditions before funds are released.</p>
        </div>
    </section>
    <section class="section flow">
        <article class="flow-card"><h3>Milestone 1</h3><p>Job accepted and funds locked.</p></article>
        <article class="flow-card"><h3>Milestone 2</h3><p>Work completed and reviewed.</p></article>
        <article class="flow-card"><h3>Milestone 3</h3><p>Release payment after confirmation.</p></article>
    </section>
    <?php
});
