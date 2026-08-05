<?php
declare(strict_types=1);

require_once __DIR__ . '/../backend/bootstrap.php';

richkem_page([
    'title' => 'Buyer Registration | Richkem Services',
    'description' => 'Buyer registration form.',
    'section' => 'account',
], function () {
    ?>
    <section class="hero-surface">
        <div class="page-shell split-grid">
            <div>
                <p class="eyebrow-label">Buyer registration</p>
                <h1 class="page-title">Create your buyer account.</h1>
                <p class="page-lead">Keep it quick. A buyer should be able to register, verify contact details, and start browsing immediately.</p>
            </div>
            <form class="form">
                <label>Full name <input class="field" type="text"></label>
                <label>Email <input class="field" type="email"></label>
                <label>Phone <input class="field" type="tel"></label>
                <div class="profile-actions">
                    <a class="btn btn--primary" href="/index.php">Create buyer account</a>
                </div>
            </form>
        </div>
    </section>
    <?php
});
