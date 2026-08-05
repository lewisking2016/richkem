<?php
declare(strict_types=1);

function richkem_config(): array
{
    static $config = null;
    if ($config === null) {
        $config = require __DIR__ . '/config.php';
    }
    return $config;
}

function richkem_data(): array
{
    static $data = null;
    if ($data === null) {
        $data = require __DIR__ . '/site-data.php';
    }
    return $data;
}

function richkem_asset(string $path): string
{
    return '/assets/dist/' . ltrim($path, '/');
}

function richkem_url(string $path): string
{
    $path = '/' . ltrim($path, '/');
    return $path === '/index.php' ? '/' : $path;
}

function richkem_nav_links(string $section = 'home'): array
{
    return [
        ['label' => 'Home', 'href' => '/', 'active' => $section === 'home'],
        ['label' => 'Products', 'href' => '/frontend/search.php', 'active' => $section === 'products'],
        ['label' => 'Services', 'href' => '/frontend/profile.php', 'active' => $section === 'services'],
        ['label' => 'Sell', 'href' => '/merchant/apply.php', 'active' => $section === 'sell'],
        ['label' => 'Account', 'href' => '/frontend/login.php', 'active' => $section === 'account'],
    ];
}

function richkem_page(array $page, callable $renderer): void
{
    $page = array_merge([
        'title' => richkem_config()['app']['name'],
        'description' => richkem_config()['app']['tagline'],
        'section' => 'home',
        'bodyClass' => '',
    ], $page);

    ob_start();
    $renderer($page);
    $content = ob_get_clean();

    include __DIR__ . '/layout.php';
}
