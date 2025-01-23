
// Clase 1 - 10 Repaso

/*
let mensajeInicio = "Repasando algunas cosas"

console.log(mensajeInicio)

//Hoisting es la elevacion del ambito de existencia de una variable o funcion
//var tiene hoisting, pero let no tiene, con las funciones las declaradas tienen hoisting mientras que las expresadas o anonimas no poseen hoisting

//Tipo de escrituras de codigo - nombres:
// UPPER_CASE = Constantes
// lower_case = nombres_de_archivos
// lowerCamelCase = Objetos , primitivos, funciones o instancias
// UpperCamelCase = Clases

//String algunos metodos:

let lorem = " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta quod facilis quos eos dignissimos, in distinctio provident perferendis voluptatibus enim obcaecati molestiae veniam eligendi iure labore numquam saepe aliquam. Nemo!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, autem omnis voluptas non nesciunt ratione sed consequatur modi iure vel necessitatibus libero repellat error fugit eaque ad dolor. Assumenda, provident. "

console.log(
    lorem.split(","),
    lorem.trim(),
    lorem.includes("Lorem"),
    lorem.includes("valentin"),
    lorem.length
)

let nombre = "Valentin"
let apellido = "Serassio"
let edad = "19"

let templateString = `Hola me llamo ${nombre} ${apellido} y mi edad es de ${parseInt(edad)}`

console.log(templateString)

const TENGONOVIAT = true;

const ESMUYLINDA = Boolean(1);

console.log(TENGONOVIAT,ESMUYLINDA)

console.log(typeof TENGONOVIAT)

let indefinido
let nulo = null
let noEsUnNumero = "hola" * 3

//numbers: 
let numerito = "6.189"



console.log(parseFloat(numerito).toFixed(2))

console.log()

console.log(nulo, indefinido, noEsUnNumero)

//Funciones Declaradas

let ejecucionDeclarada = funcionDeclarada()

console.log(ejecucionDeclarada)
//Se ejecuta de toda forma porque las funciones Declaradas tienen hoisting

function funcionDeclarada (nombre = "bad bunny", edad = 30){
    let saludo = `Hola soy ${nombre} y tengo ${edad} años`
    return saludo
}


const funcionExpresada = function(n1,n2){
    let suma = n1 + n2
    return suma
}

console.log()
*/

//Clase 11 - 20 repaso

//Arrays - clase 11

//Creacion de un array
const arreglo1 = ["Sofia","Valentin",["Se aman","Mucho"],{nombre:"valentin",objetivo:"Conseguir millones"}]

console.log(arreglo1)

// String a partir del cual vamos a crear un String
let lorem = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ea ducimus libero? Maxime eveniet a dicta. odio numquam minus odit esse iusto reprehenderit fuga perspiciatis, quaerat sed assumenda, maiores vel! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam reprehenderit nobis consequuntur tenetur, quisquam esse dolore earum, modi neque excepturi doloremque corporis dolor, qui temporibus aspernatur adipisci velit enim? Similique.Dolorem, officia ducimus molestias quis beatae odio corporis natus perferendis? Porro in culpa magni .minus odio tenetur dolorem cum voluptatum, tempora voluptates exercitationem consequuntur eaque, pariatur, omnis esse et optio.Facere atque fugit sed sint culpa aperiam asperiores quod. modi vero ex omnis ipsa corrupti nulla non officia voluptatibus id voluptatem, quae repellat debitis earum cumque quaerat quia cupiditate? Dignissimos. asdads"
//Spliteamos el string anterior por los "."
const arregloDesdeString = lorem.split(".")
//Cambiamos lo que hay en la posicon 3 por un objeto (recordad que empiezan desde la posicion 0)
arregloDesdeString[3] = {nombre: "sofia", afecto: "mi amorcito", edad: 20, linea: function(){console.log("amo a cachetes")}}
console.log(arregloDesdeString[3])
//Ejecucion de la funcion dentro del objeto que esta en la posicion 3 del array
arregloDesdeString[3].linea()
//Uso de la funcion de los array ForEach para recorrer cada uno de lso elementos del array
arregloDesdeString.forEach(function(el,index){
    console.log(`En la posicion ${index} dentro de ArregloDesdeString esta el elemento ${el}`)
})
//Agregamos 3 nuevos elementos al array
arreglo1.push("Sofi te amo mucho mi chacetona linda")
arreglo1.push("quiero crecer junto a vos sofi")
arreglo1.push("odio el mantecol")
console.log(arreglo1)
//Borramos el ultimo elemento del array
arreglo1.pop()
console.log(arreglo1)

//Creamos un nuevo array en el que se repetiran sus valores:
const arreglo2 = Array(10).fill(true)

console.log(arreglo2)

//Objetos - Clase 12

// Al igual que con los otros tipos de Datos compuestos usamos Const para declararlos

const persona1 = {
    nombre: "sofinoviat",
    edad: 20,
    noviot: "valentin",
    comidasFavoritas: ["Empanadas de pollo", "Hamburguesas", "Comidita Rica"],
    cachetes: function(){
        console.log(`Amo mucho a mi novio cachetes ${this.noviot}`)
    }
}

//En los objetos tenes los atributos que serian las variables del objecto y las metodos que son las funciones
//Dos formas de llmar a los atributos
console.log(persona1["nombre"])
console.log(persona1.edad)
//Una forma de llamar al metodo
persona1.cachetes()

//Podemos ver las llaves o valores del objecto con el siguiente metodo del contrustor objecto
console.log(Object.values(persona1))
console.log(Object.keys(persona1))

//Tambien existe un metodo para saber si el objeto posee una llave u que nos devuelva tru o false:
console.log(persona1.hasOwnProperty("nombre"))

//Tipo de Operadores - Clase 13

//Operadores Aritmeticos: + - / * () % 

//Operadores Relacionales:  > < >= <= == === != !==

//Operadores de Incremento y Decremento: += -= *= /=

//Operadores De incremento decremento unitario: ++ --  (Estos operadores son especiales, ya que dependiendo de si los ponemos antes o despues de la variable van a afectar de diferente forma)

//Operadores Logicos: || (OR)  && (AND) ! (NOT)

console.clear()

//Condicionales - Clase 14

//Condicional if Else: si una condicion se cumple se ejectu el codigo, sino pasa a la segunda instancia que seria un else (sino) el cual puede estar acompañado de otro if o ser else solo siendo el ultimo

let edad = 18

if(edad > 17){
    console.log("Eres mayor de edad")
}else if(edad < 0){
    console.log("la edad no es valida")
}else{
    console.log("Eres menor de edad")
}

//Operador Ternario: Es una simplificacion del if else en una sola linea. Podemos guardarlo en una variable

edad = 17

let mayoriaDeEdad = (edad >= 18)? "eres mayor de edad" : "eres menor de edad"

console.log(mayoriaDeEdad)

//  Si quisieramos que tuviera mas de una linea en verdadero en falso podria usar una funcion

//Switch case: Nos permite elegir entre varios casos, segun el condicional

let dia = "sabado"

switch (dia) {
    case "lunes":
        console.log("Hoy comeremos Sopa")
        break;
    case "martes":
        console.log("Hoy comeremos Salchicas")
        break;
    case "miercoles":
        console.log("Hoy comeremos medialunas")
        break;
    case "jueves":
        console.log("Hoy comeremos carne al horno")
        break;
    case "viernes":
        console.log("Hoy comeremos milaneasa con papas fritas")
        break;
    case "sabado":
        console.log("Hoy comeremos Hamburguesas")
        break;
    case "domingo":
        console.log("Hoy comeremos Pizza")
        break;
    default:
        console.log("Hoy no hay comida ;(")
        break;
}

//Ciclos - Clase 15

//Sirven para ejecuutar codigo repetidas veces, para que no se transforme en un bucle infinito se usa una variable de control para que rompa el bucle

//Bucle while: mientras que la condicion no se cumpla se ejecutara el bucle



let varControl = 0

while(varControl < 101){
    console.log(`Estamos en el ciclo ${varControl} del bucle`)
    varControl++
}

//Do while: es lo mismo que el while, con la diferencia que el codigo se va a ejecutar siempre por lo menos una vez. Ya que el do esta al principio

//console.log(varControl)



varControl = 0

do{
    console.log(`Estamos en el ciclo ${varControl} del bucle do while`)
    varControl++
}while(varControl === 10)

console.clear()

//Bucles for, la variable de control se declara dentro de ellos. Recordar que siempre en las instrucciones cada parte va separada por ;

for(let i = 0; i < 10;i++){
    console.log(`La var de control i vale ${i}`)
}

//for in: Nos permite iterar sobre las propiedades de un objeto.
//para el ejemplo vamos a usar el objeto persona1

for(const propiedad in persona1){
    console.log(propiedad)
    console.log(persona1[propiedad])
}

//for of: sirve para recorrer el resto de los iterables como strings, arrays, etc

let pruebaForOf = "sofit te amot"

for(const i of pruebaForOf){
    console.log(i)
}

console.clear()

//Manejo de errores - Clase 16

//para manejar errores se utiliza el bloque try{}catch(){}finally{}. En el try se ejecuta el codigo, en caso de haber un error se captura en la parte de catch y finally es un bloque no obligatorio, pero en caso de usarlo siempre se va a ejecutar en el final del bloque try catch.

//podemos lanzar un error custom usando, throw new Error("texto del error")


try {
    console.log("primera linea del try catch")
    noexiste
    console.log("segunda linea del try catch")

} catch (error) {
    console.log(`Ha ocurrido el siguente error ${error}`)
}finally{
    console.log("bloque finally")
}

console.clear()

//lanzando un error personalizado:

try {
    console.log("primera linea del try catch personalizado")
    let errorcito = 11
    if(errorcito > 10){
        console.log("errocito pasa la prueba del diez")
    }else{
        throw new Error("Errorcito no paso la prueba")
    }
    console.log("segunda linea del try catch personalizado")
} catch (error) {
    console.log("el error es el siguente")
    console.log(error)
}finally{
    console.log("bloque finally ejecutado siempre al final")
}

// break & continue - clase 17:
//Esta palabras reservadas sirven para controlar la ruptura o continuacion al siguiente ciclo de una estructura de control.No funcionan es metodos().
//break rompe el ciclo/bucle
//continue pasa al siguiente ciclo del bucle


//Destructuracion - Clase 18:
//La destructuracion sirve para poder asignar variable a partir de objectos o arrays, en definitiva sirve para destructurar estos de manera mas facil.

let array1 = ["hola","me","llamo"]
let array2 = ["valentin","serassio","y amo mucho a sofi"]

//podemos asignar varias variables a partir de un solo let:

let variable1 = array1[0],
    variable2 = array1[1],
    variable3 = array2[2]

//asignacion de variables con destructuracion:
//debemos pasar los nombre de las variables en el mismo formato que el dato compuesto, para arrays corchetes para objecto {}
let [hola,me,llamo] = array1

console.log(hola,me, llamo)

//Destructuracion a partir de un objecto:
console.log(persona1)
//para destructurar el objecto debemos usar los {} y los nombre de las variables deben ser iguales a las claves, si quisieramos cambiar el nombre de alguna variable debemos poner {nombrekey:nuevonombre}

let {nombre,edad:age,noviot:valenoviot,comidasFavoritas,cachetes} = persona1

console.log(nombre,age)

console.clear()

//Objectos literales - clase 19

//Es una nueva forma de definir los objetos, ya que podemos definir los metodos con una forma acortado, y en caso de tener una variable y quiseramos que el objeto tuviera esa misma variable como atributo en clave y valor podemos pasarla directamente

let sofi = "te amo"
let noviot = "valen"

const objectoLiteralSofi = {
    sofi,
    noviot,
    pasatiempos: ["k-dramas","comer empanadas","darle besos a su noviecito cacheton"],
    cachetes(){
        console.log(`amo mucho a mi noviot ${this.noviot} <3 <3 <3 !!!`)
    }
}

objectoLiteralSofi.cachetes()
console.log(objectoLiteralSofi.sofi)

console.clear()

//Parametro REST & SPREAD operator

//el parametro rest es una forma de asignarle parametros virtualmente infinitos a una funcion, utilizaondo la sintaxis ...nombreRest. El rest actua como un array que contendra el resto de parametro pasados.

let funcionSumar = function(a,b,...c){
    let suma = a + b
    c.forEach(function(e){
        suma += e
    })
    return suma
}

let sumandos = funcionSumar(1,2,3,4,5,6)

console.log(sumandos)

//Operador Spread: Sirve para descomponer objetos o iterables como arrays
//supongamos que tenemos dos arrays y los queremos unir para que sea uno solo, para eso podemos usar el operador de propogacion

const arreglo3 = [1,2,3,4,5]
const arreglo4 = [6,7,8,9,10]

//Esto generaria un arreglo con los otros dos arreglos completos
const arreglo5 = [arreglo3,arreglo4]
console.log(arreglo5)
//Si los descomponemos con el spread operator queda mejor
const arreglo6 = [...arreglo3,...arreglo4]
console.log(arreglo6)