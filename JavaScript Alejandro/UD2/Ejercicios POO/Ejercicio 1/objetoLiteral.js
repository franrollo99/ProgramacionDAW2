// Definicion mediante objeto literal
const persona={
    nombre: 'Fran',
    nacimiento: '1999-10-05',
    hobbies: ['jugar', 'correr', 'programar'],
    edad: function(){
        let fechaActual=new Date();
        let fechaNacimiento=new Date(this.nacimiento);
        let diferencia=fechaActual-fechaNacimiento;
        let añosDiferencia=parseInt(diferencia/(1000*60*60*24*365));
        return añosDiferencia;
    },
    saludar: function(){
        let saludo=`Hola, me llamo ${this.nombre} y me gusta `;
        for(let hobbie of this.hobbies){
            saludo+=hobbie + ' ';
        }
        return saludo;
    }
    
};

console.log(persona.saludar());
console.log('Tengo ' + persona.edad() + ' años');