import datos from '../datos-taller.js';

class BD {
    #vehiculos;
    #reparaciones;
    #siguienteVehiculoId;
    #siguienteReparacionId;

    constructor() {
        this.#vehiculos = [...datos.vehiculos];
        this.#reparaciones = [...datos.reparaciones];
        this.#siguienteVehiculoId = Math.max(...this.#vehiculos.map(vehiculo => vehiculo.vehiculoId)) + 1;
        this.#siguienteReparacionId = Math.max(...this.#reparaciones.map(reparacion => reparacion.reparacionId)) + 1;
    }

    obtenerVehiculos() {
        return this.#vehiculos;
    }

    obtenerVehiculo(filtro, valor) {
        let vehiculoEncontrado;

        switch (filtro) {
            case 'vehiculoId':
                vehiculoEncontrado = this.#vehiculos.find(vehiculo => vehiculo.vehiculoId === valor);
                break;
            case 'matricula':
                vehiculoEncontrado = this.#vehiculos.find(vehiculo => vehiculo.matricula === valor);
                break;
            case 'telefono':
                vehiculoEncontrado = this.#vehiculos.find(vehiculo => vehiculo.propietario.telefono === valor);
                break;
            default:
                console.error("El filtro introducido no es válido");
                return null;
        }

        if (!vehiculoEncontrado) {
            console.warn(`No se encontró ningún vehículo con el filtro "${filtro}" y valor "${valor}"`);
            return null;
        }

        return vehiculoEncontrado;
    }


    crearVehiculo(vehiculo) {
        vehiculo.vehiculoId = this.#siguienteVehiculoId++;
        this.#vehiculos.push(vehiculo);
    }

    borrarVehiculo(vehiculoId) {
        let vehiculoEncontrado;

        vehiculoEncontrado = this.#vehiculos.find(vehiculo => vehiculo.vehiculoId === vehiculoId);

        
    }
}

export default BD;