//Clase 41 - Ejercicios ( 9 / 10 )
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
/*
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

//Todo este codigo se podria mejor mirando el video de Jon, ya que se podrian crear metodos en la clase , las cuales se llamaran con this para validar de forma mas facil y podriamos pasar los genero aceptados en un array con el un metodo Static get generosAceptados(){return [array de generos]} el cual podriamos llamar para validar si incluye los generos introducidos
*/

//Clase 44 - Temporizadores (setTimeout & SetInterval)
/*
console.log("inicio")

setTimeout(() => {
    console.log("Ejecutando un setTimeout, esto se ejecuta una sola vez")
}, 3000);

setInterval(() => {
    console.log("Ejecutando un SetInterval, este se ejecuta indefinidamente cada cierto intervalo de tiempo")
},1000)

function imprimirDate(){
    console.log(new Date().toLocaleTimeString())
}

let temporizadorIntervalos = setInterval(imprimirDate,1000)
let temporizadorTimeout = setTimeout(imprimirDate,1000)
clearInterval(temporizadorIntervalos)
clearTimeout(temporizadorTimeout)
*/

//Clase 45 - Asincronia y Event Loop
/*
 Antes de explicar como funciona el modelo de JavaScript es importante entender algunos conceptos:

     Procesamiento Single thread y Multi thread.
     Operaciones de CPU y Operaciones de I / O.
     Operaciones Concurrentes y Paralelas.
     Operaciones Bloqueantes y No Bloqueantes.
     Operaciones Síncronas y Asíncronas.

     Javascript usa un modelo asíncrono y no bloqueante, con un loop de eventos implementado en un sólo hilo, (single thread) para operaciones de entrada y salida (input/output).
     


     //Código Síncrono Bloquenate
    (() => {
      console.log("Código Síncrono");
      console.log("Inicio");

      function dos() {
        console.log("Dos");
      }

      function uno() {
        console.log("Uno");
        dos();
        console.log("Tres");
      }

      uno();
      console.log("Fin");
    })();

    console.log("********************");

    //Código Asíncrono No Bloquenate
    (() => {
      console.log("Código Asíncrono");
      console.log("Inicio");

      function dos() {
        setTimeout(function () {
          console.log("Dos");
        }, 1000);
      }

      function uno() {
        setTimeout(function () {
          console.log("Uno");
        }, 0);
        dos();
        console.log("Tres");
      }

      uno();
      console.log("Fin");
    })(); */

//Clase 46 - Callbacks
/*
//ES una función que se proporciona como argumento a otra función y que se invoca al final o en un punto específico del ciclo de vida de la función receptora. permiten que el código sea asíncrono, lo cual es especialmente útil para operaciones que toman tiempo, como solicitudes de red o lectura de archivos.

function cuadradoCallback(value,callback){
    setTimeout(()=>{
        callback(value,value*value)
    },0 | Math.random() * 1000)
}

cuadradoCallback(0,(value,result)=>{
    console.log("Inicia Callback")
    console.log(`Callback: ${value}, ${result}`)
    cuadradoCallback(1,(value,result)=>{
        console.log("Inicia Callback")
        console.log(`Callback: ${value}, ${result}`)
        cuadradoCallback(2,(value,result)=>{
            console.log("Inicia Callback")
            console.log(`Callback: ${value}, ${result}`)
            cuadradoCallback(3,(value,result)=>{
                console.log("Inicia Callback")
                console.log(`Callback: ${value}, ${result}`)
                cuadradoCallback(4,(value,result)=>{
                    console.log("Inicia Callback")
                    console.log(`Callback: ${value}, ${result}`)
                    cuadradoCallback(5,(value,result)=>{
                        console.log("Inicia Callback")
                        console.log(`Callback: ${value}, ${result}`)
                        cuadradoCallback(6,(value,result)=>{
                            console.log("Inicia Callback")
                            console.log(`Callback: ${value}, ${result}`)
                            console.log(`Fin de las Callbacks`)
                            console.log("Callback Hell !!! 👿🤘")
                            console.log("https://callbackhell.com/")      
                        })
                    })
                })
            })
        })
    })
})

*/

//Clase 47 - Promesas
/*
function cuadradoPromise(value){
    if (typeof value !== "number"){
        return Promise.reject(`Error el valor "${value}" no es un numero`)
    }
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({
                value,
                result: value * value
            })
        },2000)
    })
}

console.log("inicia promise: ")

cuadradoPromise(0)
    .then(obj=>{
        console.log(obj)
        return cuadradoPromise(1)
    })
    .then(obj=>{
        console.log(obj)
        return cuadradoPromise(2)
    })
    .then(obj=>{
        console.log(obj)
        return cuadradoPromise(3)
    })
    .then(obj=>{
        console.log(obj)
        return cuadradoPromise(4)
    })
    .then(obj=>{
        console.log(obj)
        return cuadradoPromise(5)
    })
    .then(obj=>{
        console.log(obj)
        console.log("Fin promise")
    })
    .catch(err => console.error(err));

//Esta seria una forma de declarar una promesa pura.
    const miPromesa = new Promise((resolve, reject) => {
        // Simulación de operación asíncrona
        setTimeout(() => {
          const exito = true; // o false para simular un fallo
          if (exito) {
            resolve("Operación exitosa");
          } else {
            reject("Ocurrió un error");
          }
        }, 2000); // 2 segundos de demora
      });
      
      // Manejo de la promesa
      miPromesa
        .then((resultado) => {
          console.log(resultado) // "Operación exitosa"
          return miPromesa
        })
        .then((resultado) => {
            console.log(resultado)
        })
        .then((resultado) => {
            console.log(resultado)
        })
        .catch((error) => {
          console.log(error); // "Ocurrió un error"
        });

const promesa = (value) => new Promise((resolve,reject)=>{
    if(typeof value !== "number")throw Error("Se introdujo un string")
    setTimeout(()=>{
        resolve({value,result: value*value})
    },2000)
})

promesa("0")
    .then(resolve => {
        console.log(resolve) 
        return promesa(1)
    })
    .then(resolve => {
        console.log(resolve)
        return promesa(2)
    })
    .then(resolve => {
        console.log(resolve)
        return promesa(3)
    })
    .then(resolve => {
        console.log(resolve)
        return promesa(4)
    })
    .then(resolve => {
        console.log(resolve)
        return promesa(5)
    })
    .then(resolve => {
        console.log(resolve)
        console.log("Final promesa")
    })
    .catch(err => console.error(err))
*/

//Clase 48 - Async / Await
/*
//funcion promesa
function cuadradoPromise(value){
    if (typeof value !== "number"){
        return Promise.reject(`Error el valor "${value}" no es un numero`)
    }
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({
                value,
                result: value * value
            })
        },2000)
    })
}

//Para indicarle a la funcion que va a ser asincrona usamos la palabras async al principio
//Funcion Async - Declarada
async function funcionAsincronaDeclarada(){
    try {
        console.log("Inicializando Funcion Asincrona")

        let obj = await cuadradoPromise(0)
        console.log(`Async  Function: ${obj.value}, ${obj.result}`)

        obj = await cuadradoPromise(1)
        console.log(`Async  Function: ${obj.value}, ${obj.result}`)

        obj = await cuadradoPromise(2)
        console.log(`Async  Function: ${obj.value}, ${obj.result}`)

        obj = await cuadradoPromise("3")
        console.log(`Async  Function: ${obj.value}, ${obj.result}`)

        obj = await cuadradoPromise(4)
        console.log(`Async  Function: ${obj.value}, ${obj.result}`)

        obj = await cuadradoPromise(5)
        console.log(`Async  Function: ${obj.value}, ${obj.result}`)

        console.log("Fin de Async Function")

    } catch (error) {
        console.error(error)
    }
}

funcionAsincronaDeclarada()

//Function Async - Expresada

const funcionAsincronaExpresado = async () => {
    try {
        console.log("Inicializando Funcion Asincrona")

        let obj = await cuadradoPromise(0)
        console.log(`Async  Function: ${obj.value}, ${obj.result}`)

        obj = await cuadradoPromise(1)
        console.log(`Async  Function: ${obj.value}, ${obj.result}`)

        obj = await cuadradoPromise(2)
        console.log(`Async  Function: ${obj.value}, ${obj.result}`)

        obj = await cuadradoPromise(3)
        console.log(`Async  Function: ${obj.value}, ${obj.result}`)

        obj = await cuadradoPromise(4)
        console.log(`Async  Function: ${obj.value}, ${obj.result}`)

        obj = await cuadradoPromise("5")
        console.log(`Async  Function: ${obj.value}, ${obj.result}`)

        console.log("Fin de Async Function")

    } catch (error) {
        console.error(error)
    }
}

funcionAsincronaExpresado()
*/

//Clase 49 - Symbols
/*
const NOMBRE = Symbol("nombre1")
const FUNCION = Symbol("funcion1")

const obj = {
    [NOMBRE]: "Valentin Ian Serassio",
    NOMBRE: "valentin"
}

console.log(obj)

console.log(obj.NOMBRE)
console.log(obj[NOMBRE])

obj.funcion = () => {console.log(`hola soy una funcion dentro de una objeto en javascript ${this}`)}
obj[FUNCION] = function(){console.log("Soy una funcion con un simbolo como llave")}
obj.funcion()
obj[FUNCION]()

console.log(obj)

for(const i in obj){
    console.log(i)
    console.log(obj[i])
}

console.log(Object.getOwnPropertySymbols(obj))
*/

//Clase 50 - Sets
/*
const set = new Set([1,2,2,3,3,false,true,true,"hola","HOla"])
//Debemos recordar que al ser case sensitive el hola esta en dos diferentes case
console.log(set)
//Para saber cuantos elementos tiene usamos .size
console.log(set.size)
//Para agregar valores al set usamos .add()
set.add("patas")
set.add("sofitness love")
set.add("Quiero andar en bici con mi novia, porque la amo mucho")

console.log(set.size)

for(let item of set){
    console.log(item)
}

set.forEach(item => console.log(item))
//para poder acceder a sus elementos de forma individual debemos castear el set a Array con 

let setToArray = Array.from(set)

console.log(setToArray[4])
//para eliminar algo del set debemos usar el metodo .delete(valor) con el valor a eleminar dentro
set.delete("HOla")
console.log(set)
//con el metodo .has(valor) sabemos si el set tiene o no el valor
console.log(set.has("HOla"))
console.log(set.has("hola"))
//con el metodo .clear() podemos borrar todos los valores del set

set.clear() //lo deja vacio

console.log(set)
*/


