<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\InicioController;
use App\Http\Controllers\AnimalController;


Route::get('/', [InicioController::class, '__invoke'])->name('inicio');
