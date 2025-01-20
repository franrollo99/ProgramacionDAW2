@extends('layouts.plantilla')
@section('titulo', 'Zoologico-Editar el animal'.$animal->especie)
@section('contenido')
<h1 class="text-3xl font-bold underline">Editar el animal {{$animal->especie}}</h1>
<form action="post">
    <label for="especie">Especie</label>
    <input type="text" name="especie" id="especie" value="{{$animal->especie}}">
    <label for="peso">Peso</label>
    <input type="number" name="peso" id="peso" value="{{$animal->peso}}">
    <label for="altura">Altura</label>
    <input type="number" name="altura" id="altura" value="{{$animal->altura}}">
    <label for="fechaNacimiento">Fecha de Nacimiento</label>
    <input type="date" name="fechaNacimiento" id="fechaNacimiento" value="{{$animal->fechaNacimiento}}">
    <label for="imagen">Imagen</label>
    <input type="file" name="imagen" id="imagen">
    <label for="alimentacion">Alimentacion</label>
    <input type="text" name="alimentacion" id="alimentacion" value="{{$animal->alimentacion}}">
    <label for="descripcion">Descripcion</label>
    <textarea name="descripcion" id="descripcion" cols="30" rows="10">{{$animal->descripcion}}</textarea>
    <input type="submit" value="Modificar animal">
</form>
@endsection
