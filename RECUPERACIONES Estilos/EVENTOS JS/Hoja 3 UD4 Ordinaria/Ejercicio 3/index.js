document.addEventListener('DOMContentLoaded', () => {
    const usuario = document.getElementById('usuario');
    const contraseña = document.getElementById('contraseña');
    const edad = document.getElementById('edad');
    const email = document.getElementById('email');
    const telefono = document.getElementById('telefono');
    const conocido = document.querySelectorAll('.conocido');
    const idiomas = document.querySelectorAll('.idioma');
    const nacionalidad = document.getElementById('nacionalidad');
    const fechaNacimiento = document.getElementById('fechaNacimiento');
    const color = document.getElementById('color');
    const descripcion = document.getElementById('descripcion');
    const registrar = document.getElementById('registrar');
    const borrar = document.getElementById('borrar');

    usuario.addEventListener('focus', ()=>{
        usuario.style.setProperty('background-color', 'lightyellow');
    });

    usuario.addEventListener('blur', ()=>{
        const valor = usuario.value;

        if(valor.length < 3){
            usuario.style.setProperty('border', '2px solid red');
        }else{
            usuario.style.setProperty('border', '2px solid green');
        }

        usuario.style.removeProperty('background-color');
    });

    contraseña.addEventListener('blur', ()=>{
        const valor = contraseña.value;

        if(valor.length < 8){
            contraseña.style.setProperty('border', '2px solid red');
        }else{
            contraseña.style.setProperty('border', '2px solid green');
        }
    });

    email.addEventListener('blur', ()=>{
        if(!email.checkValidity()){
            email.style.setProperty('border', '2px solid red');
        }else{
            email.style.setProperty('border', '2px solid green');
        }
    });

    telefono.addEventListener('blur', ()=>{
        const valor = telefono.value;

        if(valor){
            if(valor.length !== 9){
                telefono.style.setProperty('border', '2px solid red');
            }else{
                telefono.style.setProperty('border', '2px solid green');
            }
        }else{
            telefono.style.removeProperty('border');
        }
    });

    registrar.addEventListener('mouseover', ()=>{
        registrar.style.setProperty('background-color', 'green');
    });

    registrar.addEventListener('mouseout', ()=>{
        registrar.style.removeProperty('background-color');
    });

    borrar.addEventListener('mousedown', ()=>{
        borrar.style.setProperty('background-color', 'red');
    });

    borrar.addEventListener('mouseup', ()=>{
        borrar.style.removeProperty('background-color');
    });
});