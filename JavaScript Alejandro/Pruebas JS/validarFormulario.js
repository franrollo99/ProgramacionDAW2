const nombre=document.getElementById('nombre');

document.addEventListener('load', function(){

    document.getElementById('validar').addEventListener('submit', function(event){
        event.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.innerHTML+=nombre;
    })
});