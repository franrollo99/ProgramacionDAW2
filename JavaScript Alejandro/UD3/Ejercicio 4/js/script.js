import alumnos from "./datos.js";

function generarAlumnos() {
    //Selecciono el contenedor principal
    const contenedor = document.querySelector(".principal");

    alumnos.forEach(alumno => {
    //Creo un nodo de tipo div donde mostrar los datos de cada alumno
    const divAlumno = document.createElement("div");

    //Creo un nodo de tipo parrafo por cada dato a mostrar
    const nombre = document.createElement("p");
    nombre.textContent = `Nombre: ${alumno.nombre}`;

    const dni = document.createElement("p");
    dni.textContent = `DNI: ${alumno.dni}`;

    const curso = document.createElement("p");
    curso.textContent = `Curso: ${alumno.curso}`;

    const asignaturas = document.createElement("p");
    asignaturas.textContent = `Asignaturas:`;

    //Nodo de tipo lista no ordenada para guardar todas las asignaturas
    const listaAsignaturas = document.createElement("ul");
    
    alumno.asignaturas.forEach(asignatura => {
        //Creo un nodo de tipo lista para cada asignatura de los alumnos
        const itemAsignatura = document.createElement("li");
        itemAsignatura.textContent = asignatura;
        listaAsignaturas.appendChild(itemAsignatura);
    });

    const telefono = document.createElement("p");
    telefono.textContent = `Telefono: ${alumno.telefono}`;

    const email = document.createElement("p");
    email.textContent = `Email: ${alumno.email}`;

    divAlumno.appendChild(nombre);
    divAlumno.appendChild(dni);
    divAlumno.appendChild(curso);
    divAlumno.appendChild(telefono);
    divAlumno.appendChild(email);
    divAlumno.appendChild(asignaturas);
    divAlumno.appendChild(listaAsignaturas);

    contenedor.appendChild(divAlumno);
  });
}

generarAlumnos();