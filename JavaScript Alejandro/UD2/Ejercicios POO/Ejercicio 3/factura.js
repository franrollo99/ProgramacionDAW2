import { Linea } from "./linea";

class Factura {
    #clienteNIF;

    constructor(clienteNIF, fecha, hora, pagada, lineas) {
        this.#clienteNIF = clienteNIF;
        this.fecha = fecha;
        this.hora = hora;
        this.pagada = pagada;
        this.lineas = lineas; // Array de Colecciones
    }

    get importeTotal() {
        let importeTotal = 0;

        for (let linea of lineas) {
            importeTotal += (linea.cantidad * linea.precioUnitario)
        }

        return importeTotal;
    }

    get numeroArticulos() {
        let numLineas = lineas.length;
        return numLineas;
    }

    imprimirFactura() {
        let factura = `NIF Cliente: ${this.clienteNIF} \n Fecha: ${this.fecha} \n Hora: ${this.hora} \n Pagado: ${this.pagado} \n Lista de líneas: \n`;

        for (let linea of this.lineas) {
            factura += `Concepto: ${linea.concepto} - Cantidad: ${linea.cantidad} - Precio unitario: ${linea.precioUnitario}`;
        }

        return factura;
    }

    agregarLinea(concepto, cantidad, precio) {
        let linea = new Map();
        linea.set(concepto, cantidad, precio);
    }

    eliminarLinea() {
        ultimaLinea = this.lineas[this.lineas.length-1]
        ultimaLinea.clear;
    }
}

export { Factura };