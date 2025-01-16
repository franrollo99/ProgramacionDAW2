@extends('layouts.plantilla')

@section('titulo', 'Zoologico - Listado de animales')

@section('contenido')
    <h1 class="text-3xl font-bold underline">Listado de animales</h1>
    @foreach ($animales as $animal)
        <p>Especie: {{$animal['especie']}}</p>
    @endforeach

@endsection
