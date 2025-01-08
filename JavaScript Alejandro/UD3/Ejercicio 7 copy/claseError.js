class ValidacionError extends Error {
    constructor(mensaje, campo) {
        super(mensaje);
        this.name = "ValidacionError";
        this.campo = campo;
    }
}

export default ValidacionError;