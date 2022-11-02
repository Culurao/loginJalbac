let nombreAnilloIngresado = document.querySelector("#nombreAnillo");
let tipoAnilloIngresado = document.querySelector("#tipoAnillo");
let pesoAnilloIngresado = document.querySelector("#pesoAnillo");
let detalleAnilloIngresado = document.querySelector("#detalleAnillo");
let infoAnilloIngresado = document.querySelector("#infoAnillo");

const registrarDevolucion = () => {
  return new Promise((resolve, reject) => {
    let encontrado = false;
    if (
      nombreAnilloIngresado.value == "" ||
      tipoAnilloIngresado.value == "" ||
      pesoAnilloIngresado.value == "" ||
      detalleAnilloIngresado.value == "" ||
      infoAnilloIngresado.value == ""
    ) {
      resolve(alert("Informacion ingresada invalida"));
    } else {
      reject(alert("Devolucion registrada"));
    }
  });
};

const botonValidacion = document.querySelector("#validarDevolucion");
botonValidacion.addEventListener("click", registrarDevolucion);
