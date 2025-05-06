class ValidacionError extends Error{

    constructor(mensaje, campoFallido){
        this.mensaje = mensaje;
        this.campoFallido = campoFallido;
    }
}

export default ValidacionError;