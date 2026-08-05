<?php
declare(strict_types=1);

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH) ?? '/';

if ($uri === '/' || $uri === '/index.php') {
    require __DIR__ . '/index.php';
    return;
}

$path = __DIR__ . $uri;

if (is_file($path)) {
    return false;
}

if (is_file($path . '.php')) {
    require $path . '.php';
    return;
}

if (str_starts_with($uri, '/frontend/') || str_starts_with($uri, '/merchant/') || str_starts_with($uri, '/admin/')) {
    $file = __DIR__ . $uri;
    if (is_file($file)) {
        require $file;
        return;
    }
}

http_response_code(404);
require __DIR__ . '/404.php';
