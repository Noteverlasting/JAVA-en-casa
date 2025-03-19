/*
1. Operaciones con arrays bidimensionales
Dado el siguiente array bidimensional que muestra nombre, precio y cantidades:
*/
const productos = [
    ["Manzanas", 2.5, 4],
    ["Peras", 3.0, 2],
    ["Plátanos", 1.2, 6],
    ["Naranjas", 2.6, 3]
];

//a) Calcula el total de frutas compradas (sumando las cantidades de cada tipo).
let frutasCompradas = 0

for (let i = 0; i < productos.length ; i++) {
    frutasCompradas += productos[i][2]
}
console.log(frutasCompradas);
console.log(`El total de frutas compradas es: ${frutasCompradas}`);

//b) Calcula el importe total de la compra (precio por cantidad de cada producto).
let TotalCompra = 0
for (let i = 0; i < productos.length ; i++) {
    TotalCompra += productos[i][1] * productos[i][2]
}
console.log(TotalCompra);
console.log(`El importe total de su compra es ${TotalCompra} €uros`);

//c) Crea un nuevo array que contenga solo los nombres de los productos.
//USAMOS UN BUCLE for DENTRO DEL BUCLE for QUE ITERA LOS ITEMS DEL ARRAY PRODUCTOS, PARA PODER ACCEDER A LOS ITEMS DENTRO DE ESOS ITEMS
let frutasLista = []

for (let i = 0; i < productos.length ; i++) {
    // LE DAMOS UN VALOR A LOS ITEMS QUE ITERAMOS DENTRO DEL BUCLE (f)
    for (let f = 0; f < productos[i].length; f++){
    if (typeof productos[i][f] === "string") {
        frutasLista.push(productos[i][f])
    }
}}
console.log(frutasLista);
console.log(`Los nombres de las frutas dentro de la lista son ${frutasLista}`);




/*
2. Filtrar nombres
Dado el siguiente array de nombres:
*/
const nombres = ["Ana", "Luis", "Carlos", "María", "Pedro", "Lucía", "Juan", "Laura"];

//a) Crea un nuevo array que contenga solo los nombres que empiezan con la letra "L".
let comienzoEle = []

for (names of nombres) {
    if (names[0].toLowerCase() === "l") {
        comienzoEle.push(names)
    }
}
console.log(comienzoEle);
console.log(`Los nombres de la lista que comienzan con la letra l son: ${comienzoEle}`);

//b) Cuenta cuántos nombres tienen más de 4 letras.
let masDeCuatro = 0

for (names of nombres) {
    if (names.length > 4) {
        masDeCuatro += 1
    }
}
console.log(masDeCuatro);
console.log(`En la lista hay ${masDeCuatro} nombres que tienen más de 4 letras`);

//c) Encuentra el nombre más largo del array.
let masLargo = nombres[0]

for (names of nombres) {
    if (names.length > masLargo.length) {
        masLargo = names
    }
}
console.log(masLargo);
console.log(`El nombre más largo del array es ${masLargo}`);




/*
3. Separar datos mixtos
Dado el siguiente array mixto:
*/
const datos = [42, "Hola", true, 3.14, "Mundo", false, 100, "JavaScript"];

//a) Separa los números en un array y los textos en otro array.
let numerosArr = []
let textosArr = []

for (numer of datos) {
    if (typeof numer === "number") {
        numerosArr.push(numer)
    }
}
for (testo of datos) {
    if (typeof testo === "string") {
        textosArr.push(testo)
    }
}

console.log(numerosArr);
console.log(textosArr);

console.log(`Los numeros que hay en el array son: ${numerosArr}`);
console.log(`Los strings dentro del array son: ${textosArr}`);

//b) Cuenta cuántos valores booleanos hay en el array.
let booleanis = 0

for (bulis of datos){
    if (typeof bulis === "boolean") {
        booleanis +=1
    }
}
console.log(booleanis);
console.log(`Hay ${booleanis} valores booleanos en el array`);

//c) Calcula la suma de todos los números en el array.

let sumanumeros = 0

for (numer of numerosArr) {
    sumanumeros += numer
}
console.log(sumanumeros);



/*
4. Crear un array bidimensional
Dado el siguiente array:
*/

const personas = ["Alice", 25, "Bob", 30, "Charlie", 35, "Diana", 40];

//a) Convierte este array en un array bidimensional donde cada subarray contenga un nombre y su edad. Ejemplo: ["Alice", 25].
let biDi = []
for (let i = 0; i < personas.length ; i++) {
    if (i % 2 == 0) {
        biDi.push([personas[i], personas[i+1]])
    }
}

console.log(biDi);

//b) Crea un nuevo array que contenga solo los nombres de las personas mayores de 30 años.
let mayTrenta = []

for (names of biDi) {
    if (names[1] >= 30){
        mayTrenta.push(names[0])
    }
}
console.log(mayTrenta);



/*
5. Manipulación de matrices
Dada la siguiente matriz:
*/

const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

//a) Calcula la suma de todos los elementos de la matriz.
//b) Crea un array que contenga la suma de cada columna.
//c) Encuentra el número más grande de la matriz.


/*
6. Operaciones con strings
Dado el siguiente array de palabras:
*/

const palabras = ["sol", "luna", "estrella", "cielo", "mar", "tierra", "fuego"];


//a) Encuentra todas las palabras que contienen la letra "e".
//b) Crea un nuevo array con las palabras en mayúsculas.
//c) Ordena las palabras alfabéticamente.


/*
7. Operaciones con números
Dado el siguiente array de números:
*/

const numeros = [3, 7, 2, 9, 4, 6, 1, 8, 5];

//a) Encuentra el número más grande y el más pequeño del array.
//b) Calcula la suma de los números en posiciones pares.
//c) Crea un nuevo array con los números multiplicados por 2.


/*
8. Contar letras
Dado el siguiente array de nombres:
*/

const nombres2 = ["Ana", "Luis", "Carlos", "María", "Pedro", "Lucía", "Juan"];


//a) Cuenta cuántos nombres contienen la letra "a".
//b) Encuentra el nombre que tiene más vocales.
//c) Crea un nuevo array con los nombres invertidos (por ejemplo, "Ana" → "anA").


/*
9. Crear un carrito de compras
Dado el siguiente array:
*/

const carrito = [
    ["Camiseta", 15.99, 2],
    ["Pantalón", 25.50, 1],
    ["Zapatos", 45.00, 1],
    ["Gorra", 10.00, 3]
];


//a) Calcula el total de artículos comprados.
//b) Calcula el importe total de la compra.
//c) Crea un nuevo array que contenga solo los nombres de los productos cuyo precio unitario sea mayor a 20.


/*
10. Contar tipos de datos
Dado el siguiente array:
*/

const valores = [10, "Hola", true, 42, "Mundo", false, "JavaScript", 3.14];

//a) Cuenta cuántos números hay en el array.
//b) Cuenta cuántos textos hay en el array.
//c) Crea un nuevo array que contenga solo los valores booleanos.
