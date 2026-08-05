<?php
declare(strict_types=1);

require_once __DIR__ . '/../backend/bootstrap.php';

richkem_page([
    'title' => 'Payment Failed | Richkem Services',
    'description' => 'Payment error screen.',
    'section' => 'products',
], function () {
    ?>
    <section class="hero-surface">
        <div class="page-shell empty-state">
            <h1 class="page-title">Payment failed</h1>
            <p>Check the M-Pesa prompt, your balance, or try again. The flow should clearly explain what went wrong.</p>
            <div class="profile-actions" style="justify-content:center;">
                <a class="btn btn--primary" href="/frontend/checkout.php">Try again</a>
            </div>
        </div>
    </section>
    <?php
});
