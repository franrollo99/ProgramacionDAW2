const $negocio=(function(){

    let inventario={
        manzanas: {cantidad: 10, precio: 1.60, categoria: 'fruta'},
        peras: {cantidad: 10, precio: 1.20, categoria: 'fruta'},
        filetes: {cantidad: 10, precio: 2.60, categoria: 'carne'}
    };

    function agregarProducto(nombre, cantidad, precio, categoria){

        if(inventario[nombre]){ //Accedo directamente al objeto
            alert('El producto ya existe');
        }else{
            inventario[nombre]={cantidad: cantidad, precio: precio, categoria: categoria};
            alert('Producto agregado');
        }
    }

    function eliminarProducto(nombre){

        if(inventario[nombre]){
            if(confirm(`¿Seguro que quieres eliminar el producto: ${nombre}?`)){ //Ventana de confirmacion de eliminacion del producto
                delete inventario[nombre];
                imprimirInventario();
                alert('Producto eliminado');
            }
        }else{
            alert('El producto no existe');
        }
    }

    function buscarProducto(nombre){

        let producto = inventario[nombre];
        if (producto) {
            return `Nombre: ${nombre} - Cantidad: ${producto.cantidad} - Precio: ${producto.precio} - Categoría: ${producto.categoria}`;
        }else{
            alert('El producto no existe');
        }
    }

    function actualizarInventario(nombre, cantidad){
        
        let producto=inventario[nombre];
        if (producto){
            if(producto.cantidad+cantidad<=0){
                producto.cantidad=0;
                imprimirInventario();
                alert('Hace falta reponer el producto');
            }else{
                producto.cantidad+=cantidad;
                imprimirInventario();
                alert(`El producto ${nombre} ahora tiene la cantidad de ${producto.cantidad}`);
            }
        }else{
            alert('El producto no existe');
        }
    }

    function ordenarProductosPorPrecio(){

        return Object.entries(inventario).sort((a, b) => a[1].precio - b[1].precio);
    }

    function imprimirInventario(){

        const resultadoDiv=document.getElementById('resultado');
        resultadoDiv.innerHTML='';

        for(const producto in inventario){
            const prop=inventario[producto];
            resultadoDiv.innerHTML+= `<p>Nombre: ${nombre} - Cantidad: ${prop.cantidad} - Precio: ${prop.precio} - Categoria: ${prop.categoria}</p>`;
        }
    }

    function filtrarProductosPorCategoria(categoria){

        return crearArrayProducto().filter((producto)=>producto.categoria===categoria);
    }

    // function crearArrayProducto(){
    //     return Object.entries(inventario).map(([nombre, propiedades])=>{
    //         return{
    //             nombre: nombre,
    //             cantidad: propiedades.cantidad,
    //             precio: propiedades.precio,
    //             categoria: propiedades.categoria
    //         }
    //     })
    // }

    //Cuando se usa la constante negocio se devuelven
    return {
        agregarProducto,
        eliminarProducto,
        buscarProducto,
        actualizarInventario,
        ordenarProductosPorPrecio,
        imprimirInventario,
        filtrarProductosPorCategoria
    };
})();


//Vinculacion de eventos a los formularios
document.addEventListener('load', function(){

    // El ID del formulario en document.getElementById()
    // Cuando pulso enviar se genera el siguiente evento
    document.getElementById('agregarProducto').addEventListener('submit', function(event) {
        event.preventDefault(); //Previene que la pagina se recargue cuando se envia el formulario
        const nombre = document.getElementById('nombreAgregar').value;
        const cantidad = parseInt(document.getElementById('cantidad').value);
        const precio = parseFloat(document.getElementById('precio').value);
        const categoria = document.getElementById('categoria').value;
        $negocio.agregarProducto(nombre, cantidad, precio, categoria);
        this.reset(); // Limpia el formulario
    });

    document.getElementById('eliminarProducto').addEventListener('submit', function(event) {
        event.preventDefault();
        const nombre = document.getElementById('nombreEliminar').value;
        $negocio.eliminarProducto(nombre);
        this.reset();
    });

    document.getElementById('buscarProducto').addEventListener('submit', function(event) {
        event.preventDefault();
    
        const nombre = document.getElementById('nombreBuscar').value;
        const resultado = $negocio.buscarProducto(nombre);
        
        if (resultado) {
            // Mostrar el resultado en el div de imprimir inventario
            const resultadoDiv = document.getElementById('resultado');
            resultadoDiv.innerHTML = `<p>${resultado}</p>`; // Añadir el resultado al div
        }
        this.reset();
    });

    document.getElementById('actualizarInventario').addEventListener('submit', function(event) {
        event.preventDefault();
        const nombre = document.getElementById('nombreActualizar').value;
        const cantidad = parseInt(document.getElementById('cantidadActualizar').value);
        $negocio.actualizarInventario(nombre, cantidad);
        this.reset();
    });

    document.getElementById('imprimirInventario').addEventListener('submit', function(event) {
        event.preventDefault();
        $negocio.imprimirInventario();
    });

    document.getElementById('filtrarProductos').addEventListener('submit', function(event) {
        event.preventDefault();
        const categoria = document.getElementById('categoriaFiltrar').value;
        $negocio.filtrarProductosPorCategoria(categoria);
        this.reset();
    });
});