const cuerpoTabla = document.querySelector("tbody")
const seccionCarrito = document.querySelector("section.tabla")
const importeCarrito = document.querySelector("span.importe")
//``

function cargarCarritosEnHTML(fruta) {
    return `<tr>
                <td>${fruta.codigo}</td>
                <td>${fruta.imagen}</td>
                <td>${fruta.nombre}</td>
                <td>${fruta.precioKg}</td>
                <td><button class="negro" id="${fruta.codigo}">❌</button></td>
            </tr>`
}

function msgCarritoSinNada () {
    return `<div class="card-error">
                <h3>El carrito está vacío</h3>
                <h4>🛒</h4>
            </div>`
}

function armarCarrito(){
    cuerpoTabla.innerHTML = ""
    if (carritoFrutas.length) {
        carritoFrutas.forEach((fruta)=> cuerpoTabla.innerHTML += cargarCarritosEnHTML(fruta))
        activarBotonesQuitar()
    } else {
        seccionCarrito.innerHTML = msgCarritoSinNada()
    }
}
armarCarrito()

function pagarCarrito() {
    importeCarrito.innerHTML = carritoFrutas.reduce((acumulador, fruta) => acumulador + (fruta.precioKg), 0)
}

pagarCarrito() 

function activarBotonesQuitar() {
    const botonesCruz = document.querySelectorAll("button.negro")
    botonesCruz.forEach((boton)=> {
        boton.addEventListener("click", ()=> {
            let objetoEliminar = carritoFrutas.findIndex((prod)=> prod.codigo === parseInt(boton.id) )
            carritoFrutas.splice( objetoEliminar, 1)
            activarBotonesQuitar()
            armarCarrito()
            crearCarritoLocalStorage()
            pagarCarrito()
        })
    })
}

