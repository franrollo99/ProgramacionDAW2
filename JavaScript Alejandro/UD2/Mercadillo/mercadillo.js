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

        // let productoExiste=false;

        // for(producto in inventario){
        //     if(producto===nombre){
        //         alert('El producto ya existe');
        //         productoExiste=true;
        //         break;
        //     }
        // }

        // if(!productoExiste){
        //     inventario[nombre]={cantidad: cantidad, precio: precio, categoria: categoria};
        // }
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

        // let productoExiste=false;

        // for(producto in inventario){
        //     if(producto===nombre){
        //         delete inventario[producto];
        //         productoExiste=true;
        //         break;
        //     }
        // }

        // if(!productoExiste){
        //     alert('El producto no existe');
        // }
    }

    function buscarProducto(nombre){

        let producto = inventario[nombre];
        if (producto) {
            return `Nombre: ${nombre} - Cantidad: ${producto.cantidad} - Precio: ${producto.precio} - Categoría: ${producto.categoria}`;
        }else{
            alert('El producto no existe');
        }

        // let productoExiste=false;

        // for(producto in inventario){
        //     if(producto===nombre){
        //         let propProd=inventario[producto];
        //         for(prop in propProd){
        //             console.log(`Nombre: ${producto} Cantidad: ${propProd.cantidad} Precio: ${propProd.precio} Categoria; ${propProd.categoria}`);
        //         }
        //         productoExiste=true;
        //         break;
        //     }
        // }

        // if(!productoExiste){
        //     alert('El producto no existe');
        // }
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

        // let productoExiste=false;

        // for(producto in inventario){
        //     if(producto===nombre){
        //         let prod=inventario[producto];
        //         if(prod.cantidad+cantidad<=0){
        //             prod.cantidad=0;
        //             alert('Hace falta reponer el producto');
        //         }else{
        //             prod.cantidad+=cantidad;
        //             }
        //         productoExiste=true;
        //         break;
        //     }
        // }

        // if(!productoExiste){
        //     alert('El producto no existe');
        // }
    }

    function ordenarProductosPorPrecio(){

        return Object.entries(inventario).sort((a, b) => a[1].precio - b[1].precio);
        
        // let productosOrdenados=Object.entries(inventario).sort((a, b) => a[1].precio - b[1].precio); //Ordenar la matriz de pares clave-valor por el precio de forma ascendente

        // productosOrdenados.forEach(producto=>
        //     console.log(`Producto: ${producto[0]}, Precio: ${producto[1].precio}, Cantidad: ${producto[1].cantidad}, Categoría: ${producto[1].categoria}`)
        // );
    }

    function imprimirInventario(){

        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.innerHTML = '';
        for (const nombre in inventario) {
            const prod = inventario[nombre];
            resultadoDiv.innerHTML += `<p>Nombre: ${nombre} - Categoría: ${prod.categoria} - Cantidad: ${prod.cantidad} - Precio: ${prod.precio}</p>`;
        }

        // for(producto in inventario){
        //     let propProd=inventario[producto];
        //     console.log(`Nombre: ${producto} Cantidad: ${propProd.cantidad} Precio: ${propProd.precio} Categoria: ${propProd.categoria}`);
        // }
    }

    function filtrarProductosPorCategoria(categoria){

        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.innerHTML = '';
        for (const nombre in inventario) {
            const prod = inventario[nombre];
            if (prod.categoria === categoria) {
                resultadoDiv.innerHTML += `<p>Nombre: ${nombre} - Cantidad: ${prod.cantidad} - Precio: ${prod.precio}</p>`;
            }
        }
    }

    //     for(producto in inventario){
    //         let propProd=inventario[producto];
    //         if(propProd.categoria===categoria){
    //             console.log(`Nombre: ${producto} Cantidad: ${propProd.cantidad} Precio: ${propProd.precio} Categoria; ${propProd.categoria}`);
    //         }
    //     }
    // }

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
document.addEventListener('DOMContentLoaded', ()=>{

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