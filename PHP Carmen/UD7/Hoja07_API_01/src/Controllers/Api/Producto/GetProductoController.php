<?php
declare(strict_types = 1);

namespace App\Controllers\Api\Producto;

use App\Entities\Producto;
use App\Responses\JsonResponse;

final class GetProductoController
{
    public function __invoke(int $id): void
    {
        $producto = new Producto();
        $prod = $producto->find($id);

        JsonResponse::response(data: $prod);
    }
}