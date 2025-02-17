//Clase 41 - Ejercicios ( 8 / 10 )

//24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
const arrayOrdenado = array => {
    if(!array)return console.log("No se introdujo parametro array") 
    if(!(array instanceof Array))return console.log("El elemento introducido no es un array")
    let arraypro = array.filter(el => typeof el === "number")
    if(arraypro.length < 1)return console.log("No se aceptan arrays sin elementos numericos")
    //Para hacer una copia de un array debemos tener en cuenta que no apunte a la misma direccion en memoria, por eso tenemos que usar .slice(), spread operator, filter, o 
    // Array.from(arrayQueQueremosCopiar) esto se hace para que no afecte al array original
    let arrayOrdenadoAsc = arraypro.filter(()=> true)
    let arrayOrdenadoDes = [...arraypro]
    arrayOrdenadoAsc = arrayOrdenadoAsc.sort()
    arrayOrdenadoDes = arrayOrdenadoDes.sort().reverse()
    return {arrayOrdenadoAsc,
            arrayOrdenadoDes
    }
}

console.log(arrayOrdenado([7, 5,7,8,6]))
//25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
const eliminarReps = array => {
    if(!array)return console.log("No se introdujo parametro array") 
    if(!(array instanceof Array))return console.log("El elemento introducido no es un array")
    if(array.length < 1)return console.log("No se aceptan arrays sin elementos numericos")
    const elementosRepetidos = (elemento,index,arrayCompleto) => {
        if(arrayCompleto.indexOf(elemento) !== index){
            return false
        }else{return true}
    }
    const ArraySinReps = array.filter(elementosRepetidos)
    return ArraySinReps
}

console.log(eliminarReps(["x", 10, "x", 2, "10", 10, true, true]))
//26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

const arrayNumProm = array => {
    if(!array)return console.log("No se introdujo parametro array") 
    if(!(array instanceof Array))return console.log("El elemento introducido no es un array")
    let arraypro = array.filter(el => typeof el === "number")
    if(arraypro.length < 1)return console.log("No se aceptan arrays sin elementos numericos")
    const mediana = (acumulate, num) => acumulate + num 
    let prom = arraypro.reduce(mediana)/arraypro.length
    return prom
}

console.log(arrayNumProm([9,8,7,6,5,4,3,2,1,0]))