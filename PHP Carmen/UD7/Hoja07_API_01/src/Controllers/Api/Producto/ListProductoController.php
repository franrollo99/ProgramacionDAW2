<?php
declare(strict_types = 1);

namespace App\Controllers\Api\Producto;

use App\Entities\Producto;
use App\Responses\JsonResponse;

final class ListProductoController
{
    public function __invoke(): void
    {
        $producto = new Producto();
        $productos = $producto->get();

        JsonResponse::response(data: $productos);
    }
}
