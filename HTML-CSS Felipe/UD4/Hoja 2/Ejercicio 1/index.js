document.addEventListener("DOMContentLoaded", function(){
    let fondo = document.getElementById("fondo");

    const colores = ["orange", "red", "blue", "yellow", "green", "violet"];
    const textoColor = ["white", "black", "white", "black", "white", "black"];

    let indice = 0;

    document.addEventListener("click", function(){
        indice = (indice + 1) % colores.length;
        fondo.style.backgroundColor = colores[indice];
        fondo.style.color = textoColor[indice];
    })
})