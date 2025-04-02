class Factura {

    // pagada no la paso en el constructor porque la pongo con valor predeterminado false
    constructor(clienteNIF, fecha, hora) {
        this.clienteNIF = clienteNIF;
        this.fecha = fecha;
        this.hora = hora;
        this.pagada = false;
        this.lineas = [];
    }

    get importeTotal() {

    }

    get numeroArticulos() {
        return this.lineas.length();
    }

    imprimirFactura() {
        const resultado = '';
        resultado += `<p>NIF cliente: ${this.clienteNIF}</p>`;
        resultado += `<p>Fecha: ${this.fecha}</p>`;
        resultado += `<p>Hora: ${this.hora}</p>`;
        resultado += `<p>Pagada: ${this.clienteNIF ? 'Si' : 'No'}</p>`;
        for (linea of this.lineas) {
            resultado += `<li>: ${linea}</li>`;
        }

        return resultado;
    }

    agregarLinea(concepto, cantidad, precio) {
        let nuevaLinea = '-Concepto: ' + concepto + ' - Cantidad: ' + cantidad + ' -Precio: ' + precio;
        this.lineas.push(nuevaLinea);

        return null;
    }

    eliminarLinea() {
        this.linea.pop();

        return null;
    }
}

export default Factura;