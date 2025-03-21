@extends('layouts.plantilla')

@section('titulo', 'Zoologico - Listado de animales')

@section('contenido')
    <div class="flex-col justify-center items-center">
        <h1 class="text-3xl font-bold underline">Listado de animales</h1>
        <div class="flex-col">

            @foreach ($animales as $animal)
                <div class="my-5 p-3 border-4 border-black rounded-3xl flex gap-10">
                    <div class="flex-shrink-0">
                        <img class="rounded-3xl" src="{{ asset($animal->imagen->url) }}" alt="" >
                    </div>
                    <div class="flex flex-col gap-3">
                        <h2 class="text-2xl font-bold">{{ $animal->especie }}</h2>
                        <p class="line-clamp-3"><b>Descripcion: </b>{{ $animal->descripcion }}</p>
                        <p><b>Nº de revisiones:</b> {{ $animal->revisiones->count() }}</p>
                        <p><b>Cuidadores:</b></p>
                        <ul class="list-disc px-5">
                            @foreach($animal->cuidadores as $cuidador)
                            <li><a class="hover:text-blue-700" href="{{ route('cuidadores.show', $cuidador) }}">{{$cuidador->nombre}}</a></li>
                            @endforeach
                        </ul>

                        <div class="flex gap-5">
                            <a class="w-max px-2 border-2 border-blue-600 bg-blue-400 rounded" href="{{ route('animales.show', $animal) }}">Ver Detalles</a>
                            @auth
                            <a class="w-max px-2 border-2 border-blue-600 bg-blue-400 rounded" href="{{ route('animales.edit', $animal) }}">Editar</a>
                            <form action="{{ route('animales.destroy', $animal) }}" method="POST">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="w-max px-2 border-2 border-red-600 bg-red-400 rounded">
                                    Eliminar animal
                                </button>
                            </form>
                            @endauth
                        </div>

                    </div>
                </div>
            @endforeach

        </div>
    </div>
@endsection
