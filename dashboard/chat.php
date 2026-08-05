<?php
declare(strict_types=1);

require_once __DIR__ . '/../includes/bootstrap.php';

$userId = $_GET['user'] ?? '1';

richkem_page([
    'title' => 'Chat | Richkem Services',
    'description' => 'Direct negotiation chat.',
    'section' => 'account',
], function () use ($userId) {
    ?>
    <section class="hero-surface">
        <div class="page-shell split-grid">
            <div>
                <p class="eyebrow-label">Chat</p>
                <h1 class="page-title">Conversation with seller #<?= htmlspecialchars((string) $userId, ENT_QUOTES, 'UTF-8') ?></h1>
                <p class="page-lead">This should feel like a simple negotiation thread, not a complicated messaging product.</p>
            </div>
            <div class="stack">
                <div class="info-card"><strong>Offer received</strong><p>KES 45,000, valid for 24 hours.</p></div>
                <div class="info-card"><strong>Reply</strong><p>Ask for delivery or inspection details before you confirm.</p></div>
            </div>
        </div>
    </section>
    <?php
});
