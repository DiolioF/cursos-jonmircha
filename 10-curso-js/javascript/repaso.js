/*//Escritura de codigo JAVASCRIPT

// snake_case - nombres de archivos
//UPPER_CASE - nombre de Constantes
//UpperCamelCase - Nombre de clases
//lowerCamelCase - nombre de variables

//LET VS VAR:
//VAR Hace hoisting entre scope y no le importa donde la declaremos
//LET no hace hoisting y se queda en el scope donde la hayamos declarado

//Const: Sirve para declarar constantes en JS, es decir guarda elementos que no  van a variar en el flujo del programa
//en caso de guarda datos compuestos, podremos modificar su contenido, pero no podremos modificar la naturzaleza del tipo de dato

let string = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
/*
console.log(string.length)
console.log(string.toUpperCase())
console.log(string.toLowerCase())
console.log(string.includes("it"))
const spliteado = string.split("is")
console.log(spliteado)
*/
/*let nombre = "valentin"
let edad = 20
let templateString = `Hola soy ${nombre} y tengo ${edad} años`
console.log(templateString)

let numeroString = "19"

let numeroNumber = parseFloat(numeroString)
console.log(numeroNumber)

console.log(typeof numeroString)
console.log(typeof numeroNumber)

//Booleanos: son dos valores unicamente 0 y 1 o truthy o falsy.

let booleanVerdadero = true
let booleanFlaso = false

let booleanoTruthy = Boolean(1)
let booleanFalsy = Boolean(0)


let arrayValsBooleans = [booleanVerdadero,booleanFlaso,booleanoTruthy,booleanFalsy]

arrayValsBooleans.forEach(function(el,index){console.log(`soy ${el} en index ${index}`)})

//Undefined,null y NaN :
//Undefined es cuadndo una variable no esta definida ni inicializada, null es cuando esta incializada, pero sin valor. NAN es not a number y sucede cuando hacemos multiplciaicones entre numeros y otras cosas que no se puede

//Funciones:
//Declara
function funcionDeclarada (parametro1 = "inpronunciable",parametro2 = 0){
    console.log(`Me llamo ${parametro1} y tengo ${parametro2} años`)
}

funcionDeclarada("valen","20")

//Expresada:

const funcionExpresada = function(parametro1 = "inpronunciable",parametro2 = 0){
    console.log(`Me llamo ${parametro1} y tengo ${parametro2} años`)
}

funcionExpresada("mariano closs",40)

//Arrays: se definen con [] dentro pueden tener cualquier tipo de dato

console.log(arrayValsBooleans[2])
console.log(arrayValsBooleans.length)
arrayValsBooleans.pop()
console.log(arrayValsBooleans.length)
arrayValsBooleans.push("jorge enrique")
console.log(arrayValsBooleans[3])

//obejtos: 

const objetoCachetes = {
    nombre: "sofia",
    edad:20,
    nombreEdad: function(){
        console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad} años`)
    }
}

//Para las propiedades las podemos llamar con ["nombrePropiedad"] o con .nombrepropiedad ambas son validas
console.log(objetoCachetes["edad"])
console.log(objetoCachetes.nombre)
objetoCachetes.nombreEdad()

console.log(Object.keys(objetoCachetes))
console.log(Object.values(objetoCachetes))

objetoCachetes.hasOwnProperty("edad")


let i = 1
i++
i++
console.log(i)

//Operadores logicos: ! NOT, || OR y && and

//Condicionales:

//if else:
i = 5
if(i < 4){
    console.log(`${i} es menor que 4`)
}else if(i > 4){
    console.log(`${i} es mayor que 4`)
}else {
    console.log(`${i} es igual a 4`)
}

//Operador Ternario:

const operadorTernario = (i == 4)?`${i} es igual a 4`:`${i} es diferente de 4`
console.log(operadorTernario)
i = 4
switch (i) {
    case 5:
        console.log("Soy un capo")
        break;

    default:
        console.log("tengo que recordar todo")
        break;
}

//Ciclos: 
//while
i = 0

while(i != 20){
    i++
    console.log(`El valor de i es ${i}`)
}

//Do while


do{
    i--
    console.log("patas rey")
}while(i >10)

//for

for(let val = 0; val < 10; val++){
    console.log(val)
}

//for in: para propiedades de objetos

for(const prop in objetoCachetes){
    console.log(objetoCachetes[prop])
}

//for of: para iterar sobre cualquier otro elemento

let numbers = [10,20,30,40,50,60,70,80,90]

for(const el of numbers){
    console.log(el)
}

//Manejo de Errores: Nos permite analizar fragmentos de codigo, en caso de haber un error lo vamos a poder capturar y analizarlo

try {
    //Aca se agrega el codigo a Evaluar
    throw new Error("patas")
    //Aca lanzamos un error a proposito
} catch (error) {
    //La variable error captura el error y despues podemos mostrarlo
    console.log(error)
}

//break & Continue: Nos ayudan a controlar el  flujo de nuestras estructuras de control en loops. el Break lo que hace es romper el bucle y el continue lo que hace es pasar al siguiente ciclo del bucle

//Destructuracion: sirve para asignar valores a variables de forma mas rapida. es caso de destructurar un array los nombre de las vars deben ir entre [] y si destructuramos un objeto los nombres de las vars deben ir entre {} en los objetos los nombres de las vars tienen que ser los mismo que los de la propiedad. si les queremos poner otro tenemos que poner nombreOriginal:nuevoNombre.
//Ejemplos:

const arrayNumeros = ["uno","dos","tres"]

let [n1,n2,n3] = arrayNumeros

console.log(n1,n2,n3)

const sofiNoviat = {
    sellama: "sofia",
    esElAmorDeMiVida: "sofia",
    funcionSofia: function(){console.log("hola")}
}

const {sellama,esElAmorDeMiVida,funcionSofia:sofiHola} = sofiNoviat

sofiHola()

//Objetos literales: Le ponemos asignamos al objeto variables de forma rapida. Ademas de tener una forma dif de asignar una funcion

let cachetes = "Sofi linda",
    años = 20

const cachetesLiteral = {
    cachetes,
    años,
    saludosCachetiles(){console.log(`Hola, soy ${this.cachetes} y tengo ${this.años}`)}
}

console.log(Object.values(cachetesLiteral))

cachetesLiteral.saludosCachetiles()

//Parametros Rest & Spread Operator
//Parametro Rest
function sumar(a,b,...c){
    let suma = a + b
    c.forEach(function(el){suma = suma + el})
    return suma
}

let suma = sumar(1,2,3,4,5,6,7,8,9,10)
console.log(suma)

//Spread operator: Descompone iterables y hace que las uniones sean objeto por objeto

let array1 = [1,2,3,4,5]

let array2 = [6,7,8,9,10]

const array3 = [array1,array2] //es una array de dos arrays

const array4 = [...array1,...array2]
console.log(array3)
console.log(array4)

//arrow functions:

const funcionFlecha = (param1) => {
    console.log(`Hola ${param1}`)
}

funcionFlecha("sofia")

//si la arrow funcion tiene un solo parametro o una sola linea de codigo podemos evitar el uso de () o {}

const arrowFunctionSolaLineaParam = cachetes => console.log(`hola, soy valentin y amo mucho a mi cachetes ${cachetes}`)

arrowFunctionSolaLineaParam("sofia")

//Arrow Functions son muy utiles para utilizar en forEachs por ejemplo

numbers
let resultado = 0
numbers.forEach(el => resultado = resultado + el)
resultado

//Prototipos: Son las clases primitivas de javascript. No se utilizan porque no son eficientes los metodos para la memoria. En vez de agregarle los metodos a la funcion constructora se le agrega los metodos al prototipo

//Ejemplo funcion constructora solo con atributos:

function animal (nombre,genero){
    //atributos

    this.genero = genero

    this.nombre = nombre

}

//metodos agregados al prototipo de la funcion constructora

animal.prototype.sonar = function(){
    console.log("Hago sonidos porque estoy vivo")
}

//Instancia a partir de la funcion constructora

const snoopy = new animal("snoopy","macho")

snoopy.sonar()

//Herencia Prototipica: Como hacer que una clase prototipicia hija, herede de una clase prototipica padre

function Perro(nombre,genero,tamanio){
    this.super = animal
    this.super(nombre,genero)
    this.tamanio = tamanio
}

//Perro hererda de animal metodos, etc

Perro.prototype = new animal()
//Definimos el constructor de perro como new Perro(params)

Perro.prototype.constructor = Perro

//Sobre escritura de metodos del prototipo padre en el hijo:

Perro.prototype.sonar = function(){
    console.log("Soy un perro y hago ladridos")
}

Perro.prototype.ladrar = function(){
    console.log("guau guau")
}

//Instancia de la nueva Clase:

const zeo = new Perro("zeo","macho","grande")
*/
//Clases y herencia: Son las forma mas modernas de hacer poo en js

//La clase no recibe los parametros, sino su constructor
/*
class Animal {
    //el constructor es un metodo especial que se ejecuta al momento de instaciar la clase, en el colocamos los parametros
    constructor(nombre,genero){
        this.nombre = nombre
        this.genero = genero
    }
    //Definicion de metodos
    sonar(){
        console.log("hago sonidos porque estoy vivo")
    }
    saludar(){
        console.log(`Hola, me llamo ${this.nombre}`)
    }
}

//Herencia de clases:

//Con extends afirmamos de donde va
class Perro extends Animal{
    constructor(nombre,genero,tamanio){
        super(nombre,genero)
        this.tamanio = tamanio
    }
    //Sobreescritura Metodo sonar:
    sonar(){
        console.log("soy un perro y mi sonido es un ladrido")
    }
    //Creacion de un nuevo metodo 
    ladrar(){
        console.log("guauuu guauuu!!!!")
    }

    //Metodo estatico: Son metodos que podemos utilizar sin instanciar la clase. metodo asociado a la class construct
    static moverColita(nombreDueño){console.log(`que alegria, soy un perro y le muevo la colita a mi dueño ${nombreDueño}`)}

}

//instanciar a partir de las clases

const mimi = new Animal("mimi","hembra"),
      snoopy = new Perro("snoopy","Macho","mediano")

mimi.sonar()
snoopy.sonar()
snoopy.ladrar()


Perro.moverColita("sofia")


const scooby = new Perro("Scooby","Macho","grande")


//Metodos getters y setters

//un getter se utiliza para obtener el valor de una propiedad. Se define usando la palabra clave get seguida del nombre de una funcion. Dentro de esta funcion, debemos retornar el valor que queremos que tenga dicha propiedad. Se puede devolver un valor que se calcula a partir de otras propiedades, ademas podemos ejecutar codigo antes de devolver el valor.

//Ejemplo de clase que pide nombre y apellido y metodo getter que arroja nombreCompleto:

class Nombre{
    constructor(nombre,apellido){
        this.nombre = nombre
        this.apellido = apellido
    }
    get nombreCompleto(){
        return `${this.nombre} ${this.apellido}`
    }
}

let valentin = new Nombre("valentin","serassio")

console.log(valentin.nombreCompleto)

//Metodo setter se utiliza para establecer o actualizar el valor de una propiedad. Se define con la palabra clave set.
//Es ideal para añadir validaciones o logica antes de modificiar una propiedad.

//Ejemplo de setter:

//Clase usuario, queremos añadir una propiedad Edad, pero queremos asegurarnos de que la edad siempre sea un numero positivo

class Usuario{
    constructor(nombre,apellido){
        this.nombre = nombre
        this.apeliido = apellido
        this.edad = 0
    }

    set edadSofia(nuevaEdad){
        if(typeof nuevaEdad === typeof 10 && nuevaEdad > 0){
            this._edad = nuevaEdad
        }else{
            console.log("La edad introducida no es valida")
        }
    }

    get edad2(){
        if(this._edad > 0){
            return this._edad
        }else{
            return "edad no valida"
        }
    }

}

let sofia = new Usuario("sofia","rivera")
sofia.edadSofia = -10
console.log(sofia.edad2)

//Objetos console, date y math. Son muy amplios asi que n o voy a entrar en detalles, pero estan para usarlos

//Operadores de cortocircuito. sirven para elegir entre dos valores

let mundo = "mundo"

let cortoOR = "" || mundo

cortoOR

let cortoAND = "" && mundo

cortoAND

//Alert,confirm y prompt
//Son metodos que cuelgan del objeto global window
/*
alert("bolas tristes")

confirm("manteca")

prompt("ingresa tu nombre aca")

*/

//Expreseiones regulares: Son una secuencia de caracteres que forman un patron de busqueda. Se utiliza generalmente para cadena de caracteres

//La exp reg se declaran asi:
/*
let expReg = /"patron de busqueda"/ig //bandera

let string = "string con o sin patron de busqueda. javascrpt es lo mejor"

//para comprobar si sse cumple la expreg en un texto tenemos dos metodos

console.log(expReg.test(string))
//Arroja true o false dependiendo si se cumple o no

console.log(expReg.exec(string))
//arroja un array con la posicion del index de la coincidencia

//Funciones anonimas autoejecutables

//Son funciones que no se guardan y no tienen nombre. Se declaran asi:

//Exportacion E Importacion de Modulos. Recordar que podemos usar esto con modulos propios o ajenos

//Metodos varios:
/*
let holaMundo = "Hola, mundo"

let substring = holaMundo.substring(6,11)
substring

console.log(holaMundo.slice(6,11))

//Programar una funcion que dado un string devuelva un array separado por cierto caracter

string = "String random a separar por algun caracter"

const funcionSeparadora = (textoASeparar, caracter) => 
    (!textoASeparar)
    ?console.warn("No se introdujo texto")
    :(typeof textoASeparar != "string")
    ?console.warn("El dato introducido no es un texto")
    :(!caracter)
    ?console.warn("No se introdujo caracter")
    :(typeof caracter != "string")
    ?console.warn("El dato introducido no es un caracter")
    :textoASeparar.split(caracter)

//Dar veulta un string. Concatenamos una serie de metodos

let stringReverso = string.split("").reverse().join("")

//Metodo .indexOf(valoraBuscar, DesdedondeBuscar)//Sirve para buscar un valor en un texto, le podemos indicar desde que posicion buscar, si no encuentra nada da -1

console.log(string.indexOf("separar"))

//para reemplazar una cadena de caracteres por otra: 

console.log(string.replace(" ", " patas "))
//solo reemplaza la primera coincidencia

//para castear un numero a string podemos usar .toString()
let num = 2025
console.log(num.toString())

//Separar un string por una expresion Regular:

//string.match(regex)
let number = 1
if(typeof number == "number"){console.log("patas")}

console.log(!number)

//Con el metodo number.toString(base) podemos cambiar la base de un numero base de 10 hacia otra base

//Para saber si un objeto es una instancia de alguna clase podemos usar instanceof

console.log([1,2,3,4] instanceof Array)
console.log([1,2,3,4] instanceof String)

//Recordar el concepto stack y heap de la memoria y porque no podemos comparar arrays con ellos mismos.

//Funciones Filter, map y reduce: Son muy utiles cuando tenemos que hacer una operacion sobre todos los elementos de un array. Map, Filter y Reduce nunca alteran el array original porque son funciones puras que no deben producir efectors secundarios

// =============================================
//  Ejercicios de JavaScript: map, filter, reduce
// =============================================

// ---------------------------------------------
// 🔥 Nivel Básico
// ---------------------------------------------

// 1. Duplicar números con `map`
// Tarea: Crea un nuevo array donde cada número sea el doble del original.
const numeros_1 = [1, 2, 3, 4, 5];

let resol_1 = numeros_1.map(el=>el*2)
resol_1

// Resultado esperado: [2, 4, 6, 8, 10]
// Tu código aquí:


// 2. Nombres a mayúsculas con `map`
// Tarea: Convierte un array de nombres a mayúsculas.
const nombres_1 = ["ana", "juan", "pedro"];
// Resultado esperado: ["ANA", "JUAN", "PEDRO"]
// Tu código aquí:


// 3. Filtrar números pares con `filter`
// Tarea: De un array de números, obtén solo aquellos que son pares.
const numeros_2 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(numeros_2.filter(el=> el%2==0))
// Resultado esperado: [2, 4, 6, 8]
// Tu código aquí:


// 4. Filtrar palabras largas con `filter`
// Tarea: Filtra las palabras que tengan más de 5 caracteres.
const palabras_1 = ["manzana", "sol", "computadora", "gato", "libro"];
console.log(palabras_1.filter(el=>el.length > 5))

// Resultado esperado: ["manzana", "computadora"]
// Tu código aquí:


// 5. Sumar todos los números con `reduce`
// Tarea: Calcula la suma total de todos los números en el array.
const numeros_3 = [10, 20, 30, 40];
const funcAcum = (acumulador,el) => acumulador + el
console.log(numeros_3.reduce(funcAcum,0))
// Resultado esperado: 100
// Tu código aquí:


// 6. Concatenar palabras con `reduce`
// Tarea: Une todas las palabras del array en una sola frase.
const palabras_2 = ["Hola", "a", "todos", "los", "programadores"];
const funAcumStr = (acum,el)=>acum.concat(` ${el}`)
console.log(palabras_2.reduce(funAcumStr))
// Resultado esperado: "Hola a todos los programadores"
// Tu código aquí:


// ---------------------------------------------
// 🚀 Nivel Intermedio
// ---------------------------------------------

// 1. Suma de los cuadrados de números pares
// Tarea: Filtra los números pares, eleva cada uno al cuadrado y súmalos.
const numeros_4 = [1, 2, 3, 4, 5, 6];
console.log(numeros_4.filter(el=>el%2 == 0).map(el=>el*el).reduce((acum,el)=>acum+el))
// Resultado esperado: 56
// Tu código aquí:


// 2. Obtener nombres de usuarios activos
// Tarea: Filtra los usuarios activos y crea un array con sus nombres.
const usuarios_1 = [
  { id: 1, nombre: 'Ana', isActive: true },
  { id: 2, nombre: 'Luis', isActive: false },
  { id: 3, nombre: 'Carlos', isActive: true },
  { id: 4, nombre: 'Marta', isActive: false }
];

console.log(usuarios_1.filter(el=>el.isActive == true).map(el=>el.nombre))

// Resultado esperado: ["Ana", "Carlos"]
// Tu código aquí:


// 3. Calcular el precio total de productos en oferta
// Tarea: Filtra los productos en oferta, obtén sus precios y súmalos.
const productos = [
  { nombre: 'Laptop', precio: 1200, enOferta: false },
  { nombre: 'Mouse', precio: 25, enOferta: true },
  { nombre: 'Teclado', precio: 80, enOferta: true },
  { nombre: 'Monitor', precio: 300, enOferta: false }
];

console.log(productos.filter(el=>el.enOferta == true).reduce((acum,el)=>acum + el.precio,0))



// Resultado esperado: 105
// Tu código aquí:


// ---------------------------------------------
// 🌌 Nivel Avanzado
// ---------------------------------------------

// 1. Contar la frecuencia de las vocales en una frase
// Tarea: Cuenta cuántas veces aparece cada vocal en la frase.

const frase = "este es un ejemplo de una frase";
// Resultado esperado: { e: 6, u: 2, a: 3, o: 1, i: 1 }
// Tu código aquí:


// 2. Clasificar estudiantes por calificación
// Tarea: Clasifica a los estudiantes en 'aprobados' (>= 7) y 'desaprobados'.
const estudiantes = [
  { nombre: 'Juan', calificacion: 8 },
  { nombre: 'Ana', calificacion: 5 },
  { nombre: 'Pedro', calificacion: 9 },
  { nombre: 'Maria', calificacion: 6 }
];
// Resultado esperado: { aprobados: [{...}, {...}], desaprobados: [{...}, {...}] }
// Tu código aquí:


// 3. Aplanar un array y sumar impares
// Tarea: Aplanar el array de arrays, filtrar los impares y sumarlos.
const arrays = [[1, 2, 3], [4, 5], [6, 7, 8, 9]];
// Resultado esperado: 25
// Tu código aquí:


// ---------------------------------------------
// ⭐ Ejercicio Avanzado Específico de `map`
// ---------------------------------------------

// Tarea: Usa `map` para crear un nuevo array donde:
// 1. El atributo `location` esté en mayúsculas.
// 2. Se añada un atributo `status`: 'veteran' (registro < 2020) o 'recent' (>= 2020).
const users = [
  {
    id: '001',
    name: 'Alice',
    registrationDate: '2019-05-15T10:00:00Z',
    location: 'new york'
  },
  {
    id: '002',
    name: 'Bob',
    registrationDate: '2021-01-20T12:30:00Z',
    location: 'london'
  },
  {
    id: '003',
    name: 'Charlie',
    registrationDate: '2018-11-01T23:45:00Z',
    location: 'paris'
  },
  {
    id: '004',
    name: 'Diana',
    registrationDate: '2023-03-10T18:00:00Z',
    location: 'tokyo'
  }
];

const usersModified = users.map((el)=>(parseInt(el.registrationDate.slice(0,4))< 2020)?{...el,location: el.location.toUpperCase(), status: "veteran"}:{...el,location: el.location.toUpperCase(), status: "recent"})
console.log(usersModified)
/*
Resultado esperado:
[
  { id: '001', name: 'Alice', ..., location: 'NEW YORK', status: 'veteran' },
  { id: '002', name: 'Bob', ..., location: 'LONDON', status: 'recent' },
  { id: '003', name: 'Charlie', ..., location: 'PARIS', status: 'veteran' },
  { id: '004', name: 'Diana', ..., location: 'TOKYO', status: 'recent' }
]
*/

//Temporizadores. Sirven para ejecutar un funcion despues de cierto tiempo o en intervalos

//setTimeout(funcionExec,contarMs) //Este temporizador ejecuta nuestro codigo transcurrido ciertosMS

//setInterval(funcionExec, contarMS) //Repite la funcion cada cierto intervalo de tiempo

//Estos temporizadores los podemos cancelar con las siguinetes funciones, solo si los guardamos en variables:

//ClearInterval(nombreTemporizadorInteval)

//clearTimeout(nombreTemporizadorTimeout)

//Callbacks: Son funciones que reciben como argumento otras funciones y que se ejecutan despues de que la funcion que la recibe ha terminado de ejecutarse. Las callback hacen que el codigo sea asincrono, es especialemnte util para operaciones que toman tiempo, como solicitudes de red o lectura de archivos

//ejemplo:
/*
function fetchData(callback){
    setTimeout(()=>{
        console.log("Datos Obteidos")
        callback()
    },2000)
}

function processData(){
    console.log("Procesando Datos")
}

fetchData(processData)

//Clase 47 - Promesas

//Muy util para anidamiento de codigo, sino usar callback

//Tienen 3 estados.
// *Pendiente: la operacion no termino
// *Fulfilled: La op se completo con exito y la promesa tiene un valor
// *Rejected:  La op ha fallado, y la promesa tiene un motivo de rechazo

//Ejemplo de Promesa:

const miPromesa = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const exito = true
        if(exito){
            resolve("Operacion Exitosa")
        }else {
            reject("ocurrio un error")
        }

    },2000)
})

miPromesa.then((resultado)=>{
    console.log(resultado)
    return miPromesa})
    .then((resultado)=>{
        console.log(resultado)
        return miPromesa
    }).catch(reject => console.log(reject) )
*/
//Async / Await son formas de manejar la asincronia en funciones de JS

//Async es la palabras reservada para definir una funcion asincrona. Una funcion asincrona siempre devuelve una promesa

//Await es una palabra clave que solo se puede usar dentro de funciones asincronas. Hace que la ejecucion de la funcion asincrona se pause hasta quue la promesa se resuelva

//Try catch es muy util para manejar los errores asincronos

//se pueden hacer tanto funciones declaradas como expresadas asincronas

//Ejemplo:


//Funcion que simula uuna peticion a una base de datos
function simularPeticion() {
    return new Promise((resolve,reject) =>{
        console.log("Verificando datos ...")

        setTimeout(()=>{
            const exito = true
            if(exito){
                resolve({id: 1,nombre: "Usuario Verificado"})
            }else{
                reject("No se pudo verificar al usuario")
            }
        },2000)
    })
}

//Ahora consumimos la promesa con async/await. creamos uuna funcion async para llamar a simularPeticion() y esperar su resultado con await

//Declaramos la funcion con "async"

async function obtenerDatosDeUsuario(){
    try {
        console.log("Iniciando la obtencion de Datos ...")

        //Usamos "await" para pausar la ejecucion aqui hasta que la promesa se resulva
        //La variable "datos recibira el valor del "resolve" de la promesa
        const datos = await simularPeticion()

        console.log("peticion exitosa. Datos recibidos", datos)
        console.log("Podemos seguir ejecutando mas codigo aqui abajo")

    } catch (error) {
        //Si la promesa es rechazada, `await` lanza la excepcion que es capturada por el bloque "catch"
        console.log("Ocurrio un Error: ",error) 
    }
}

obtenerDatosDeUsuario()

//Clase 49 - Symbols

//Es un tipo de Dato primitivo con valor privado y para uso interno, Muuy usado en objetos

//Los symbols son unicos e inmutables. se utilizan para crear identificadores unicos para los metodos o atributos de los objetos. Se crea mediante la funcion symbol()

//Cada symbol es unico porque tiene  su propia referencia en el stack asi se le pase la misma descripcion que a otro

//Dentro de un objeto actua como una propiedad privada

//Primero debemos declarar una variable como symbol y luego lo podemos pasar como llave en el objeto

//Debemos declararlos como const

const nombreSymbol = Symbol("description")

//Usar el symbol en un objeto

let obj = {
    [nombreSymbol]: "valor 1",
    nombreSymbol: "valor 2"
}

console.log(Object.values(obj))
console.log(Object.keys(obj))

//para accerder al valor del symbol es con la sintaxis de los corchetes

console.log(obj[nombreSymbol])

//Agregar nueva propiedad symbol al objeto

const nombreSymbolFuncion = Symbol("funcion")

obj[nombreSymbolFuncion] = function(){console.log("hola")}

obj[nombreSymbolFuncion]()

//Metodo que nos devulve todas las descripciones de los symbols en el objeto

console.log(Object.getOwnPropertySymbols(obj))

//Clase 50 - Sets

//Es una estructura similar a un array, pero sin elementos repetidos

const set = new Set([1,2,2,3,3,false,false,true,true])

//No agrega los elementos repetidos

//para saber el lenght usamos .size

console.log(set.size)

//para agregar elelemtnos uusamos .add

set.add("patas")
console.log(set.size)

//Para recorrer uun set usamos for of o foreach

for(let element of set){
    console.log(element)
}

set.forEach(el=>console.log(el))

//Para poder acceder a cada elelemnto del set  de forma individual debemos transformar primero el ser a array com:

let arraySet = Array.from(set)

//Para eliminar valores del set debemos usar el metodo .delete(valor) con el valor a eliminar dentro

set.delete(true)

console.log(set)

//Para comprobar si el metodo tiene un valor usaremos el metodo .has() con el valor a preguntar dentro

console.log(set.has(3))

//Para vaciar el set usamos el metodo .clear()

set.clear()

console.log(set)

console.clear()

//Maps: El dato map en js es una coleccion de pares clave-valor donde cualquiera de los valores(tanto las claves como los valores mismos) pueden ser de cualquier tipo

//declaracion map
let array = [1,23,4]
let mapa = new Map([["clave 1","valor 1"],[1,"dos"],[array,"patas"]])

//caracteristicas claves: *preserva el orden de inserccion de los pares, por lo que iterar sobre un map devuelve las entradas en el orden que se crearon

//las claves son unicas, agregar varias veces la misma clave valor mas de una vez no duplica la entrada

//Puede tener claves de cualquier tipo

//Metodos principales

mapa.set("key","value") //añadimos un par clave-valor al map
mapa.get(array) //retorna el valor asociado a la key
mapa.has(array) //devuelve si la key posee alguun valor en el map
mapa.delete(array) //eliminar el par de la key especificada
mapa.size //retorna el tamaño del mapa

//para iterar sobre el map debemos usar for of o forEach

//Array de calves o valores

let keyArr = Array.from(mapa.keys())

let ValsArr = Array.from(mapa.values())

//WeakSets & WeakMaps

//Weakset: no es iterable, solo puede contener objetos(no datos primitivos) y sus elementos son referencias debiles es decir que no los proteje del recolector de basura

//Metodos principales: .add(value) .delete(value) .has(value) no posee metodo .clear() ni .size

let ws = new WeakSet()

let obj1 = {name: "obj1"},
    obj2 = {name: "obj2"}

ws.add(obj1)
ws.add(obj2)

obj1 = null //al dejar de referenciarlo se borra tambien del weakset

//WeakMap: *las claves deben ser unicamente objetos, *referencias debiles en las claves, *no es iterable

//Metodos principales: .set(key,value) .get(key) arroja el valor asociado a la clave .delete(key) elimina la asociacion .has(key) comprueba si existe esa clave el el weakmap. No posee .size ni .clear()

//Iterables & Iterators

//Que es un iterador

//es un objeto que sigue el protocolo de iteracion de js

//1  - debe tener el metodo llamado next
//2 - cada vez que llames a next(), debe devolver un objeto con 2 propiedades: {valor actuuual, done: true(false)}
 
const miArray = ['a', 'b'];

// 1. Obtener el iterador del iterable (el array)
const iterador = miArray[Symbol.iterator]();

// 2. Usar el método next() para recorrer los elementos
console.log(iterador.next()); // { value: 'a', done: false }
console.log(iterador.next()); // { value: 'b', done: false }
console.log(iterador.next()); // { value: undefined, done: true }

//Genrators

//las funciones generadoras en js son un tipo de funcion quue permite pausar y reanudar su ejecuucion, devolviendo valores intermedios a medida que avanza

//Como se define:

// Se utiliza la palabra clave function*

//Dentro del cuerpo de la funcion se emplea la palbra clave yield para pauusar la ejecucion y devolver un valor

function* nombreFuncionGenerador(){
    yield "valor 1"
    console.log("paso intermedio")
    yield "valor 2"
    //no es necesario poner pasos intermedios
    yield "valor 3"
}

//la funcion generadora no se ejecuta al ser llamada. En suu lugar devuuelve un iterator, al llamar a .next() el iterador ejecuta el yield de la correspondiente posicion devolviendo {value:"yield 1", done: false/true}

//Al ser iterables podemos ejecutarlas directamente en un bucle for of

//usos practicos: *simulacion de datos, *control de flujos, *recorrido personalizado

//hoy en dia los generadores para asincronia han sido reemplazados por async/await pero tambien sirven para ello

//Proxies

//los proxies son una caracteristica avanzada que te permite interceptar y redefinir operaciones fundamentales para objeto. Esto es especialmente util para personalizar comportamientos

//Conceptos basicos

//Proxy: Es un objeto quue envuelve a otro(llamado target) y controla el acceso mediante un objeto handler

//Handler: Es un objeto que contiene traps, que son funciones especificas para interceptar operaciones (por ejemplo, acceder a propiedades, escribir valores, invocar funciones, etc)

//Target: Es el objeto original que el proxy "envuelve"
// 1. El objeto original (target)
const usuario = {
  nombre: "Juan",
  edad: 30
};

// 2. El manejador con las trampas (handler)
const handlerValidador = {
  set(target, prop, value) {
    if (prop === 'nombre') {
      if (typeof value !== 'string' || value.length === 0) {
        console.error("Error: El nombre debe ser un texto no vacío.");
        return false; // Indica que la asignación falló
      }
    }

    if (prop === 'edad') {
      if (typeof value !== 'number' || value < 0 || value > 100) {
        console.error("Error: La edad debe ser un número entre 0 y 100.");
        return false; // Indica que la asignación falló
      }
    }

    // Si la validación pasa, aplicamos el cambio al objeto original
    target[prop] = value;
    console.log(`La propiedad '${prop}' se actualizó a '${value}'`);
    return true; // Indica que la asignación fue exitosa
  }
};

// 3. Creamos el Proxy
const usuarioProxy = new Proxy(usuario, handlerValidador);

// --- Probando el Proxy ---

// Asignación VÁLIDA
usuarioProxy.edad = 35; // Funciona
// Salida: La propiedad 'edad' se actualizó a '35'

// Asignación INVÁLIDA (por tipo)
usuarioProxy.nombre = 123;
// Salida: Error: El nombre debe ser un texto no vacío.

// Asignación INVÁLIDA (por rango)
usuarioProxy.edad = 150;
// Salida: Error: La edad debe ser un número entre 0 y 100.

// Verificamos el objeto original
console.log(usuario); // { nombre: 'Juan', edad: 35 }
// Nota: Las asignaciones inválidas no modificaron el objeto original.

//Propiedades dinamicas de los objetos

//Podemos asignarles propiedades dinamicamente a los objetos con metodos diferentes

//Principal: Usando corchetes [ para asignar una propiedad a un objeto usando una variable o expresion]

let aleatroio = `id_${Math.round(Math.random()*100+5)}`

const objUser = {
    [aleatroio]: "valor aleatorio"
}