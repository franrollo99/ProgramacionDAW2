document.addEventListener("DOMContentLoaded", function(){
    const mostrarMas = document.getElementById("btn-mostrarMas");
    const mostrarMenos = document.getElementById("btn-mostrarMenos");
    const parrafo = document.getElementById("parrafo2");
    const texto = document.getElementById("contenido");
    const botonesAlineacion = document.getElementById("botonesAlineacion");
    const botonesAlinear = document.querySelectorAll(".btn-alinear");
    

    mostrarMas.addEventListener("click", function(){
        parrafo.style.display = "block";
        botonesAlineacion.style.display = "block";
        mostrarMenos.style.display = "block";
        mostrarMas.style.display = "none";
        
        botonesAlinear.forEach(boton=>{
            boton.addEventListener("click", function(){
                const alineacion = this.getAttribute("data-align");
                texto.style.textAlign = alineacion;
            })
        })
    })

    mostrarMenos.addEventListener("click", function(){
        parrafo.style.display = "none";
        botonesAlineacion.style.display = "none";
        mostrarMenos.style.display = "none";
        mostrarMas.style.display = "block";
    })
})