import datos from './datos-taller.js';

class BD {
    #vehiculos;
    #reparaciones;
    #siguienteVehiculoId;
    #siguienteReparacionId;

    constructor() {
        this.#vehiculos = [...datos.vehiculos];
        this.#reparaciones = [...datos.reparaciones];
        // Establecer el siguiente ID autoincremental según el máximo ID actual
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
        return [...this.#vehiculos];
    }

    obtenerVehiculo(filtro, valor) {
        return this.#vehiculos.find(vehiculo => vehiculo[filtro] === valor);
    }

    crearVehiculo(vehiculo) {
        vehiculo.vehiculoId = this.#siguienteVehiculoId++;
        this.#vehiculos.push(vehiculo);
    }

    borrarVehiculo(vehiculoId) {
        this.#vehiculos = this.#vehiculos.filter(vehiculo => vehiculo.vehiculoId !== vehiculoId);
    }

    obtenerReparaciones(filtro = null, valor = null) {
        if (filtro && valor) {
            return this.#reparaciones.filter(reparacion => reparacion[filtro] === valor);
        }
        return [...this.#reparaciones];
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
        this.#reparaciones = this.#reparaciones.filter(reparacion => reparacion.reparacionId !== reparacionId);
    }
}

export default BD;