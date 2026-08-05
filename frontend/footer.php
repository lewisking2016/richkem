<?php
declare(strict_types=1);

require_once __DIR__ . '/../backend/helpers.php';
?>
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
