import Factura from './Factura.js';
import Linea from './Linea.js';
import Utilidades from './Utilidades.js';

let factura;
const contenedorFactura = document.getElementById('factura');
const formCrearFactura = document.getElementById('form-crearFactura');
const formAñadirLinea = document.getElementById('form-lineasFactura');

window.addEventListener('load', () => {

    formCrearFactura.addEventListener('submit', (e) => {
        e.preventDefault();

        const clienteNIF = document.getElementById('clienteNIF').value;
        const fecha = document.getElementById('fecha').value;
        const hora = document.getElementById('hora').value;
        const pagado = document.getElementById('pagada').checked;

        factura = new Factura(clienteNIF, fecha, hora, pagado);

        formCrearFactura.reset();
    })

    formAñadirLinea.addEventListener('submit', (e) => {
        e.preventDefault();

        const concepto = document.getElementById('concepto').value;
        const cantidad = document.getElementById('cantidad').value;
        const precio = document.getElementById('precio').value;

        factura.agregarLinea(concepto, cantidad, precio);
    });

    document.getElementById('btn-eliminarLinea').addEventListener('click', () => {
        factura.agregarLinea(concepto, cantidad, precio);
    });
    
    document.getElementById('imprimirFactura').addEventListener('click', () => {
        contenedorFactura.innerHTML = '';
        
        if(factura){
            contenedorFactura.innerHTML += factura.imprimirFactura();    
        }else{
            contenedorFactura.innerHTML += "<p>No existe ninguna factura</p>";    
        }
    })
});