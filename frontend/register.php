<?php
declare(strict_types=1);

require_once __DIR__ . '/../backend/bootstrap.php';

richkem_page([
    'title' => 'Register | Richkem Services',
    'description' => 'Choose whether to create a buyer or seller account.',
    'section' => 'account',
], function () {
    ?>
    <section class="hero-surface">
        <div class="page-shell">
            <p class="eyebrow-label">Create account</p>
            <h1 class="page-title">Choose the account type that fits how you use Richkem.</h1>
        </div>
    </section>

    <section class="section flow">
        <article class="flow-card">
            <h3>Buyer account</h3>
            <p>Browse products, contact sellers, and manage purchases in one place.</p>
            <div class="profile-actions"><a class="btn btn--primary" href="/frontend/register-buyer.php">Start as buyer</a></div>
        </article>
        <article class="flow-card">
            <h3>Seller account</h3>
            <p>Create a storefront, publish products, and manage service profiles.</p>
            <div class="profile-actions"><a class="btn btn--primary" href="/merchant/apply.php">Start as seller</a></div>
        </article>
        <article class="flow-card">
            <h3>Professional account</h3>
            <p>Show services, opening hours, contact info, and trust badges.</p>
            <div class="profile-actions"><a class="btn btn--ghost" href="/frontend/profile.php">Preview profile</a></div>
        </article>
    </section>
    <?php
});
