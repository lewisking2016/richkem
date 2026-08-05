<?php
declare(strict_types=1);

require_once __DIR__ . '/../includes/bootstrap.php';

richkem_page([
    'title' => 'Verification Pending | Richkem Services',
    'description' => 'KYC pending status screen.',
    'section' => 'sell',
], function () {
    ?>
    <section class="hero-surface">
        <div class="page-shell empty-state">
            <h1 class="page-title">Verification pending</h1>
            <p>Your documents are under review. Public trust should be clear while the account is waiting.</p>
        </div>
    </section>
    <?php
});
