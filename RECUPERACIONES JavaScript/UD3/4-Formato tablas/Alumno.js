class Alumno {

    constructor(nombre, dni, curso, asignaturas = [], telefono, email) {
        this.nombre = nombre;
        this.dni = dni;
        this.curso = curso;
        this.asignaturas = asignaturas;
        this.telefono = telefono;
        this.email = email;
    }
}

export default Alumno;