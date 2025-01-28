//Clase 21 - Arrow Function
/*
const saludar1 = () => console.log(`hola perros`)


const saludar2 = () => {
    console.log(`hola`)
}

saludar1()

const saludarPerosna = (nombre) => console.log(`hola ${nombre}`)

saludarPerosna("irma")

const saludarPerosna2 = nombre => console.log(`hola ${nombre}`)

saludarPerosna2("sofia")

const sumar = (a,b) => a+b

console.log(sumar(1,2))

const funcionDeVariasLineas = () => {
    console.log("Uno")
    console.log("dos")
    console.log("tres")
}

funcionDeVariasLineas()

const numeros = [1,2,3,4,5,6,7,8,9,10]

numeros.forEach((i,index) => console.log(`el elemento ${i} esta en la posicion ${index}`))
/*
function Perro(){
    console.log(this)
}

Perro()



const perro = {
    nombre:"zeo",
    ladrar:()=>{
        console.log(this)
    }
}

perro.ladrar()

*/
//Clase 22 - Prototipos
/*

const animal = {
    nombre: "Snoopy",
    sonar(){
        console.log("Hago sonidos porque estoy vivo")
    }
}

const animal2 = {
    nombre: "Lola Bunny",
    sonar(){
        console.log("Hago sonidos porque estoy vivo")
    }
}

console.log(animal)
console.log(animal2)


// Funciones Constructoras

//funcion constructora donde asignamos los metodos al prototipo, no a la funcion como tal.

function Animal(nombre,genero){
    //Atributos
    this.nombre = nombre
    this.genero = genero 
}

//Metodos agregados al prototipo de la funcion constructora

Animal.prototype.sonar = function(){
    console.log("Hago sonidos porque estoy vivo")
    };

Animal.prototype.saludar = function(){
        console.log(`Hola, me llamo ${this.nombre}`)
    }


//Instanciar a partir de la funcion constructora

const snoopy = new Animal("Snoopy","Macho"),
      lolaBunny = new Animal("Lola Bunny", "Hembra")
console.log(snoopy)
snoopy.sonar()
snoopy.saludar()

lolaBunny.sonar()
lolaBunny.saludar()

console.log(`****************************** \n Herencia Prototipica \n******************************`)
*/
//clase 23 - Herencia prototipica
/*
function Perro(nombre,genero,tamanio){
    this.super = Animal
    this.super(nombre,genero)
    this.tamanio = tamanio
}

//Perro esta heredando de Animal
Perro.prototype = new Animal()
Perro.prototype.constructor = Perro

//Sobreescritura de metodos del prototipo padre en el hijo

Perro.prototype.sonar = function(){
    console.log("Soy un perro y mi sonido es un ladrido")
}

Perro.prototype.ladrar = function(){
    console.log("Guauuuu Guauuuuuu")
}

const zeo = new Perro("zeo","macho","grande")
console.log(zeo)
zeo.sonar()
zeo.ladrar()
zeo.saludar()

*/

//Clase 24 - Clases y herencia
/*
class Animal{
    constructor(nombre,genero){
        this.nombre = nombre
        this.genero = genero
    }

    sonar(){
        console.log("Hago sonidos porque estoy vivo")
    }

    saludar(){
        console.log(`Hola, me llamo ${this.nombre}`)
    }
}



//herencia
//para decir de donde hereda una clase usamos la palabra extends

class Perro extends Animal{
    constructor(nombre,genero,tamanio){
        //Con el metodo super() se manda a llamar al constructor de la clase padre
        super(nombre,genero)
        this.tamanio = tamanio
    }

    sonar(){
        console.log("soy un pero y mi sonido es un ladrido")
    }

    ladrar(){
        console.log("Guauu guauu!!!!!!")
    }
}


const mimi = new Animal("mimi","hembra")
const scooby = new Perro("Scooby","macho","gigante")

console.log(mimi)
console.log(scooby)
mimi.saludar()
scooby.ladrar()
scooby.saludar()
*/

//Clase 25 - Metodos estaticos, getters y setters
/*
class Animal{
    constructor(nombre,genero){
        this.nombre = nombre
        this.genero = genero
    }

    sonar(){
        console.log("Hago sonidos porque estoy vivo")
    }

    saludar(){
        console.log(`Hola, me llamo ${this.nombre}`)
    }
}

class Perro extends Animal{
    constructor(nombre,genero,tamanio){
        //Con el metodo super() se manda a llamar al constructor de la clase padre
        super(nombre,genero)
        this.tamanio = tamanio
        this.raza = null
    }

    sonar(){
        console.log("soy un pero y mi sonido es un ladrido")
    }

    ladrar(){
        console.log("Guauu guauu!!!!!!")
    }

    static queEres(){
        console.log("Los perros somos animales mamiferos considerados los mejores amigos del hombre")
    }

    //Metodos setters y Getters son metodos especiales que nos permiten establecer y obtener los valores de atributos de nuestra clase

    get getRaza(){
        return this.raza
    }

    set setRaza(raza){
        this.raza = raza
    }

}

//Metodos estaticos: Los podemos ejecutar sin instaciar un objetos, es decir directamente desde el constructor

Perro.queEres()

//Aca podemos ver como sirven para ejecutar

const scooby = new Perro("Scooby","macho","gigante")
console.log(scooby.raza)
scooby.getRaza
console.log(scooby.raza)
scooby.setRaza = "Gran Danés"
console.log(scooby.raza)
*/

//clase 26 - Objeto Console
/*

console.error("patas")
console.warn("patas")
console.info("Esto es informacion")
console.log(Document)
console.dir(Document)
console.group("Jon mircha tiene varios cursos, entre ellos estan: ")
console.log("Javascript")
console.log("NODE JS")
console.log("HTML")
console.log("CSS")
console.groupEnd()
console.table(Object.entries(window).sort())
let arreglo = [1,23,4,5,67,86]
console.table(arreglo)

console.time("Etiqueta que vincula time y timeEnd")

let arreglo2 = Array(100000)
for(let i = 0;i < arreglo2.length; i++ ){
    arreglo2[i] = i
}

console.timeEnd("Etiqueta que vincula time y timeEnd")

for(let i = 200; i > 0 ; i--){
    console.count("Se esta ejecutando el ciclo n°: ")
    console.log(i)
}

let x = 3,
    y = 2,
    PruebaXY = "Se espera que x siempre sea menor que y"

console.assert(x<y,{x,y,PruebaXY})

console.log("patas")
*/

//Clase 27 - Objeto Date
/*
//Esto hace referencia al horario de la computadora del usuario, ya que son metodos que toman el navegador como contexto

console.log(Date())
//Guardamos la fecha en una vairable
let fecha = new Date()
console.log(fecha)
//el metodo .getDate() nos devuelve el dia del mes
console.log(fecha.getDate())
//Nos devuelve el dia de la semana en Numero. D L MAR MIERCO J V S -> 0 1 2 3 4 5 6
console.log(fecha.getDay())
//devuelve el Mes: Ene Feb Mar Abr May Jun Jul Ago Sep Oct Nov Dic-> 0 1 2 3 4 5 6 7 8 9 10 11
console.log(fecha.getMonth())
//Nos dice cuanto años han pasado desde 1900
console.log(fecha.getYear())
//Nos devuelve el año completo
console.log(fecha.getFullYear())
//Nos devulve la hora, minutos, segundos y milisegundoss
console.log(fecha.getHours())
console.log(fecha.getMinutes())
console.log(fecha.getSeconds())
console.log(fecha.getMilliseconds())
//Nos devuelve todo el Date() en string
console.log(fecha.toString())
//Nos devuelve solo la fecha en string
console.log(fecha.toDateString())
//Fecha en formato mes/dia/año, hora pm/am
console.log(fecha.toLocaleString())
//Solo la fecha en formato mes/dia/año
console.log(fecha.toLocaleDateString())
//Solo la fecha en formato hora pm/am
console.log(fecha.toLocaleTimeString())
//Es el uso Horario en el que nos encontramos como estamos a GTM -3HS serian 180 minutos
console.log(fecha.getTimezoneOffset())
//NOs devuelve el dia que es en la zona horaria UTC
console.log(fecha.getUTCDate())
//Nos devuelve la hora que es en horario UTC
console.log(fecha.getUTCHours())
//Devuelve los milisegundos que han pasado desde el 1ro de enero de 1970
console.log(Date.now())
//ejemplo de una fecha de nacimiento

let cumplevalen = new Date(2005,5,7)
console.log(cumplevalen)


//Moment.JS es una libreria super potente para el manejo del tiempo
*/

//clase 28 - Objeto Math
/*
// console.log(Math)
console.log(Math.PI)
console.log(Math.abs(-7.8)) //valor absoluto
console.log(Math.ceil(7.2)) //trunka para arriba
console.log(Math.floor(7.8)) //trunka para abajo
console.log(Math.round(7.49)) //redonde dependiendo los decimales
console.log(Math.sqrt(81)) //Calcula la raiz cuadrada
console.log(Math.pow(2,5)) //eleva un numero el primer numero elevado al segundo
console.log(Math.sign(-7.8)) //Devuelve -1 si es negativo, 0 si es cero y 1 si es un n° posit
console.log(Math.random()) //Este metodo nos da un numero random entre 0 y 1
console.log(Math.random()*1000)
*/

//Clase 29 - Operador de Cortocircuito
/*
//Cortocircuito OR - Cuando el valor de la izquierda en la expresion siempre pueda validar a true, es el valor que se cargara por defecto

//Cortocircuito AND - cuando el valor de la izquierda en la expresion siempre pueda validar a false, es el valor que se cargara por defecto

//tener en cuenta que se toman los valores como truthy o falsy

//Operador cortocircuito OR
//Usa primero siempre el de la derecha en caso de ser true
let cortocircuitoOR1 = "valor 1" || "valor 2" 

cortocircuitoOR1

//sino usa el de la derecha
let cortocircuitoOR2 = 0 || "valor 2" 

cortocircuitoOR2

//si ambos son falsos usa el valor negativo de la izquierda
let cortocircuitoOR3 = "" || 0

cortocircuitoOR3

//Operador cortocircuito AND


//En caso de ambos ser falsos se queda con el de la izquierda primero
let cortocircuitoAND1 = "" && 0 

cortocircuitoAND1

//En caso del primero ser true, se queda con el falso de la derecha
let cortocircuitoAND2 = "VALOR 1" && 0 

cortocircuitoAND2

//Si ambos son true, toma el valor del true de la derecha
let cortocircuitoAND3 = "VALOR 1" && "VALOR 2" 

cortocircuitoAND3
*/

//Clase 30 - Alert, confirm y prompt
/*
console.log(window)

//crea una ventana emergente con la alerta
alert("Hola, esto es una alerta")


//crea una ventana emergente con texto y nos permite confirmarla y guardar el valor true o false en una variable
let confirmacion = confirm("Hola, esto es una confirmacion")

console.log(confirmacion)

//crea una ventana emergente en el cual podemos ingresar un dato
let aviso = prompt("Hola, esto es una confirmacion")

console.log(aviso)
*/


