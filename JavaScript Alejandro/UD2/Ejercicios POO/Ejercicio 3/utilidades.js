class Utilidades {
    static serializarFactura(facturaOBJ) {
        return JSON.stringify(facturaOBJ); //Convertimos un objeto en una cadena JSON
    }

    static deserializarFactura(facturaJSON) {
        return JSON.parse(facturaJSON); //Convertimos la cadena JSON en un objeto
        
    }
}

export { Utilidades };