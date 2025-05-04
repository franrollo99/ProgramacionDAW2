import datos from './datos.js';
import Juguete from './juguete.js';

class Jugueteria {
    #contenedor;
    #juguetes;
    #contador;

    constructor() {
        this.#juguetes = datos.map(juguete => new Juguete(juguete.jugueteId, juguete.nombre, juguete.marca, juguete.precio));
        this.#contador = Math.max(...datos.map(juguete => juguete.jugueteId));
    }

    iniciarApp(selector) {
        this.#contenedor = document.querySelector(selector);

        if (!this.#contenedor) {
            alert('No se ha encontrado ningun contenedor');
            return;
        }

        this.#navegarInicio();

        return null;
    }

    obtenerJuguetes(filtro) {
        if (!filtro) return this.#juguetes;

        return this.#juguetes.filter(juguete => juguete.nombre.toLowerCase() === filtro.toLowerCase());
    }

    obtenerJuguete(jugueteId) {
        let jugueteEncontrado = this.#juguetes.filter(juguete => juguete.jugueteId === jugueteId);

        if (jugueteEncontrado.length === 0) {
            console.log('Juguete no encontrado');
            return null;
        }

        return jugueteEncontrado[0];
    }

    crearJuguete(nuevo) {
        this.#juguetes.push(new Juguete(++this.#contador, nuevo[0], nuevo[1], nuevo[2]));

        return null;
    }

    borrarJuguete(jugueteId) {
        let longitudOriginal = this.#juguetes.length;

        this.#juguetes = this.#juguetes.filter(juguete => juguete.jugueteId !== jugueteId);

        // if (longitudOriginal === this.#juguetes.length) {
        //     console.log('Juguete no encontrado');
        // }

        return null;
    }

    #navegarInicio() {
        let resultado = '';

        resultado += this.generarHTMLNavegacion();
        resultado += this.generarHTMLBuscador();
        resultado += this.generarHTMLListado(this.obtenerJuguetes());

        this.#contenedor.innerHTML = resultado;

        this.asignarEventos();

        return null;
    }

    #navegarListadoJuguetes() {
        let resultado = '';

        resultado += this.generarHTMLNavegacion();
        resultado += this.generarHTMLListado(this.obtenerJuguetes());

        this.#contenedor.innerHTML = resultado;

        this.asignarEventos();

        return null;
    }

    #navegarPropiedades(juguete) {
        let resultado = '';

        resultado += this.generarHTMLNavegacion();
        resultado += juguete.generarHTMLPropiedades();

        this.#contenedor.innerHTML = resultado;

        this.asignarEventos();

        return null;
    }



    asignarEventos() {
        // EVENTOS DE NAVEGADOR
        document.addEventListener('click', (e) => {
            const disparador = e.target;
            if (disparador.dataset.destino === 'inicio') {
                this.#navegarInicio();
                return null;
            } else if (disparador.dataset.destino === 'listadoJuguetes') {
                this.#navegarListadoJuguetes();
                return null;
            }

            if(disparador.dataset.action === 'verJuguete'){
                const id = parseInt(disparador.dataset.id);
                const juguete = this.obtenerJuguete(id);

                this.#navegarPropiedades(juguete);
            }

            if(disparador.dataset.action === 'borrarJuguete'){
                const id = parseInt(disparador.dataset.id);
                this.borrarJuguete(id);
                this.#navegarInicio();
            }

            if(disparador.dataset.action === 'nuevoJuguete'){
                const id = parseInt(disparador.dataset.id);
                const juguete = this.obtenerJuguete(id);

                this.#navegarPropiedades(juguete);
            }
        });

        // Selecciono el formulario con el name
        const formBuscador = document.forms['jg-buscador'];

        if(formBuscador){
            // EVENTOS DEL BUSCADOR
            formBuscador.addEventListener('submit', (e) => {
                e.preventDefault();
    
                const nombre = formBuscador.elements[0].value;
    
                const juguetesFiltrados = this.obtenerJuguetes(nombre);
    
                let resultado = '';
                resultado += this.generarHTMLNavegacion();
                resultado += this.generarHTMLBuscador();
                resultado += this.generarHTMLListado(juguetesFiltrados);
    
                this.#contenedor.innerHTML = resultado;

                this.asignarEventos();
    
                formBuscador.reset();
            });
        }

        const formNuevoJuguete = document.forms['jg-formulario'];

        if(formNuevoJuguete){
            // EVENTOS DE NUEVO JUGUETE
            formNuevoJuguete.addEventListener('submit', (e) => {
                e.preventDefault();

                // Cojo el valor de cada campo input con el atributo name
                const nombre = formNuevoJuguete.elements['nombre'].value;
                const marca = formNuevoJuguete.elements['marca'].value;
                const precio = formNuevoJuguete.elements['precio'].value;

                let jugueteNuevo = [nombre, marca, precio];

                this.crearJuguete(jugueteNuevo);

                this.#navegarInicio();
            });
        }

    };

    

    generarHTMLNavegacion() {
        return `
            <nav data-componente="navegacion" class="jg-navegacion">
                <ul>
                    <li><a href="#" data-destino="inicio">Inicio</a></li>
                    <li><a href="#" data-destino="listadoJuguetes">Listado</a></li>
                </ul>
            </nav>
        `;
    }

    generarHTMLBuscador() {
        return `
            <form data-componente="buscador" name="jg-buscador">
                <input type="text" id="jg-buscador-filtro" placeholder="Buscar por nombre..." />
                <button type="submit">Buscar</button>
            </form>
        `;
    }

    generarHTMLListado(listaJuguetes) {
        let listadoJuguetes = listaJuguetes.map(juguete => {
            return `
                <div class="jg-tabla-fila">
                    <div>${juguete.nombre}</div>
                    <div>${juguete.marca}</div>
                    <div>${juguete.precio}</div>
                    <div>
                        <button class="btn-ver" data-action="verJuguete" data-id="${juguete.jugueteId}">Ver</button>
                        <button class="btn-ver" data-action="borrarJuguete" data-id="${juguete.jugueteId}">Borrar</button>
                        <button class="btn-ver" data-action="nuevoJuguete" data-id="${juguete.jugueteId}">Nuevo</button>
                    </div>
                </div>
            `;
        }).join('');

        return `
            <div data-componente="listado" class="jg-tabla">
                <div class="jg-tabla-fila jg-cabecera">
                    <div>Nombre</div>
                    <div>Marca</div>
                    <div>Precio</div>
                    <div>Acciones</div>
                </div>
                ${listadoJuguetes}
            </div>
        `;
    }
}

window.addEventListener('load', () => {
    const jugueteria = new Jugueteria();

    jugueteria.iniciarApp('#app');
});



// console.log(jugueteria.crearJuguete(['dino', 'marca', 13]));
// console.log(jugueteria.obtenerJuguetes());
// console.log(jugueteria.obtenerJuguete(1));
// console.log(jugueteria.borrarJuguete(1));