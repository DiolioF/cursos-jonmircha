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
class Pelicula{
    //{id,titulo,director,anio,paisESOrigen,genero, calificacion}
    constructor({id,titulo,director,anio,paisESOrigen,genero, calificacion}){
        //Validar ID
        if(!id)throw Error("No se introdujo id")
        if(typeof id !== "string")throw Error("Id no es un string")
        let validarID = /^\d{2}[A-Z]{7}$/i
        if(!(validarID.test(id))){
            throw Error("El id introducido no es valido")
        }else{
            this.id = id
        }
        //Validar Titulo
        if(!titulo)throw Error("No se introdujo titulo")
            if(typeof titulo !== "string")throw Error("titulo no es un string")
            let validarTitulo = /^([A-Z]|\d){1}([A-Z]|\d|\s| ){0,99}$/i
            if(!(validarTitulo.test(titulo))){
                throw Error("El titulo introducido no es valido")
            }else{
                this.titulo = titulo
            }
        //Validar Director
        if(!director)throw Error("No se introdujo director")
            if(typeof director !== "string")throw Error("director no es un string")
            let validarDirector = /^([A-Z]|\d){1}([A-Z]|\d|\s| ){0,49}$/i
            if(!(validarDirector.test(director))){
                throw Error("El director introducido no es valido")
            }else{
                this.director = director
            }
        //Validar año
        if(!anio)throw Error("No se introdujo un año")
        if(typeof anio !== "number")throw Error("añio no es un number")
        if(anio < 1888 || anio > 2025)throw Error("El año introducido no es valido")
        if(anio.toString().includes("."))throw Error("El año no es un numero entero, por lo tanto no es valido")
        this.anio = anio
        //Validar Arrays de Pais/es de Origen
        if(!(paisESOrigen instanceof Array))throw Error("No se Introdujieron los paises em forma de array")
        if(paisESOrigen.length === 0)throw Error("Se Introdujo un array vacio en paises")
        if(paisESOrigen.filter(el=> typeof el !== "string").length > 0)throw Error("El array introducido contiene elementos que no son strings en paises")
        this.paisESOrigen = paisESOrigen
        //Validar Genero/s
        if(!(genero instanceof Array))throw Error("No se Introdujieron los generos em forma de array")
        if(genero.length === 0)throw Error("Se Introdujo un array vacio en generos")
        if(genero.filter(el=> typeof el !== "string").length > 0)throw Error("El array introducido contiene elementos que no son strings en generos")
        let regexGeneros = /^(Action|Adult|Adventure|Animation|Biography|Comedy|Crime|Documentary|Drama|Family|Fantasy|Film Noir|Game Show|History|Horror|Musical|Music|Mystery|News|Reality-TV|Romance|Sci-Fi|Short|Sport|Talk-Show|Thriller|War|Western){1}$/i
        if(genero.filter(el => regexGeneros.test(el)).length === genero.length){
            this.genero = genero
        }else{throw Error("El array de generos no es correcto, hay generos inconsistentes")}
        //Validar Calificacion
        if(calificacion === null || calificacion === undefined)throw Error("No se introdujo calificacion para la pelicula")
        if(calificacion === 0)this.calificacion = calificacion
        if(typeof calificacion === "string")calificacion = parseFloat(calificacion)
        if(typeof calificacion !== "number")throw Error("no se introdujo una calificacion en formato adecuado, introuzca un numero entre 0 y 10 con un decimal")
        calificacion = calificacion.toFixed(1)
        if(calificacion > 10 || calificacion < 0)throw Error("La calificacion tiene que esta entre el 0 y el 10")
        this.calificacion = calificacion
        }
        //Metodo De generos Aceptados
        static generosAceptado(){
            console.log("Los Generos aceptados son: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.")
        }
        //Generos Aceptados
        fichaTecnica(){
            console.info(`EL id de la pelicula es ${this.id}, Titulo de la pelicula: ${this.titulo}, El director de la pelicula fue ${this.director}, estrenada en el año ${this.anio}, pais/es de origen ${this.paisESOrigen}, generos de la pelicula: ${this.genero}, calificacion por la critica ${this.calificacion}`)
        }
}

Pelicula.generosAceptado()

let arregloPeliculas = [{id:"12asdfghj",titulo:"Duki la gran estrella",director:"Omar Varella",anio: 2017,paisESOrigen: ["Argentina","España"],genero: ["History","Music"],calificacion: "9.85"},{id:"13asdgfgh",titulo:"Worldcoin la pelicula",director:"Nico Pino",anio: 2024,paisESOrigen: ["Argentina","Bolivia"],genero: ["History","Crime"],calificacion: "10"},{id:"14sdafghj",titulo:"Worldcoin la caida",director:"Valentin Serassio",anio: 2025,paisESOrigen: ["Argentina"],genero: ["History"],calificacion: 9}]

let arrPelis = []

arregloPeliculas.map(el => arrPelis.push(new Pelicula(el)))
arrPelis.map(el => el.fichaTecnica())

