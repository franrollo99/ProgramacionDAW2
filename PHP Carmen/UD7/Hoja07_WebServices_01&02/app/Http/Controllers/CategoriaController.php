<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Categoria;
use App\Http\Resources\CategoriaResource;
use App\Http\Requests\CategoriaRequest;

class CategoriaController extends Controller
{

    /**
     * @OA\Get(
     *  path="/api/categorias",
     *  summary="Listado de categorias",
     *  description="Obtener un listado de categorias",
     *  operationId="indexCategoria",
     *  tags={"categorias"},
     *  @OA\Response(
     *      response=200,
     *      description="Listado de categorias",
     *      @OA\JsonContent(type="array", @OA\Items(ref="#/components/schemas/Categoria"))
     *  )
     * )
     */
    public function index()
    {
        $categorias = Categoria::all();

        return CategoriaResource::collection($categorias);
    }

    /**
     * @OA\Post(
     *  path="/api/categorias",
     *  summary="Crear una categoria",
     *  description="Crear una categoria",
     *  operationId="storeCategoria",
     *  tags={"categorias"},
     *  @OA\RequestBody(
     *      required=true,
     *      @OA\JsonContent(ref="#/components/schemas/CategoriaRequest")
     *  ),
     *  @OA\Response(
     *      response=201,
     *      description="Categoria creada",
     *      @OA\JsonContent(ref="#/components/schemas/Categoria")
     *  ),
     *  @OA\Response(response=422, description="Error de validación")
     * )
     */
    public function store(CategoriaRequest $request)
    {
        $categoria = Categoria::create($request->validated());

        return new CategoriaResource($categoria);
    }

    /**
     * @OA\Get(
     *  path="/api/categorias/{categoria}",
     *  summary="Mostrar una categoria",
     *  description="Obtener una categoria",
     *  operationId="showCategoria",
     *  tags={"categorias"},
     *  @OA\Parameter(
     *      name="categoria",
     *      in="path",
     *      description="ID de la categoria",
     *      required=true,
     *      @OA\Schema(type="integer")
     *  ),
     *  @OA\Response(
     *      response=200,
     *      description="Categoria",
     *      @OA\JsonContent(ref="#/components/schemas/Categoria")
     *  ),
     *  @OA\Response(response=404, description="Categoria no encontrada")
     * )
     */
    public function show(Categoria $categoria)
    {
        return new CategoriaResource($categoria);
    }

    /**
     * @OA\Put(
     *  path="/api/categorias/{categoria}",
     *  summary="Actualizar una categoria",
     *  description="Actualizar una categoria",
     *  operationId="updateCategoria",
     *  tags={"categorias"},
     *  @OA\Parameter(
     *      name="categoria",
     *      in="path",
     *      description="ID de la categoria",
     *      required=true,
     *      @OA\Schema(type="integer")
     *  ),
     *  @OA\RequestBody(
     *      required=true,
     *      @OA\JsonContent(ref="#/components/schemas/CategoriaRequest")
     *  ),
     *  @OA\Response(
     *      response=200,
     *      description="Categoria actualizada",
     *      @OA\JsonContent(ref="#/components/schemas/Categoria")
     *  ),
     *  @OA\Response(response=422, description="Error de validación")
     * )
     */
    public function update(CategoriaRequest $request, Categoria $categoria)
    {
        $categoria = Categoria::update($request->validated());

        return new CategoriaResource($categoria);
    }

    /**
     * @OA\Delete(
     *  path="/api/categorias/{categoria}",
     *  summary="Eliminar una categoria",
     *  description="Eliminar una categoria",
     *  operationId="destroyCategoria",
     *  tags={"categorias"},
     *  @OA\Parameter(
     *      name="categoria",
     *      in="path",
     *      description="ID de la categoria",
     *      required=true,
     *      @OA\Schema(type="integer")
     *  ),
     *  @OA\Response(
     *      response=200,
     *      description="Categoria eliminada",
     *      @OA\JsonContent(type="array", @OA\Items(type="string"))
     *  ),
     *  @OA\Response(response=404, description="Categoria no encontrada")
     * )
     */
    public function destroy(Categoria $categoria)
    {
        $categoria->delete();

        return response()->json(['message' => 'Categoria eliminada correctamente']);
    }
}
