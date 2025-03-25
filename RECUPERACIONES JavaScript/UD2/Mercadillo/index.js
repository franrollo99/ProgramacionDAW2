const contenedorResultado = document.getElementById('resultados');

const $negocio = (function () {

    const productos = [
        {
            nombre: 'patatas',
            cantidad: 20,
            precio: 4.20,
            categoria: 'hortaliza'
        },
        {
            nombre: 'tomates',
            cantidad: 50,
            precio: 2.60,
            categoria: 'hortaliza'
        },
        {
            nombre: 'peras',
            cantidad: 120,
            precio: 1.40,
            categoria: 'fruta'
        },
        {
            nombre: 'manzanas',
            cantidad: 100,
            precio: 1.20,
            categoria: 'fruta'
        },
        {
            nombre: 'pollo',
            cantidad: 10,
            precio: 10.50,
            categoria: 'carne'
        }
    ];

    // console.log(ordenarProductosPorPrecio());
    // console.log(buscarProducto('manzanas'));
    // console.log(eliminarProducto('manzanas'));
    // console.log(agregarProducto('producto', 20, 20.20, 'categoria'));
    // console.log(actualizarInventario('manzanas', -1100));


    function agregarProducto(nombre, cantidad, precio, categoria) {
        productos.push({nombre: nombre, cantidad: cantidad, precio: precio, categoria: categoria});
        return productos;
    }

    function eliminarProducto(nombre) {
        for(let producto of productos){
            if(producto.nombre === nombre){
                return productos.filter( p => p.nombre !== nombre);
            }
        }
        alert('El producto que intentas eliminar no existe');
        return null;
    }

    function buscarProducto(nombre) {
        let resultados = productos.filter(producto => producto.nombre === nombre);

        if (resultados.length > 0){
            return resultados[0];
        }

        alert('Producto no encontrado');
        return null;
    }

    function actualizarInventario(nombre, cantidad) {
        for(let producto of productos){
            if(producto.nombre === nombre){
                if(producto.cantidad >= (-cantidad)){
                    producto.cantidad += cantidad;
                }else{
                    alert('No hay stock suficiente');
                }

                if(producto.cantidad === 0){
                    alert('Se solicita reposicion del producto');
                }

                return producto;
            }
        }

        alert('El producto que intentas actualizar no existe');
        return null;
    }

    function ordenarProductosPorPrecio() {
        let productosOrdenados = productos.toSorted((a, b) => a.precio - b.precio);

        return productosOrdenados;
    }

    function imprimirInventario() {

    }

    function filtrarProductosPorCategoria(categoria) {

    }

})();

document.addEventListener('DOMContentLoaded', () => {
    // console.log('hola');
});










