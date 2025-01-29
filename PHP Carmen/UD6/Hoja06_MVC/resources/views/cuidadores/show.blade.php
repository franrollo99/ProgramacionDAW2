@extends('layouts.plantilla')

@section('titulo', 'Zoologico - Listado de animales')

@section('contenido')
    <div class="flex-col justify-center items-center">
        <h1 class="text-3xl font-bold underline">Listado de titulos de {{$cuidador->nombre}}</h1>
        <div class="py-5">
            @foreach($titulaciones as $titulacion)
                <p><b>Titulacion: </b><a class="hover:text-blue-700" href="{{ route('titulos.show', $titulacion) }}">{{$titulacion->nombre}}</a></p><hr>
            @endforeach
        </div>
        <a class="w-max px-2 border-2 border-blue-600 bg-blue-400 rounded" href="{{ route('animales.index') }}">Volver a la pagina principal</a>

    </div>
@endsection
