import { Linea } from "./linea.js";

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
        let factura = `<p>NIF Cliente: ${this.clienteNIF} <br> Fecha: ${this.fecha} <br> Hora: ${this.hora} <br> Pagado: ${this.pagada ? 'Si' : 'No'}<br> Líneas:</p>`;
        for (let linea of this.lineas) {
            factura += `<ul><li>Concepto: ${linea.concepto}</li> <li>Cantidad: ${linea.cantidad}</li> <li>Precio unitario: ${linea.precioUnitario}</li></ul>`;
        }
        factura += `<p>Importe total: ${this.importeTotal}</p>`;
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