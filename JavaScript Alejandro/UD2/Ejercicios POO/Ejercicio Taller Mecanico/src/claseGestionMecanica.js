import Vehiculo from './claseVehiculo.js';
import Propietario from './clasePropietario.js';
import Reparacion from './claseReparacion.js';
import Trabajo from './claseTrabajo.js';
import BD from './claseBD.js';


class GestionMecanica {
    #clienteBD;
    #contenedor;

    constructor() {
        this.#clienteBD = new BD();
        this.#contenedor = null;
    }

    iniciarApp(selector) {
        this.#contenedor = document.querySelector(selector);

        if (!this.#contenedor) {
            console.error("No se pudo iniciar la aplicación, contenedor no encontrado.");
            return;
        }

        // Insertamos el HTML base en el contenedor
        this.#contenedor.innerHTML = this.#generarHTMLBase();

        // Añadimos los eventos de navegación
        this.#asignarEventos();
    }

    #generarHTMLBase() {
        return `
            <nav>
                <ul>
                    <li><a href="#" data-action="inicio">Inicio</a></li>
                    <li><a href="#" data-action="vehiculos">Listado Vehículos</a></li>
                    <li><a href="#" data-action="no-terminadas">Listado No Terminadas</a></li>
                    <li><a href="#" data-action="no-pagadas">Listado No Pagadas</a></li>
                    <li><a href="#" data-action="presupuestos">Listado Presupuestos</a></li>
                </ul>
            </nav>
            <div id="resultados"></div>
        `;
    }

    #generarHTMLInicio() {
        return `
            <label for="buscador">Utiliza el buscador para encontrar vehículos por matrícula o teléfono:</label>
            <br><br>
            <input type="text" id="buscador">
            <button id="buscarBtn">Buscar</button>
            
            <div id="resultadoBusqueda"></div>
        `;
    }

    #generarHTMLVehiculos(vehiculos) {
        let html = `
        <div>
            <button id="nuevoVehiculoBtn">Crear nuevo vehículo</button>
        </div>
        <ul id="listadoVehiculos">`;

        // mirar si es foreach o map
        vehiculos.map(vehiculo => {
            html += `
                <li class="vehiculo-item">
                    <div>
                        <p>Matricula: ${vehiculo.matricula}</p>
                        <p>Marca: ${vehiculo.marca}</p>
                        <p>Modelo: ${vehiculo.modelo}</p>
                        <p>Año: ${vehiculo.año}</p>
                        <p>Motor: ${vehiculo.motor}</p>
                        <p>Propietario: ${vehiculo.propietario.nombre}</p>
                    </div>
                    <div>
                        <button class="ver-vehiculo" data-id="${vehiculo.vehiculoId}">Ver vehículo</button>
                        <button class="ver-reparaciones" data-id="${vehiculo.vehiculoId}">Ver reparaciones</button>
                        <button class="borrar-vehiculo" data-id="${vehiculo.vehiculoId}">Borrar vehículo</button>
                    </div>
                </li>`;
        }).join("");

        html += `</ul>`;
        return html;
    }

    #generarHTMLVehiculo(vehiculoId = null) {
        let html = '';
    
        if (vehiculoId === null) {
            // Formulario para crear un nuevo vehículo
            html = `
                <h2>Nuevo vehículo</h2>
                <form id="formularioVehiculo">
                    <div>
                        <label for="matricula">Matrícula:</label>
                        <input type="text" id="matricula" name="matricula" required>
                    </div>
                    <div>
                        <label for="marca">Marca:</label>
                        <input type="text" id="marca" name="marca" required>
                    </div>
                    <div>
                        <label for="modelo">Modelo:</label>
                        <input type="text" id="modelo" name="modelo" required>
                    </div>
                    <div>
                        <label for="año">Año:</label>
                        <input type="number" id="año" name="año" required>
                    </div>
                    <div>
                        <label for="motor">Motor:</label>
                        <input type="text" id="motor" name="motor" required>
                    </div>
                    <div>
                        <h3>Datos del propietario</h3>
                        <label for="nombrePropietario">Nombre:</label>
                        <input type="text" id="nombrePropietario" name="nombrePropietario" required>
                    </div>
                    <div>
                        <label for="telefonoPropietario">Teléfono:</label>
                        <input type="text" id="telefonoPropietario" name="telefonoPropietario" required>
                    </div>
                    <div>
                        <label for="emailPropietario">Email:</label>
                        <input type="email" id="emailPropietario" name="emailPropietario" required>
                    </div>
                    <button type="submit">Guardar vehículo</button>
                </form>
            `;
        } else {
            const vehiculo = this.clienteBD.obtenerVehiculoPorId(vehiculoId);
            html = `
                <h2>Detalles del vehículo</h2>
                <form id="formularioVehiculo">
                    <div>
                        <p>Matrícula: ${vehiculo.matricula}</p>
                        <p>Marca: ${vehiculo.marca}</p>
                        <p>Modelo: ${vehiculo.modelo}</p>
                        <p>Año: ${vehiculo.año}</p>
                        <p>Motor: ${vehiculo.motor}</p>
                        <h3>Propietario</h3>
                        <p>Nombre: ${vehiculo.propietario.nombre}</p>
                        <p>Teléfono: ${vehiculo.propietario.telefono}</p>
                        <p>Email: ${vehiculo.propietario.email}</p>
                        <button class="ver-reparaciones" data-id="${vehiculoId}">Ver reparaciones</button>
                    </div>
                </form>
            `;
        }
    
        return html;
    }

    #generarHTMLReparacionesVehiculo(vehiculoId) {
        const vehiculo = this.clienteBD.obtenerVehiculoPorId(vehiculoId); // Obtener el vehículo por ID
        const reparaciones = this.clienteBD.obtenerReparacionesPorVehiculo(vehiculoId); // Obtener reparaciones asociadas al vehículo
        
        let html = `
            <h2>Reparaciones de vehículo: ${vehiculo.matricula}</h2>
            <p>Propietario: ${vehiculo.propietario.nombre}</p>
            <p>Teléfono: ${vehiculo.propietario.telefono}</p>
            <button class="ver-vehiculo" data-id="${vehiculoId}">Ver vehículo</button>
            <h3>Listado de Reparaciones</h3>
            <ul>
        `;
        
        reparaciones.forEach(reparacion => {
            html += `
                <li>
                    <p>Descripción: ${reparacion.descripcion}</p>
                    <p>Fecha: ${reparacion.fecha}</p>
                    <p>Kilómetros: ${reparacion.kilometros}</p>
                    <button class="ver-reparacion" data-id="${reparacion.reparacionId}">Ver reparación</button>
                    <button class="borrar-reparacion" data-id="${reparacion.reparacionId}">Borrar reparación</button>
                </li>
            `;
        });
    
        html += `
            </ul>
            <button class="nueva-reparacion" data-id="${vehiculoId}">Crear nueva reparación</button>
        `;
    
        return html;
    }

    
    #asignarEventos() {
        // Almaceno los data-action de los enlaces
        const enlaces = this.#contenedor.querySelectorAll('nav a[data-action]');
        
        enlaces.forEach((enlace) => {
            enlace.addEventListener('click', (event) => {
                event.preventDefault();
                const action = enlace.dataset.action;
                this.#navegar(action);
            });
        });
    }

    // Este método puede actualizar el contenido de #resultados
    #navegar(action) {
        const resultados = this.#contenedor.querySelector('#resultados');

        switch (action) {
            case 'inicio':
                resultados.innerHTML = this.#generarHTMLInicio();
                break;
            case 'vehiculos':
                resultados.innerHTML = this.#generarHTMLVehiculos(BD.vehiculos);
                break;
            case 'no-terminadas':
                const reparacionesNoTerminadas = this.#clienteBD.obtenerReparaciones('terminado', false);
                resultados.innerHTML = this.#generarHTMLReparacionesVehiculo(reparacionesNoTerminadas);
                break;
                // resultados.innerHTML = this.#clienteBD.obtenerReparaciones('terminado', true);
                // break;
            case 'no-pagadas':
                resultados.innerHTML = this.#clienteBD.obtenerReparaciones('pagado', false);
                break;
            case 'presupuestos':
                resultados.innerHTML = this.#clienteBD.obtenerReparaciones('presupuesto', true);;
                break;
            default:
                resultados.innerHTML = '';
                break;
        }
    }

};

window.addEventListener('load', function() {
    const gestion = new GestionMecanica();
    gestion.iniciarApp('.app');
});