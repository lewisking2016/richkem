<?php
declare(strict_types=1);

require_once __DIR__ . '/../backend/bootstrap.php';

richkem_page([
    'title' => 'Inspection Report | Richkem Services',
    'description' => 'Certified inspection and checklist view.',
    'section' => 'products',
], function () {
    ?>
    <section class="hero-surface">
        <div class="page-shell">
            <p class="eyebrow-label">Inspection report</p>
            <h1 class="page-title">Certified checklist for serious buyers.</h1>
            <p class="page-lead">Use this page for inspection documents, verification, and proof that buyers can inspect before they commit.</p>
        </div>
    </section>

    <section class="section">
        <div class="table-card">
            <table>
                <thead>
                    <tr><th>Item</th><th>Status</th><th>Notes</th></tr>
                </thead>
                <tbody>
                    <tr><td>Documents</td><td><span class="badge badge--good">Verified</span></td><td>Original documents available</td></tr>
                    <tr><td>Condition</td><td><span class="badge badge--warn">Review</span></td><td>Physical inspection recommended</td></tr>
                    <tr><td>Ownership</td><td><span class="badge badge--good">Verified</span></td><td>Seller identity matched</td></tr>
                </tbody>
            </table>
        </div>
    </section>
    <?php
});
