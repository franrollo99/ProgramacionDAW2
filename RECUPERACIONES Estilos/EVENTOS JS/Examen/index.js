document.addEventListener('DOMContentLoaded', () => {
    const buscador = document.getElementById('buscador');
    const lupa = document.getElementById('lupa');
    const pregunta = document.getElementById('preguntaRecomendaciones');

    document.addEventListener('click', (e) => {
        const clickLupa = e.target.closest('#lupa');
        const clickDentroBuscador = e.target.closest('#buscador');

        if (clickLupa) {
            buscador.classList.add('activo');
            lupa.classList.add('oculto');
        } else if (!clickDentroBuscador && buscador.classList.contains('activo')) {
            buscador.classList.remove('activo');
            lupa.classList.remove('oculto');
        }

        if (e.target.closest('.cine')) {
            pregunta.innerHTML = `<p>?Que tipo de pelicuta te apetece ver</p>
                    <div class="d-flex gap-3 justify-content-center">
                        <div class="p-2 d-flex align-items-center gap-2 bg-warning text-black rounded">
                            <p class="peliFinal">Comedia</p>
                        </div>
                        <div class="p-2 d-flex align-items-center gap-2 bg-warning text-black rounded">
                            <p class="peliFinal">Accion</p>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center resultadoPeli">`;
        } else if (e.target.closest('.series')) {
            pregunta.innerHTML = `<p>?Varias temporadas o miniserie</p>
                    <div class="d-flex gap-3 justify-content-center">
                        <div class="p-2 d-flex align-items-center gap-2 bg-warning text-black rounded">
                            <p class="peliFinal">Series largas</p>
                        </div>
                        <div class="p-2 d-flex align-items-center gap-2 bg-warning text-black rounded">
                            <p class="peliFinal">Para una tarde</p>
                        </div>
                    </div>`;
        }

        if (e.target.closest('.peliFinal')) {
            const contenedorPeli = document.querySelector('.resultadoPeli');

            switch (e.target.closest('.peliFinal').textContent) {
                case 'Comedia':
                    contenedorPeli.innerHTML = `<img src="./img/diablo.jpg" alt="" width="50%">`;
            }
        }
    });
});