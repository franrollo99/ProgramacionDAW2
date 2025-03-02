<?php
/*directiva PHP modo estricto de tipos, comprobaciones más rigurosas en cuanto
que utilizan en las funciones y métodos, lo que ayuda a reducir errores con el
y mejorar la calidad y seguridad del código
*/
declare(strict_types=1);
use Pecee\SimpleRouter\SimpleRouter as Router;
use App\Controllers\Api\ApiController;
use App\Controllers\Api\Producto\{
    CreateProductoController, ListProductoController, GetProductoController, UpdateProductoController, DeleteProductoController
};

// definir un grupo de rutas para que todas responda con prefijo /api
// y que llamen al controlador ApiController al método invoke
Router::group(['prefix'=>'api'],function():void{
    Router::get('/',[ApiController::class,'__invoke']);

    //añadimos un nuevo grupo con el prefijo productos e indicamos el espacio de nombres
    Router::group(['namespace' => 'Producto', 'prefix' => 'productos'], function(): void{
        Router::post('/', [CreateProductoController::class, '__invoke']);
        Router::get('/', [ListProductoController::class, '__invoke']);
        Router::get('/{id}', [GetProductoController::class, '__invoke']);
        Router::put('/{id}', [UpdateProductoController::class, '__invoke']);
        Router::delete('/{id}', [DeleteProductoController::class, '__invoke']);
    });
});