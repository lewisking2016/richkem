<?php
http_response_code(503);
require __DIR__ . '/backend/bootstrap.php';

richkem_page([
    'title' => 'Maintenance | Richkem Services',
    'description' => 'Maintenance mode.',
    'section' => 'home',
], function () {
    ?>
    <section class="hero-surface">
        <div class="page-shell empty-state">
            <h1 class="page-title">We'll be back shortly</h1>
            <p>The platform is undergoing maintenance.</p>
        </div>
    </section>
    <?php
});
