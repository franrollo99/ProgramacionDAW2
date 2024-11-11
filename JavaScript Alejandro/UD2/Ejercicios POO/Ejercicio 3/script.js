import { Factura } from "./factura";
import { Utilidades } from "./utilidades";

let factura = new Factura('', '', '', false);

document.addEventListener('DOMContentLoaded', function () {

  document.getElementById('actualizar').addEventListener('click', function () {
    let divImprimir=document.getElementById('impresion');
    divImprimir.innerHTML+='Hola';
  });

  // document.getElementById('actualizar').addEventListener('click', function () {
  //   factura.clienteNif = document.getElementById('clienteNif').value;
  //   factura.fecha = document.getElementById('fecha').value;
  //   factura.hora = document.getElementById('hora').value;
  //   factura.pagada = getElementById('pagado?').checked;
  //   imprimirFactura();
  // });

  document.getElementById('agregarLinea').addEventListener('click', function () {
    const concepto = document.getElementById('concepto').value;
    const cantidad = parseInt(document.getElementById('cantidad').value, 10);
    const precio = parseFloat(document.getElementById('precio').value);
    factura.agregarLinea(concepto, cantidad, precio);
    imprimirFactura();
  });

  document.getElementById('eliminarLinea').addEventListener('click', function () {
    factura.eliminarLínea();
    imprimirFactura();
  });

  document.getElementById('serializar').addEventListener('click', function () {
    document.getElementById('salida').value = Utilidades.serializarFactura(factura);
  });

  document.getElementById('deserializar').addEventListener('click', function () {
    const jsonInput = document.getElementById('entrada').value;
    factura = Utilidades.deserializararFactura(jsonInput);
    imprimirFactura();
  });

  function imprimirFactura() {
    const resultadoDiv = document.getElementById('impresion');
    resultadoDiv.innerHTML = '';
    resultadoDiv.innerHTML = factura.imprimirFactura;
  }
});