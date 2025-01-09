const listaPokemon = document.querySelector('#listaPokemon');
let URL = "https://pokeapi.co/api/v2/pokemon/";

// Función para obtener datos de un Pokémon con caché
async function fetchPokemonWithCache(id) {
    const cacheKey = `pokemon-${id}`;
    const cachedData = localStorage.getItem(cacheKey);

    if (cachedData) {
        console.log(`Obteniendo Pokémon ${id} desde la caché.`);
        return JSON.parse(cachedData);
    }

    console.log(`Solicitando Pokémon ${id} desde la API.`);
    const response = await fetch(URL + id);
    if (!response.ok) throw new Error(`Pokémon con ID ${id} no encontrado.`);
    const data = await response.json();

    // Reducir los datos antes de guardar
    const reducedData = {
        id: data.id,
        name: data.name,
        image: data.sprites.other["official-artwork"].front_default,
        types: data.types.map(type => type.type.name),
        height: data.height,
        weight: data.weight
    };

    localStorage.setItem(cacheKey, JSON.stringify(reducedData)); // Guardar datos reducidos
    return reducedData;
}

// Mostrar un Pokémon en el DOM
function mostrarPokemon(poke) {
    let tipos = poke.types.map(type => `
            <p class="${type.type.name} tipo">${type.type.name}</p>
        `).join('');

    let pokeId = poke.id.toString();

    const div = document.createElement("div");
    div.classList.add("pokemon");
    div.innerHTML = `
        <p class="pokemon-id-back">${pokeId}</p>
        <div class="pokemon-imagen">
            <img src="${poke.sprites.other["official-artwork"].front_default}" alt="${poke.name}">
        </div>
        <div class="pokemon-info">
            <div class="nombre-contenedor">
                <p class="pokemon-id">${poke.id}</p>
                <h2 class="pokemon-nombre">${poke.name}</h2>
            </div>
            <div class="pokemon-tipos">
                ${tipos}
            </div>
            <div class="pokemon-stats">
                <p class="stat">Altura: ${poke.height}</p>
                <p class="stat">Peso: ${poke.weight}</p>
            </div>
        </div>
    `;

    listaPokemon.append(div);
}

// Cargar los primeros 151 Pokémon
async function cargarPokemones() {
    for (let i = 1; i <= 151; i++) {
        const poke = await fetchPokemonWithCache(i);
        mostrarPokemon(poke);
    }
}

// Iniciar la carga
cargarPokemones();
