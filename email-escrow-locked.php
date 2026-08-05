<?php
declare(strict_types=1);

require_once __DIR__ . '/backend/bootstrap.php';

richkem_page([
    'title' => 'Escrow Locked Email | Richkem Services',
    'description' => 'Escrow locked email template.',
    'section' => 'home',
], function () {
    ?>
    <section class="hero-surface">
        <div class="page-shell empty-state">
            <h1 class="page-title">Your escrow is secured</h1>
            <p>The funds are held safely until the job or order is completed.</p>
        </div>
    </section>
    <?php
});
