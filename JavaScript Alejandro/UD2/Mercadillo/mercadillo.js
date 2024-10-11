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
    let resultado=[];
    for(producto in inventario){
        let prod=inventario[producto];
        inventario[producto].cantidad.sort((a, b) =>{
            if (a.prod.cantidad < b.prod.cantidad){
                return -1;
            }
            if (a.prod.cantidad > b.prod.cantidad){
                return 1;
            }
            if (a.prod.cantidad < b.prod.cantidad){
                return -1;
            }
        });
        console.log(inventario);
    }
}

function imprimirInventario(){
    for(producto in inventario){
        let propProd=inventario[producto];
        console.log(`Nombre: ${producto} Cantidad: ${propProd.cantidad} Precio: ${propProd.precio} Categoria; ${propProd.categoria}`);
    }
}

function 