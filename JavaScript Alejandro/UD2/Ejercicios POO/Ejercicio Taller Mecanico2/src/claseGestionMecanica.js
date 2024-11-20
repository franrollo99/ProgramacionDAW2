import datos from './datos-taller.js'
import Vehiculo from './claseVehiculo.js'
import Propietario from './clasePropietario.js'
import Reparacion from './claseReparacion.js'
import Trabajo from './claseTrabajo.js'

class GestionMecanica{
    #clienteBD;
    #contenedor;

    constructor(clienteBD, contenedor){
        this.#clienteBD=clienteBD;
        this.#contenedor=contenedor;
    }

    iniciarApp(selector){
        const contenedor = document.querySelector(selector);
        if(!contenedor){
            console.error('Error: no se ha podido iniciar la aplicacion');
            return;
        }

        this.#contenedor = contenedor;
        this.#contenedor.innerHTML = this.#generarHTMLBase();
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
                    <p>Id vehiculo: ${vehiculo.vehiculoId}</p>
                    <p>Matricula: ${vehiculo.matricula}</p>
                    <p>Marca: ${vehiculo.marca}</p>
                    <p>Modelo: ${vehiculo.modelo}</p>
                    <p>Año: ${vehiculo.año}</p>
                    <p>Motor: ${vehiculo.motor}</p>
                    <button id="verVehiculo${vehiculo.vehiculoId}>Ver vehiculo</button>
                    <button id="verReparaciones${vehiculo.vehiculoId}>Ver reparaciones</button>
                    <button id="borrarVehiculo${vehiculo.vehiculoId}>Borrar vehiculo</button>
                    
                </div>
            `;
        }).join(''); //Para concatenar los elementos del array
        
        // <button  class="btn-borrar-vehiculo" data-borrar-vehiculo-id="${vehiculo.vehiculoId}>Ver</button>
    }

    #generarHTMLVehiculo(vehiculoID=null){
        return `
            <form method='post'>
                <fieldset>
                    <label for='vehiculoId'>Id vehiculo:</label>
                    <input type='text' id='vehiculoId'>
                    <br><br>
                    <label for='matricula'>Matricula:</label>
                    <input type='text' id='matricula'>
                    <br><br>
                    <label for='marca'>Marca:</label>
                    <input type='text' id='marca'>
                    <br><br>
                    <label for='modelo'>Modelo:</label>
                    <input type='text' id='modelo'>
                    <br><br>
                    <label for='año'>Año:</label>
                    <input type='text' id='año'>
                    <br><br>
                    <label for='motor'>Motor:</label>
                    <input type='text' id='motor'>
                    <fieldset>
                        <label for='nombrePropietario'>Nombre propietario:</label>
                        <input type='text' id='nombrePropietario'>
                        <br><br>
                        <label for='telefono'>Telefono:</label>
                        <input type='text' id='telefono'>
                        <br><br>
                        <label for='email'>email:</label>
                        <input type='text' id='email'>
                    </fieldset>
                </fieldset>
                <button id="crearNuevoVehiculo">Nuevo coche</button>
            </form>
        `;
    }

    #generarHTMLReparacionesVehiculo(vehiculoId){
        return `
            
        `;
    }

    #generarHTMLReparaciones(reparaciones){
        return reparaciones.map(reparacion =>{
            return `
                <div class='reparaciones'>
                    <p>Id reparacion: ${reparacion.reparacionId}</hp>
                    <p>Id vehiculo: ${reparacion.vehiculoId}</p>
                    <p>Descripcion: ${reparacion.descripcion}</p>
                    <p>Fecha: ${reparacion.fecha}</p>
                    <p>Kilometros: ${reparacion.kilometros}</p>
                    <p>Presupuesto: ${reparacion.presupuesto ? 'Si' : 'No'}</p>
                    <p>Aprobada: ${reparacion.aprobada ? 'Si' : 'No'}</p>
                    <p>Pagado: ${reparacion.pagado ? 'Si' : 'No'}</p>
                    <p>Terminado: ${reparacion.terminado ? 'Si' : 'No'}</p>
                    <button id="verVehiculo${vehiculo.vehiculoId}>Ver vehiculo</button>
                    <button id="verReparaciones${vehiculo.vehiculoId}>Ver reparaciones</button>
                    <button id="borrarVehiculo${vehiculo.vehiculoId}>Borrar vehiculo</button>
                    
                </div>
            `;
        }).join('');
    }

    #generarHTMLReparacion(reparacionId=0, vehiculoId=0){
        return `
            <form method='post'>
                <fieldset>
                    <label for='reparacionId'>Id reparacion:</label>
                    <input type='text' id='reparacionId'>
                    <br><br>
                    <label for='descripcion'>Descripcion:</label>
                    <input type='text' id='descripcion'>
                    <br><br>
                    <label for='fecha'>Fecha:</label>
                    <input type='date' id='fecha'>
                    <br><br>
                    <label for='kilometros'>Kilometros:</label>
                    <input type='int' id='kilometros'>
                    <br><br>
                    <label for='presupuesto'>Presupuesto:</label>
                    <input type='checkbox' id='presupuesto'>
                    <br><br>
                    <label for='aprobada'>Aprobada:</label>
                    <input type='checkbox' id='aprobada'>
                    <br><br>
                    <label for='pagado'>Pagado:</label>
                    <input type='checkbox' id='pagado'>
                    <label for='terminado'>Terminado:</label>
                    <input type='checkbox' id='terminado'>
                    <fieldset>
                        <label for='concepto'>Concepto:</label>
                        <input type='text' id='concepto'>
                        <br><br>
                        <label for='precioUnitario'>Precio unitario:</label>
                        <input type='int' id='precioUnitario'>
                        <br><br>
                        <label for='cantidad'>Cantidad:</label>
                        <input type='int' id='cantidad'>
                    </fieldset>
                </fieldset>
                <button id="crearNuevaReparacion">Nueva reparacion</button>
            </form>
        `;
    }
}

document.addEventListener('DOMContentLoaded', function(){
    const contenedor = document.getElementById('app');
    
});