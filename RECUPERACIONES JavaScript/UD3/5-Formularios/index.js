const formulario = document.forms['formulario'];

console.log(formulario.elements['nombre']);
console.log(formulario.elements['nombre']);

// console.log(formulario);
// console.log(formularioName);

const campoNombre = document.getElementById('nombre');
const errorNombre = document.getElementById('errorNombre');




formulario.addEventListener('submit', (e)=>{
    e.preventDefault();


    // Array.from(formulario.elements).forEach(element => {

    //     element.addEventListener('blur', () => {
    //         let esValido = true;
    //         let mensaje = '';
            
    //         for(let campo of formulario.elements){
    //             if(!campo.checkValidity()){
    //                 esValido = false;
    //                 mensaje += 'error';
    //             }
    //         }
            
    //         if(esValido){
    //             errorNombre.innerHTML = '';
    //         }else{
    //             errorNombre.innerHTML = mensaje;
    //         }
    //     });
    // });

    // if(!campoNombre.checkValidity()){
    //     console.log('mal');
    //     return;
    // }

    // formulario.submit();
});



// const formulario = document.forms['formulario'];
// console.log(formulario);
// console.log(formulario.elements[0].id)
// for(let elemento of formulario.elements){
//     console.log(elemento.id);
// }



// form.addEventListener('submit', (e)=>{
//     e.preventDefault();

//     const nombre = document.getElementById('nombre').value;
//     nombre.setCustomValidity('');

//     if(nombre.length < 3){
//         // console.log('nombre tiene que tener minimo 3 caracteres');
//         nombre.setCustomValidity('nombre tiene que tener minimo 3 caracteres');
//         console.log(nombre.validity);
//     }
//     console.log(nombre.length);

// });