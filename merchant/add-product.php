<?php
declare(strict_types=1);

require_once __DIR__ . '/../includes/bootstrap.php';

richkem_page([
    'title' => 'Add Product | Richkem Services',
    'description' => 'Add a new product listing.',
    'section' => 'sell',
], function () {
    ?>
    <section class="hero-surface">
        <div class="page-shell split-grid">
            <div>
                <p class="eyebrow-label">New listing</p>
                <h1 class="page-title">Create a product listing.</h1>
            </div>
            <form class="form">
                <label>Title <input class="field" type="text"></label>
                <label>Category <input class="field" type="text"></label>
                <label>Price <input class="field" type="text"></label>
                <div class="profile-actions"><a class="btn btn--primary" href="/merchant/add-product-details.php">Continue</a></div>
            </form>
        </div>
    </section>
    <?php
});
