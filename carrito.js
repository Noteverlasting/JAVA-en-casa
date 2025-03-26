/*
Hay que programar un carrito de compra de fruta.

El cliente eligirá que fruta quiere haciendo click sobre la imagen.
Un mensaje emergente le preguntará qué cantidad quiere.

Esta información se mostrará a la derecha, bajo "Total carrito", 
en <p id="carrito"></p>, de esta forma:
 Kiwi 2 kg x 4,20€/kg = 8,40 €

El total se actualizará con cada compra
 Total Compra: 8,40€
 
Se dará la opción de añadir o no más productos que se mostrarán
a continuación de los anteriores, y se sumará todo en el total. 
Por ejemplo:  
 Kiwi 2 kg x 4, 20€/kg = 8, 40€
 Pomelo 1 kg x 2,50€/kg = 2,50€
 Total Compra: 10,90€

Puedes modificar el código facilitado si ello te ayuda con el ejercicio,
pero deberás justificarlo.

Recuerda la importancia comentar con detalle el código.

 Lo importante es el cálculo, no los estilos css
 */


 let frutaSeleccionada = ''; // Variable global

 const precios = {
    pomelo: 2.50,
    kiwi: 4.20,
    limon: 1.20,
    sandia: 1.20,
    freson: 6.20,
    mandarina: 1.90,
    fuji: 3.00,
    platano : 3.20,
    pera: 1.80,
    golden: 3.50
  }

const unidades = {
    pinya : 2.80,
    aguacate : 2.50
}


function seleccionarFruta() {
  // Aquí no hay parámetro, pero usamos la variable global 'frutaSeleccionada'
  let cantidad = prompt(`¿Cuántos kg de ${frutaSeleccionada} deseas?`)
  
  if (cantidad <= 0 || isNaN(cantidad) || !cantidad) {
    alert('Por favor ingresa una cantidad válida')
    return;
  }

  let cantidadDecimal = parseFloat(cantidad).toFixed(2)
  let precio = precios[frutaSeleccionada]
  let totalFruta = (cantidadDecimal * precio).toFixed(2)
  let mensajeCarrito = document.getElementById('carrito')
  // Aqui se indica que el html dentro de la const mensajeF sea el que definimos despues del =
  mensajeCarrito.innerHTML += `${frutaSeleccionada} : ${cantidadDecimal} kg x ${precio}€/kg = ${totalFruta} € <br>`

  
}

function seleccionarUnidades() {
    // Aquí no hay parámetro, pero usamos la variable global 'frutaSeleccionada'
    let cantidad = prompt(`¿Cuántas unidades de ${frutaSeleccionada} deseas?`)
    
    if (cantidad <= 0 || isNaN(cantidad) || !cantidad) {
      alert('Por favor ingresa una cantidad válida')
      return;
    }
  
    let cantidadDecimal = parseFloat(cantidad).toFixed(2)
    let precio = unidades[frutaSeleccionada]
    let totalFruta = (cantidadDecimal * precio).toFixed(2)
    let mensajeCarrito = document.getElementById('carrito')
    // Aqui se indica que el html dentro de la const mensajeF sea el que definimos despues del =
    mensajeCarrito.innerHTML += `${frutaSeleccionada} : ${cantidadDecimal} kg x ${precio}€/ud = ${totalFruta} € <br>`
  
    
  }

document.getElementById('pomelo').addEventListener('click', () => {
  frutaSeleccionada = 'pomelo'
  seleccionarFruta()
})
document.getElementById('kiwi').addEventListener('click', () => {
  frutaSeleccionada = 'kiwi'
  seleccionarFruta()
})
document.getElementById('limon').addEventListener('click', () => {
    frutaSeleccionada = 'limon'
    seleccionarFruta()
  })
document.getElementById('pinya').addEventListener('click', () => {
    frutaSeleccionada = 'pinya'
    seleccionarUnidades()
})
document.getElementById('sandia').addEventListener('click', () => {
    frutaSeleccionada = 'sandia'
    seleccionarFruta()
  })
document.getElementById('aguacate').addEventListener('click', () => {
    frutaSeleccionada = 'aguacate'
    seleccionarUnidades()
})
document.getElementById('freson').addEventListener('click', () => {
    frutaSeleccionada = 'freson'
    seleccionarFruta()
})
document.getElementById('mandarina').addEventListener('click', () => {
    frutaSeleccionada = 'mandarina'
    seleccionarFruta()
})
document.getElementById('fuji').addEventListener('click', () => {
  frutaSeleccionada = 'fuji'
  seleccionarFruta()
})

document.getElementById('platano').addEventListener('click', () => {
    frutaSeleccionada = 'platano'
    seleccionarFruta()
})
  document.getElementById('pera').addEventListener('click', () => {
    frutaSeleccionada = 'pera'
    seleccionarFruta()
})
  document.getElementById('golden').addEventListener('click', () => {
    frutaSeleccionada = 'golden'
    seleccionarFruta()
})


/*
otra version mas corta, adaptar a unidades para pinya y aguacate

// Objeto con las frutas y sus precios
const frutas = {
    pomelo: 2.50,
    kiwi: 4.20,
    limon: 1.20,
    sandia: 1.20,
    freson: 6.20,
    mandarina: 1.90,
    fuji: 3.00,
    platano : 3.20,
    pera: 1.80,
    golden: 3.50
};

// Función que se ejecuta cuando se hace clic en una fruta
function seleccionarFruta(frutaSeleccionada) {
  let cantidad = prompt(`¿Cuántos kg de ${frutaSeleccionada} deseas?`);
  
  if (cantidad <= 0 || isNaN(cantidad) || !cantidad) {
    alert('Por favor ingresa una cantidad válida');
    return;
  }

  let precio = frutas[frutaSeleccionada];  // Accedemos al precio de la fruta seleccionada
  let totalFruta = (parseFloat(cantidad) * precio).toFixed(2);  // Calculamos el total con 2 decimales
  
  let mensajeCarrito = document.getElementById('carrito');
  mensajeCarrito.innerHTML += `${frutaSeleccionada.charAt(0).toUpperCase() + frutaSeleccionada.slice(1)}: ${cantidad} kg x ${precio}€/kg = ${totalFruta} € <br>`;
}

// Asignar el evento a cada fruta usando un bucle
for (let fruta in frutas) {
  // Usamos `fruta` para obtener el nombre de la fruta
  const elementoFruta = document.getElementById(fruta);
  if (elementoFruta) {
    elementoFruta.addEventListener('click', () => {
      seleccionarFruta(fruta);  // Llamamos a la función y le pasamos el nombre de la fruta
    });
  }
}
  */