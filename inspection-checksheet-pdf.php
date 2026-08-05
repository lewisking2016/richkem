<?php
declare(strict_types=1);

require_once __DIR__ . '/backend/bootstrap.php';

richkem_page([
    'title' => 'Inspection Checklist | Richkem Services',
    'description' => 'Inspection checksheet template.',
    'section' => 'home',
], function () {
    ?>
    <section class="hero-surface">
        <div class="page-shell">
            <p class="eyebrow-label">Inspection checksheet</p>
            <h1 class="page-title">Certified inspection record</h1>
            <p class="page-lead">Useful for vehicles, aviation, marine, and other high-value assets that need trust before purchase.</p>
        </div>
    </section>
    <section class="section">
        <div class="table-card">
            <table>
                <thead><tr><th>Check</th><th>Status</th><th>Notes</th></tr></thead>
                <tbody>
                    <tr><td>Engine</td><td><span class="badge badge--good">Pass</span></td><td>Good condition</td></tr>
                    <tr><td>Body</td><td><span class="badge badge--warn">Review</span></td><td>Minor wear</td></tr>
                    <tr><td>Documents</td><td><span class="badge badge--good">Pass</span></td><td>Matched seller</td></tr>
                </tbody>
            </table>
        </div>
    </section>
    <?php
});
