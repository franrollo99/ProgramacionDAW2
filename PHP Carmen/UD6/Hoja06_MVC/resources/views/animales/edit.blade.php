@extends('layouts.plantilla')
@section('titulo', 'Zoologico-Editar el animal' . $animal->especie)
@section('contenido')
    <div class="flex flex-col justify-center items-center">
        <fieldset class="max-w-3xl w-full border border-gray-300 p-4 rounded-lg">
            <legend>
                <h1 class="text-3xl font-bold underline">Editar el animal {{ $animal->especie }}</h1>
            </legend>

            <form action="{{ route('animales.update', $animal) }}" method="post" enctype="multipart/form-data" class="flex flex-col">
                @csrf
                @method('put')

                <label for="especie">Especie</label>
                <input type="text" name="especie" id="especie" placeholder="Animal" value="{{$animal->especie}}">
                @error('especie')
                    <span class="text-red-500">{{$message}}</span>
                @enderror

                <label for="peso">Peso</label>
                <input type="string" name="peso" id="peso" placeholder="00.0" value="{{$animal->peso}}">
                @error('peso')
                    <span class="text-red-500">{{$message}}</span>
                @enderror

                <label for="altura">Altura</label>
                <input type="string" name="altura" id="altura" placeholder="00.0" value="{{$animal->altura}}">
                @error('altura')
                    <span class="text-red-500">{{$message}}</span>
                @enderror

                <label for="fechaNacimiento">Fecha de Nacimiento</label>
                <input type="string" name="fechaNacimiento" id="fechaNacimiento" placeholder="aaaa-mm-dd" value="{{$animal->fechaNacimiento}}">
                @error('fechaNacimiento')
                    <span class="text-red-500">{{$message}}</span>
                @enderror

                <label for="imagen">Imagen</label>
                <input type="file" name="imagen" id="imagen">
                @error('imagen')
                    <span class="text-red-500">{{$message}}</span>
                @enderror

                <label for="alimentacion">Alimentacion</label>
                <input type="text" name="alimentacion" id="alimentacion" placeholder="Carnívoro/Herbívoro" value="{{$animal->alimentacion}}">

                <label for="descripcion">Descripcion</label>
                <textarea name="descripcion" id="descripcion" cols="30" rows="5" placeholder="Descripcion...">{{$animal->descripcion}}</textarea>

                <input class="w-max px-2 border-2 border-blue-600 bg-blue-400 rounded my-3" type="submit"
                    value="Modificar animal">
            </form>
        </fieldset>

        <a class="w-max px-2 my-3 border-2 border-blue-600 bg-blue-400 rounded" href="{{ route('animales.index') }}">Volver
            a la pagina principal</a>
    </div>

@endsection
