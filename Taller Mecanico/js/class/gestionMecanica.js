import BD from './BD.js';

class GestionMecanica{
    constructor(){
        this.clienteBD=new BD();
        this.contenedor=null;
    }

    iniciarApp(selector){
        const contenedor=document.querySelector(selector);

        if(contenedor){
            this.contenedor=contenedor;
            this.contenedor.innerHTML=this.#generarHTMLBase();
            console.log('Aplicacion iniciada correctamente');
        }else{
            console.log('No se encontro ningun contenedor');
        }
    }

    #generarHTMLBase(){
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

    #generarHTMLInicio(){
        return `
            <div class="buscarVehiculo">
                <form method="get">
                    <label for="busqueda">Busqueda:</label>
                    <input type="text" id="busqueda">
                    <select id="filtro">
                    <option value="matricula">Matricula</option>
                    <option value="telefono">Telefono</option>
                    </select>
                    <input type="submit" value="Buscar">
                </form>
                <div id="resultado"></div>
            </div>
        `;
    }

    #generarHTMLVehiculos(vehiculos){
        return datos.vehiculos.map(vehiculo=>`
            <div>
                <ul>
                    <li>Id vehículo: ${vehiculo.vehiculoId}</li>
                    <li>Matrícula: ${vehiculo.matricula}</li>
                    <li>Marca: ${vehiculo.marca}</li>
                    <li>Modelo: ${vehiculo.modelo}</li>
                    <li>Año: ${vehiculo.año}</li>
                    <li>Motor: ${vehiculo.motor}</li>
                    <li>Propietario:</li>
                    <ul>
                        <li>Nombre: ${vehiculo.propietario.nombre}</li>
                        <li>Telefono: ${vehiculo.propietario.telefono}</li>
                        <li>Email: ${vehiculo.propietario.email}</li>
                    </ul>
                </ul>
            </div>
        `).join('');
    }
}

window.addEventListener('load', function(){
    const app=new GestionMecanica();

    app.iniciarApp('#app');
});