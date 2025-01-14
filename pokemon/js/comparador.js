const listaPokemon1 = document.querySelector('#listaPokemon1');
const listaPokemon2 = document.querySelector('#listaPokemon2'); // Seleccionamos el div donde se van a mostrar los pokemons
const buscador1 = document.querySelector('#barraBusqueda1');
const buscador2 = document.querySelector('#barraBusqueda2');
const loadingIndicator = document.querySelector('#loading');
const worker = new Worker('js/worker.js');
let pokemons = []; // Array para almacenar los datos de los pokemons
let currentPage = 1;
const pokemonsPerPage = 3;

buscador1.addEventListener('input', (event) => {
    const searchTerm = event.target.value.toLowerCase();
    filtrarPokemon(searchTerm);
});

buscador2.addEventListener('input', (event) => {
    const searchTerm = event.target.value.toLowerCase();
    filtrarPokemon(searchTerm);
});

worker.onmessage = function (event) {
    const pokemones = event.data;
    localStorage.setItem('allPokemons', JSON.stringify(pokemones));
    pokemons = pokemones;
    renderPage(currentPage);
    loadingIndicator.style.display = 'none';
};

function iniciar() {
    const cachedPokemones = localStorage.getItem('allPokemons');
    if (cachedPokemones) {
        const pokemones = JSON.parse(cachedPokemones);
        pokemons = pokemones;
        renderPage(currentPage);
        loadingIndicator.style.display = 'none';
    } else {
        worker.postMessage('loadPokemons');
        loadingIndicator.style.display = 'block';
    }
}

function mostrarPokemon(pokemons) {
    listaPokemon1.innerHTML = ''; // Clear previous content
    pokemons.forEach(poke => {
        let tipos = poke.types.map(type => `<p class="${type} tipo">${type}</p>`).join('');

        let pokeId = poke.id.toString().padStart(3, '0'); // Asegura que el ID tenga 3 dígitos

        const div = document.createElement("div");
        div.classList.add("pokemon");

        div.innerHTML = `
            <p class="pokemon-id-back">#${pokeId}</p>
            <div class="pokemon-imagen">
                <img src="${poke.image}" alt="${poke.name}">
            </div>
            <div class="pokemon-info">
                <div class="nombre-contenedor">
                    <p class="pokemon-nombre">${poke.name}</p>
                </div>
                <div class="pokemon-tipos">
                    ${tipos}
                </div>
            </div>
        `;

        div.addEventListener('click', () => {
            // AGREGAR POKEMON AL COMPARADOR
        });

        listaPokemon1.appendChild(div);
    });
}

function filtrarPokemon(searchTerm) {
    const pokemones = JSON.parse(localStorage.getItem('allPokemons'));
    listaPokemon1.innerHTML = '';
    
    const filteredPokemones = isNaN(searchTerm) 
        ? pokemones.filter(poke => poke.name.toLowerCase().includes(searchTerm.toLowerCase()))
        : pokemones.filter(poke => poke.id === parseInt(searchTerm));
    
    currentPage = 1; // Reset to the first page when filtering
    renderFilteredPage(filteredPokemones, currentPage);
}

function renderFilteredPage(filteredPokemones, page) {
    const start = (page - 1) * pokemonsPerPage;
    const end = start + pokemonsPerPage;
    const paginatedPokemons = filteredPokemones.slice(start, end);
    mostrarPokemon(paginatedPokemons);
    renderFilteredPagination(filteredPokemones);
}

// Call iniciar to start the process
iniciar();