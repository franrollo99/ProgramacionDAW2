<?php

declare(strict_types = 1);

namespace App\Controllers\Api\Producto;

use App\Entities\Producto;
use App\Responses\JsonResponse;

final class DeleteProductoController
{
    public function __invoke(): void
    {
        $producto = new Producto();
        $borrado = $producto->delete($id);

        if ($borrado) {
            JsonResponse::response(data: ['success' => 'Producto eliminado']);
        } else {
            JsonResponse::response(
                data: ['error' => 'No se pudo eliminar el producto'],
                status: 400
            );
        }
    }
}

?>