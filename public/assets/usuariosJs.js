let rolIngresado = document.querySelector("#rol");
let correoIngresado = document.querySelector("#correo");
let contraseñaIngresado = document.querySelector("#password");
let contraseñaIngresado2 = document.querySelector("#password2");

const validarUsuario = () => {
    return new Promise((resolve, reject)=>{
      if (rolIngresado.value == '' && correoIngresado.value == '' && contraseñaIngresado.value == '' && contraseñaIngresado2.value == '') {
        resolve (alert('Debe ingresar todos los campos'))
      }else{
        reject(alert('Cuenta de usuario registrada correctamente'))
      }
    })
  }

  const botonValidacion = document.querySelector("#botonUsuario");
  botonValidacion.addEventListener("click", validarUsuario);