<?php
declare(strict_types=1);

require_once __DIR__ . '/../includes/bootstrap.php';

richkem_page([
    'title' => 'Escrows | Richkem Services',
    'description' => 'Escrow management screen.',
    'section' => 'sell',
], function () {
    ?>
    <section class="hero-surface"><div class="page-shell"><h1 class="page-title">Escrows</h1></div></section>
    <section class="section">
        <div class="table-card">
            <table>
                <thead><tr><th>Transaction</th><th>Status</th><th>Amount</th></tr></thead>
                <tbody>
                    <tr><td>ESC-001</td><td><span class="badge badge--warn">Held</span></td><td>KES 49,000</td></tr>
                    <tr><td>ESC-002</td><td><span class="badge badge--good">Released</span></td><td>KES 84,200</td></tr>
                </tbody>
            </table>
        </div>
    </section>
    <?php
});
