

class Factura{
    #clienteNIF;

    constructor(clienteNIF, fecha, hora, pagada, lineas){
        this.#clienteNIF=clienteNIF;
        this.fecha=fecha;
        this.hora=hora;
        this.pagada=pagada;
        this.lineas=lineas;
    }

    get importeTotal(){
        return;
    }

    get numeroArticulos(){
        return;
    }

    imprimirFactura(){

    }

    agregarLinea(concepto, cantidad, precio){

    }

    eliminarLinea(){
        
    }
}

export {Factura};