document.addEventListener('DOMContentLoaded', ()=>{
    const texto = document.getElementById('texto');
    const segundoParrafo = document.getElementById('segundoParrafo');
    const btnMostrar = document.getElementById('mostrar');
    const alineacionIzquierda = document.getElementById('izquierda');
    const alineacionCentrada = document.getElementById('centrada');
    const alineacionJustificada = document.getElementById('justificada');

    btnMostrar.textContent = 'Mostrar menos';

    btnMostrar.addEventListener('click', ()=>{
        if(btnMostrar.textContent === 'Mostrar menos'){
            btnMostrar.textContent = 'Mostrar más';
            segundoParrafo.style.setProperty('display', 'none');
        }else{
            btnMostrar.textContent = 'Mostrar menos';
            segundoParrafo.style.setProperty('display', 'block');
        }
    });

    alineacionIzquierda.addEventListener('click', ()=>{
        texto.style.setProperty('text-align', 'left');
    });

    alineacionCentrada.addEventListener('click', ()=>{
        texto.style.setProperty('text-align', 'center');
    });

    alineacionJustificada.addEventListener('click', ()=>{
        texto.style.setProperty('text-align', 'justify');
    });
});