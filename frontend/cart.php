<?php
declare(strict_types=1);

require_once __DIR__ . '/../backend/bootstrap.php';

richkem_page([
    'title' => 'Cart | Richkem Services',
    'description' => 'Unified shopping cart for products and services.',
    'section' => 'products',
], function () {
    ?>
    <section class="split-grid hero-surface">
        <div class="search-results">
            <div class="list-item">
                <div>
                    <div class="card__title">Premium phone</div>
                    <div class="list-item__meta">1 item, color black</div>
                </div>
                <strong>KES 45,000</strong>
            </div>
            <div class="list-item">
                <div>
                    <div class="card__title">Installation service</div>
                    <div class="list-item__meta">Mounting and setup</div>
                </div>
                <strong>KES 3,500</strong>
            </div>
        </div>
        <div class="info-card">
            <h2>Order summary</h2>
            <div class="list">
                <div class="list-item"><span>Subtotal</span><strong>KES 48,500</strong></div>
                <div class="list-item"><span>Delivery</span><strong>KES 500</strong></div>
                <div class="list-item"><span>Total</span><strong>KES 49,000</strong></div>
            </div>
            <div class="profile-actions">
                <a class="btn btn--primary" href="/frontend/checkout.php">Proceed to checkout</a>
            </div>
        </div>
    </section>
    <?php
});
