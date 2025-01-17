const pokemonDetailDiv = document.querySelector('#detallesPokemon');
const urlParams = new URLSearchParams(window.location.search);
const pokemonId = parseInt(urlParams.get('id')); // Se asegura de que sea un número entero

const statsTraducidas = {
    "hp": "Puntos de Salud",
    "attack": "Ataque",
    "defense": "Defensa",
    "special-attack": "Ataque Especial",
    "special-defense": "Defensa Especial",
    "speed": "Velocidad"
};

// Función principal para cargar el detalle del Pokémon
function cargarDetallePokemon(pokemonId) {
    const pokemones = JSON.parse(localStorage.getItem('allPokemons'));

    if (!pokemones || pokemones.length === 0) {
        console.error('No se encontraron datos en localStorage.');
        pokemonDetailDiv.innerHTML = `<p>Error: No se encontraron datos del Pokémon.</p>`;
        return;
    }

    const poke = pokemones.find(pokemon => pokemon.id === pokemonId);

    if (!poke) {
        console.error(`Pokémon con ID ${pokemonId} no encontrado.`);
        pokemonDetailDiv.innerHTML = `<p>Error: Pokémon no encontrado.</p>`;
        return;
    }

    const description = obtenerDescripcion(poke);
    obtenerEfectividades(poke.types);

    // Mostrar los detalles del Pokémon
    mostrarDetalle(poke, description);
}

// Obtener descripción del Pokémon
function obtenerDescripcion(poke) {
    const speciesData = JSON.parse(localStorage.getItem('pokemonSpecies')) || {};
    const species = speciesData[poke.id];
    if (!species || !species.flavor_text_entries) {
        return 'Descripción no disponible.';
    }

    const flavorTextEntry = species.flavor_text_entries.find(entry => entry.language.name === 'es');
    return flavorTextEntry ? flavorTextEntry.flavor_text.replace(/\n/g, ' ') : 'Descripción no disponible.';
}

// Obtener efectividades del Pokémon
function obtenerEfectividades(tipos) {
    const promesasTipos = tipos.map(tipo =>
        fetch(`https://pokeapi.co/api/v2/type/${tipo}`).then(response => response.json())
    );

    Promise.all(promesasTipos).then(datosTipos => {
        const efectividades = {
            doble_dano: [],
            mitad_dano: [],
            sin_dano: []
        };

        datosTipos.forEach(data => {
            data.damage_relations.double_damage_from.forEach(tipo => efectividades.doble_dano.push(tipo.name));
            data.damage_relations.half_damage_from.forEach(tipo => efectividades.mitad_dano.push(tipo.name));
            data.damage_relations.no_damage_from.forEach(tipo => efectividades.sin_dano.push(tipo.name));
        });

        efectividades.doble_dano = [...new Set(efectividades.doble_dano)];
        efectividades.mitad_dano = [...new Set(efectividades.mitad_dano)];
        efectividades.sin_dano = [...new Set(efectividades.sin_dano)];

        generarTablaEfectividades(efectividades);
    }).catch(error => console.error('Error al obtener las efectividades:', error));
}

// Generar tabla de efectividades
function generarTablaEfectividades(efectividades) {
    const crearTiposHTML = tipos => tipos.map(tipo => `<p class="${tipo} tipo">${tipo}</p>`).join('');

    const tablaHTML = `
        <div class="pokemon-efectividades">
            <h3>Tabla de Efectividades</h3>
            <table>
                <thead>
                    <tr>
                        <th>Recibe Doble Daño</th>
                        <th>Recibe Mitad de Daño</th>
                        <th>No Recibe Daño</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>${crearTiposHTML(efectividades.doble_dano) || 'Ninguno'}</td>
                        <td>${crearTiposHTML(efectividades.mitad_dano) || 'Ninguno'}</td>
                        <td>${crearTiposHTML(efectividades.sin_dano) || 'Ninguno'}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;

    document.querySelector('.tabla-efect').innerHTML = tablaHTML;
}

// Mostrar los detalles del Pokémon en el DOM
function mostrarDetalle(poke, description) {
    const pokeId = poke.id.toString().padStart(3, '0');
    const tiposHTML = poke.types.map(type => `<p class="${type} tipo">${type}</p>`).join('');
    const stats = poke.stats.map(stat => {
        const statsEsp = statsTraducidas[stat.stat.name] || stat.stat.name;
        return `<p class="stat"><b>${statsEsp}:</b> ${stat.base_stat}</p>`;
    }).join('');
    const height = (poke.height / 10).toFixed(1);
    const weight = (poke.weight / 10).toFixed(1);

    pokemonDetailDiv.innerHTML = `
        <div class="pokemon">
            <div>
                <div class="pokemon-imagen">
                    <img src="${poke.image}" alt="${poke.name}">
                </div>
            </div>
            <div class="pokemon-info">
                <div class="nombre-contenedor">
                    <p class="pokemon-id">#${pokeId}</p>
                    <h2 class="pokemon-nombre">${poke.name.toUpperCase()}</h2>
                </div>
                <h3>Descripción</h3>
                <div class="pokemon-descripcion">
                    <p>${description}</p>
                </div>
                <h3>Características</h3>
                <div class="pokemon-caracteristicas">
                    <p><span>Altura:</span> ${height} m</p>
                    <p><span>Peso:</span> ${weight} kg</p>
                </div>
                <h3>Tipo</h3>
                <div class="pokemon-tipos">
                    ${tiposHTML}
                </div>
                <h3>Estadísticas</h3>
                <div class="pokemon-stats">
                    ${stats}
                </div>
                <div class="tabla-efect"></div>
            </div>
        </div>
    `;
}

// Navegación entre Pokémon
document.querySelector('.btn-volver').addEventListener('click', () => {
    window.location.href = './index.html';
});

document.querySelector('.btn-siguiente').addEventListener('click', () => {
    const siguienteId = pokemonId < 1025 ? pokemonId + 1 : 1;
    window.location.href = `./detalle.html?id=${siguienteId}`;
});

document.querySelector('.btn-anterior').addEventListener('click', () => {
    const anteriorId = pokemonId > 1 ? pokemonId - 1 : 1025;
    window.location.href = `./detalle.html?id=${anteriorId}`;
});

// Comparar Pokémon desde la página de detalles
document.querySelector('.btn-comparar').addEventListener('click', () => {
    const pokemones = JSON.parse(localStorage.getItem('allPokemons'));
    const poke = pokemones.find(pokemon => pokemon.id === pokemonId);

    if (poke) {
        localStorage.setItem('pokemonParaComparar', JSON.stringify(poke));
        window.location.href = './comparador.html';
    } else {
        console.error('Error: Pokémon no encontrado para comparar.');
    }
});

// Cargar el detalle del Pokémon al iniciar
cargarDetallePokemon(pokemonId);
