const contenedorResultados = document.getElementById('resultados');

function jugarDados(numeroLados){
    let numAleatorio;
    let tiradaDados = [];

    function generarNumeroAleatorio(numeroLados){
        // Math.random()*(rango alto - rango bajo + 1) + rango bajo
        return Math.floor(Math.random()*(numeroLados - 1 + 1) + 1);
    }

    return function(){ // Esta funcion anonima simula la tirada de dos dados
        for(let i = 0; i <2; i++){
            numAleatorio = generarNumeroAleatorio(numeroLados);
            tiradaDados.push(numAleatorio);
        }

        return tiradaDados;
    }(); // Poner () al final para que devuelva el resultado en vez de la funcion
}

window.addEventListener('load', () => {
    document.getElementById('tirarDados').addEventListener('click', () => {
        let entrada1 = parseInt(prompt('Introduce el numero de lados'));
        let entrada2 = parseInt(prompt('Introduce el numero de tiradas'));
        let resultado;
        let humano = 0;
        let maquina = 0;

        contenedorResultados.innerHTML = '';
        contenedorResultados.innerHTML += `<p>Numero de lados: ${entrada1}<p><p>Numero de tiradas: ${entrada2}</p>`;

        for(let i = 0; i<=entrada2; i++){
            resultado = jugarDados(entrada1);
            humano += resultado[0];
            maquina += resultado[1];

            contenedorResultados.innerHTML += `<p>Tirada nº ${i}: Humano ${resultado[0]} - Maquina ${resultado[1]}`;
            if(humano > maquina){
                contenedorResultados.innerHTML += 'Ganador de la tirada: humano</p>';
            }else if(humano < maquina){
                contenedorResultados.innerHTML += 'Ganador de la tirada: maquina</p>';
            }else{
                contenedorResultados.innerHTML += 'Empate</p>';
            }
        }
        
        contenedorResultados.innerHTML += `<h3>Resultado total</h3><p>Humano: ${humano}</p><p>Maquina: ${maquina}</p>`;

        if(humano > maquina){
            contenedorResultados.innerHTML += '<h2>Humano ganador</h2>';
        }else if(humano < maquina){
            contenedorResultados.innerHTML += '<h2>Maquina ganador</h2>';
        }else{
            contenedorResultados.innerHTML += '<h2>Empate</h2>';
        }
    });
});