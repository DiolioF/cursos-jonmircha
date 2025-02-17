//Clase 41 - Ejercicios ( 8 / 10 )
/*
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
*/

//Clase 43 - Ejercicios ( 10 / 10 )

//27) Programa una clase llamada Pelicula.
//La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países //de origen, géneros y calificación en IMBD.
//Todos los datos del objeto son obligatorios.
//Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
//Valida que el título no rebase los 100 caracteres.
//Valida que el director no rebase los 50 caracteres.
//Valida que el año de estreno sea un número entero de 4 dígitos.
//Valida que el país o paises sea introducidos en forma de arreglo.
//Valida que los géneros sean introducidos en forma de arreglo.
//Valida que los géneros introducidos esten dentro de los géneros aceptados*.
//Crea un método estático que devuelva los géneros aceptados*.
//Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
//Crea un método que devuelva toda la ficha técnica de la película.
//Apartir de un arreglo con la información de 3 películas genera 3 
//instancias de la clase de forma automatizada e imprime la ficha técnica de cada película.
//Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
//{id,titulo,director,anio,paisESOrigen,genero, calificacion}
class Pelicula{
    constructor({id,titulo,director,anio,paisESOrigen,genero, calificacion}){
        let validarID = /^\d{2}[A-Z]{7}$/ig
        if(!(validarID.test(id))){
            throw Error("El id introducido no es valido")
        }else{
            this.id = id
        }



            }
}

let peli = new Pelicula({id:"12asdfghj"})

peli