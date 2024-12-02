import datos from './datos.js';
import Juguete from './juguete.js';

class Jugueteria {
    #contenedor;
    #juguetes;
    #contador;

    constructor() {
        this.#contenedor = null;
        this.#juguetes = datos.map(dato => new Juguete(dato.jugueteId, dato.nombre, dato.marca, dato.precio));
        this.#contador = Math.max(...this.#juguetes.map(juguete => juguete.jugueteId), 0);
    }

    iniciarApp(selector) {
        this.#contenedor = document.querySelector(selector);
        if (!this.#contenedor) {
            alert('No se encontró el contenedor especificado');
            return;
        }
        this.#navegarInicio();
    }

    obtenerJuguetes(filtro = '') {
        if (!filtro) return this.#juguetes;
        return this.#juguetes.filter(juguete =>
            juguete.nombre.toLowerCase().includes(filtro.toLowerCase())
        );
    }

    obtenerJuguete(jugueteId) {
        return this.#juguetes.find(juguete => juguete.jugueteId === jugueteId);
    }

    crearJuguete(nuevo) {
        this.#contador++;
        const juguete = new Juguete(this.#contador, nuevo.nombre, nuevo.marca, nuevo.precio);
        this.#juguetes.push(juguete);
        // Actualizo la vista
        this.#navegarListadoJuguetes();
    }

    borrarJuguete(jugueteId) {
        this.#juguetes = this.#juguetes.filter(j => j.jugueteId !== jugueteId);
        this.#navegarListadoJuguetes();
    }

    // Cuenta con la navegacion, el busador y el listado
    #navegarInicio() {
        this.#contenedor.innerHTML = `
            ${this.generarHTMLNavegacion()}
            ${this.generarHTMLBuscador()}
            ${this.#generarHTMLListado(this.#juguetes)}
        `;
        this.#asignarEventos();
    }
    #navegarListadoJuguetes() {
        this.#contenedor.innerHTML = `
        ${this.generarHTMLNavegacion()}
        ${this.#generarHTMLListado(this.#juguetes)}
    `;
        this.#asignarEventos();
    }

    #navegarPropiedades(juguete) {
        this.#contenedor.innerHTML = `
            ${this.generarHTMLNavegacion()}
            ${juguete.generarHTMLPropiedades()}
        `;
        this.#asignarEventos();
    }

    generarHTMLNavegacion() {
        return `
            <nav data-componente="navegacion" class="jg-navegacion">
                <ul>
                    <li><a href="#" data-destino="inicio">Inicio</a></li>
                    <li><a href="#" data-destino="listadojuguetes">Listado</a></li>
                </ul>
            </nav>
        `;
    }

    generarHTMLBuscador() {
        return `
            <form data-componente="buscador" id="jg-buscador">
                <input type="text" id="jg-buscador-filtro" placeholder="Buscar por nombre..." />
                <button type="submit">Buscar</button>
            </form>
        `;
    }

    #generarHTMLListado(listaJuguetes) {
        // MAQUETAR CON DIVS no con tablas
        return `
          <div class="jg-tabla">
            <div class="jg-tabla-fila jg-cabecera">
              <div>Nombre</div><div>Marca</div><div>Precio</div><div>Acciones</div>
            </div>
            ${listaJuguetes.map(juguete => `
              <div class="jg-tabla-fila">
                <div>${juguete.nombre}</div>
                <div>${juguete.marca}</div>
                <div>$${juguete.precio.toFixed(2)}</div>
                <div>
                  <button data-accion="ver" data-id="${juguete.jugueteId}">Ver</button>
                  <button data-accion="borrar" data-id="${juguete.jugueteId}">Borrar</button>
                </div>
              </div>
            `).join('')}
          </div>
        `;
    }

    #asignarEventos() {
        // Navegación inicio y listado
        this.#contenedor.querySelectorAll('[data-destino]').forEach(enlace => {
            enlace.addEventListener('click', () => {
                event.preventDefault();
                const destino = enlace.dataset.destino;
                if (destino === 'inicio') this.#navegarInicio();
                if (destino === 'listadojuguetes') this.#navegarListadoJuguetes();
            });
        });

        // Buscador
        const buscador = this.#contenedor.querySelector('#jg-buscador');
        if (buscador) {
            buscador.addEventListener('submit', () => {
                event.preventDefault();
                const filtro = buscador.querySelector('#jg-buscador-filtro').value;
                const juguetesFiltrados = this.obtenerJuguetes(filtro);
                ////////////////////
                this.#contenedor.querySelector('[data-componente="listado"]').innerHTML = this.#generarHTMLListado(juguetesFiltrados);
            });
        }

        // Acciones de listado
        this.#contenedor.querySelectorAll('[data-accion]').forEach(boton => {
            boton.addEventListener('click', () => {
                event.preventDefault();
                const id = parseInt(boton.dataset.id, 10);
                const accion = boton.dataset.accion;
                if (accion === 'ver') {
                    const juguete = this.obtenerJuguete(id);
                    if (juguete) this.#navegarPropiedades(juguete);
                }
                if (accion === 'borrar') this.borrarJuguete(id);
            });
        });
    }
}

const jugueteria = new Jugueteria();
jugueteria.iniciarApp('#app');

export default Jugueteria;