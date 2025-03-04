<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LogoutController extends Controller
{
    /**
     * @OA\Post(
     *  path="/api/logout",
     *  summary="Cerrar sesión",
     *  description="Cerrar sesión y eliminar el token",
     *  operationId="logout",
     *  tags={"auth"},
     *  security={{"bearerAuth":{}}},
     *  @OA\Response(response=200, description="Sesión cerrada correctamente"),
     *  @OA\Response(response=401, description="No autorizado")
     * )
     */
    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();

        return response()->json(['message' => 'Sesión cerrada correctamente'], 200);
    }
}
