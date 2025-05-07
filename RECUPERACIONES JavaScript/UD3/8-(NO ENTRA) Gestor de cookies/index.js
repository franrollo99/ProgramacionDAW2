import GestorCookies from "./GestorCookies.js";

document.cookie = 'usuario=Fran';

// console.log(document.cookie);

const cookies = document.cookie.split(';');

console.log(cookies);

for(let cookie of cookies){
    if(cookie.includes('=')){
        const [clave, valor] = cookie.split('=');
        
        // console.log(clave);
    }
}

const gestorCookies = new GestorCookies();

console.log(gestorCookies.get('usuario'));