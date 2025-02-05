<?php

declare(strict_types = 1);
use Pecee\SimpleRouter\SimpleRouter as Router;
use App\Controllers\Api\ApiController;
use App\Controllers\Api\Producto\CreateProductoController;
use App\Controllers\Api\Producto\ListProductoController;
use App\Controllers\Api\Producto\GetProductoController;
use App\Controllers\Api\Producto\UpdateProductoController;
use App\Controllers\Api\Producto\DeleteProductoController;

// Añadimos un nuevo grupo con el prefijo productos e indicamos el espacio de nombres

Router::group(
    ['prefix' => 'api'],
    function (): void {
        Router::get('/', [ApiController::class,'__invoke']);

        Router::group(
            ['namespace' => 'Producto','prefix' => 'productos'],
            function (): void {
                Router::post('/', [CreateProductoController::class,'__invoke']);
                Router::get('/', [ListProductosController::class,'__invoke']);
                Router::get('/{$id}', [GetProductoController::class,'__invoke']);
                Router::put('/{$id}', [UpdateProductosController::class,'__invoke']);
                Router::delete('/{$id}', [DeleteProductosController::class,'__invoke']);
            }
        );
    }
);

?>