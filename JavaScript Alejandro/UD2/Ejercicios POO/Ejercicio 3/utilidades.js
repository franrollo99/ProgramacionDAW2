class Utilidades {
    static serializarFactura(facturaOBJ) {
        return JSON.stringify(facturaOBJ); //Convertimos un objeto en una cadena JSON
    }

    static deserializarFactura(facturaJSON) {
        const obj = JSON.parse(facturaJSON); //Convertimos la cadena JSON en un objeto
        const factura = new Factura(obj.clienteNIF, obj.fecha, obj.hora, obj.pagada); //Creamos un nuevo objeto de clase factura
        obj.líneas.forEach(linea => factura.agregarLinea(linea.concepto, linea.cantidad, linea.precioUnitario));
        return factura;
    }
}

export { Utilidades };