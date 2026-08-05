<?php
declare(strict_types=1);

require_once __DIR__ . '/../backend/helpers.php';

$section = $section ?? 'home';
?>
<header class="site-header">
    <div class="site-header__inner">
        <a class="brand" href="<?= richkem_url('/') ?>">
            <span class="brand__mark" aria-hidden="true"><span>R</span></span>
            <span class="brand__text">
                <strong>Richkem Services</strong>
                <small>Products, services, and trusted storefronts</small>
            </span>
        </a>
        <nav class="site-nav" aria-label="Primary">
            <?php foreach (richkem_nav_links($section) as $link): ?>
                <a class="<?= $link['active'] ? 'is-active' : '' ?>" href="<?= htmlspecialchars($link['href'], ENT_QUOTES, 'UTF-8') ?>">
                    <?= htmlspecialchars($link['label'], ENT_QUOTES, 'UTF-8') ?>
                </a>
            <?php endforeach; ?>
        </nav>
        <div class="site-actions">
            <a class="btn btn--ghost" href="<?= richkem_url('/frontend/search.php') ?>">Browse</a>
            <a class="btn btn--primary" href="<?= richkem_url('/merchant/apply.php') ?>">Start selling</a>
        </div>
    </div>
</header>
