<?php
declare(strict_types=1);

require_once __DIR__ . '/../bootstrap.php';

header('Content-Type: application/json; charset=utf-8');
echo json_encode([
    'ok' => true,
    'service' => richkem_config()['app']['name'],
    'status' => 'healthy',
    'timestamp' => gmdate('c'),
], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
