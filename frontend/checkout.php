<?php
declare(strict_types=1);

require_once __DIR__ . '/../backend/bootstrap.php';

richkem_page([
    'title' => 'Checkout | Richkem Services',
    'description' => 'Secure checkout with M-Pesa-ready payments.',
    'section' => 'products',
], function () {
    ?>
    <section class="split-grid hero-surface">
        <div class="form">
            <h1 class="page-title">Checkout</h1>
            <p class="page-lead">Checkout should stay simple, clear, and safe. Keep the amount visible, keep the contact details visible, and use M-Pesa where possible.</p>
            <div class="form-grid">
                <label>Name <input class="field" type="text" placeholder="Full name"></label>
                <label>Phone <input class="field" type="tel" placeholder="+254..."></label>
                <label class="grid-span">Delivery address <textarea placeholder="Where should we deliver or meet?"></textarea></label>
            </div>
            <div class="profile-actions">
                <a class="btn btn--primary" href="/frontend/payment-success.php">Pay with M-Pesa</a>
                <a class="btn btn--ghost" href="/frontend/payment-failed.php">Simulate failure</a>
            </div>
        </div>
        <aside class="info-card">
            <h2>Order summary</h2>
            <div class="list">
                <div class="list-item"><span>Items</span><strong>KES 48,500</strong></div>
                <div class="list-item"><span>Payment method</span><strong>M-Pesa</strong></div>
                <div class="list-item"><span>Protection</span><strong>Escrow ready</strong></div>
            </div>
        </aside>
    </section>
    <?php
});
