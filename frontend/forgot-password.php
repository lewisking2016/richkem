<?php
declare(strict_types=1);

require_once __DIR__ . '/../backend/bootstrap.php';

richkem_page([
    'title' => 'Forgot Password | Richkem Services',
    'description' => 'Password recovery request screen.',
    'section' => 'account',
], function () {
    ?>
    <section class="hero-surface">
        <div class="page-shell split-grid">
            <div>
                <p class="eyebrow-label">Recovery</p>
                <h1 class="page-title">Reset your password.</h1>
                <p class="page-lead">Use email or phone recovery, then route the user to the reset screen quickly and clearly.</p>
            </div>
            <form class="form">
                <label>Email or phone <input class="field" type="text"></label>
                <div class="profile-actions">
                    <a class="btn btn--primary" href="/frontend/reset-password.php">Send reset link</a>
                </div>
            </form>
        </div>
    </section>
    <?php
});
