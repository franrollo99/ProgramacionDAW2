<?php

namespace App\Http\Controllers;

use App\Models\Equipo;
use App\Http\Resources\EquipoResource;
use App\Http\Requests\EquipoRequest;
use App\Http\Requests\PatrocinadorRequest;
use Illuminate\Support\Facades\Auth;

class EquipoController extends Controller
{
    /**
     * @OA\Get(
     *     path="/api/equipos",
     *     summary="Muestra todos los equipos con sus centros y jugadores asociados",
     *     tags={"Equipos"},
     *     @OA\Response(
     *         response=200,
     *         description="Lista de equipos con centros y jugadores",
     *         @OA\JsonContent(type="array", @OA\Items(ref="#/components/schemas/Equipo"))
     *     )
     * )
     */
    public function index()
    {
        return EquipoResource::collection(Equipo::with('centro', 'jugadores')->get());
    }

    /**
     * @OA\Get(
     *     path="/api/equipos/{id}",
     *     summary="Muestra un equipo específico con su centro y jugadores asociados",
     *     tags={"Equipos"},
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         required=true,
     *         description="ID del equipo",
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Detalles del equipo",
     *         @OA\JsonContent(ref="#/components/schemas/Equipo")
     *     )
     * )
     */
    public function show(Equipo $equipo)
    {
        return new EquipoResource($equipo->load('centro', 'jugadores'));
    }

    /**
     * @OA\Post(
     *     path="/api/equipos",
     *     summary="Almacena un nuevo equipo",
     *     tags={"Equipos"},
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(ref="#/components/schemas/Equipo")
     *     ),
     *     @OA\Response(
     *         response=201,
     *         description="Equipo creado",
     *         @OA\JsonContent(ref="#/components/schemas/Equipo")
     *     )
     * )
     */
     public function store(EquipoRequest $request)
    {
        $equipo = Equipo::create($request->validated());

        return response()->json($equipo, 201);

        // $equipo = Equipo::create(array_merge($request->validated(), [
        //     'usuarioIdCreacion' => Auth::id(),
        //     'fechaCreacion' => now(),
        // ]));

        // return new EquipoResource($equipo);
    }

    /**
     * @OA\Put(
     *     path="/api/equipos/{id}",
     *     summary="Actualiza un equipo existente",
     *     tags={"Equipos"},
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         required=true,
     *         description="ID del equipo a actualizar",
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(ref="#/components/schemas/Equipo")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Equipo actualizado",
     *         @OA\JsonContent(ref="#/components/schemas/Equipo")
     *     )
     * )
     */
    public function update(EquipoRequest $request, Equipo $equipo)
    {
        $equipo->update(array_merge($request->validated(), [
            'usuarioIdActualizacion' => Auth::id(),
            'fechaActualizacion' => now(),
        ]));

        return new EquipoResource($equipo);
    }

    /**
     * @OA\Delete(
     *     path="/api/equipos/{id}",
     *     summary="Elimina un equipo",
     *     tags={"Equipos"},
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         required=true,
     *         description="ID del equipo a eliminar",
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Equipo eliminado"
     *     )
     * )
     */
    public function destroy(Equipo $equipo)
    {
        $equipo->delete();
        return response()->json(['message' => 'Equipo eliminado correctamente.'], 200);
    }

    /**
     * @OA\Post(
     *     path="/api/equipos/{id}/patrocinadores",
     *     summary="Asocia un patrocinador a un equipo",
     *     tags={"Equipos"},
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         required=true,
     *         description="ID del equipo",
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(ref="#/components/schemas/PatrocinadorRequest")
     *     ),
     *     @OA\Response(
     *         response=201,
     *         description="Patrocinador asociado al equipo"
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Error: Patrocinador ya asociado"
     *     )
     * )
     */
    public function asociarPatrocinador(PatrocinadorRequest $request, Equipo $equipo)
    {
        if ($equipo->patrocinadores()->where('patrocinador_id', $request->patrocinador_id)->exists()) {
            return response()->json(['message' => 'Este patrocinador ya está asociado al equipo.'], 400);
        }

        $equipo->patrocinadores()->attach($request->patrocinador_id, [
            'usuarioIdCreacion' => Auth::id(),
            'fechaCreacion' => now(),
        ]);

        return response()->json(['message' => 'Patrocinador asociado correctamente al equipo.'], 201);
    }

    /**
     * @OA\Delete(
     *     path="/api/equipos/{id}/patrocinadores",
     *     summary="Desasocia un patrocinador de un equipo",
     *     tags={"Equipos"},
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         required=true,
     *         description="ID del equipo",
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(ref="#/components/schemas/PatrocinadorRequest")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Patrocinador desasociado correctamente"
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Error: Patrocinador no asociado"
     *     )
     * )
     */
    public function desasociarPatrocinador(PatrocinadorRequest $request, Equipo $equipo)
    {
        if (!$equipo->patrocinadores()->where('patrocinador_id', $request->patrocinador_id)->exists()) {
            return response()->json(['message' => 'Este patrocinador no está asociado al equipo.'], 400);
        }

        $equipo->patrocinadores()->detach($request->patrocinador_id);

        return response()->json(['message' => 'Patrocinador desasociado correctamente.'], 200);
    }
}
