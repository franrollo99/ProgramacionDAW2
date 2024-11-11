import { Linea } from "./linea";

class Factura {

    constructor(clienteNIF, fecha, hora, pagada = false) {
        this.clienteNIF = clienteNIF;
        this.fecha = fecha;
        this.hora = hora;
        this.pagada = pagada;
        this.lineas = [];
    }

    get importeTotal() {
        let importeTotal = 0;

        for (let linea of this.lineas) {
            importeTotal += (linea.cantidad * linea.precioUnitario);
        }

        return importeTotal;
    }

    get numeroArticulos() {
        return this.lineas.length;
    }

    imprimirFactura() {
        let factura = `NIF Cliente: ${this.clienteNIF} \n Fecha: ${this.fecha} \n Hora: ${this.hora} \n Pagado: ${this.pagado} \n Lista de líneas: \n`;

        for (let linea of this.lineas) {
            factura += `Concepto: ${linea.concepto} - Cantidad: ${linea.cantidad} - Precio unitario: ${linea.precioUnitario} \n`;
        }

        factura += `Importe total: ${this.importeTotal}`;

        return factura;
    }

    agregarLinea(concepto, cantidad, precio) {
        this.lineas.push(new Linea(concepto, cantidad, precio));
    }

    eliminarLinea() {
        this.lineas.pop();
    }
}

export { Factura };