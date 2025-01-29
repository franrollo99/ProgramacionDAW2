@extends('layouts.plantilla')
@section('titulo', 'Zoologico-Ver el animal' . $animal->especie)
@section('contenido')
    <h1 class="text-3xl font-bold underline">Ver detalles del animal {{ $animal->especie }}</h1>
    <div class="detalles flex m-5 gap-5 border-2 border-black rounded-lg p-5">
        {{-- El estilo asegura que la imagen no se reduzca dentro del contenedor flex --}}
        <div class="flex-shrink-0">
            <img src="{{ asset($animal->imagen->url) }}" alt="" class="rounded-lg" >
        </div>
        <div>
            <p><b>Peso: </b>{{ $animal->peso }} Kg.</p>
            <hr>
            <p><b>Altura: </b>{{ $animal->altura }} m.</p>
            <hr>
            <p><b>Fecha de nacimiento: </b>{{ $animal->fechaNacimiento }}</p>
            <hr>
            <p><b>Edad: </b>{{ $animal->getEdad() }} años</p>
            <hr>
            <p><b>Alimentacion: </b>{{ $animal->alimentacion }}</p>
            <hr>
            <p><b>Descripcion: </b>{{ $animal->descripcion }}</p>
            <hr>
            <p><b>Revisiones:</b></p>
            @if ($animal->revisiones->isEmpty())
                <p>No hay revisiones</p>
            @else
            @foreach ($animal->revisiones as $indice=>$revision)
                <p>Revision {{$indice +1}} </p>
                <ul class="list-disc ml-10">
                    <li>Fecha: {{$revision->fecha}}</li>
                    <li>Descripcion: {{$revision->descripcion}}</li>
                </ul>
                <form action="{{ route('revisiones.destroy', ['revision' => $revision]) }}" method="POST">
                    @csrf
                    @method('DELETE')
                    <button type="submit" class="w-max px-2 border-2 border-red-600 bg-red-400 rounded">
                        Eliminar revision
                    </button>
                </form>
            @endforeach
            @endif
            <hr>
            <p><b>Cuidadores:</b></p>
            @if ($animal->cuidadores->isEmpty())
                <p>No hay cuidadores asignados</p>
            @else
                <ul class="list-disc px-10">
                    @foreach($animal->cuidadores as $cuidador)
                        <li><a class="hover:text-blue-700" href="{{ route('cuidadores.show', $cuidador) }}">{{ $cuidador->nombre }}</a></li>
                    @endforeach
                </ul>
            @endif
        </div>
    </div>
    <div class="flex gap-5">
    <a class="w-max px-2 border-2 border-blue-600 bg-blue-400 rounded" href="{{ route('animales.index') }}">Volver a la pagina principal</a>
    @auth
        <a class="w-max px-2 border-2 border-blue-600 bg-blue-400 rounded" href="{{ route('animales.edit', $animal) }}">Editar</a>
        <a class="w-max px-2 border-2 border-blue-600 bg-blue-400 rounded" href="{{ route('revisiones.create', $animal) }}">Añadir revision</a>
        <form action="{{ route('animales.destroy', $animal) }}" method="POST">
            @csrf
            @method('DELETE')
            <button type="submit" class="w-max px-2 border-2 border-red-600 bg-red-400 rounded">
                Eliminar animal
            </button>
        </form>
    @endauth
    </div>
@endsection
