<?php
declare(strict_types=1);

$pageTitle = $page['title'] ?? 'Richkem Services';
$pageDescription = $page['description'] ?? '';
$section = $page['section'] ?? 'home';
$bodyClass = trim('page ' . ($page['bodyClass'] ?? ''));
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?= htmlspecialchars($pageTitle, ENT_QUOTES, 'UTF-8') ?></title>
    <meta name="description" content="<?= htmlspecialchars($pageDescription, ENT_QUOTES, 'UTF-8') ?>">
    <meta name="theme-color" content="#0b1528">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Onest:wght@400;500;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="<?= richkem_asset('app.css') ?>">
    <script defer src="<?= richkem_asset('app.js') ?>"></script>
</head>
<body class="<?= htmlspecialchars($bodyClass, ENT_QUOTES, 'UTF-8') ?>">
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
    <main class="site-main <?= htmlspecialchars($page['mainClass'] ?? '', ENT_QUOTES, 'UTF-8') ?>">
        <?= $content ?>
    </main>
    <footer class="site-footer">
        <div class="site-footer__frame">
            <div class="site-footer__top">
                <div class="site-footer__brand">
                    <a class="brand brand--footer" href="<?= richkem_url('/') ?>">
                        <span class="brand__mark" aria-hidden="true"><span>R</span></span>
                        <span class="brand__text">
                            <strong>Richkem Services</strong>
                            <small>Marketplace design for Kenya</small>
                        </span>
                    </a>
                    <p>Products, services, and trusted business profiles in one place, built to feel faster, clearer, and more credible on mobile first.</p>
                    <div class="site-footer__badges" aria-label="Platform highlights">
                        <span class="tag">Verified sellers</span>
                        <span class="tag">M-Pesa ready</span>
                        <span class="tag">Escrow support</span>
                        <span class="tag">Map discovery</span>
                    </div>
                </div>

                <div class="site-footer__links">
                    <div>
                        <h3>Marketplace</h3>
                        <a href="<?= richkem_url('/frontend/search.php') ?>">Browse products</a>
                        <a href="<?= richkem_url('/frontend/profile.php') ?>">Service profiles</a>
                        <a href="<?= richkem_url('/frontend/category.php') ?>">Category pages</a>
                    </div>
                    <div>
                        <h3>Seller tools</h3>
                        <a href="<?= richkem_url('/merchant/apply.php') ?>">Create account</a>
                        <a href="<?= richkem_url('/merchant/dashboard.php') ?>">Dashboard</a>
                        <a href="<?= richkem_url('/merchant/business-profile.php') ?>">Business profile</a>
                    </div>
                    <div>
                        <h3>Support</h3>
                        <a href="<?= richkem_url('/frontend/checkout.php') ?>">Checkout flow</a>
                        <a href="<?= richkem_url('/frontend/search-map-view.php') ?>">Map search</a>
                        <a href="<?= richkem_url('/frontend/inspection-report-view.php') ?>">Inspection reports</a>
                    </div>
                    <div>
                        <h3>Contact</h3>
                        <a href="tel:+254700000000">Call support</a>
                        <a href="https://wa.me/254700000000" target="_blank" rel="noreferrer">WhatsApp</a>
                        <a href="mailto:hello@richkem.co.ke">hello@richkem.co.ke</a>
                    </div>
                </div>
            </div>

            <div class="site-footer__rail">
                <p>© <?= date('Y') ?> Richkem Services. Built for modern commerce, local services, and trusted storefronts.</p>
                <div class="site-footer__rail-links">
                    <a href="/frontend/login.php">Sign in</a>
                    <a href="/frontend/register.php">Create buyer account</a>
                    <a href="/merchant/apply.php">Start selling</a>
                </div>
            </div>
        </div>
    </footer>
</body>
</html>
