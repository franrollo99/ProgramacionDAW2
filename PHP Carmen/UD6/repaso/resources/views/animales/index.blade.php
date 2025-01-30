@extends('layouts.plantilla')
@section('titulo', 'Zoologico')
@section('contenido')
<h1 class="text-3xl font-bold underline">Lista animales</h1>
@foreach ($animales as $animal)
    <p>{{$animal['especie']}}</p>
@endforeach
@endsection
