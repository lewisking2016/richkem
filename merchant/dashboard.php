<?php
declare(strict_types=1);

require_once __DIR__ . '/../includes/bootstrap.php';

richkem_page([
    'title' => 'Merchant Dashboard | Richkem Services',
    'description' => 'Seller dashboard overview.',
    'section' => 'sell',
], function () {
    ?>
    <section class="hero-surface">
        <div class="page-shell">
            <p class="eyebrow-label">Merchant dashboard</p>
            <h1 class="page-title">Manage products, bookings, and trust from one place.</h1>
        </div>
    </section>

    <section class="section dashboard-grid">
        <div class="kpi"><span>Store visits</span><strong>12.8k</strong></div>
        <div class="kpi"><span>Open leads</span><strong>186</strong></div>
        <div class="kpi"><span>Wallet balance</span><strong>KES 84,200</strong></div>
    </section>

    <section class="section">
        <div class="table-card">
            <table>
                <thead>
                    <tr><th>Item</th><th>Status</th><th>Action</th></tr>
                </thead>
                <tbody>
                    <tr><td>Product listing</td><td><span class="badge badge--good">Live</span></td><td>Edit</td></tr>
                    <tr><td>Service profile</td><td><span class="badge badge--good">Live</span></td><td>Update</td></tr>
                    <tr><td>Inspection booking</td><td><span class="badge badge--warn">Pending</span></td><td>Review</td></tr>
                </tbody>
            </table>
        </div>
    </section>
    <?php
});
