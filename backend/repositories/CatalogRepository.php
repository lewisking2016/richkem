<?php
declare(strict_types=1);

class CatalogRepository
{
    private array $data;

    public function __construct()
    {
        $this->data = richkem_data();
    }

    public function all(): array
    {
        return array_map(static function (array $item): array {
            return $item + ['type' => 'product'];
        }, $this->data['featured_products']);
    }

    public function featured(): array
    {
        return $this->data['featured_products'];
    }

    public function profiles(): array
    {
        return $this->data['service_profiles'];
    }

    public function categories(): array
    {
        return [
            'products' => $this->data['product_categories'],
            'services' => $this->data['service_categories'],
        ];
    }
}
