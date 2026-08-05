<?php
declare(strict_types=1);

require_once __DIR__ . '/../includes/bootstrap.php';

richkem_page([
    'title' => 'Dashboard | Richkem Services',
    'description' => 'Buyer dashboard overview.',
    'section' => 'account',
], function () {
    ?>
    <section class="hero-surface">
        <div class="page-shell">
            <p class="eyebrow-label">Dashboard</p>
            <h1 class="page-title">Manage your purchases, escrows, and messages.</h1>
            <p class="page-lead">This is the buyer home base. It should surface the next action clearly, not bury the user in menus.</p>
        </div>
    </section>

    <section class="section dashboard-grid">
        <div class="kpi"><span>Active orders</span><strong>4</strong></div>
        <div class="kpi"><span>Escrows</span><strong>2</strong></div>
        <div class="kpi"><span>Unread messages</span><strong>18</strong></div>
    </section>

    <section class="section flow">
        <article class="flow-card"><h3>Recent purchase</h3><p>Premium phone waiting for delivery.</p></article>
        <article class="flow-card"><h3>Escrow job</h3><p>Plumbing repair pending confirmation.</p></article>
        <article class="flow-card"><h3>New lead</h3><p>Message from a seller about your quote.</p></article>
    </section>
    <?php
});
