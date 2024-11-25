class Trabajo{
    
    constructor(concepto, precioUnitario, cantidad) {
    this.concepto = concepto;
    this.precioUnitario = precioUnitario;
    this.cantidad = cantidad;
    this.totalTrabajo = precioUnitario * cantidad;
  }
}

export default Trabajo;