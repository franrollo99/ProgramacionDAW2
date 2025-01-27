@extends('layouts.plantilla')
@section('titulo', 'Zoologico-Crear animal')
@section('contenido')
    <div class="flex flex-col justify-center items-center">
        <fieldset class="max-w-3xl w-full border border-gray-300 p-4 rounded-lg">
            <legend>
                <h1 class="text-3xl font-bold underline">Crear animal</h1>
            </legend>

            {{-- ponemos enctype="multipart/form-data" porque vamos a subir imagenes --}}
            <form action="{{ route('animales.store') }}" method="post" enctype="multipart/form-data" class="flex flex-col">
                @csrf

                <label for="especie">Especie</label>
                <input type="text" name="especie" id="especie" placeholder="Animal">
                @error('especie')
                    <span class="text-red-500">{{$message}}</span>
                @enderror

                <label for="peso">Peso</label>
                <input type="string" name="peso" id="peso" placeholder="00.0">
                @error('peso')
                    <span class="text-red-500">{{$message}}</span>
                @enderror

                <label for="altura">Altura</label>
                <input type="string" name="altura" id="altura" placeholder="00.0">
                @error('altura')
                    <span class="text-red-500">{{$message}}</span>
                @enderror

                <label for="fechaNacimiento">Fecha de Nacimiento</label>
                <input type="string" name="fechaNacimiento" id="fechaNacimiento" placeholder="aaaa-mm-dd">
                @error('fechaNacimiento')
                    <span class="text-red-500">{{$message}}</span>
                @enderror

                <label for="imagen">Imagen</label>
                <input type="file" name="imagen" id="imagen">
                @error('imagen')
                    <span class="text-red-500">{{$message}}</span>
                @enderror

                <label for="alimentacion">Alimentacion</label>
                <input type="text" name="alimentacion" id="alimentacion" placeholder="Carnívoro/Herbívoro">

                <label for="descripcion">Descripcion</label>
                <textarea name="descripcion" id="descripcion" cols="30" rows="5" placeholder="Descripcion..."></textarea>

                <input class="w-max px-2 border-2 border-blue-600 bg-blue-400 rounded my-3" type="submit" value="Crear">
            </form>
        </fieldset>

        <a class="w-max px-2 my-3 border-2 border-blue-600 bg-blue-400 rounded" href="{{ route('animales.index') }}">Volver
            a la pagina principal</a>
    </div>
@endsection
