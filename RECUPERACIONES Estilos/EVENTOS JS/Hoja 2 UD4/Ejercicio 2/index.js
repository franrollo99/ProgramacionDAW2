document.addEventListener('DOMContentLoaded', ()=>{
    const desplegable = document.getElementById('desplegable');
    const listaOpciones = document.getElementById('opciones');
    const opciones = document.querySelectorAll('.opciones');
    const resultado = document.getElementById('resultado');
    
    listaOpciones.classList.add('oculto');

    desplegable.addEventListener('click', ()=>{
        listaOpciones.classList.remove('oculto');
        resultado.textContent = '';
    });

    listaOpciones.addEventListener('click', (e)=>{
        const valor = e.target.textContent;
        resultado.textContent = valor;

        listaOpciones.classList.add('oculto');
    });
});