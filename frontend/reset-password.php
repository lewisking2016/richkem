<?php
declare(strict_types=1);

require_once __DIR__ . '/../backend/bootstrap.php';

richkem_page([
    'title' => 'Reset Password | Richkem Services',
    'description' => 'Reset password screen.',
    'section' => 'account',
], function () {
    ?>
    <section class="hero-surface">
        <div class="page-shell split-grid">
            <div>
                <p class="eyebrow-label">New password</p>
                <h1 class="page-title">Create a new password.</h1>
                <p class="page-lead">Keep recovery simple and secure so users can get back into the marketplace without confusion.</p>
            </div>
            <form class="form">
                <label>New password <input class="field" type="password"></label>
                <label>Confirm password <input class="field" type="password"></label>
                <div class="profile-actions">
                    <a class="btn btn--primary" href="/frontend/login.php">Update password</a>
                </div>
            </form>
        </div>
    </section>
    <?php
});
