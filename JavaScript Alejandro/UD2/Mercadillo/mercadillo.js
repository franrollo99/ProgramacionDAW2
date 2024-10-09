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
            console.log(`Nombre: ${producto} `);
            let propProd=inventario[producto];
            for(prop in propProd){
                console.log(`Cantidad: ${propProd.cantidad} Precio: ${propProd.precio} Categoria; ${propProd.categoria}`);
            }
            productoExiste=true;
            break;
        }
    }

    if(!productoExiste){
        alert('El producto no existe');
    }
}