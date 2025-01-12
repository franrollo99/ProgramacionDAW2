<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\InicioController;
use App\Http\Controllers\AnimalController;

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

Route::get('animales', [AnimalController::class, 'index'])->name('animal.index');
Route::get('animales/crear', [AnimalController::class, 'create'])->name('animal.create');
Route::get('animales/{animal}', [AnimalController::class, 'show'])->name('animal.show');
Route::get('animales/{animal}/editar', [AnimalController::class, 'edit'])->name('animal.edit');