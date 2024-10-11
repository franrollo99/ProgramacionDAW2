let inventario={
    manzanas: {cantidad: 10, precio: 1.60, categoria: 'fruta'}
};

function agregarProducto(nombre, cantidad, precio, categoria){
    let productoExiste=false;

    for(producto in inventario){
        if(producto===nombre){
            alert('El producto ya existe');
            productoExiste=true;
            break;
        }
    }

    if(!productoExiste){
        inventario[nombre]={cantidad: cantidad, precio: precio, categoria: categoria};
    }
}

function eliminarProducto(nombre){
    let productoExiste=false;

    for(producto in inventario){
        if(producto===nombre){
            delete inventario[producto];
            productoExiste=true;
            break;
        }
    }

    if(!productoExiste){
        alert('El producto no existe');
    }
}

function buscarProducto(nombre){
    let productoExiste=false;

    for(producto in inventario){
        if(producto===nombre){
            let propProd=inventario[producto];
            for(prop in propProd){
                console.log(`Nombre: ${producto} Cantidad: ${propProd.cantidad} Precio: ${propProd.precio} Categoria; ${propProd.categoria}`);
            }
            productoExiste=true;
            break;
        }
    }

    if(!productoExiste){
        alert('El producto no existe');
    }
}

function actualizarInventario(nombre, cantidad){
    let productoExiste=false;

    for(producto in inventario){
        if(producto===nombre){
            let prod=inventario[producto];
            if(prod.cantidad+cantidad<=0){
                prod.cantidad=0;
                alert('Hace falta reponer el producto');
            }else{
                prod.cantidad+=cantidad;
                }
            productoExiste=true;
            break;
        }
    }

    if(!productoExiste){
        alert('El producto no existe');
    }
}

// REVISAR
function ordenarProductosPorPrecio(){
    let arrayProductos=Object.entries(inventario); //Convierto el inventario en un array de productos donde cada elemento es un par [nombreProducto, detallesProducto]

    let productosOrdenados=arrayProductos.sort((a, b) => a[1].precio - b[1].precio); //Ordenar los productos por el precio de forma ascendente

    return productosOrdenados.map(producto => ({
        nombre: producto[0],
        cantidad: producto[1].cantidad,
        precio: producto[1].precio,
        categoria: producto[1].categoria
    }));
}

function imprimirInventario(){
    for(producto in inventario){
        let propProd=inventario[producto];
        console.log(`Nombre: ${producto} Cantidad: ${propProd.cantidad} Precio: ${propProd.precio} Categoria; ${propProd.categoria}`);
    }
}

function filtrarProductosPorCategoria(categoria){
    for(producto in inventario){
        let propProd=inventario[producto];
        if(propProd.categoria===categoria){
            console.log(`Nombre: ${producto} Cantidad: ${propProd.cantidad} Precio: ${propProd.precio} Categoria; ${propProd.categoria}`);
        }
    }
}