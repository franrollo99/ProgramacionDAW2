@extends('layouts.plantilla')
@section('titulo', 'Zoologico-Crear animal')
@section('contenido')
    <div class="flex flex-col justify-center items-center">
        <fieldset class="max-w-3xl w-full border border-gray-300 p-4 rounded-lg">
            <legend>
                <h1 class="text-3xl font-bold underline">Crear revision</h1>
            </legend>

            <form action="{{ route('revisiones.store', $animal) }}" method="post" class="flex flex-col">
                @csrf

                <label for="fecha">Fecha</label>
                <input type="date" name="fecha" id="fecha" placeholder="aaaa-mm-dd">

                <label for="descripcion">Descripcion</label>
                <textarea name="descripcion" id="descripcion" cols="30" rows="5" placeholder="Descripcion..."></textarea>

                <input class="w-max px-2 border-2 border-blue-600 bg-blue-400 rounded my-3" type="submit" value="Crear">
            </form>
        </fieldset>
        <div class="py-4 flex gap-10">
            <a class="w-max px-2 my-3 border-2 border-blue-600 bg-blue-400 rounded" href="{{ route('animales.index') }}">Volver
                a la pagina principal</a>
            <a class="w-max px-2 my-3 border-2 border-blue-600 bg-blue-400 rounded" href="{{ route('animales.show', $animal) }}">Volver
                a detalles del animal</a>
        </div>

    </div>
@endsection
