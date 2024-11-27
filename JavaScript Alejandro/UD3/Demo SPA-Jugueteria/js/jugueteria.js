import datos from './datos';
import Juguete from './juguete.js';

class Jugueteria{
    #contenedor;
    #juguetes;
    #contador;

    constructor(){
        this.#contenedor=null;
        this.#juguetes= datos.map(datos => new Juguete(datos.jugueteId, datos.nombre, datos.marca, datos.precio));
        this.#contador=Math.max(...this.#juguetes.map(juguete => juguete.jugueteId));
    }

    iniciarApp(selector){
        this.#contenedor = document.querySelector(selector);

        if (!this.#contenedor) {
            alert("No se pudo iniciar la aplicación, contenedor no encontrado.");
            return;
        }

        this.#contenedor.innerHTML = this.#navegarInicio();
    }

    obtenerJuguetes(filtro){
        return this.#juguetes.filter(juguete=>$juguete.nombre.toLowerCase().includes(filtro.tolowerCase()));
    }

    obtenerJuguete(jugueteId){
        return this.#juguetes.find(juguete=>juguete.jugueteId===jugueteId);
    }

    crearjuguete(nuevo){
        const nuevoJuguete = new Juguete(
            ++this.#contador,
            nuevo.nombre,
            nuevo.marca,
            nuevo.precio
        );

        this.#juguetes.push(nuevoJuguete);
    }

    borrarJuguete(jugueteId){
        this.#juguetes = this.#juguetes.filter(juguete=>$juguete.id !==jugueteId);
    }

    #navegarInicio(){

    }

    

    #navegarListadoJuguetes(){

    }

    #navegarPropiedades(juguete){

    }

    #asignarEventos(){

    }

    generarHTMLNavegacion(){
        return `
            <nav data-componente="navegacion" class="jg-navegacion">
                <ul>
                    <li><a href="#" data-destino="inicio">Inicio</a></li>
                    <li><a href="#" datadestino="listadojuguetes">Listado</a></li>
                </ul>
            </nav>
        `;
    }

    generarHTMLBuscador(){
        return `
            <form data-componente="buscador" name="jg-buscador">
                <input type="text" id="jg-buscador-filtro" placeholder="Buscar por nombre..." />
                <button type="submit">Buscar</button>
            </form>
        `;
    }

    generarHTMLListado(listaJuguetes){
        return `
            <div data-componente="listado" class="jg-tabla">
                <div class="jg-tabla-fila jg-cabecera">
                <div>Nombre</div><div>Marca</div><div>Precio</div>
            </div>
        `;
    }
}