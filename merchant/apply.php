<?php
declare(strict_types=1);

require_once __DIR__ . '/../includes/bootstrap.php';

richkem_page([
    'title' => 'Merchant Application | Richkem Services',
    'description' => 'Create a seller account on Richkem Services.',
    'section' => 'sell',
], function () {
    ?>
    <section class="hero-surface">
        <div class="page-shell split-grid">
            <div>
                <p class="eyebrow-label">Sell on Richkem</p>
                <h1 class="page-title">Start your store and your public profile.</h1>
                <p class="page-lead">This should feel like a storefront setup, not a boring registration form.</p>
            </div>
            <form class="form">
                <label>Business name <input class="field" type="text"></label>
                <label>Category <input class="field" type="text"></label>
                <label>Phone <input class="field" type="tel"></label>
                <div class="profile-actions">
                    <a class="btn btn--primary" href="/merchant/dashboard.php">Create store</a>
                </div>
            </form>
        </div>
    </section>
    <?php
});
