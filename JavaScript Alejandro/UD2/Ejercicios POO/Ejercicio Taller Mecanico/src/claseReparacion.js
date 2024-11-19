class Reparacion{
    constructor(vehiculoId, descripcion, fecha, kilometros){
        this.vehiculoId=vehiculoId;
        this.descripcion=descripcion;
        this.fecha=fecha;
        this.kilometros=kilometros;
        this.presupuesto=false;
        this.aprobada=false;
        this.pagado=false;
        this.terminado=false;
    }
}

export default Reparacion;