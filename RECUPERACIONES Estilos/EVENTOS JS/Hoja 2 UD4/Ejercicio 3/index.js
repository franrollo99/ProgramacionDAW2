document.addEventListener('DOMContentLoaded', ()=>{
    const contador = document.getElementById('contador');
    const aumentar = document.getElementById('btn-aumentar');
    const disminuir = document.getElementById('btn-disminuir');
    let resultado = 0;

    contador.textContent = resultado;

    aumentar.addEventListener('click', ()=>{
        if(resultado<10){
            contador.textContent = ++resultado;
            
            if(resultado === 10){
                contador.textContent += ' ¡¡¡FELICIDADES, HAS SACADO MATRICULA DE HONOR!!!';
            }
        }
    });

    disminuir.addEventListener('click', ()=>{
        if(resultado>0){
            contador.textContent = --resultado;
        }
    });
});