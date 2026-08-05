<?php
declare(strict_types=1);

require_once __DIR__ . '/backend/bootstrap.php';

richkem_page([
    'title' => 'Invoice | Richkem Services',
    'description' => 'Transaction invoice template.',
    'section' => 'home',
], function () {
    ?>
    <section class="hero-surface">
        <div class="page-shell">
            <p class="eyebrow-label">Invoice template</p>
            <h1 class="page-title">Transaction invoice</h1>
            <p class="page-lead">Use this page as the basis for printable invoices and payment records.</p>
        </div>
    </section>
    <section class="section">
        <div class="table-card">
            <table>
                <thead><tr><th>Item</th><th>Qty</th><th>Amount</th></tr></thead>
                <tbody>
                    <tr><td>Premium phone</td><td>1</td><td>KES 45,000</td></tr>
                    <tr><td>Delivery</td><td>1</td><td>KES 500</td></tr>
                </tbody>
            </table>
        </div>
    </section>
    <?php
});
