<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\InicioController;
use App\Http\Controllers\AnimalController;
use App\Http\Controllers\RevisionController;
use App\Http\Controllers\CuidadorController;
use App\Http\Controllers\TitulacionController;

// Route::get('/', function () {
//     return view('welcome');
// });

// Route::get('/', function () {
//     return view('welcome');
// });

// Route::get('/', function () {
//     return 'Pantalla principal';
// });

// Route::get('/animales', function () {
//     return 'Listado de animales';
// });

// Route::get('animales/{aniamal}', function ($animal) {
//     return 'Vista en detalle del animal ' .$animal;
// });

// Route::get('/animales/crear', function () {
//     return 'Añadir un animal';
// });

// Route::get('/animales/{animal}/editar', function ($animal) {
//     return 'Modificar el animal ' .$animal;
// });

Route::get('/', [InicioController::class, '__invoke'])->name('inicio');

Route::get('animales', [AnimalController::class, 'index'])->name('animales.index');
Route::get('animales/crear', [AnimalController::class, 'create'])->name('animales.create')->middleware('auth');
Route::get('animales/{animal}', [AnimalController::class, 'show'])->name('animales.show');
Route::get('animales/{animal}/editar', [AnimalController::class, 'edit'])->name('animales.edit')->middleware('auth');
Route::get('revisiones/{animal}/crear', [RevisionController::class, 'create'])->name('revisiones.create');
Route::get('cuidadores/{cuidador}', [CuidadorController::class, 'show'])->name('cuidadores.show');
Route::get('titulaciones/{titulacion}', [TitulacionController::class, 'show'])->name('titulos.show');

// Usar @csrf en los formularios que envien datos mediante POST, PUT, PATCH, DELETE
Route::post('animales', [AnimalController::class, 'store'])->name('animales.store');
Route::put('animales/{animal}', [AnimalController::class, 'update'])->name('animales.update');
Route::post('animales/{animal}', [RevisionController::class, 'store'])->name('revisiones.store');


Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return view('dashboard');
    })->name('dashboard');
});
