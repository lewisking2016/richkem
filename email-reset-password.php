<?php
declare(strict_types=1);

require_once __DIR__ . '/backend/bootstrap.php';

richkem_page([
    'title' => 'Reset Password Email | Richkem Services',
    'description' => 'Password reset email template.',
    'section' => 'home',
], function () {
    ?>
    <section class="hero-surface">
        <div class="page-shell empty-state">
            <h1 class="page-title">Reset your password</h1>
            <p>Click the reset link to create a new password for your Richkem account.</p>
        </div>
    </section>
    <?php
});
