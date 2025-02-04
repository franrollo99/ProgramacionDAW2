document.addEventListener("DOMContentLoaded", function(){
    const botonModo = document.getElementById("modoBoton");

    const cuerpo = document.body;

    cuerpo.style.backgroundColor = "white";
    cuerpo.style.backgroundColor = "black";

    botonModo.style.backgroundColor = "white";
    cuerpo.style.color = "white";

    botonModo.addEventListener("click", function(){
        if(cuerpo.style.backgroundColor === "white"){
            cuerpo.style.backgroundColor = "black";
            botonModo.style.backgroundColor = "white";
            cuerpo.style.color = "white";
        }else{
            cuerpo.style.backgroundColor = "white";
            botonModo.style.backgroundColor = "black";
            botonModo.style.color = "white";
            cuerpo.style.color = "black";
        }
    });
    
});