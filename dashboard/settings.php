<?php
declare(strict_types=1);

require_once __DIR__ . '/../includes/bootstrap.php';

richkem_page([
    'title' => 'Settings | Richkem Services',
    'description' => 'Account settings.',
    'section' => 'account',
], function () {
    ?>
    <section class="hero-surface">
        <div class="page-shell split-grid">
            <div>
                <p class="eyebrow-label">Settings</p>
                <h1 class="page-title">Update your profile and contact details.</h1>
            </div>
            <form class="form">
                <label>Name <input class="field" type="text" value="Richkem User"></label>
                <label>Phone <input class="field" type="tel" value="+254700000000"></label>
                <label>Address <input class="field" type="text" value="Nairobi, Kenya"></label>
                <div class="profile-actions"><a class="btn btn--primary" href="/dashboard/index.php">Save settings</a></div>
            </form>
        </div>
    </section>
    <?php
});
