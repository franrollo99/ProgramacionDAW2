<nav class="bg-green-800 py-6 relative ">
    <div class="container mx-auto flex px-8 xl:px-0">
        <div class="flex flex-grow">
            <img src="{{asset('assets/img/logo.png')}}" alt="logo animal">
        </div>
        <div class="flew lg:hidden">
            <img src="{{asset('assets/img/iconoMenu.png')}}" alt="menu" onClick="openMenu();">
        </div>
        <div id="menu" class="hidden flex-grow  w-full justify-between items-center absolute top-40 left-0 bg-green-800 py-14 px-8 lg:flex lg:relative lg:top-0  lg:py-0 lg:px-0 sm:px-14">
            <div class="flex flex-col mb-8 lg:flex-row lg:mb-0 mx-auto">
                <a href="{{route('inicio')}}" class="text-white mb-1 lg:ml-16 lg:mr-16 lg:mb-8">Inicio</a>
                <a href="{{route('animales.index')}}" class="text-white mb-1 lg:mr-16 lg:mb-8">Listado de Animales</a>
                @auth
                    <a href="{{route('animales.create')}}" class="text-white">Nuevo Animal</a>
                @endauth
            </div>
            @guest
                <div class="flex flex-col text-center lg:flex-row">
                    <a href="{{route('login')}}" class="bblanco mb-1 lg:mr-4 lg:mb-0">Iniciar Sesion</a>
                    <a href="{{route('register')}}" class="bverde">Regístrate</a>
                </div>
            @endguest

            @auth
                <p class="px-3">Hola, {{Auth::user()->name}}</p>
                <form action="{{route('logout')}}" method="post">
                    @csrf
                    <button type="submit">Cerrar Sesion</button>
                </form>
            @endauth

        </div>
    </div>
</nav>
<script>
    function openMenu(){
        let menu=document.getElementById('menu');
        if (menu.classList.contains('hidden')){
            menu.classList.remove('hidden');
        } else{
            menu.classList.add('hidden');
        }
    }
</script>
