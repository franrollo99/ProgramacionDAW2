document.addEventListener('DOMContentLoaded', ()=>{
    const buscador = document.getElementById('buscador');
    const contenedorProductos = document.querySelector('.productos');
    const productos = document.querySelectorAll('.producto');
    const añadir = document.querySelectorAll('.btn-añadir');

    let nombreProductos = [];

    for(let producto of productos){
        // Recojo los nombres de los productos y los meto a un array
        nombreProductos.push(producto.children[1].textContent);
    }

    buscador.addEventListener('input', ()=>{
        // Cojo el valor del buscador
        const valor = buscador.value;

        for(let i=0; i<nombreProductos.length; i++){
            // Busco los productos que tengan incluido el valor del buscador
            if(!nombreProductos[i].toLowerCase().includes(valor.toLowerCase())){
                productos[i].style.setProperty('display', 'none');
            }else{
                productos[i].style.setProperty('display', 'flex');
            }
        }
    });

    contenedorProductos.addEventListener('click', (e)=>{
        if(e.target.classList.contains('btn-añadir')){
            console.log(e.target.closest('.cantidad'));
        }
    });
});