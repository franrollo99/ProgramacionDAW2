@extends('layouts.plantilla')
@section('titulo', 'Zoologico')
@section('contenido')
<h1 class="text-3xl font-bold underline">Lista animales</h1>
<div class="flex flex-col gap-5 p-5">
    @foreach ($animales as $animal)
    <div class="flex gap-3">
        <p>{{$animal->especie}}</p>
        <a class="border border-blue-700 bg-blue-400 p-1 rounded-lg" href="{{route('animales.show', $animal)}}">Ver detalles</a>
        <a class="border border-blue-700 bg-blue-400 p-1 rounded-lg" href="{{route('animales.edit', $animal)}}">Editar</a>
    </div>
@endforeach
</div>

@endsection
