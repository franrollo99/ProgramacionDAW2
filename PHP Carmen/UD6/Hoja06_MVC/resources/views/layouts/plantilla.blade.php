<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>@yield('titulo')</title>
    @vite('resources/css/app.css')
</head>
<body>
    <div class="flex flex-col min-h-screen ">

        {{-- Menu de navegacion --}}
        @include('layouts.partials.nav')

        {{-- Contenedor con el contenido main --}}
        <main class="flex-grow container mx-auto py-5">
            @yield('contenido')
        </main>

        {{-- Footer --}}
        @include('layouts.partials.footer')
    </div>
</body>
</html>
