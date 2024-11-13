import { Factura } from "./factura.js";
import { Utilidades } from "./utilidades.js";

let factura = new Factura('', '', '', false);

document.addEventListener('DOMContentLoaded', function () {

  document.getElementById('actualizarFactura').addEventListener('click', function () {
    factura.clienteNIF = document.getElementById('clienteNIF').value;
    factura.fecha = document.getElementById('fecha').value;
    factura.hora = document.getElementById('hora').value;
    factura.pagada = document.getElementById('pagada').checked;
    imprimirFactura();
  });

  document.getElementById('agregarLinea').addEventListener('click', function () {
    const concepto = document.getElementById('concepto').value;
    const cantidad = parseInt(document.getElementById('cantidad').value, 10);
    const precio = parseFloat(document.getElementById('precio').value);
    factura.agregarLinea(concepto, cantidad, precio);
    imprimirFactura();
  });

  document.getElementById('eliminarLinea').addEventListener('click', function () {
    factura.eliminarLinea();
    imprimirFactura();
  });

  document.getElementById('serializarFactura').addEventListener('click', function () {
    document.getElementById('salida').value = Utilidades.serializarFactura(factura);
  });

  document.getElementById('deserializarFactura').addEventListener('click', function () {
    const JSON = document.getElementById('entrada').value;
    factura = Utilidades.deserializarFactura(JSON);
    imprimirFactura();
  });

  function imprimirFactura() {
    document.getElementById('impresion').innerHTML = factura.imprimirFactura();
  }
});