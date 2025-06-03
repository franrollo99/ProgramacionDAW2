document.addEventListener('DOMContentLoaded', () => {
    let contador = 0;

    const boton = document.getElementById('btn-contador');
    const salida = document.getElementById('contador');
    const textoBase = 'Haz clic';

    boton.textContent = textoBase;
    salida.textContent = `Contador: ${contador}`;

    boton.addEventListener('click', () => {
        // if(contador === 0){
        //     boton.textContent = textoBase;
        // }

        contador++;
        salida.textContent = `Contador: ${contador}`;

        if(contador === 5){
            boton.textContent = textoBase + ' - ¡Vas en racha!';
        }else if(contador === 10){
            boton.textContent = textoBase + ' - Eres un campeón!';
        }else if(contador === 15){
            boton.textContent = textoBase + ' - ¡Increible! Se reinicia';
            contador = 0;

            setTimeout(()=>{
                boton.textContent = textoBase;
                salida.textContent = `Contador: ${contador}`;
            }, 500);
        }
    });
});