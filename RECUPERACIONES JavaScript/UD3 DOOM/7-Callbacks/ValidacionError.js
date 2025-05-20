class ValidacionError extends Error {

    constructor(mensaje, campoFallido) {
        // Llama al constructor de la clase Error para establecer el mensaje mediante message
        super(mensaje);
        this.campoFallido = campoFallido;
    }
}

export default ValidacionError;
