import ValidacionError from "./claseError.js";

class Validar {
    static validarNombre(nombre, callback) {
        if (nombre.length < 3 || /[0-9]/.test(nombre)) {
            callback(null, new ValidacionError("El nombre debe tener al menos 3 caracteres y no contener números.", "nombre"));
        } else {
            callback(nombre, null);
        }
    }

    static validarPassword(password, callback) {
        const tieneMayuscula = /[A-Z]/.test(password);
        const tieneMinuscula = /[a-z]/.test(password);
        const tieneNumero = /[0-9]/.test(password);
        if (password.length < 8 || !tieneMayuscula || !tieneMinuscula || !tieneNumero) {
            callback(null, new ValidacionError("La contraseña debe tener al menos 8 caracteres, incluir mayúsculas, minúsculas y números.", "password"));
        } else {
            callback(password, null);
        }
    }

    static validarEmail(email, callback) {
        const partes = email.split("@");
        if (partes.length !== 2 || partes[0].length === 0 || partes[1].split(".").length !== 2 || partes[1].split(".")[1].length < 2) {
            callback(null, new ValidacionError("El email debe ser válido y contener una '@' y un dominio correcto.", "email"));
        } else {
            callback(email, null);
        }
    }

    static validarFechaNacimiento(fecha, callback) {
        const hoy = new Date();
        const nacimiento = new Date(fecha);
        const edad = hoy.getFullYear() - nacimiento.getFullYear();
        if (edad < 18 || edad > 24) {
            callback(null, new ValidacionError("La edad debe estar entre 18 y 24 años.", "fechaNacimiento"));
        } else {
            callback(fecha, null);
        }
    }
}

export default Validar;