<?php
declare(strict_types=1);

require_once __DIR__ . '/../repositories/CatalogRepository.php';

class CatalogService
{
    public function __construct(private readonly CatalogRepository $catalogRepository)
    {
    }

    public function search(string $query, string $scope = 'all'): array
    {
        $query = mb_strtolower($query);
        $items = $this->catalogRepository->all();

        return array_values(array_filter($items, static function (array $item) use ($query, $scope): bool {
            $text = mb_strtolower(implode(' ', [
                $item['title'] ?? '',
                $item['meta'] ?? '',
                $item['type'] ?? '',
            ]));

            $scopeMatch = $scope === 'all' || (($item['type'] ?? '') === $scope);
            $queryMatch = $query === '' || str_contains($text, $query);

            return $scopeMatch && $queryMatch;
        }));
    }

    public function featured(): array
    {
        return $this->catalogRepository->featured();
    }
}
