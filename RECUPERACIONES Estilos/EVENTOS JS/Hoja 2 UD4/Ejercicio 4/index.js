document.addEventListener('DOMContentLoaded', ()=>{
    const boton = document.getElementById('boton');
    const textoSecreto = document.getElementById('textoSecreto');

    boton.textContent = 'Mostrar';
    textoSecreto.style.setProperty('display', 'none');

    boton.addEventListener('click', ()=>{
        if(boton.textContent === 'Mostrar'){
            boton.textContent = 'Ocultar';
            textoSecreto.style.setProperty('display', 'block');
        }else{
            boton.textContent = 'Mostrar';
            textoSecreto.style.setProperty('display', 'none');
        }
    });
});