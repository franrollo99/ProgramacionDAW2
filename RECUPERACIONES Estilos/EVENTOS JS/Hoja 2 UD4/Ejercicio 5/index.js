document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const usuario = document.getElementById('usuario');
    const mensaje = document.getElementById('mensaje');

    usuario.addEventListener('input', () => {
        const valor = usuario.value;

        if(valor.length < 5){
            mensaje.textContent = 'Debe tener al menos 5 caracteres';
            mensaje.style.setProperty('color', 'red');
        }else if(!usuario.checkValidity()){
            mensaje.textContent = 'Debe incluir solo letras y numeros';
            mensaje.style.setProperty('color', 'red');
        }else{
            mensaje.textContent = 'Usuario valido';
            mensaje.style.setProperty('color', 'green');
        }

        if(!valor){
            mensaje.textContent = '';
        }
    });
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
    });
});