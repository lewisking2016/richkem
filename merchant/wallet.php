<?php
declare(strict_types=1);

require_once __DIR__ . '/../includes/bootstrap.php';

richkem_page([
    'title' => 'Wallet | Richkem Services',
    'description' => 'Merchant wallet screen.',
    'section' => 'sell',
], function () {
    ?>
    <section class="hero-surface">
        <div class="page-shell dashboard-grid">
            <div class="kpi"><span>Available balance</span><strong>KES 84,200</strong></div>
            <div class="kpi"><span>Pending release</span><strong>KES 21,000</strong></div>
            <div class="kpi"><span>Payouts</span><strong>7</strong></div>
        </div>
    </section>
    <?php
});
