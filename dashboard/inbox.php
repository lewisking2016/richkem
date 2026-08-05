<?php
declare(strict_types=1);

require_once __DIR__ . '/../includes/bootstrap.php';

richkem_page([
    'title' => 'Inbox | Richkem Services',
    'description' => 'Messages and negotiations.',
    'section' => 'account',
], function () {
    ?>
    <section class="hero-surface"><div class="page-shell"><h1 class="page-title">Inbox</h1></div></section>
    <section class="section search-results">
        <article class="list-item"><div><div class="card__title">Dr. Amina Clinic</div><div class="list-item__meta">Appointment request sent 2h ago</div></div><a class="btn btn--ghost" href="/dashboard/chat.php?user=1">Open</a></article>
        <article class="list-item"><div><div class="card__title">Kijani Auto Garage</div><div class="list-item__meta">Quote discussion</div></div><a class="btn btn--ghost" href="/dashboard/chat.php?user=2">Open</a></article>
    </section>
    <?php
});
