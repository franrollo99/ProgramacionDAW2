<?php
declare(strict_types = 1);

namespace App\Controllers\Api\Producto;

use App\Entities\Producto;
use App\Responses\JsonResponse;
use App\Request\ProductoRequest;

final class UpdateProductoController
{
    public function __invoke(int $id): void
    {
        $producto = new Producto();
        $request = new ProductoRequest(id: $id);

        $success = $producto->update(id: $id, data: $request->validated());

    if (!$success) {
        JsonResponse::response(data: ['error' => 'Error al actualizar producto'], status: 500);
        return;
    }

    JsonResponse::response(data: ['message' => 'Producto actualizado correctamente']);
    }

}