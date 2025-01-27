@extends('layouts.plantilla')
@section('titulo', 'Zoologico-Ver el animal' . $animal->especie)
@section('contenido')
    <h1 class="text-3xl font-bold underline">Ver detalles del animal {{ $animal->especie }}</h1>
    <div class="detalles flex m-5 gap-5 border-2 border-black rounded-lg p-5">
        {{-- El estilo asegura que la imagen no se reduzca dentro del contenedor flex --}}
        <div class="flex-shrink-0">
            <img src="{{ asset('assets/img/' . $animal->imagen) }}" alt="" class="w-40 h-auto rounded-lg" >
        </div>
        <div>
            <p><b>Peso: </b>{{ $animal->peso }}</p>
            <hr>
            <p><b>Altura: </b>{{ $animal->altura }}</p>
            <hr>
            <p><b>Fecha de nacimiento: </b>{{ $animal->fechaNacimiento }}</p>
            <hr>
            <p><b>Alimentacion: </b>{{ $animal->alimentacion }}</p>
            <hr>
            <p><b>Descripcion: </b>{{ $animal->descripcion }}</p>
            <hr>
            @foreach ($animal->revisiones as $indice=>$revision)
                <p><b>Revision {{$indice +1}} </b></p>
                <ul class="list-disc ml-5">
                    <li>Fecha: {{$revision->fecha}}</li>
                    <li>Descripcion: {{$revision->descripcion}}</li>
                </ul>
            @endforeach
        </div>
    </div>
    <a class="w-max px-2 border-2 border-blue-600 bg-blue-400 rounded" href="{{ route('animales.index') }}">Volver a la pagina
        principal</a>
    <a class="w-max px-2 border-2 border-blue-600 bg-blue-400 rounded" href="{{ route('animales.edit', $animal) }}">Editar</a>
    <a class="w-max px-2 border-2 border-blue-600 bg-blue-400 rounded" href="{{ route('revisiones.create', $animal) }}">Añadir revision</a>
@endsection
