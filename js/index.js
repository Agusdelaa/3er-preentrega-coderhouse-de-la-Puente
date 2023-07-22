const frutas = [{imagen:"🍎" , codigo: 1, nombre: "Manzana",  precioKg: 400, cant: 0},
                {imagen:"🥝" , codigo: 2, nombre: "Kiwi",     precioKg: 1250, cant: 0},
                {imagen:"🥥" , codigo: 3, nombre: "Coco",     precioKg: 900, cant: 0},
                {imagen:"🍇" , codigo: 4, nombre: "Uva",      precioKg: 670, cant: 0 },
                {imagen:"🍉" , codigo: 5, nombre: "Sandia",   precioKg: 730, cant: 0},
                {imagen:"🍊" , codigo: 6, nombre: "Naranja",  precioKg: 360, cant: 0},
                {imagen:"🍓" , codigo: 7, nombre: "Frutilla", precioKg: 1200, cant: 0},
                {imagen:"🍐" , codigo: 8, nombre: "Pera",     precioKg: 450, cant: 0},
                {imagen:"🍑" , codigo: 9, nombre: "Durzano",  precioKg: 530, cant: 0},
                {imagen:"🍈" , codigo: 10, nombre: "Melon",  precioKg: 716, cant: 0},
                {imagen:"🍌" , codigo: 11, nombre: "Banana",  precioKg: 680, cant: 0},
                {imagen:"🍍" , codigo: 12, nombre: "Anana",  precioKg: 577, cant: 0},
                {imagen:"🍒" , codigo: 13, nombre: "Cereza",  precioKg: 634, cant: 0},
                {imagen:"🥑" , codigo: 14, nombre: "Palta",  precioKg: 871, cant: 0},
                {imagen:"🍋" , codigo: 15, nombre: "Limon",  precioKg: 699, cant: 0},
                {imagen:"🥭" , codigo: 16, nombre: "mango",  precioKg: 756, cant: 0},
                {imagen:"🍏" , codigo: 17, nombre: "Manzana Verde",  precioKg: 450, cant: 0},
                {imagen:"🍆" , codigo: 18, nombre: "Berenjena",  precioKg: 700, cant: 0}]


function crearCarritoLocalStorage() {
    if (carritoFrutas.length >= 0){
        localStorage.setItem ("Carrito", JSON.stringify(carritoFrutas))
    }
}

function recuperarCarritoLocalStorage() {
    if(localStorage.getItem("Carrito") !== null){
        return JSON.parse(localStorage.getItem("Carrito"))
    } else {
        return []
    }
}

const carritoFrutas = recuperarCarritoLocalStorage()            