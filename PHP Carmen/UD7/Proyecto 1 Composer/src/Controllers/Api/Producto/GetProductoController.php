<?php

declare(strict_types = 1);

namespace App\Controllers\Api\Producto;

use App\Entities\Producto;
use App\Responses\JsonResponse;

final class GetProductoController
{
    public function __invoke(): void
    {
        $producto = new Producto();
        $result = $producto->find($id); // Buscar producto por ID

        if ($result) {
            JsonResponse::response(data: $result);
        } else {
            JsonResponse::response(
                data: ['error' => 'Producto no encontrado'],
                status: 404
            );
        }
    }
}

?>