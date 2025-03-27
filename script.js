let totalPrecio = 0
let librosComprados = []

const libros = {
    libro1 : 5,
    libro2 : 6.5,
    libro3 : 10
}

function agregarLibro(libroSel) {
    let cantidad = prompt(`Cuantas unidades de ${libroSel} quieres?`)
    if (cantidad > 0 && !isNaN(cantidad)){
        let precio = libros[libroSel]
        let totalLibro = (precio * cantidad)
        librosComprados.push({
            libro: libroSel,
            precio : precio,
            cantidad: cantidad,
            total: totalLibro
        })
        let detallesCarrito = document.getElementById('detallesCarrito')
        detallesCarrito.innerHTML += `<button onclick="borrarLibro(${librosComprados.length - 1})">X</button><p>${libroSel}: ${cantidad} x ${precio} = ${totalLibro}</p>`
        totalPrecio += totalLibro
        actualizar()
        totalCompra()
        


    } else {
        alert('Por favor, introduce una cantidad válida')
    }

}

function totalCompra (){

    let precioFinal = document.getElementById('precioFinal')
    precioFinal.innerHTML = `${totalPrecio} €`

}

function borrarLibro(index){
    totalPrecio -= librosComprados[index].total
    librosComprados.splice(index, 1) 
    actualizar()
    totalCompra() 

}

function actualizar () {
    let detallesCarrito = document.getElementById('detallesCarrito') 
    detallesCarrito.innerHTML = ''
    librosComprados.forEach((item, index)  => { 
        detallesCarrito.innerHTML += `<button onclick="borrarLibro(${index})">X</button><p>${item.libro}: ${item.cantidad} x ${item.precio} = ${item.total}</p>`
        })
}

const libro1 = document.getElementById('libro1')
libro1.addEventListener('click', () => {
    agregarLibro('libro1')
}) 
const libro2 = document.getElementById('libro2')
libro2.addEventListener('click', () => {
    agregarLibro('libro2')
}) 
const libro3 = document.getElementById('libro3')
libro3.addEventListener('click', () => {
    agregarLibro('libro3')
}) 