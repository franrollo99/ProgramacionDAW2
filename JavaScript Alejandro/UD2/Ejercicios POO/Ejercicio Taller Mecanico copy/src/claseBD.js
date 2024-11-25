import datos from './datos-taller.js';

class BD {
    #vehiculos;
    #reparaciones;
    #siguienteVehiculoId;
    #siguienteReparacionId;

    constructor() {
        // Cargamos los datos desde el archivo datos-taller.js
        this.#vehiculos = [...datos.vehiculos];
        this.#reparaciones = [...datos.reparaciones];
        // Establecer el siguiente ID según el máximo ID actual haciendo que sea incremental
        this.#siguienteVehiculoId = Math.max(...this.#vehiculos.map(vehiculo => vehiculo.vehiculoId)) + 1;
        this.#siguienteReparacionId = Math.max(...this.#reparaciones.map(reparacion => reparacion.reparacionId)) + 1;
    }

    get siguienteVehiculoId() {
        return this.#siguienteVehiculoId;
    }

    get siguienteReparacionId() {
        return this.#siguienteReparacionId;
    }

    obtenerVehiculos() {
        return this.#vehiculos;
    }

    // find devuelve el primer vehiculo que coincide con el filtro, en caso de no encontrarlo devuelve undefined
    // filter devuelve un array con todos los vehiculos que coinciden con el filtro, en caso de no encontrar ningun vehiculo devuelve un array vacio
    obtenerVehiculo(filtro, valor) {
        return this.#vehiculos.find(vehiculo => vehiculo[filtro] === valor);
    }

    // Es recomendable incrementar el id al final del metodo en vez de al principio para hacerlo mas claro y facil de entender
    crearVehiculo(vehiculo) {
        vehiculo.vehiculoId = this.#siguienteVehiculoId++;
        this.#vehiculos.push(vehiculo);
    }

    borrarVehiculo(vehiculoId) {
        for (let i = 0; i < this.#vehiculos.length; i++) {
            if (this.#vehiculos[i].vehiculoId === vehiculoId) {
                this.#vehiculos.splice(i, 1);
                break;
            }
        }
    }

    obtenerReparaciones(filtro = null, valor = null) {
        if (filtro && valor) {
        return this.#reparaciones.filter(reparacion => reparacion[filtro] === valor);
        }
        return this.#reparaciones;
    }

    obtenerReparacion(reparacionId) {
        return this.#reparaciones.find(reparacion => reparacion.reparacionId === reparacionId);
    }

    crearReparacion(vehiculoId, reparacion) {
        reparacion.reparacionId = this.#siguienteReparacionId++;
        reparacion.vehiculoId = vehiculoId;
        this.#reparaciones.push(reparacion);
    }

    borrarReparacion(reparacionId) {
        for (let i = 0; i < this.#reparaciones.length; i++) {
            if (this.#reparaciones[i].reparacionId === reparacionId) {
                this.#reparaciones.splice(i, 1);
                break;
            }
        }
    }
}

export default BD;