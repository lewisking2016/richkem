<?php
declare(strict_types=1);

require_once __DIR__ . '/../includes/bootstrap.php';

richkem_page([
    'title' => 'Inventory | Richkem Services',
    'description' => 'Merchant inventory.',
    'section' => 'sell',
], function () {
    ?>
    <section class="hero-surface">
        <div class="page-shell">
            <h1 class="page-title">Inventory</h1>
        </div>
    </section>
    <section class="section">
        <div class="table-card">
            <table>
                <thead><tr><th>Item</th><th>Status</th><th>Price</th></tr></thead>
                <tbody>
                    <tr><td>Premium phone</td><td><span class="badge badge--good">Live</span></td><td>KES 45,000</td></tr>
                    <tr><td>Office chair</td><td><span class="badge badge--good">Live</span></td><td>KES 9,500</td></tr>
                    <tr><td>Car listing</td><td><span class="badge badge--warn">Draft</span></td><td>KES 450,000</td></tr>
                </tbody>
            </table>
        </div>
    </section>
    <?php
});
