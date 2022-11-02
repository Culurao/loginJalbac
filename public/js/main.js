const agregarPedido = (fecha1,cliente,fecha2,estado) => {
  return new Promise((resolve,reject) => {
    if(fecha1 != '' && cliente != '' && fecha2 != '' && estado != ''){
      resolve(alert("el pedido fue registrado exitosamente"))
    }
    else{
      reject(alert("el pedido no pudo ser registrado debido a que falta llenar campos"))
    }
  })
}
const fechaPedido = document.querySelector("#fechaPedido")
const cliente = document.querySelector("#cliente")
const fechaEntrega = document.querySelector("#fechaEntrega")
const estado = document.querySelector("#estado")
const btnAgregarPedido = document.querySelector("#btnAgregarPedido")
btnAgregarPedido.addEventListener("click", () => {
  agregarPedido(fechaPedido.value, cliente.value, fechaEntrega.value, estado.value)
})