// clase 31 - Expresiones Regulares
/*
let cadena = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit totam deserunt voluptatum eligendi est,lorem necessitatibus voluptas iste. Explicabo eligendi nobis, facere rerum debitis eaque sed lorem quos aliquam inventore neque omnis!"

let expReg = new RegExp("lorem","ig")

let expReg2 = /lorem/ig

console.log(expReg.test(cadena))
console.log(expReg.exec(cadena)) 
console.log(expReg2.test(cadena))
console.log(expReg2.exec(cadena))              
*/

// Clase 32 - Funciones Anonimas Autoajustables
/*
(function(){
    console.log("Mi primer IIFE (Inmediatly Invoque function Executable)")
})();

(function(d,w,c){
    console.log("Mi segunda IIFE (Inmediatly Invoque function Executable)")    
    console.log(d)
    console.log(w)
    c.log("este es un console.log")
})(document,window,console);
*/

//Clase 33 - Modulos ( import / export )
/*

import saludar, {PI, usuario, password} from "./constantes.js"
import {aritmetica} from "./aritmetica.js"

console.log("Importando modulos JS")

console.log(PI)
console.log(usuario)
console.log(password)
console.log(aritmetica.sumar(1,3))
console.log(aritmetica.restar(1,3))
let saludo = new saludar()
*/

//Clase 34 - Ejercicios ( 1 / 10 )
/*

//1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.



const cantidadCaracteres = cadena => {
    if(typeof cadena !== "string"){
        console.log("El valor ingresado no es un String")
        return
    }
    return cadena.length
}

let arreglo = [1,2,3,4,5,6,7,8,9]
let texto   = "Hola Mundo"
console.log(cantidadCaracteres(arreglo))
console.log(cantidadCaracteres(texto))

//2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

const sliceCadena = (cadena,cortar) => {    
    if (typeof cadena !== "string"){
        return console.log("no se introdujo un texto")
    }

    if  (typeof cortar !== "number"){
        return console.log("no se indico cuanto caracteres hay que recortar")
    }

    return cadena.slice(0,cortar)
}

console.log(sliceCadena(texto,4))

console.clear()

//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

function spliterString(cadena,caracter){
    if(typeof cadena !== "string" || typeof caracter !== "string"){
        return console.log("Ambos argumentos deben ser strings")
    }

    return cadena.split(caracter)
}

console.log(spliterString('hola que tal', ' '))


//4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

const sumartextos = (cadena,nveces) => {
    
    if(nveces == 1){
        return cadena
    }else if(nveces == 2){
        return `${cadena} ${cadena}`
    }else{
        textoMulti = `${cadena} ${cadena}`
        for(let i = 2;i != nveces; i++){
            textoMulti = `${textoMulti} ${cadena}`
        }
        return textoMulti
    }
    

}

function multiplicadorString(cadena,nVeces){
    if(typeof cadena !== "string"){
        return console.log("Ambos argumentos deben ser strings")
    }
    
    if(typeof nVeces !== "number"){
        return console.log("El segundo Argumento debe ser un Numero")
    }
    
    if(nVeces <= 0){
        return console.log("El segundo argumento debe ser un numero igual o mayor que uno")
    }
    
    
    return sumartextos(cadena,nVeces)
}


console.log(multiplicadorString("hola mundo",3))
*/

//Clase 35 - Ejercicios ( 2 / 10 )
/*
//5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

const invertirString = string => {
    if(string == ""){
        return console.log("El string debe tener texto")
    }


    if(typeof string !== "string"){
        return console.log("No se ha introducido un string")
    }

    
    if(string.length === 1){
        return string
    }

    let longStr = string.length - 1

    let stringInvert = ""

    while(longStr > -1){
        stringInvert = `${stringInvert}${string[longStr]}`
        longStr--
    }

    return stringInvert
} 

console.log(invertirString("hola mundo"))

//6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const contadorPalabraRepetida = (texto=undefined,palabra=undefined) => {
    if(typeof texto !== "string" || typeof palabra !== "string"){
        return console.log("Ambos argumentos deben ser Strings")
    }
    
    if(palabra === undefined || palabra === ""){
        return console.log("Ambos argumentos deben tener caracteres")
    }

    if(texto === undefined || texto === ""){
        return console.log("Ambos argumentos deben tener caracteres")
    }

    let longitud = palabra.length

    let contador = 0

    while(texto.includes(palabra)){
        contador++
        texto = texto.slice(texto.indexOf(palabra)+longitud)
    }

    return console.log(`La palabra "${palabra}" se encontro ${contador} veces en el texto`)
}









//7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

const isPalindrome = texto => {
    if(typeof texto !== "string"){
        return console.log("No se ha introducido un string")
    }

    if(texto == ""){
        return console.log("El string debe tener texto")
    }

    if(texto.length == 1){
        return console.log("El texto no se puede validar")
    }

    const trueofalse = (texto.toLowerCase() === invertirString(texto).toLowerCase())?true:false

    return trueofalse
}

console.log(isPalindrome("salas"))

//8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

const deletePatern = (text="",pattern="") => {
    if(Boolean(text) == false||Boolean(pattern) == false){
        return console.log("A faltado uno de los dos argumentos")
    }

    if(typeof text !== "string" || typeof pattern !== "string"){
        return console.log("ambos argumentos deben ser Strings")
    }

    let arrPrevisorio = text.split(pattern)

    let textReturn = ""

    arrPrevisorio.forEach(element => textReturn = `${textReturn}${element}`)

    return textReturn
}

console.log(deletePatern("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"))

*/

//Clase 36 - Ejercicios ( 3 / 10 )
/*
//9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

const numeroRandom = () => 500 + Math.round(Math.random()*100)

//10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.



const isCapicua = num =>  {
    if(!num){
        return console.log("no se introdujo un dato")
    }

    if(typeof num !== "number"){
        return console.log("El valor ingresado no es el tipo de dato Esperado")
    }

    let numInverso = num.toString().split("").reverse().join("")
    num = num.toString()

    return (numInverso === num)?console.log(`El numero ${num} es capicua`):console.log(`El numero ${num} no es capicua`)   
}

//11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

const calcularFactorial = numero => {
    let factorial = 1
    while(numero>1){
        factorial = factorial * numero
        numero--
    }
    return factorial
}

const factorial = num => (!num)
    ? console.log("No se introdujo un dato")
    : (typeof num !== "number")
        ?console.log("El dato introducido no es un numero")
        :(num < 1)
            ?console.log("No se puede calcular el factoria de un numero negativo o neutro")
            :  calcularFactorial(num)

console.log(factorial(6))
*/

//Clase 37 - Ejercicios ( 4 / 10 )
/*
//12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

const isPrimo = num => {
    if(typeof num !== "number"){
        return console.log("El valor ingresado no es el tipo de dato Esperado")
    }

    if(num == 1 || Math.sign(num) === -1){
        return console.log("El numero no es primo")
    }

    if(num === 0){
        return console.log("El numero es neutro")
    }


    let i = num - 1
    while(i != 1){
        if((num % i) == 0){
            return console.log(`El numero ${num} no es primo`)
        }
        i--
    }
    return console.log(`El numero ${num} es primo`)
}


//13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

const isPar = num => {
    if(num == undefined || num == null){return console.log("No se ingreso ningun dato")}
    if(typeof num != "number"){return console.log("El dato ingresado no es un numero")}
    if(num == 0){return console.log("El numero cero es neutro, no es par ni impar")}
    if(num%2 == 0){
        return console.log(`El numero ${num} es par`)
    }else{
        return console.log(`El numero ${num} es impar`)        
    }
}
isPar(0)

//14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

const conversorEscala = (temp = undefined,escala) => {
    if(!escala){return console.log("No se ingreso un dato")}
    if(typeof temp != "number" || typeof escala != "string"){return console.log("Uno de los datos ingresados no es del tipo esperado")}
    if(!/^(C|c|F|f)$/.test(escala)){return console.log("La escala introducida no es valida")}
    
    if(/^(C|c)$/.test(escala)){return `La temperatura es ${(temp * 9/5) + 32}°F`
        }else{return `La temperatura es ${(temp - 32) / (9/5)}°C`}
}

console.log(conversorEscala(0,"C"))
*/

// Clase 38 - Ejercicios ( 5 / 10 )
/*
//15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

const conversorBase = (num,base) => {
    if(num === undefined || num === null){
        return console.log("No se ingreso un numero")
    }
    if(base === undefined || base === null){
        return console.log("No se ingreso la base de conversion deseada")
    }
    if(typeof num != "number" || typeof base != "number"){
        return console.log("Algunos de los datos ingresados no corresponde a un numero")
    }
    switch (base) {
        case 2:
            return console.log(`El numero ${num} base ${base} es: ${parseInt(num,2)} en base 10`)
        case 10:
            return console.log(`El numero ${num} base ${base} es: ${num.toString(2)} en base 2`)
        default:
            return console.log("No se introdujo una base correcta")
    }
}
conversorBase(100,2)

//16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

const restaPorcentaje = (num,porcentaje) => {
    if(num === null || num === undefined){return console.log("El numero no se introdujo")}
    if(porcentaje === null || porcentaje === undefined){return console.log("El numero no se introdujo")}
}


const restarPercent = (num,percent) => (num === undefined || num === null || percent === undefined || percent === null)
    ? console.log("Algunos de los dos argumentos no fueron introducidos")
    : (typeof num != "number" || typeof percent != "number")
        ? console.log("Ambos argumentos introducidos deben ser numeros")
        : (percent < 0 || percent > 100)
            ? console.log("El porcentaje no puede ser menor que cero ni mayor que cien")
            : (num <= 0) 
                ? console.log("No se puede calcular el porcentaje")
                : console.log(`${num}$ menos el ${percent}% es  ${num - (num / 100) * percent}`)

restarPercent(10,30)                

//17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020)

//Para este ejercico lo mas importante es usar el metodo .getTime() del objeto Date que devuelve los milisegundos transcurridos desde 1970, ademas para verificar si un objeto es instancia de una clase debemos usar instanceof, ej [] instanceof Array

//Acabo de aprender que el constructor de algo es:
// New Clase(parametros)
// En este caso el objeto solo seria el nombre de la clase, los demas solo sirve para construirlo

let fecha10 = new Date()
console.log(fecha10 instanceof Date)

const aniosTranscurridos = fecha => {
    if(!fecha){return console.log("No se introdujo ningun dato")}
    if(!(fecha instanceof Date)){
        return console.log("No se introdujo un dato de la clase Date")
    }
    let fechaActual = new Date().getTime()
    let fechaEnMs = fecha.getTime()
    let msOperacion = fechaActual - fechaEnMs
    let AnioenMs = 1000 * 60 * 60 * 24 * 365
    let calculo = Math.floor(msOperacion / AnioenMs) 

    return (Math.sign(msOperacion) === -1)
                ? console.log(`Faltan ${Math.abs(calculo)} años para el año ${fecha.getFullYear()}`)
                : (Math.sign(msOperacion))
                    ? console.log(`Han pasado ${Math.abs(calculo)} años desde el año ${fecha.getFullYear()}`)
                    : console.log("No ha transcurrido ni un año")
}

aniosTranscurridos(new Date(1969,5,2))


*/

// Clase 39 - Ejercicios ( 6 / 10 )
/*

//18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

const contadorVocalesConsonantes = texto => (!texto)
    ? console.log("no se introdujo ningun texto")
    : (typeof texto != "string")
        ? console.log("el dato introducido no es un texto")
        : console.log(`el string "${texto}" tiene ${texto.match(/a|e|i|o|u/ig).length} vocales, ${texto.match(/B|C|D|F|G|H|J|K|L|M|N|Ñ|P|Q|R|S|T|V|W|X|Y|Z/ig).length} consonantes`)

contadorVocalesConsonantes("llave mundo")

//19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.

const isNameValid = name => (!name)
    ? console.log("no se introdujo ningun name")
    : (typeof name != "string")
        ? console.log("el dato introducido no es un name")
        : (/^([A-Z]|Ñ){1}([a-z]|ñ|í)+( [A-Z]{1}[a-z]+)*$/.test(name))
            ? console.log(`El nombre ${name} es un nombre validado por el algoritmo`)
            : console.log(`El nombre ${name} no es un nombre validado por el algoritmo`)
isNameValid("Valentín Mircha")


//20) Programa una función que valide que un sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

const isEmailValid = email => (!email)
    ? console.log("no se introdujo ningun email")
    : (typeof email != "string")
        ? console.log("el dato introducido no es un email")
        : (/^(?!.*--)[A-Za-z0-9]+([A-Za-z0-9]*\-*)*[A-Za-z0-9]+@{1}[A-Za-z0-9]+([A-Za-z0-9]*-*)*[A-Za-z0-9]+\.{1}[A-Za-z]{2,}$/.test(email))
            ? console.log(`El email ${email} es valido`)
            : console.log(`El email ${email} no es valido`)

isEmailValid("hfjkhiu65d-sd-ds@gd.com") 
*/

//Clase 40 - Ejercicios ( 7 / 10 )

//21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
//22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
//23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

//Clase 41 - Ejercicios ( 7 / 10 )

//24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
//25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
//26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

