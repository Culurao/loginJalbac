let nombreAnilloIngresado = document.querySelector("#nombreAnillo");
let tipoAnilloIngresado = document.querySelector("#tipoAnillo");
let pesoAnilloIngresado = document.querySelector("#pesoAnillo");
let detalleAnilloIngresado = document.querySelector("#detalleAnillo");
let infoAnilloIngresado = document.querySelector("#infoAnillo");


const registrarDevolucion = () => {
    return new Promise((resolve, reject) => {
        let encontrado = false;
        if (nombreAnilloIngresado == "" || tipoAnilloIngresado == "" || pesoAnilloIngresado == "" || detalleAnilloIngresado == "" || infoAnilloIngresado == "") {
            reject(alert('Informacion ingresada invalida'))
        } else {
            resolve(alert('Devolucion registrada correctamente'))
        }
    })
};


const botonValidacion = document.querySelector("#validarDevolucion");
botonValidacion.addEventListener("click", registrarDevolucion);
