<?php
declare(strict_types=1);

require_once __DIR__ . '/../includes/bootstrap.php';

richkem_page([
    'title' => 'Product Details | Richkem Services',
    'description' => 'Category-specific product attributes.',
    'section' => 'sell',
], function () {
    ?>
    <section class="hero-surface">
        <div class="page-shell">
            <h1 class="page-title">Add details that match the category.</h1>
        </div>
    </section>
    <section class="section flow">
        <article class="flow-card"><h3>Dynamic fields</h3><p>Use different attributes for phones, cars, ships, and other categories.</p></article>
        <article class="flow-card"><h3>Images</h3><p>Add clear photographs and verification images.</p></article>
        <article class="flow-card"><h3>Publish</h3><p>Set visibility, shipping, and trust tags.</p></article>
    </section>
    <?php
});
