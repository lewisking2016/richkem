<?php
declare(strict_types=1);

require_once __DIR__ . '/../bootstrap.php';
require_once __DIR__ . '/../repositories/CatalogRepository.php';
require_once __DIR__ . '/../services/CatalogService.php';
require_once __DIR__ . '/../controllers/SearchController.php';

(new SearchController(new CatalogService(new CatalogRepository())))->index();
