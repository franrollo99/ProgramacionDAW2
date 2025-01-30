@extends('layouts.plantilla')
@section('titulo', 'Zoologico')
@section('contenido')
<h1 class="text-3xl font-bold underline">Detalles del animal {{$animal['especie']}}</h1>
<p>Peso: {{$animal['peso']}}</p>
<p>Altura: {{$animal['altura']}}</p>
<p>Descripcion: {{$animal['descripcion']}}</p>
@endsection
