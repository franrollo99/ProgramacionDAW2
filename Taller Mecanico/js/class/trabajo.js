class Trabajo{
    constructor(concepto, precioUnitario, cantidad, totalTrabajo=precioUnitario*cantidad){
        this.concepto=concepto;
        this.precioUnitario=precioUnitario;
        this.cantidad=cantidad;
        this.totalTrabajo=totalTrabajo;
    }
}

export default Trabajo;