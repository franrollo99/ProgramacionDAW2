class GestorCookies{
    set(nombre, valor){
        document.cookie = `${nombre}=${valor}`;
    }

    get(nombre){
        const cookies = document.cookie.split(';');

        for(let cookie of cookies){
            if(cookie.includes('=')){
                const [clave, valor] = cookie.split('=');
                
                if(clave === nombre){
                    return clave;
                }
            }
        }
    }

    // delete(nombre){
    //     const cookie = get(nombre);
    // }
}

export default GestorCookies;