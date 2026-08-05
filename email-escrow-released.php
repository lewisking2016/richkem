<?php
declare(strict_types=1);

require_once __DIR__ . '/backend/bootstrap.php';

richkem_page([
    'title' => 'Escrow Released Email | Richkem Services',
    'description' => 'Escrow released email template.',
    'section' => 'home',
], function () {
    ?>
    <section class="hero-surface">
        <div class="page-shell empty-state">
            <h1 class="page-title">Escrow released</h1>
            <p>The payment has been released to the seller after confirmation.</p>
        </div>
    </section>
    <?php
});
