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

        this.#contenedor.innerHTML = this.#generarHTMLBase();

        // Añadimos los eventos de navegación
        this.#asignarEventosMenu();
    }

    #generarHTMLBase() {
        return `
            <nav>
                <ul>
                    <li><a href="#" class="menu" data-action="inicio">Inicio</a></li>
                    <li><a href="#" class="menu" data-action="vehiculos">Listado Vehículos</a></li>
                    <li><a href="#" class="menu" data-action="no-terminadas">Listado No Terminadas</a></li>
                    <li><a href="#" class="menu" data-action="no-pagadas">Listado No Pagadas</a></li>
                    <li><a href="#" class="menu" data-action="presupuestos">Listado Presupuestos</a></li>
                </ul>
            </nav>
            <div id="resultados"></div>
        `;
    }

    #generarHTMLInicio() {
        return `
            <section class="inicio">
                <h1>Bienvenido al taller</h1>
                <form id="buscador" class="buscador">
                    <label for="busqueda">Buscar por:</label>
                    <select id="filtro" name="filtro" class="buscador-filtro">
                        <option value="matricula">Matrícula</option>
                        <option value="telefono">Teléfono</option>
                    </select>
                    <input type="text" id="valor" name="valor" class="buscador-valor" placeholder="Ingrese valor" />
                    <button type="submit" class="buscador-boton">Buscar</button>
                </form>
                <div id="resultado-busqueda" class="resultado-busqueda"></div>
            </section>
        `;
    }

    #generarHTMLVehiculos(vehiculos) {
        return `
            <section class="vehiculos">
                <h2>Listado de Vehículos</h2>
                <button class="nuevo-vehiculo" data-action="nuevo-vehiculo">Añadir Vehículo</button>
                <ul class="lista-vehiculos">
                    ${vehiculos.map(vehiculo => `
                        <li class="vehiculo-item">
                            <p><strong>Matrícula:</strong> ${vehiculo.matricula}</p>
                            <p><strong>Marca:</strong> ${vehiculo.marca}</p>
                            <p><strong>Modelo:</strong> ${vehiculo.modelo}</p>
                            <div class="acciones">
                                <button class="ver-vehiculo" data-id="${vehiculo.vehiculoId}">Ver Vehículo</button>
                                <button class="ver-reparaciones" data-id="${vehiculo.vehiculoId}">Ver Reparaciones</button>
                                <button class="borrar-vehiculo" data-id="${vehiculo.vehiculoId}">Borrar</button>
                            </div>
                        </li>
                    `).join('')}
                </ul>
            </section>
        `;
    }

    #generarHTMLVehiculo(vehiculoId = null) {
        if (vehiculoId === null) {
            return `
                <section class="vehiculo-formulario">
                    <h2>Nuevo Vehículo</h2>
                    <form class="form-vehiculo" data-action="crear-vehiculo">
                        <label for="matricula">Matrícula:</label>
                        <input type="text" id="matricula" class="input-matricula" required />
    
                        <label for="marca">Marca:</label>
                        <input type="text" id="marca" class="input-marca" required />
    
                        <label for="modelo">Modelo:</label>
                        <input type="text" id="modelo" class="input-modelo" required />
    
                        <label for="año">Año:</label>
                        <input type="number" id="año" class="input-año" required />
    
                        <label for="motor">Motor:</label>
                        <input type="text" id="motor" class="input-motor" required />
    
                        <h3>Datos del Propietario</h3>
                        <label for="nombre-propietario">Nombre:</label>
                        <input type="text" id="nombre-propietario" class="input-nombre-propietario" required />
    
                        <label for="telefono">Teléfono:</label>
                        <input type="tel" id="telefono" class="input-telefono" required />
    
                        <label for="email">Email:</label>
                        <input type="email" id="email" class="input-email" required />
    
                        <button type="submit" class="guardar-vehiculo" data-action="guardar-vehiculo">Guardar Vehículo</button>
                    </form>
                </section>
            `;
        } else {
            const vehiculo = this.#clienteBD.obtenerVehiculo("vehiculoId", vehiculoId);
    
            return `
                <section class="vehiculo-detalle">
                    <h2>Detalles del Vehículo</h2>
                    <form class="form-vehiculo" data-action="editar-vehiculo">
                        <label for="matricula">Matrícula:</label>
                        <input type="text" id="matricula" class="input-matricula" value="${vehiculo.matricula}" readonly />
    
                        <label for="marca">Marca:</label>
                        <input type="text" id="marca" class="input-marca" value="${vehiculo.marca}" readonly />
    
                        <label for="modelo">Modelo:</label>
                        <input type="text" id="modelo" class="input-modelo" value="${vehiculo.modelo}" readonly />
    
                        <label for="año">Año:</label>
                        <input type="number" id="año" class="input-año" value="${vehiculo.año}" readonly />
    
                        <label for="motor">Motor:</label>
                        <input type="text" id="motor" class="input-motor" value="${vehiculo.motor}" readonly />
    
                        <h3>Datos del Propietario</h3>
                        <label for="nombre-propietario">Nombre:</label>
                        <input type="text" id="nombre-propietario" class="input-nombre-propietario" value="${vehiculo.propietario.nombre}" readonly />
    
                        <label for="telefono">Teléfono:</label>
                        <input type="tel" id="telefono" class="input-telefono" value="${vehiculo.propietario.telefono}" readonly />
    
                        <label for="email">Email:</label>
                        <input type="email" id="email" class="input-email" value="${vehiculo.propietario.email}" readonly />
    
                        <div class="acciones">
                            <button type="button" class="ver-reparaciones" data-id="${vehiculoId}" data-action="ver-reparaciones">Ver Reparaciones</button>
                        </div>
                    </form>
                </section>
            `;
        }
    }

    #generarHTMLReparacionesVehiculo(vehiculoId) {
        const vehiculo = this.#clienteBD.obtenerVehiculo("vehiculoId", vehiculoId);
        const reparaciones = this.#clienteBD.obtenerReparaciones("vehiculoId", vehiculoId);
    
        reparaciones.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
    
        return `
            <section class="reparaciones-vehiculo">
                <h2>Reparaciones del Vehículo</h2>
    
                <!-- Información del vehículo y propietario -->
                <div class="vehiculo-info">
                    <p><strong>Matrícula:</strong> ${vehiculo.matricula}</p>
                    <p><strong>Propietario:</strong> ${vehiculo.propietario.nombre}</p>
                    <p><strong>Teléfono:</strong> ${vehiculo.propietario.telefono}</p>
                    <div class="acciones">
                        <button class="ver-vehiculo" data-id="${vehiculoId}" data-action="ver-vehiculo">Ver Vehículo</button>
                    </div>
                </div>
    
                <!-- Listado de reparaciones -->
                <ul class="lista-reparaciones">
                    ${reparaciones.map(reparacion => `
                        <li class="reparacion-item">
                            <p><strong>Descripción:</strong> ${reparacion.descripcion}</p>
                            <p><strong>Fecha:</strong> ${new Date(reparacion.fecha).toLocaleDateString()}</p>
                            <p><strong>Kilómetros:</strong> ${reparacion.kilometros}</p>
                            <p><strong>Presupuesto:</strong> ${reparacion.presupuesto ? 'Sí' : 'No'}</p>
                            <p><strong>Aprobada:</strong> ${reparacion.aprobada ? 'Sí' : 'No'}</p>
                            <p><strong>Pagado:</strong> ${reparacion.pagado ? 'Sí' : 'No'}</p>
                            <p><strong>Terminado:</strong> ${reparacion.terminado ? 'Sí' : 'No'}</p>
                            <div class="acciones">
                                <button class="ver-reparacion" data-id="${reparacion.reparacionId}" data-action="ver-reparacion">Ver Reparación</button>
                                <button class="borrar-reparacion" data-id="${reparacion.reparacionId}" data-action="borrar-reparacion">Borrar Reparación</button>
                            </div>
                        </li>
                    `).join('')}
                </ul>
            </section>
        `;
    }

    #generarHTMLReparaciones(reparaciones) {
        const listaReparaciones = reparaciones.length
            ? reparaciones.map(reparacion => `
                <li class="reparacion-item">
                    <p><strong>Fecha:</strong> ${reparacion.fecha}</p>
                    <p><strong>Descripción:</strong> ${reparacion.descripcion}</p>
                    <p><strong>Kilómetros:</strong> ${reparacion.kilometros}</p>
                    <p><strong>Presupuesto:</strong> ${reparacion.presupuesto ? 'Si' : 'No'}</p>
                    <p><strong>Aprobada:</strong> ${reparacion.aprobada ? 'Si' : 'No'}</p>
                    <p><strong>Pagado:</strong> ${reparacion.pagado ? 'Si' : 'No'}</p>
                    <p><strong>Terminado:</strong> ${reparacion.terminado ? 'Si' : 'No'}</p>
                    <div class="acciones">
                        <button class="ver-reparacion" data-id="${reparacion.reparacionId}">Ver</button>
                        <button class="borrar-reparacion" data-id="${reparacion.reparacionId}">Borrar</button>
                    </div>
                    <h4>Trabajos:</h4>
                    <ul class="lista-trabajos">
                        ${reparacion.trabajos.map(trabajo => `
                            <li>
                                <p><strong>Concepto:</strong> ${trabajo.concepto}</p>
                                <p><strong>Precio unitario:</strong> ${trabajo.precioUnitario}€</p>
                                <p><strong>Cantidad:</strong> ${trabajo.cantidad}</p>
                                <p><strong>Total:</strong> ${trabajo.totalTrabajo}€</p>
                            </li>
                        `).join('')}
                    </ul>
                </li>
            `).join('')
            : '<p>No hay reparaciones registradas.</p>';
    
        return `
            <section class="listado-reparaciones">
                <h2>Listado de Reparaciones</h2>
                <ul class="lista-reparaciones">
                    ${listaReparaciones}
                </ul>
                <button class="volver" data-action="inicio">Volver al inicio</button>
            </section>
        `;
    }

    #generarHTMLReparacion(reparacionId = 0, vehiculoId = 0) {
        let reparacion = {};
        if (reparacionId !== 0) {
            reparacion = this.#clienteBD.obtenerReparacion("reparacionId", reparacionId);
        }
    
        return `
            <section class="formulario-reparacion">
                <h2>${reparacionId === 0 ? 'Nueva Reparación' : 'Modificar Reparación'}</h2>
    
                <form id="form-reparacion">
                    <input type="hidden" name="vehiculoId" value="${vehiculoId}" />
    
                    <label for="descripcion">Descripción:</label>
                    <textarea id="descripcion" rows="4">${reparacion.descripcion || ''}</textarea>
    
                    <label for="fecha">Fecha:</label>
                    <input type="date" id="fecha" value="${reparacion.fecha || ''}" />
    
                    <label for="kilometros">Kilómetros:</label>
                    <input type="number" id="kilometros" value="${reparacion.kilometros || ''}" />
    
                    <label for="presupuesto">Presupuesto:</label>
                    <input type="checkbox" id="presupuesto" ${reparacion.presupuesto ? 'checked' : ''} />
    
                    <label for="aprobada">Aprobada:</label>
                    <input type="checkbox" id="aprobada" ${reparacion.aprobada ? 'checked' : ''} />
    
                    <label for="pagado">Pagado:</label>
                    <input type="checkbox" id="pagado" ${reparacion.pagado ? 'checked' : ''} />
    
                    <label for="terminado">Terminado:</label>
                    <input type="checkbox" id="terminado" ${reparacion.terminado ? 'checked' : ''} />
    
                    <div class="acciones">
                        <button type="submit" class="guardar-reparacion">${reparacionId === 0 ? 'Crear Reparación' : 'Guardar Cambios'}</button>
                        ${reparacionId !== 0 ? `
                            <button type="button" class="borrar-reparacion" data-id="${reparacionId}">Borrar Reparación</button>
                        ` : ''}
                    </div>
                </form>
    
                <!-- Formulario para añadir un nuevo trabajo -->
                <div class="form-nuevo-trabajo">
                    <h3>Añadir Trabajo</h3>
                    <label for="concepto">Concepto:</label>
                    <input type="text" id="concepto" />
    
                    <label for="precioUnitario">Precio Unitario:</label>
                    <input type="number" id="precioUnitario" />
    
                    <label for="cantidad">Cantidad:</label>
                    <input type="number" id="cantidad" />
    
                    <button type="button" class="añadir-trabajo">Añadir Trabajo</button>
                </div>
            </section>
        `;
    }
    
    


    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////



    #asignarEventosMenu() {
        // Almaceno el selector css class de los enlaces
        const enlaces = this.#contenedor.querySelectorAll('.menu');
        
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
                const vehiculos = this.#clienteBD.obtenerVehiculos();
                resultados.innerHTML = this.#generarHTMLVehiculos(vehiculos);
                this.#asignarEventosVehiculos();
                break;
            case 'no-terminadas':
                const reparacionesNoTerminadas = this.#clienteBD.obtenerReparaciones('terminado', false);
                resultados.innerHTML = this.#generarHTMLReparaciones(reparacionesNoTerminadas);
                break;
            case 'no-pagadas':
                const reparacionesNoPagadas = this.#clienteBD.obtenerReparaciones("pagado", false);
                resultados.innerHTML = this.#generarHTMLReparaciones(reparacionesNoPagadas);
                break;
            case 'presupuestos':
                const reparacionesPresupuestos = this.#clienteBD.obtenerReparaciones("presupuesto", true);
                resultados.innerHTML = this.#generarHTMLReparaciones(reparacionesPresupuestos);
                break;
            default:
                resultados.innerHTML = '';
                break;
        }
    }

    #asignarEventosVehiculos() {
        const botonesVer = this.#contenedor.querySelectorAll('.ver-vehiculo');
        const botonesReparaciones = this.#contenedor.querySelectorAll('.ver-reparaciones');
        const botonesBorrar = this.#contenedor.querySelectorAll('.borrar-vehiculo');
    
        botonesVer.forEach(boton => {
            boton.addEventListener('click', () => {
                const vehiculoId = boton.dataset.id;
                this.#mostrarVehiculo(vehiculoId);
            });
        });
    
        botonesReparaciones.forEach(boton => {
            boton.addEventListener('click', () => {
                const vehiculoId = boton.dataset.id;
                this.#mostrarReparacionesVehiculo(vehiculoId);
            });
        });
    
        botonesBorrar.forEach(boton => {
            boton.addEventListener('click', () => {
                const vehiculoId = boton.dataset.id;
                this.#borrarVehiculo(vehiculoId);
            });
        });
    }

    #mostrarVehiculo(vehiculoId) {
        const vehiculo = this.#clienteBD.obtenerVehiculo('vehiculoId', vehiculoId);
        const resultados = this.#contenedor.querySelector('#resultados');
        resultados.innerHTML = this.#generarHTMLVehiculo(vehiculoId);
    }

    #mostrarReparacionesVehiculo(vehiculoId) {
        const reparaciones = this.#clienteBD.obtenerReparacionesPorVehiculoId(vehiculoId);
        const vehiculo = this.#clienteBD.obtenerVehiculoPorId(vehiculoId);
        
        const resultados = this.#contenedor.querySelector('#resultados');
        resultados.innerHTML = this.#generarHTMLReparacionesVehiculo(vehiculo, reparaciones);
    
        // Asignamos eventos a los botones generados
        // this.#asignarEventosReparacionesVehiculo();
    }
    
    #borrarVehiculo(vehiculoId) {
        const confirmacion = window.confirm('¿Estás seguro de que quieres borrar este vehículo?');
        if (confirmacion) {
            this.#clienteBD.borrarVehiculo(vehiculoId);
            this.#navegar('vehiculos'); // Recarga el listado de vehículos
        }
    }

};

window.addEventListener('load', function() {
    const gestion = new GestionMecanica();
    gestion.iniciarApp('.app');
});