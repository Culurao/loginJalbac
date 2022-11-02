const validarFormularioEmpleado = () => {
    let nombre = document.querySelector('#nombre')
    let apellido = document.querySelector('#apellido')
    let documento = document.querySelector('#documento')
    let cargo = document.querySelector('#cargo')
    let estado = document.querySelector('#estado')

    if (nombre.value == '' || apellido.value == '' || documento.value == '' || cargo.value == '' || estado.value == '') {
        alert('Todos los campos son obligatorios')
    }else{
        alert('Empleado creado correctamente')
    }
}

const botonValidacion = document.querySelector("#accion")
botonValidacion.addEventListener("click", validarFormularioEmpleado)