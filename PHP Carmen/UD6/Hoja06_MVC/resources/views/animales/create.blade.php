@extends('layouts.plantilla')
@section('titulo', 'Zoologico-Crear animal')
@section('contenido')
<h1 class="text-3xl font-bold underline">Crear animal</h1>
<form action="post">
    <label for="especie">Especie</label>
    <input type="text" name="especie" id="especie">
    <label for="peso">Peso</label>
    <input type="number" name="peso" id="peso">
    <label for="altura">Altura</label>
    <input type="number" name="altura" id="altura">
    <label for="fechaNacimiento">Fecha de Nacimiento</label>
    <input type="date" name="fechaNacimiento" id="fechaNacimiento">
    <label for="imagen">Imagen</label>
    <input type="file" name="imagen" id="imagen">
    <label for="alimentacion">Alimentacion</label>
    <input type="text" name="alimentacion" id="alimentacion">
    <label for="descripcion">Descripcion</label>
    <textarea name="descripcion" id="descripcion" cols="30" rows="10"></textarea>
    <input type="submit" value="Enviar">
</form>
@endsection
