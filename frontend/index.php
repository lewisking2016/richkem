<?php
declare(strict_types=1);

require_once __DIR__ . '/../backend/bootstrap.php';

$data = richkem_data();
$featuredProducts = $data['featured_products'];
$serviceProfiles = $data['service_profiles'];
$stats = $data['stats'];
$productCategories = $data['product_categories'];
$serviceCategories = $data['service_categories'];

richkem_page([
    'title' => 'Richkem Services | Products, services, and trusted storefronts',
    'description' => 'Richkem Services is a premium marketplace for products and services in Kenya, built with trusted profiles, M-Pesa-ready selling, and modern storefront tools.',
    'section' => 'home',
], function () use ($featuredProducts, $serviceProfiles, $stats, $productCategories, $serviceCategories) {
    require __DIR__ . '/home-content.php';
});
