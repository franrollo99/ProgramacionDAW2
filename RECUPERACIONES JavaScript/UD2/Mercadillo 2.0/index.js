const contenedorResultado = document.getElementById('resultados');
const formCrearProducto = document.getElementById('form-crear');
const formEliminarProducto = document.getElementById('form-eliminar');
const formBuscarProducto = document.getElementById('form-buscar');
const formActualizarProducto = document.getElementById('form-actualizar');
const formFiltrarCategoria = document.getElementById('form-filtrar');

const $negocio = (function(){

    let productos = {
        patatas: {
            cantidad: 50,
            precio: 2.20,
            categoria: 'hortaliza'
        },
        cebollas: {
            cantidad: 70,
            precio: 2.10,
            categoria: 'hortaliza'
        },
        naranjas: {
            cantidad: 30,
            precio: 3.90,
            categoria: 'fruta'
        },
        melocotones: {
            cantidad: 40,
            precio: 1.40,
            categoria: 'fruta'
        },
        higos: {
            cantidad: 10,
            precio: 5.70,
            categoria: 'fruta'
        }
    };

    // console.log(agregarProducto('manzanas', 20, 20.20, 'fruta'));
    // console.log(eliminarProducto('higos'));
    // console.log(buscarProducto('higos'));
    // console.log(actualizarInventario('patatas', -50));
    // console.log(ordenarProductosPorPrecio());
    // console.log(imprimirInventario());
    // console.log(filtrarProductosPorCategoria('fruta'));

    function agregarProducto(nombre, cantidad, precio, categoria){
        for(let producto in productos){
            if(producto.toLowerCase() === nombre.toLowerCase()){
                alert('Este producto ya existe');
                return null;
            }
        }

        productos[nombre] = {
            cantidad: cantidad,
            precio: precio,
            categoria: categoria
        };

        return null;
    }

    function eliminarProducto(nombre){
        for(let producto in productos){
            if(producto.toLowerCase() === nombre.toLowerCase()){
                delete productos[producto]; // Borro la clave y sus valores asociados
                return null;
            }
        }

        alert('Este producto no existe');
        return null;
    }

    function buscarProducto(nombre){
        let productoABuscar = [];

        for(let producto in productos){
            if(producto.toLowerCase() === nombre.toLowerCase()){
                productoABuscar.push({
                    nombre: producto,
                    cantidad: productos[producto].cantidad,
                    precio: productos[producto].precio,
                    categoria: productos[producto].categoria
                });

                return productoABuscar[0];
            }
        }

        alert('Este producto no existe');
        return null;
    }

    function actualizarInventario(nombre, cantidad){
        for(let producto in productos){
            if(producto.toLowerCase() === nombre.toLowerCase()){
                if((productos[producto].cantidad + cantidad) >= 0 ){
                    productos[producto].cantidad += cantidad;

                    if(productos[producto].cantidad === 0){
                        alert('Se solicita reposicion');
                    }
                }else{
                    alert('No hay stock suficiente');
                }

                return null;
            }
        }

        alert('Este producto no existe');
        return null;
    }

    function ordenarProductosPorPrecio(){
        let inventarioOrdenado = [];

        for(let producto in productos){
            inventarioOrdenado.push({
                nombre: producto,
                categoria: productos[producto].categoria,
                cantidad: productos[producto].cantidad,
                precio: productos[producto].precio,
            });
        }

        inventarioOrdenado.sort((a, b) => a.precio - b.precio);

        return inventarioOrdenado;
    }

    function imprimirInventario(){
        let inventario = [];

        for(let producto in productos){
            inventario.push({
                nombre: producto,
                categoria: productos[producto].categoria,
                cantidad: productos[producto].cantidad,
                precio: productos[producto].precio,
                total: (productos[producto].cantidad * productos[producto].precio).toFixed(2)
            });
        }

        return inventario;
    }

    function filtrarProductosPorCategoria(categoria){
        let productosFiltrados = [];

        for(let producto in productos){
            if(productos[producto].categoria.toLowerCase() === categoria.toLowerCase()){
                productosFiltrados.push({
                    nombre: producto,
                    cantidad: productos[producto].cantidad,
                    precio: productos[producto].precio,
                    categoria: productos[producto].categoria
                });
            }
        }

        if(productosFiltrados.length > 0){
            return productosFiltrados;
        }

        alert('No existen productos en esta categoria');
        return null;
    }

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

function listarProductosHTML(resultado){
    contenedorResultado.innerHTML = '';

    if(resultado){
        contenedorResultado.innerHTML += '<h2>Listado de productos</h2><ul>';

        for (let producto of resultado) {
            contenedorResultado.innerHTML += `<li>${producto.nombre.toLocaleUpperCase()}</li><ul><li>Categoria: ${producto.categoria}</li><li>Cantidad: ${producto.cantidad}</li><li>Precio: ${producto.precio}</li><li>Total: ${producto.total}</li></ul>`;
        }

        contenedorResultado.innerHTML += '</ul>';
    }else{
        if(productos.length === 0){
            contenedorResultado.innerHTML += '<h2>No existen productos</h2>';
        }
    }
}

window.addEventListener('load', () => {

    formCrearProducto.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombreProducto = document.getElementById('crearNombre').value;
        const cantidadProducto = parseInt(document.getElementById('crearCantidad').value);
        const precioProducto = parseFloat(document.getElementById('crearPrecio').value);
        const categoriaProducto = document.getElementById('crearCategoria').value;

        $negocio.agregarProducto(nombreProducto, cantidadProducto, precioProducto, categoriaProducto);
        const resultado = $negocio.imprimirInventario();
        listarProductosHTML(resultado);

        formCrearProducto.reset();
    });

    formEliminarProducto.addEventListener('submit', (e) => {
        e.preventDefault();

        const productoEliminado = document.getElementById('eliminarNombre').value;

        $negocio.eliminarProducto(productoEliminado);
        const resultado = $negocio.imprimirInventario();
        listarProductosHTML(resultado);

        formEliminarProducto.reset();
    });

    formBuscarProducto.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const filtro = document.getElementById('buscarNombre').value;

        const resultado = $negocio.buscarProducto(filtro);
        listarProductosHTML(resultado);

        formBuscarProducto.reset();
    });

    formActualizarProducto.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombreProducto = document.getElementById('actualizarNombre').value;
        const cantidadProducto = parseInt(document.getElementById('actualizarCantidad').value);

        $negocio.actualizarInventario(nombreProducto, cantidadProducto);
        const resultado = $negocio.imprimirInventario();
        listarProductosHTML(resultado)

        formActualizarProducto.reset();
    });

    formFiltrarCategoria.addEventListener('submit', (e) => {
        e.preventDefault();

        const filtro = document.getElementById('filtrarCategoria').value;

        const resultado = $negocio.filtrarProductosPorCategoria(filtro);
        listarProductosHTML(resultado)

        formFiltrarCategoria.reset();
    });

    document.getElementById('btn-listarProductos').addEventListener('click', () => {
        const resultado = $negocio.imprimirInventario();
        listarProductosHTML(resultado);
    });

    document.getElementById('btn-ordenarPrecio').addEventListener('click', () => {
        const resultado = $negocio.ordenarProductosPorPrecio();
        listarProductosHTML(resultado)
    });

});