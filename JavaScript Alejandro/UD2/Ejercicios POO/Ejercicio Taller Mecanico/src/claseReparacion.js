class Reparacion {

    constructor(vehiculoId, descripcion, fecha, kilometros, presupuesto = false, aprobada = false, pagado = false, terminado = false, trabajos = []) {
        this.reparacionId = null;
        this.vehiculoId = vehiculoId;
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.kilometros = kilometros;
        this.presupuesto = presupuesto;
        this.aprobada = aprobada;
        this.pagado = pagado;
        this.terminado = terminado;
        this.trabajos = trabajos;
    }

    agregarTrabajo(trabajo) {
        this.trabajos.push(trabajo);
    }
}

export default Reparacion;