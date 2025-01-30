@extends('layouts.plantilla')
@section('titulo', 'Zoologico')
@section('contenido')
<fieldset class="max-w-3xl w-full border border-gray-300 p-4 rounded-lg">
    <legend>
        <h1 class="text-3xl font-bold underline">Editar animal {{$animal['especie']}}</h1>
    </legend>

    {{-- ponemos enctype="multipart/form-data" porque vamos a subir imagenes --}}
    <form action="" method="post" enctype="multipart/form-data" class="flex flex-col">
        @csrf

        <label for="especie">Especie</label>
        <input type="text" name="especie" id="especie" placeholder="Animal" value="{{$animal['especie']}}">

        <label for="peso">Peso</label>
        <input type="string" name="peso" id="peso" placeholder="00.0" value="{{$animal['peso']}}">

        <label for="altura">Altura</label>
        <input type="string" name="altura" id="altura" placeholder="00.0" value="{{$animal['altura']}}">

        <label for="fechaNacimiento">Fecha de Nacimiento</label>
        <input type="string" name="fechaNacimiento" id="fechaNacimiento" placeholder="aaaa-mm-dd" value="{{$animal['fechaNacimiento']}}">

        <label for="imagen">Imagen</label>
        <input type="file" name="imagen" id="imagen">

        <label for="alimentacion">Alimentacion</label>
        <input type="text" name="alimentacion" id="alimentacion" placeholder="Carnívoro/Herbívoro" value="{{$animal['alimentacion']}}">

        <label for="descripcion">Descripcion</label>
        <textarea name="descripcion" id="descripcion" cols="30" rows="5" placeholder="Descripcion...">{{$animal['descripcion']}}</textarea>

        <input class="w-max px-2 border-2 border-blue-600 bg-blue-400 rounded my-3" type="submit" value="Crear">
    </form>
</fieldset>
@endsection
