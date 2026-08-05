<?php
declare(strict_types=1);

require_once __DIR__ . '/../includes/bootstrap.php';

richkem_page([
    'title' => 'Merchant KYC | Richkem Services',
    'description' => 'Identity verification upload.',
    'section' => 'sell',
], function () {
    ?>
    <section class="hero-surface">
        <div class="page-shell split-grid">
            <div>
                <p class="eyebrow-label">Verification</p>
                <h1 class="page-title">Upload your documents.</h1>
            </div>
            <form class="form">
                <label>ID number <input class="field" type="text"></label>
                <label>Business document <input class="field" type="text"></label>
                <div class="profile-actions"><a class="btn btn--primary" href="/merchant/kyc-pending.php">Submit verification</a></div>
            </form>
        </div>
    </section>
    <?php
});
