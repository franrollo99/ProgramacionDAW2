class Reparacion{
    constructor(reparacionId=0, vehiculoId, descripcion, fecha, kilometros, presupuesto, aprobada, pagado, terminado, trabajos=[]){
        this.reparacionId=reparacionId;
        this.vehiculoId=vehiculoId;
        this.descripcion=descripcion;
        this.fecha=fecha;
        this.kilometros=kilometros;
        this.presupuesto=presupuesto;
        this.aprobada=aprobada;
        this.pagado=pagado;
        this.terminado=terminado;
        this.trabajos=trabajos;
    }

    agregarTrabajo(trabajo){
        this.trabajos.push(trabajo);
    }
}

export default Reparacion;