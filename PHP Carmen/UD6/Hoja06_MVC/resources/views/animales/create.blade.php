@extends('layouts.plantilla')
@section('titulo', 'Zoologico-Crear animal')
@section('contenido')
<div class="flex flex-col justify-center items-center min-h-screen">
    <fieldset class="max-w-3xl w-full border border-gray-300 p-4 rounded-lg">
        <legend><h1 class="text-3xl font-bold underline">Crear animal</h1></legend>

        <form action="{{route('animales.store')}}" method="post" enctype="multipart/form-data" class="flex flex-col">
            @csrf

            <label for="especie">Especie</label>
            <input type="text" name="especie" id="especie" minlength="3" required>

            <label for="peso">Peso</label>
            <input type="number" name="peso" id="peso" step="0.1" required>

            <label for="altura">Altura</label>
            <input type="number" name="altura" id="altura" step="0.1" required>

            <label for="fechaNacimiento">Fecha de Nacimiento</label>
            <input type="date" name="fechaNacimiento" id="fechaNacimiento" required>

            <label for="imagen">Imagen</label>
            <input type="file" name="imagen" id="imagen" accept=".jpeg, .png, .jpg, .svg" required>

            <label for="alimentacion">Alimentacion</label>
            <input type="text" name="alimentacion" id="alimentacion">

            <label for="descripcion">Descripcion</label>
            <textarea name="descripcion" id="descripcion" cols="30" rows="10"></textarea>

            <input class="w-max px-2 border-2 border-blue-600 bg-blue-400 rounded my-3" type="submit" value="Crear">
        </form>
    </fieldset>

    <a class="w-max px-2 my-3 border-2 border-blue-600 bg-blue-400 rounded"  href="{{route('animales.index')}}">Volver a la pagina principal</a>
</div>
@endsection
