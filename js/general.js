
const contenedor = document.querySelector("div#container.container")
const buscador = document.querySelector("input#inputSearch")
const contadorCarrito = document.querySelector("span#productosEnCarrito")

// ``

function mostrarCantProd() {
    contadorCarrito.textContent = carritoFrutas.length
}

carritoFrutas.length > 0 && mostrarCantProd()


function crearCardHTML(producto) {
    return `<div class="div-card">
                 <div class="imagen">
                     <h1>${producto.imagen}</h1>
                 </div>
                 <div class="prenda">
                     <p>${producto.nombre}</p>
                 </div>
                 <div class="importe">
                     <p>$ ${producto.precioKg} Por kilo</p>
                 </div>
                 <div class="comprar"><button id="${producto.codigo}" class="boton-comprar boton-card-index">add</button></div>
            </div>`
}

function activarClickObjetos() {
    const botones = document.querySelectorAll("button.boton-comprar.boton-card-index")
    botones.forEach((boton)=> {
        boton.addEventListener("click", ()=> {
           let obejetoFruta = frutas.find((elemento)=> elemento.codigo === parseInt(boton.id))
           carritoFrutas.push(obejetoFruta)
           Toastify({
            text: "Se agregó el producto al carrito: " + obejetoFruta.imagen + obejetoFruta.nombre + obejetoFruta.imagen ,
            duration: 1000,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
          }).showToast();
          crearCarritoLocalStorage()
          mostrarCantProd()
        })
    })
}

function cargarProds (array) {
    contenedor.innerHTML= ""
    if (array.length > 0) {
        array.forEach((fruta) =>  contenedor.innerHTML += crearCardHTML(fruta))
        activarClickObjetos()
    } else {
        Toastify({
            text: "No hay productos para cargar respecto a esa busqueda: " ,
            duration: 3000,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
          }).showToast();
    }
}

buscador.addEventListener("search", ()=> {
    if (buscador.value.trim() !== "") {
        let resultado = frutas.filter((fruta)=> fruta.nombre.toLowerCase().includes(buscador.value.trim().toLowerCase()))
        cargarProds(resultado)
    } else if (buscador.value.trim() === "") {
        cargarProds(frutas)
}
} )
cargarProds(frutas)