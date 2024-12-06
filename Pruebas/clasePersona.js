class Persona {
    nombre = 'Fran';
    apellido = 'Rodriguez';
    direccion = 'C/Melano Piano';
    telefono = 628402183;
    email = 'emailejemplo@gmail.com'

    // constructor(nombre, apellido, direccion, telefono){
    //     this.nombre=nombre;
    //     this.apellido=apellido;
    //     this.direccion=direccion;
    //     this.telefono=telefono;
    // }

    trabajar() {
        return 'trabaja en la planta nuclear';
    }

    estudiar(){
        return 'Escuela primaria de Sprinfield';
    }
}

export default Persona;