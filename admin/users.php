<?php
declare(strict_types=1);

require_once __DIR__ . '/../includes/bootstrap.php';

richkem_page([
    'title' => 'Users | Richkem Services',
    'description' => 'Platform user directory.',
    'section' => 'sell',
], function () {
    ?>
    <section class="hero-surface"><div class="page-shell"><h1 class="page-title">Users</h1></div></section>
    <section class="section">
        <div class="table-card">
            <table>
                <thead><tr><th>Name</th><th>Role</th><th>Status</th></tr></thead>
                <tbody>
                    <tr><td>Amina K.</td><td>Merchant</td><td><span class="badge badge--good">Active</span></td></tr>
                    <tr><td>Joseph M.</td><td>Buyer</td><td><span class="badge badge--good">Active</span></td></tr>
                </tbody>
            </table>
        </div>
    </section>
    <?php
});
