<?php
declare(strict_types=1);

require_once __DIR__ . '/../includes/bootstrap.php';

richkem_page([
    'title' => 'Orders | Richkem Services',
    'description' => 'Buyer order history.',
    'section' => 'account',
], function () {
    ?>
    <section class="hero-surface"><div class="page-shell"><h1 class="page-title">Orders</h1></div></section>
    <section class="section">
        <div class="table-card">
            <table>
                <thead><tr><th>Order</th><th>Status</th><th>Amount</th></tr></thead>
                <tbody>
                    <tr><td>#2026-1001</td><td><span class="badge badge--good">Delivered</span></td><td>KES 45,000</td></tr>
                    <tr><td>#2026-1002</td><td><span class="badge badge--warn">In transit</span></td><td>KES 11,200</td></tr>
                    <tr><td>#2026-1003</td><td><span class="badge badge--good">Completed</span></td><td>KES 3,500</td></tr>
                </tbody>
            </table>
        </div>
    </section>
    <?php
});
