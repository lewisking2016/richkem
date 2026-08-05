<?php
declare(strict_types=1);

require_once __DIR__ . '/../includes/bootstrap.php';

richkem_page([
    'title' => 'Admin Login | Richkem Services',
    'description' => 'Admin sign-in.',
    'section' => 'sell',
], function () {
    ?>
    <section class="hero-surface">
        <div class="page-shell split-grid">
            <div>
                <p class="eyebrow-label">Admin sign-in</p>
                <h1 class="page-title">Access platform controls.</h1>
            </div>
            <form class="form">
                <label>Email <input class="field" type="email"></label>
                <label>Password <input class="field" type="password"></label>
                <div class="profile-actions"><a class="btn btn--primary" href="/admin/dashboard.php">Sign in</a></div>
            </form>
        </div>
    </section>
    <?php
});
