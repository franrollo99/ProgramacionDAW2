document.addEventListener("DOMContentLoaded", function(){
    const estado = document.getElementById("estado");
    const botonInfo = document.getElementById("boton");
    const coordenadas = document.getElementById("coordenadas");
    const texto = document.getElementById("texto");

    let resaltando = false;

    document.addEventListener("mousemove", function(event){
        coordenadas.textContent = `X: ${event.clientX}, Y: ${event.clientY}`;
    })

    texto.addEventListener("mousedown", function(event){
        resaltando = true;

        let botonPresionado;
        switch(event.button){
            case 0: botonPresionado = "Izquierdo"; break;
            case 1: botonPresionado = "Central (rueda)"; break;
            case 2: botonPresionado = "Derecho"; break;
            default: botonPresionado = "Desconocido";
        }

        botonInfo.textContent = botonPresionado;
        estado.textContent = "Resaltando texto...";
        estado.style.color = "green";

        texto.style.backgroundColor = "yellow";
    })

    texto.addEventListener("mouseup", function(){
        resaltando = false;

        estado.textContent = "Texto normal";
        estado.style.color="red";

        texto.style.backgroundColor = "transparent";
    })

    texto.addEventListener("contextMenu", function(){
        
    })
});