document.addEventListener('DOMContentLoaded', () => {
    const fondo = document.querySelector('.fondo');
    const cambioColor = document.getElementById('cambioColor');

    const colorFondos = ['orange', 'red', 'blue', 'green', 'yellow'];
    let contador = 0;

    fondo.style.setProperty('background-color', 'orange');
    cambioColor.style.setProperty('color', 'white');

    cambioColor.addEventListener('click', () => {
        if (fondo.style.backgroundColor === colorFondos[contador++] && contador < colorFondos.length) {
            fondo.style.setProperty('background-color', colorFondos[contador]);
        } else {
            contador = 0
            fondo.style.setProperty('background-color', colorFondos[contador]);
        }

        if(cambioColor.style.color === 'white'){
            cambioColor.style.setProperty('color', 'black');
        }else{
            cambioColor.style.setProperty('color', 'white');
        }
    });
});