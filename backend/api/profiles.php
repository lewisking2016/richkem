<?php
declare(strict_types=1);

require_once __DIR__ . '/../bootstrap.php';

header('Content-Type: application/json; charset=utf-8');
echo json_encode([
    'ok' => true,
    'profiles' => richkem_data()['service_profiles'],
], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
