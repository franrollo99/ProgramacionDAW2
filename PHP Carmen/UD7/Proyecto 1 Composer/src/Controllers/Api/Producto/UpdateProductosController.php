<?php

declare(strict_types = 1);

namespace App\Controllers\Api\Producto;

use App\Entities\Producto;
use App\Responses\JsonResponse;

final class UpdateProductoController
{
    public function __invoke(int $id): void
    {
        $producto = new Producto();
        $datos = input()->all(); // Obtener los datos del formulario (JSON, POST, etc.)

        $actualizado = $producto->update($id, $datos);

        if ($actualizado) {
            JsonResponse::response(data: $producto->find($id));
        } else {
            JsonResponse::response(
                data: ['error' => 'No se pudo actualizar el producto'],
                status: 400
            );
        }
    }
}

?>