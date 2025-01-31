<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\InicioController;
use App\Http\Controllers\AnimalController;


Route::get('/', [InicioController::class, '__invoke'])->name('inicio');

Route::get('animales', [AnimalController::class, 'index'])->name('animales.index');
Route::get('animales/crear', [AnimalController::class, 'create'])->name('animales.create')->middleware('auth');
Route::get('animales/{animal}', [AnimalController::class, 'show'])->name('animales.show');
Route::get('animales/{animal}/editar', [AnimalController::class, 'edit'])->name('animales.edit')->middleware('auth');
Route::post('animales', [AnimalController::class, 'store'])->name('animales.store');
Route::put('animales/{animal}', [AnimalController::class, 'update'])->name('animales.update');

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return view('dashboard');
    })->name('dashboard');
});
