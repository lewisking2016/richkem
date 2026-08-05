<?php
http_response_code(500);
require __DIR__ . '/backend/bootstrap.php';
richkem_page([
    'title' => 'Server Error | Richkem Services',
    'description' => 'Internal server error.',
    'section' => 'home',
], function () {
    ?>
    <section class="hero-surface">
        <div class="page-shell empty-state">
            <h1 class="page-title">Something went wrong</h1>
            <p>Please try again or return to the homepage.</p>
        </div>
    </section>
    <?php
});
