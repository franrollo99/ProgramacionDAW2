@extends('layouts.plantilla')
@section('titulo', 'Zoologico-Ver el animal'.$animal['especie'])
@section('contenido')
<h1 class="text-3xl font-bold underline">Ver detalles del animal {{$animal['especie']}}</h1>
<div class="detalles">
    <div>
        <img src="{{ asset('img/' . $animal['imagen']) }}" alt="">
    </div>
    <div>
        <p>Peso: {{$animal['peso']}}</p>
        <p>Altura: {{$animal['altura']}}</p>
        <p>Fecha de nacimiento: {{$animal['fechaNacimiento']}}</p>
        <p>Alimentacion: {{$animal['alimentacion']}}</p>
        <p>Descripcion: {{$animal['descripcion']}}</p>
    </div>
</div>
<button>Editar animal</button>
<button>Volver al listado</button>
@endsection
