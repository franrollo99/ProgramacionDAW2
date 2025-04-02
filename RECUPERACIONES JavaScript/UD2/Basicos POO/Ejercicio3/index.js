import Factura from './Factura.js';
import Linea from './Linea.js';
import Utilidades from './Utilidades.js';

const formCrearFactura = document.getElementById('form-crearFactura');
const formAñadirLinea = document.getElementById('form-lineasFactura');

window.addEventListener('load', () => {

    formCrearFactura.addEventListener('submit', (e) => {
        e.preventDefault();

        const nifCliente = document.getElementById('clienteNIF').value;
        const fecha = document.getElementById('fecha').value;
        const hora = document.getElementById('hora').value;
        const pagado = document.getElementById('pagada').checked;

        console.log(nifCliente);
        console.log(fecha);
        console.log(hora);
        console.log(pagado);
    })
    
    document.getElementById('imprimirFactura').addEventListener('click', () => {

    })
});