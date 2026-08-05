<?php
declare(strict_types=1);

require_once __DIR__ . '/../includes/bootstrap.php';

richkem_page([
    'title' => 'Admin Dashboard | Richkem Services',
    'description' => 'Admin overview.',
    'section' => 'sell',
], function () {
    ?>
    <section class="hero-surface">
        <div class="page-shell">
            <p class="eyebrow-label">Admin</p>
            <h1 class="page-title">Platform control center.</h1>
        </div>
    </section>

    <section class="section dashboard-grid">
        <div class="kpi"><span>Users</span><strong>48k</strong></div>
        <div class="kpi"><span>Escrows</span><strong>120</strong></div>
        <div class="kpi"><span>Disputes</span><strong>14</strong></div>
    </section>

    <section class="section">
        <div class="table-card">
            <table>
                <thead><tr><th>Queue</th><th>Status</th><th>Next step</th></tr></thead>
                <tbody>
                    <tr><td>KYC verification</td><td><span class="badge badge--warn">Review</span></td><td>Approve</td></tr>
                    <tr><td>Escrow release</td><td><span class="badge badge--good">Ready</span></td><td>Release</td></tr>
                    <tr><td>Dispute case</td><td><span class="badge badge--bad">Urgent</span></td><td>Adjudicate</td></tr>
                </tbody>
            </table>
        </div>
    </section>
    <?php
});
