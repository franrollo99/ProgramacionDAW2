const contenedorResultado = document.getElementById('resultados');
const formCrearProducto = document.getElementById('form-crear');
const formEliminarProducto = document.getElementById('form-eliminar');
const formBuscarProducto = document.getElementById('form-buscar');
const formFiltrarCategoria = document.getElementById('form-filtrar');

const $negocio = (function () {

    let productos = [
        {
            nombre: 'patatas',
            cantidad: 20,
            precio: 4.23,
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

    // console.log(agregarProducto('producto', 20, 20.20, 'categoria'));
    // console.log(eliminarProducto('manzanas'));
    // console.log(buscarProducto('manzanas'));
    // console.log(actualizarInventario('manzanas', -1100));
    // console.log(ordenarProductosPorPrecio());
    // console.log(imprimirInventario());
    // console.log(filtrarProductosPorCategoria('fruta'));
    // console.log(productos);


    function agregarProducto(nombre, cantidad, precio, categoria) {
        for (let producto of productos) {
            if (producto.nombre === nombre) {
                alert('Este producto ya existe');
                return null;
            }
        }

        productos.push({
            nombre: nombre,
            cantidad: cantidad,
            precio: precio,
            categoria: categoria
        });

        return null;
    }

    function eliminarProducto(nombre) {
        for (let producto of productos) {
            if (producto.nombre.toLowerCase() === nombre.toLowerCase()) {
                productos = productos.filter(p => p.nombre !== nombre);
                return null;
            }
        }

        alert('El producto que intentas eliminar no existe');
        return null;
    }

    function buscarProducto(nombre) {
        let resultados = productos.filter(producto => producto.nombre === nombre);

        if (resultados.length > 0) {
            return resultados[0];
        }

        alert('Producto no encontrado');
        return null;
    }

    function actualizarInventario(nombre, cantidad) {
        for (let producto of productos) {
            if (producto.nombre === nombre) {
                if (producto.cantidad >= (-cantidad)) {
                    producto.cantidad += cantidad;
                } else {
                    alert('No hay stock suficiente');
                }

                if (producto.cantidad === 0) {
                    alert('Se solicita reposicion del producto');
                }

                return null;
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
        // Tambien se puede hacer la copia con un for
        let inventario = productos.map(producto => ({ ...producto })); // ...p expande las propiedades del objeto, {...p} crea un nuevo objeto, se envuelve entre parentesis para que lo tome como un objeto en vez de como una funcion

        for (let producto of inventario) {
            producto.total = (producto.cantidad * producto.precio).toFixed(2);
        }

        return inventario;
    }

    function filtrarProductosPorCategoria(categoria) {
        let productosFiltrados = [];

        for (let producto of productos) {
            if (producto.categoria.toLowerCase() === categoria.toLowerCase()) {
                productosFiltrados.push({
                    nombre: producto.nombre,
                    cantidad: producto.cantidad,
                    precio: producto.precio
                });
            }
        }

        return productosFiltrados;
    }

    return {
        agregarProducto,
        eliminarProducto,
        actualizarInventario,
        buscarProducto,
        ordenarProductosPorPrecio,
        imprimirInventario,
        filtrarProductosPorCategoria
    };

})();

window.addEventListener('load', () => {

    formCrearProducto.addEventListener('submit', (e) => {
        e.preventDefault();
        const nombreProducto = document.getElementById('crearNombre').value;
        const cantidadProducto = document.getElementById('crearCantidad').value;
        const precioProducto = document.getElementById('crearPrecio').value;
        const categoriaProducto = document.getElementById('crearCategoria').value;
        $negocio.agregarProducto(nombreProducto, cantidadProducto, precioProducto, categoriaProducto);

        contenedorResultado.innerHTML = '';
        const resultado = $negocio.imprimirInventario();
        contenedorResultado.innerHTML += '<h2>Listado de productos</h2><ul>';

        for (let producto of resultado) {
            contenedorResultado.innerHTML += `<li>${producto.nombre.toLocaleUpperCase()}</li><ul><li>Categoria: ${producto.categoria}</li><li>Cantidad: ${producto.cantidad}</li><li>Precio: ${producto.precio}</li><li>Total: ${producto.total}</li></ul>`;
        }

        contenedorResultado.innerHTML += '</ul>';
        formCrearProducto.reset();
    });

    formEliminarProducto.addEventListener('submit', (e) => {
        e.preventDefault();
        contenedorResultado.innerHTML = '';
        const productoEliminado = document.getElementById('eliminarNombre').value;
        $negocio.eliminarProducto(productoEliminado);
        const resultado = $negocio.imprimirInventario();

        contenedorResultado.innerHTML += '<h2>Listado de productos</h2><ul>';

        for (let producto of resultado) {
            contenedorResultado.innerHTML += `<li>${producto.nombre.toLocaleUpperCase()}</li><ul><li>Categoria: ${producto.categoria}</li><li>Cantidad: ${producto.cantidad}</li><li>Precio: ${producto.precio}</li><li>Total: ${producto.total}</li></ul>`;
        }

        contenedorResultado.innerHTML += '</ul>';
        formEliminarProducto.reset();
    });

    formBuscarProducto.addEventListener('submit', (e) => {
        e.preventDefault();
        contenedorResultado.innerHTML = '';
        const filtro = document.getElementById('buscarNombre').value;
        const resultado = $negocio.buscarProducto(filtro);

        if(resultado){
            contenedorResultado.innerHTML += `<ul><li>${resultado.nombre.toLocaleUpperCase()}</li><li>Categoria: ${resultado.categoria}</li><li>Cantidad: ${resultado.cantidad}</li><li>Precio: ${resultado.precio}</li></ul>`;
        }

        formBuscarProducto.reset();
    });

    formFiltrarCategoria.addEventListener('submit', (e) => {
        e.preventDefault();
        contenedorResultado.innerHTML = '';
        const filtro = document.getElementById('filtrarCategoria').value;
        const resultado = $negocio.filtrarProductosPorCategoria(filtro);

        if(resultado.length > 0){
            contenedorResultado.innerHTML += '<h2>Listado de productos</h2><ul>';

            for (let producto of resultado) {
                contenedorResultado.innerHTML += `<li>${producto.nombre.toLocaleUpperCase()}</li><ul><li>Cantidad: ${producto.cantidad}</li><li>Precio: ${producto.precio}</li></ul>`;
            }

            contenedorResultado.innerHTML += '</ul>';
        }else{
            contenedorResultado.innerHTML = '<p>No se ha encontrado ningun producto con esa categoria</p>';
        }

        formFiltrarCategoria.reset();
    });

    document.getElementById('btn-listarProductos').addEventListener('click', () => {
        contenedorResultado.innerHTML = '';
        const resultado = $negocio.imprimirInventario();
        contenedorResultado.innerHTML += '<h2>Listado de productos</h2><ul>';

        for (let producto of resultado) {
            contenedorResultado.innerHTML += `<li>${producto.nombre.toLocaleUpperCase()}</li><ul><li>Categoria: ${producto.categoria}</li><li>Cantidad: ${producto.cantidad}</li><li>Precio: ${producto.precio}</li><li>Total: ${producto.total}</li></ul>`;
        }

        contenedorResultado.innerHTML += '</ul>';
    });

    document.getElementById('btn-ordenarPrecio').addEventListener('click', () => {
        contenedorResultado.innerHTML = '';
        const resultado = $negocio.ordenarProductosPorPrecio();

        contenedorResultado.innerHTML += '<h2>Listado de productos</h2><ul>';

        for (let producto of resultado) {
            contenedorResultado.innerHTML += `<li>${producto.nombre.toLocaleUpperCase()}</li><ul><li>Categoria: ${producto.categoria}</li><li>Cantidad: ${producto.cantidad}</li><li>Precio: ${producto.precio}</li></ul>`;
        }

        contenedorResultado.innerHTML += '</ul>';
    });
});