// Definicion mediante funcion constructora
function Persona(nombre, nacimiento, hobbies){
    this.nombre=nombre;
    this.nacimiento=nacimiento;
    this.hobbies=hobbies;
    this.edad= function(){
        let fechaActual=new Date();
        let fechaNacimiento=new Date(this.nacimiento);
        let diferencia=fechaActual-fechaNacimiento;
        let añosDiferencia=parseInt(diferencia/(1000*60*60*24*365));
        return añosDiferencia;
    },
    this.saludar= function(){
        let saludo=`Hola, me llamo ${this.nombre} y me gusta `;
        for(hobbie of this.hobbies){
            saludo+=hobbie + ' ';
        }
        return saludo;
    }
    
};

const persona1=new Persona('Fran', '1999-10-05', ['jugar', 'correr', 'programar']);

console.log(persona1.saludar());
console.log('Tengo ' + persona1.edad() + ' años');