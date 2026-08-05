<?php
declare(strict_types=1);

require_once __DIR__ . '/../backend/bootstrap.php';

richkem_page([
    'title' => 'Waiting for Payment | Richkem Services',
    'description' => 'M-Pesa waiting state.',
    'section' => 'products',
], function () {
    ?>
    <section class="hero-surface">
        <div class="page-shell empty-state">
            <h1 class="page-title">Waiting for M-Pesa confirmation</h1>
            <p>Keep the page open while the payment prompt is completed on the phone.</p>
        </div>
    </section>
    <?php
});
