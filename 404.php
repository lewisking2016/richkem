<?php
http_response_code(404);
require __DIR__ . '/backend/bootstrap.php';
richkem_page([
    'title' => 'Page not found | Richkem Services',
    'description' => 'Custom 404 page.',
    'section' => 'home',
], function () {
    ?>
    <section class="hero-surface">
        <div class="page-shell empty-state">
            <h1 class="page-title">Page not found</h1>
            <p>The page you requested does not exist. Go back to the homepage or search the marketplace.</p>
            <div class="profile-actions" style="justify-content:center;">
                <a class="btn btn--primary" href="/">Go home</a>
                <a class="btn btn--ghost" href="/frontend/search.php">Search</a>
            </div>
        </div>
    </section>
    <?php
});
