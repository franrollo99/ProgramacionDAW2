document.addEventListener('DOMContentLoaded', () => {
    const buscador = document.getElementById('buscador');
    const contenedorProductos = document.querySelector('.productos');
    const productos = document.querySelectorAll('.producto');
    const resultadoPrecio = document.getElementById('acumulado');
    const encuesta = document.querySelector('.encuesta');
    const contenedorPreguntas = document.querySelector('.preguntas');
    const textoNumPregunta = document.getElementById('numPregunta');
    const textoPregunta = document.getElementById('pregunta');
    const contenedorRespuestas = document.querySelector('.respuestas');
    const resultadosPreguntas = document.querySelector('.resultadoPreguntas');

    const preguntas = ['¿Cual es el material más fácil de reciclar?', '¿Cuál es una fuente de energía renovable?', '¿Qué significa “consumo responsable”?'];
    const respuestas = [['Vidrio', 'Metal', 'Papel'], ['Carbon', 'Energía solar', 'Gas natural'], ['Comprar solo lo que realmente necesitas', 'Comprar lo más barato aunque no sea sostenible', 'Usar productos desechables siempre que sea posible']];
    const respuestasCorrectas = [2, 1, 0];

    let nombreProductos = [];
    let precioTotal = 0;
    let numPregunta = 1;
    let numAciertos = 0;

    resultadoPrecio.textContent = `Total acumulado: ${precioTotal}€`;
    textoNumPregunta.textContent = `Pregunta ${numPregunta} de 3`;
    textoPregunta.textContent = preguntas[0];
    resultadosPreguntas.style.setProperty('display', 'none');

    for (let i = 0; i < respuestas[0].length; i++) {
        contenedorRespuestas.innerHTML += `<button class="respuesta">${respuestas[0][i]}</button>`;
    }

    for (let producto of productos) {
        // Recojo los nombres de los productos y los meto a un array
        nombreProductos.push(producto.children[1].textContent);
    }

    // Evento de buscador
    buscador.addEventListener('input', () => {
        // Cojo el valor del buscador
        const valor = buscador.value;

        for (let i = 0; i < nombreProductos.length; i++) {
            // Busco los productos que tengan incluido el valor del buscador
            if (!nombreProductos[i].toLowerCase().includes(valor.toLowerCase())) {
                productos[i].style.setProperty('display', 'none');
            } else {
                productos[i].style.setProperty('display', 'flex');
            }
        }
    });

    // Evento de añadir producto
    contenedorProductos.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-añadir')) {
            const producto = e.target.closest('.producto');
            const cantidad = producto.querySelector('.cantidad').value;
            const precio = parseFloat(producto.querySelector('.precio').dataset.precio);
            const total = cantidad * precio;

            if (cantidad > 0) {
                precioTotal += total;

                resultadoPrecio.textContent = `Total acumulado: ${precioTotal}€`;
            }
        }
    });

    // Evento de encuesta
    encuesta.addEventListener('click', (e) => {
        if (e.target.classList.contains('respuesta')) {
            if (e.target.textContent === respuestas[numPregunta - 1][respuestasCorrectas[numPregunta - 1]]) {
                numAciertos++;
            }

            if (numPregunta < preguntas.length) {
                textoPregunta.textContent = preguntas[numPregunta];
                contenedorRespuestas.innerHTML = '';

                for (let i = 0; i < respuestas[numPregunta].length; i++) {
                    contenedorRespuestas.innerHTML += `<button class="respuesta">${respuestas[numPregunta][i]}</button>`;
                }

                textoNumPregunta.textContent = `Pregunta ${++numPregunta} de 3`;
            } else {
                resultadosPreguntas.textContent = `Has acertado ${numAciertos} de 3 preguntas. `;

                // En funcion del numero de aciertos sale una cosa u otra
                switch (numAciertos) {
                    case 0:
                        resultadosPreguntas.textContent += 'Hay que estudiar, has sacado un 0';
                        break;
                    case 1:
                        resultadosPreguntas.textContent += 'Hay que estudiar un poco más, has sacado un 3';
                        break;
                    case 2:
                        resultadosPreguntas.textContent += 'Muy bien, has sacado un 7';
                        break;
                    case 3:
                        resultadosPreguntas.textContent += 'Enhorabuena, has sacado un 10';
                        break;
                }

                contenedorPreguntas.style.setProperty('display', 'none');
                resultadosPreguntas.style.setProperty('display', 'block');
            }
        }
    });
});