<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Producto;
use App\Http\Resources\ProductoResource;
use App\Http\Requests\ProductoRequest;

/**
 * @OA\Info(
 *     title="API Productos",
 *     version="1.0",
 *     description="API de productos",
 *     @OA\Server(url="http://localhost:8000"),
 *     @OA\Contact(email="email@gmail.com")
 * )
 *
 * @OA\SecurityScheme(
 *     type="http",
 *     description="Use a token to authenticate",
 *     name="Authorization",
 *     in="header",
 *     scheme="bearer",
 *     bearerFormat="JWT",
 *     securityScheme="bearerAuth"
 * )
 */
class ProductoController extends Controller
{
    /**
     * @OA\Get(
     *  path="/api/productos",
     *  summary="Listado de productos",
     *  description="Obtener un listado de productos",
     *  operationId="index",
     *  tags={"productos"},
     *  @OA\Response(
     *      response=200,
     *      description="Listado de productos",
     *      @OA\JsonContent(type="array", @OA\Items(ref="#/components/schemas/Producto"))
     *  )
     * )
     */
    public function index()
    {
        $productos = Producto::with('categoria')->get();

        return ProductoResource::collection($productos);
    }

    /**
     * @OA\Post(
     *  path="/api/productos",
     *  summary="Crear un producto",
     *  description="Crear un producto",
     *  operationId="store",
     *  tags={"productos"},
     *  security={{"bearerAuth":{}}},
     *
     *  @OA\RequestBody(
     *      required=true,
     *      description="Datos del producto",
     *      @OA\JsonContent(
     *          required={"nombre", "precio", "stock"},
     *          @OA\Property(property="nombre", type="string", example="Producto 1"),
     *          @OA\Property(property="descripcion", type="string", example="Descripción del producto"),
     *          @OA\Property(property="precio", type="number", format="float", example="10.5"),
     *          @OA\Property(property="stock", type="integer", example="10"),
     *          @OA\Property(property="categoria_id", type="integer", example="1")
     *      )
     *  ),
     *
     *  @OA\Response(response=201, description="Producto creado",
     *      @OA\JsonContent(ref="#/components/schemas/Producto")
     *  ),
     *  @OA\Response(response=422, description="Error de validación"),
     *  @OA\Response(response=401, description="No autorizado")
     * )
     */

    public function store(ProductoRequest $request)
    {
        $producto = Producto::create($request->validated());

        return new ProductoResource($producto);
    }

    /**
     * @OA\Get(
     *  path="/api/productos/{id}",
     *  summary="Obtener un producto",
     *  description="Obtener un producto por su id",
     *  operationId="show",
     *  tags={"productos"},
     *  @OA\Parameter(
     *      name="id",
     *      in="path",
     *      description="Id del producto",
     *      required=true,
     *      @OA\Schema(type="integer", example=1)
     *  ),
     *  @OA\Response(
     *      response=200,
     *      description="Producto encontrado",
     *      @OA\JsonContent(ref="#/components/schemas/Producto")
     *  ),
     *  @OA\Response(response=404, description="Producto no encontrado")
     * )
     */
    public function show(Producto $producto)
    {
        return new ProductoResource($producto);
    }

    /**
     * @OA\Put(
     *  path="/api/productos/{id}",
     *  summary="Actualizar un producto",
     *  description="Actualizar un producto existente",
     *  operationId="update",
     *  tags={"productos"},
     *  security={{"bearerAuth":{}}},
     *  @OA\Parameter(
     *      name="id",
     *      in="path",
     *      description="Id del producto",
     *      required=true,
     *      @OA\Schema(type="integer", example=1)
     *  ),
     *  @OA\RequestBody(
     *      required=true,
     *      @OA\JsonContent(ref="#/components/schemas/ProductoRequest")
     *  ),
     *  @OA\Response(
     *      response=200,
     *      description="Producto actualizado",
     *      @OA\JsonContent(ref="#/components/schemas/Producto")
     *  ),
     *  @OA\Response(response=404, description="Producto no encontrado"),
     *  @OA\Response(response=422, description="Error de validación"),
     *  @OA\Response(response=401, description="No autorizado")
     * )
     */
    public function update(ProductoRequest $request, Producto $producto)
    {
        $producto->update($request->validated());

        return new ProductoResource($producto);
    }

    /**
     * @OA\Delete(
     *  path="/api/productos/{id}",
     *  summary="Eliminar un producto",
     *  description="Eliminar un producto por su id",
     *  operationId="destroy",
     *  tags={"productos"},
     *  security={{"bearerAuth":{}}},
     *  @OA\Parameter(
     *      name="id",
     *      in="path",
     *      description="Id del producto",
     *      required=true,
     *      @OA\Schema(type="integer", example=1)
     *  ),
     *  @OA\Response(response=200, description="Producto eliminado"),
     *  @OA\Response(response=404, description="Producto no encontrado"),
     *  @OA\Response(response=401, description="No autorizado")
     * )
     */
    public function destroy(Producto $producto)
    {
        $producto->delete();

        return response()->json(['message' => 'Producto eliminado correctamente'], 200);
    }
}
