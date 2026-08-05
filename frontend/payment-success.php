<?php
declare(strict_types=1);

require_once __DIR__ . '/../backend/bootstrap.php';

richkem_page([
    'title' => 'Payment Successful | Richkem Services',
    'description' => 'Successful payment confirmation screen.',
    'section' => 'products',
], function () {
    ?>
    <section class="hero-surface">
        <div class="page-shell empty-state">
            <h1 class="page-title">Payment successful</h1>
            <p>Your order has been confirmed. Escrow and order tracking can continue from here.</p>
            <div class="profile-actions" style="justify-content:center;">
                <a class="btn btn--primary" href="/frontend/search.php">Continue shopping</a>
            </div>
        </div>
    </section>
    <?php
});
