<?php
declare(strict_types=1);

require_once __DIR__ . '/../includes/bootstrap.php';

richkem_page([
    'title' => 'User Detail | Richkem Services',
    'description' => 'User profile detail.',
    'section' => 'sell',
], function () {
    ?>
    <section class="hero-surface"><div class="page-shell"><h1 class="page-title">User detail</h1></div></section>
    <section class="section flow">
        <article class="flow-card"><h3>Account</h3><p>Basic identity and role.</p></article>
        <article class="flow-card"><h3>Logs</h3><p>Activity and moderation records.</p></article>
        <article class="flow-card"><h3>Actions</h3><p>Ban, verify, or reset account access.</p></article>
    </section>
    <?php
});
