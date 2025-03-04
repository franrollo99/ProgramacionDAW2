<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductoController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\LogoutController;

Route::post('login', LoginController::class);
Route::post('logout', [LogoutController::class, 'logout'])->middleware('auth:sanctum');

Route::apiResource('productos', ProductoController::class)->except(['store', 'update', 'destroy']);
Route::middleware('auth:sanctum')->group(function () {
    Route::post('productos', [ProductoController::class, 'store']);
    Route::put('productos/{producto}', [ProductoController::class, 'update']);
    Route::delete('productos/{producto}', [ProductoController::class, 'destroy']);
});
