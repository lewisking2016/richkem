<?php
declare(strict_types=1);

require_once __DIR__ . '/../includes/bootstrap.php';

richkem_page([
    'title' => 'Bookings | Richkem Services',
    'description' => 'Incoming service bookings.',
    'section' => 'sell',
], function () {
    ?>
    <section class="hero-surface"><div class="page-shell"><h1 class="page-title">Bookings</h1></div></section>
    <section class="section flow">
        <article class="flow-card"><h3>Consultation</h3><p>Today at 10:00</p></article>
        <article class="flow-card"><h3>Site visit</h3><p>Today at 14:30</p></article>
        <article class="flow-card"><h3>Follow-up</h3><p>Tomorrow at 09:00</p></article>
    </section>
    <?php
});
