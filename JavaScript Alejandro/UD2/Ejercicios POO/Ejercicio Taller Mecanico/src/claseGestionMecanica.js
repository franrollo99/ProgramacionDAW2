class GestionMecanica{
    #clienteBD;
    #contenedor;

    constructor(clienteBD, contenedor){
        this.#clienteBD=clienteBD;
        this.#contenedor=contenedor;
    }

    iniciarApp(selector){
        document.addEventListener('DOMContentLoaded', () => {
            const contenedor = document.getElementById('contenedor'); // Contenedor en el HTML
            const clienteBD = new BD(); // Crear una instancia de la base de datos
            const gestionMecanica = new GestionMecanica(clienteBD, contenedor);
            gestionMecanica.iniciarApp(); // Inicializar la aplicación
        });
    }

    #generarHTMLBase(){
        return `
            <nav>
                <ul>
                    <li><a href='#'>Inicio</a></li>
                    <li><a href='#'>Listado vehiculos</a></li>
                    <li><a href='#'>Listado no terminadas</a></li>
                    <li><a href='#'>Listado no pagadas</a></li>
                    <li><a href='#'>Listado presupuestos</a></li>
                </ul>
            </nav>
            <main>
                <div class='resultados'></div>
            </main>
        `;
    }

    #generarHTMLInicio(){
        return `
            <form method='get'>
                <label for='buscador'>Buscador</label>
                <input type='text' id='buscador'>
                <select id='filtro'>
                    <option>Matricula</option>
                    <option>Telefono</option>
                </select>
            </form>
        `;
    }

    #generarHTMLVehiculos(vehiculos){
        return vehiculos.map(vehiculo =>{
            return `
                <div class='vehiculos'>
                    <h3>Matricula: ${vehiculo.matricula}</h3>
                    <p>Marca: ${vehiculo.marca}</p>
                    <p>Modelo: ${vehiculo.modelo}</p>
                    <p>Año: ${vehiculo.año}</p>
                    <p>Motor: ${vehiculo.motor}</p>
                    <button  class="btn-ver-vehiculo" data-vehiculo-id="${vehiculo.vehiculoId}>Ver</button>
                    <button  class="btn-ver-reparaciones-vehiculo" data-reparaciones-vehiculo-id="${vehiculo.vehiculoId}>Ver</button>
                    <button  class="btn-borrar-vehiculo" data-borrar-vehiculo-id="${vehiculo.vehiculoId}>Ver</button>
                </div>
            `;
        }).join(''); //Para concatenar los elementos del array
        
    }
}

document.addEventListener('DOMContentLoaded', function(){
    const contenedor = document.getElementById('contenedor');
    const clienteBD = new BD();
    const gestionMecanica = new GestionMecanica(clienteBD, contenedor);
    gestionMecanica.iniciarApp(); 
});