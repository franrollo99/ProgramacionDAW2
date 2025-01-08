import Validar from "./claseValidarError.js";

document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formulario");
    const guardarBtn = document.getElementById("guardar");
  
    // Precargar datos de localStorage
    const datosGuardados = JSON.parse(localStorage.getItem("formularioDatos"));
    if (datosGuardados) {
      formulario.nombre.value = datosGuardados.nombre || "";
      formulario.password.value = datosGuardados.password || "";
      formulario.email.value = datosGuardados.email || "";
      formulario.fechaNacimiento.value = datosGuardados.fechaNacimiento || "";
    }
  
    guardarBtn.addEventListener("click", () => {
      const nombre = formulario.nombre.value;
      const password = formulario.password.value;
      const email = formulario.email.value;
      const fechaNacimiento = formulario.fechaNacimiento.value;
  
      limpiarErrores();
  
      Validar.validarNombre(nombre, (valor, error) => {
        if (error) return manejarError(error);
        Validar.validarPassword(password, (valor, error) => {
          if (error) return manejarError(error);
          Validar.validarEmail(email, (valor, error) => {
            if (error) return manejarError(error);
            Validar.validarFechaNacimiento(fechaNacimiento, (valor, error) => {
              if (error) return manejarError(error);
  
              // Todos los campos válidos
              alert("Formulario validado correctamente.");
              localStorage.setItem("formularioDatos", JSON.stringify({ nombre, password, email, fechaNacimiento }));
            });
          });
        });
      });
    });
  
    function manejarError(error) {
      alert(error.message);
      const campo = document.getElementById(error.campo);
      if (campo) campo.classList.add("error");
    }
  
    function limpiarErrores() {
      const campos = formulario.querySelectorAll("input");
      campos.forEach((campo) => campo.classList.remove("error"));
    }
  });
  