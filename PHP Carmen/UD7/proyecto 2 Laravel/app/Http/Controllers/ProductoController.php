<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Producto;
use App\Http\Resources\ProductoResource;
/**
 * @OA\Info(title="API Productos", version="1.0",description="API de productos",
 * @OA\Server(url="http://localhost:8000"),
 * @OA\Contact(email="email@gmail.com"))
 */
class ProductoController extends Controller
{
    public function index()
    {
        $productos = Producto::with('categoria')->get();
        
        return ProductoResource::collection($productos);
    }

    /**
     * Display the specified resource.
     */
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
     *   required=true,
     *   @OA\Schema(type="integer",example="1")
     *  ),
     *  @OA\Response(
     *  response=200,
     *  description="Producto encontrado",
     *  @OA\JsonContent(ref="#/components/schemas/Producto")
     * ),
     *  @OA\Response(
     *  response=404,
     *  description="Producto no encontrado"
     *  )
     * )
     */
    public function show(Producto $producto )
    {
        return new ProductoResource($producto->load('categoria'));

    }

    public function store(ProductoRequest $request)
    {
        try{
            $producto = new Producto();

            $producto->nombre = $request->nombre;

        }catch(\Exception $e){
            return redirect()->back()->with('error', 'Hubo un problema al guardar el producto: ' . $e->getMessage());
        }
    }
}
