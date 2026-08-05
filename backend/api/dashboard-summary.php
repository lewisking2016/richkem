<?php
declare(strict_types=1);

require_once __DIR__ . '/../bootstrap.php';

header('Content-Type: application/json; charset=utf-8');
echo json_encode([
    'ok' => true,
    'summary' => [
        'activeOrders' => 4,
        'escrows' => 2,
        'messages' => 18,
        'merchantVisits' => 12800,
    ],
], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
