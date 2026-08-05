<?php
declare(strict_types=1);

require_once __DIR__ . '/backend/bootstrap.php';

richkem_page([
    'title' => 'SMS Verification | Richkem Services',
    'description' => 'Phone verification SMS template.',
    'section' => 'home',
], function () {
    ?>
    <section class="hero-surface">
        <div class="page-shell empty-state">
            <h1 class="page-title">One-time verification code</h1>
            <p>Your Richkem code is 482913. It expires in 10 minutes.</p>
        </div>
    </section>
    <?php
});
