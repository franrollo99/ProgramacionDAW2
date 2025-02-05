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
        $request = new ProductoRequest(id:$id);
        if(!$producto->finde(id:$id)){
            JsonResponse::response(data:$message('Producto no encontrado')); // ???????????
        }



        JsonResponse::response(data:$producto->find(id:(int) $productoId));
    }
}

?>