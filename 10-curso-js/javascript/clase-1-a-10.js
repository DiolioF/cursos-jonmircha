//Clase 3 - Variables: var vs let
/*
var hola = "hola mundo"
let hello = "hello world"
console.log(window)
console.log(window.hello)
console.log(window.hola)

//La diferencia entre ambas es que VAR es del ambito global porque hacehoisting o elevacion 
//Mientras que let es de ambito de bloque, por eso es buena practica usar LET

console.log("\n ***********VAR**************")

var musica = "Rock"
console.log("Variable musica antes del bloque ",musica)

{
    var musica = "pop"
    console.log("variable musica dentro del bloque ",musica)
}

console.log("variable musica dentro despues del bloque ",musica)

console.log("\n ***********LET**************")

let musica2 = "Rock"
console.log("Variable musica antes del bloque ",musica2)

{
    let musica2 = "pop"
    console.log("variable musica dentro del bloque ",musica2)
}

console.log("variable musica dentro despues del bloque ",musica2)


console.clear()
*/

//Clase 4 - Constantes
/*
const PI = 3.1416
//const NUEVE; NO podesmos declararlas sin valor
//No podemos dereclarar una variable


//Con los valores compuestos no pasa lo mismo, a ellos les podemos agregar valores porque de fondo no cambia su naturaleza asi que no es inmutable

const objeto = {
    nombre: "valentin",
    edad:35
}

const colores = ["blanco","negro","azul"]

console.log(objeto)
console.log(colores)

objeto.correo = "jonmircha@gmail.com"
colores.push("anaranjado")

console.log(objeto)
console.log(colores)

console.clear()
*/

//Clase 5 - Cadenas de texto (String)
/*
let nombre = "valentin"
let apellido = "serassio"
let saludo = new String("Hola mundo")
let lorem = "   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet ligula efficitur, egestas erat vitae, aliquet mi. Curabitur quis mi tellus. Donec nec sodales ante, sed aliquet metus. Nunc blandit enim ac mi sollicitudin, dictum suscipit augue rhoncus. Ut a faucibus ligula. Maecenas non erat non sem consectetur semper pharetra non est. Nam quis magna non magna aliquam aliquet at nec ligula. Donec maximus diam magna, venenatis semper augue faucibus a. Duis quis mauris nec erat molestie rhoncus at et tortor. Proin egestas ligula aliquet bibendum pulvinar. Morbi consequat lacus a risus aliquet imperdiet. Ut sed tristique nisl, eu mollis ex    ."

console.log(nombre,apellido,saludo)

console.log(
    nombre.length,
    lorem.length,
    nombre.toUpperCase(),
    apellido.toLowerCase(),
    lorem.includes("amet"),
    lorem,
    lorem.trim(),
    lorem.split(",")
)

console.clear()
*/

//Clase 6 - Template Strings
/*
let nombre1 = "valentin"
let apellido1 = "serassio"

//Concatenacion
let saludo2 = "Hola mi nombre es " + nombre1 + " " + apellido1 + "."
console.log(saludo2)

//Interpolacion de variables
//Template String
let saludo3 = `Hola mi nombre es ${nombre1} ${apellido1}.`
console.log(saludo3)

let ul =  `
    <ul>
        <li>Verano</li>
        <li>Otoño</li>
        <li>Invierno</li>
        <li>Primavera</li>
    </ul>
`
console.log(ul)
console.clear()
*/

//Clase 7 - Numbers
/*
let a = 2
let b = new Number(1)
let c = 7.19
let d = "5.6"

console.log(typeof c, typeof d)

console.log(a,b)
console.log(c.toFixed(1))
console.log(c.toFixed(5))
console.log(parseInt(c))
console.log(parseFloat(c))
console.log(c+parseFloat(d))

//la funcion [typeof c] nos permite saber el tipo de dato de una variable

console.log(typeof d)
console.log(typeof parseFloat(d))

console.clear()
*/

//Clase 8 - booleanos
/*
let verdadero = true;
let falso = false;
let v = Boolean(true)
let f = Boolean(false)

console.log(verdadero, falso, v, f)
console.log(typeof verdadero, typeof v)

console.log(Boolean(0))
console.log(Boolean(-7))
console.log(Boolean(""))
console.log(Boolean(".asd"))

console.clear()
*/

//Clase 9 - undefined, null & Nan
/*
//undefined
let indefinida
console.log(indefinida)
//null
let nulo = null
console.log(nulo)
//nan -not a number
let noEsUnNumero = "hola" * 3
console.log(noEsUnNumero)

console.clear()
*/

//Clase 10 - Funciones
/*
//funcion Declarada

function estoEsUnaFuncionQueRetorna(){
    console.log("Uno")
    return 19
    console.log("Dos")
    console.log("Tres")
}

// La invocacion de una Variable es su nombre + ()
// estoEsUnaFuncion()


let valorDeFuncion = estoEsUnaFuncionQueRetorna()

console.log(valorDeFuncion)

console.clear()

//Hoisting de la funcion declara
funcionDeclarada()

function saludar(nombre = "Ricky",apellido = "Stanicky"){
    console.log(`hola mi nombre es ${nombre} ${apellido}.`)
}

saludar("valentin","serassio")

saludar()


function funcionDeclarada(){
    console.log("Esto es una funcion declarada, puede invocarse en cualquier parte de nuestro codigo, incluso antes de que la funcion sea declarada")
}

funcionDeclarada()

//Expresada

// funcionExpresada() da error porque no tienen hoisting las funciones expresadas

const funcionExpresada = function(nombre){
    console.log("Esto es una funcion expresada, es decir una funcion que se le a asignado como valor a una variable, si invocamos a esta funcion antes de su definicion JS nos dira ...")
    console.log(`Hola ${nombre}`)
}

funcionExpresada("valentin")

*/

