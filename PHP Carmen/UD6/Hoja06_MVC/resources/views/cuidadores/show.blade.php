@extends('layouts.plantilla')

@section('titulo', 'Zoologico - Listado de animales')

@section('contenido')
    <div class="flex-col justify-center items-center">
        <h1 class="text-3xl font-bold underline">Listado de titulos de cuidador</h1>
        <div class="py-5">
            @foreach($titulaciones as $titulacion)
                <p>Titulacion: {{$titulacion->nombre}}</p>
            @endforeach
        </div>
        <a class="w-max px-2 border-2 border-blue-600 bg-blue-400 rounded" href="{{ route('animales.index') }}">Volver a la pagina principal</a>

    </div>
@endsection
