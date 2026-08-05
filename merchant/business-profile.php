<?php
declare(strict_types=1);

require_once __DIR__ . '/../includes/bootstrap.php';

richkem_page([
    'title' => 'Business Profile Editor | Richkem Services',
    'description' => 'Edit the public business profile.',
    'section' => 'sell',
], function () {
    ?>
    <section class="hero-surface">
        <div class="page-shell split-grid">
            <div>
                <p class="eyebrow-label">Business profile editor</p>
                <h1 class="page-title">Edit your public business profile.</h1>
                <p class="page-lead">This is the Google Business Profile side of the platform, but inside Richkem.</p>
            </div>
            <form class="form">
                <label>Business description <textarea></textarea></label>
                <label>Hours <input class="field" type="text" placeholder="Mon - Sat, 8am - 6pm"></label>
                <div class="profile-actions"><a class="btn btn--primary" href="/frontend/profile.php">Save profile</a></div>
            </form>
        </div>
    </section>
    <?php
});
