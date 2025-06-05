document.addEventListener('DOMContentLoaded', ()=>{
    const desplegable = document.getElementById('desplegable');
    const listaOpciones = document.getElementById('opciones');
    const opciones = document.querySelectorAll('.opciones');
    const resultado = document.getElementById('resultado');
    
    listaOpciones.classList.add('oculto');
    resultado.classList.add('oculto');

    desplegable.addEventListener('click', ()=>{
        if(listaOpciones.classList.contains('oculto')){
            listaOpciones.classList.remove('oculto');
            
            if(!resultado.classList.contains('oculto')){
                resultado.classList.add('oculto');
            }
        }else{
            listaOpciones.classList.add('oculto');
        }
    });

    listaOpciones.addEventListener('click', (e)=>{
        const valor = e.target.textContent;
        resultado.textContent = valor;

        resultado.classList.remove('oculto');
        listaOpciones.classList.add('oculto');
    });
});