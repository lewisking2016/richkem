<?php
declare(strict_types=1);

require_once __DIR__ . '/BaseController.php';
require_once __DIR__ . '/../services/CatalogService.php';

class SearchController extends BaseController
{
    public function __construct(private readonly CatalogService $catalogService)
    {
    }

    public function index(): void
    {
        $query = trim((string) ($_GET['q'] ?? ''));
        $scope = trim((string) ($_GET['scope'] ?? 'all'));
        $results = $this->catalogService->search($query, $scope);

        $this->respond([
            'ok' => true,
            'query' => $query,
            'scope' => $scope,
            'results' => $results,
        ]);
    }
}
