@extends('layouts.plantilla')
@section('titulo', 'Zoologico')
@section('contenido')
<h1 class="text-3xl font-bold underline">Detalles del animal {{$animal->especie}}</h1>
<img src="{{asset('assets/img/'.$animal->imagen)}}" alt="">
<p>Peso: {{$animal->peso}}</p>
<p>Altura: {{$animal->altura}}</p>
<p>Fecha de nacimiento: {{$animal->fechaNacimiento}}</p>
<p>Edad: {{floor($animal->getEdad())}}</p>
<p>Alimentacion: {{$animal->alimentacion}}</p>
<p>Descripcion: {{$animal->descripcion}}</p>
<p>Revisiones: {{$animal->revisiones->count()}}</p>
<a class="border border-blue-700 bg-blue-400 p-1 rounded-lg" href="{{route('animales.edit', $animal)}}">Editar</a>
<a class="border border-blue-700 bg-blue-400 p-1 rounded-lg" href="{{route('animales.index')}}">Volver al listado</a>
@endsection
