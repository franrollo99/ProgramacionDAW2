import Persona from './clasePersona.js';

// const persona = new Persona('Fran', 'Rodriguez', 'C/Pipote mi Casa', '612839132');
const persona =new Persona();

const contenedor=document.getElementById('app');

contenedor.innerHTML=`
    <p>Nombre: ${persona.nombre}</p>
    <p>Apellido: ${persona.apellido}</p>
    <p>Dirección: ${persona.direccion}</p>
    <p>Teléfono: ${persona.telefono}</p>
    <p>Email: ${persona.email}</p>
    <p>Trabajo: ${persona.trabajar()}</p>
    <p>Estudios: ${persona.estudiar()}</p>
`;





const Coche = {
    marca: 'Peugeot',
    modelo: '407',
    anio: '2007',
    color: 'gris',
    tipo: 'familiar'
}

const html = `
    <h1>Coche</h1>
    <p>Marca: ${Coche.marca}</p>
    <p>Modelo: ${Coche.modelo}</p>
    Año: ${Coche.anio} <br>
    Color: ${Coche.color} <br>
    Tipo: ${Coche.tipo}
`;

// document.write(html);