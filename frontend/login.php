<?php
declare(strict_types=1);

require_once __DIR__ . '/../backend/bootstrap.php';

richkem_page([
    'title' => 'Sign In | Richkem Services',
    'description' => 'Login to Richkem Services.',
    'section' => 'account',
], function () {
    ?>
    <section class="hero-surface">
        <div class="page-shell split-grid">
            <div>
                <p class="eyebrow-label">Account</p>
                <h1 class="page-title">Sign in to your Richkem account.</h1>
                <p class="page-lead">Buyers and sellers should use the same clean sign-in flow, then land back on the right screen immediately.</p>
            </div>
            <form class="form">
                <label>Email or phone <input class="field" type="text"></label>
                <label>Password <input class="field" type="password"></label>
                <div class="profile-actions">
                    <a class="btn btn--primary" href="/index.php">Sign in</a>
                    <a class="btn btn--ghost" href="/frontend/register.php">Create account</a>
                </div>
            </form>
        </div>
    </section>
    <?php
});
