import Factura from './Factura.js';

class Utilidades {
    serializarFactura(facturaOBJ) {
        return JSON.stringify(facturaOBJ);
    }

    deserializarFactura(facturaJSON) {
        let facturaDeserializada;

        try {
            facturaDeserializada = JSON.parse(facturaJSON);

            if (!Array.isArray(facturaDeserializada)) {
                console.log('No es un array');
                return null;
            }

            return facturaDeserializada;

        } catch (error) {
            console.log(error);

            return null;
        }
    }
}

export default Utilidades;