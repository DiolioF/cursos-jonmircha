//Clase 11 - Arrays

/*

const a = []
const b = [1,2,true,"hola", [1,2,3,4.5,"a"]]

console.log(b)
console.log(b.length)
b[4][1] = "patas"
console.log(b[4][1])

const array2 = Array.of("hola","my name is", "michael", 16, ["basball","temmis","trading"])

console.log(array2)

const arrayRepetido = Array(100).fill("te amo sofiii")

console.log(arrayRepetido)

array2.push("te quiero mucho my sofi lovee")

console.log(array2)

b.pop()

console.log(b)

arrayRepetido.forEach(function(v,i){
    console.log(`Posicion ${i}, ${v}`)
})

console.clear()

*/


//clase 12 - Objetos

/*

let a = new String("Hola")

const b = {}
const c = new Object()

console.log(b)
console.log(typeof b)

const valentin = {
    nombre: "valentin",
    apellido: "serassio",
    edad: 19,
    pasatiempos: ["programar","estudiar","criptos","ethereum"],
    soltero:false,
    contacto:{
        email:"valentinserassio@gmail.com",
        twitter:"@diolio3",
        movil:2234563234
    },
    saludar: function(){
        console.log(`Hola :)`)
    },
    decirMiNombre: function(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`)
    }
}

console.log(valentin);
console.log(valentin["nombre"])
console.log(valentin.nombre)
console.log(valentin.pasatiempos)
console.log(valentin.pasatiempos[2])
console.log(valentin.contacto.email)
valentin.saludar()
valentin.decirMiNombre()

console.log(Object.keys(valentin))
console.log(Object.values(valentin))
console.log(valentin.hasOwnProperty("nombre"))

console.clear()

*/

//clase 13 - Tipos de operadores

// aritmaetica

// let a = 5 + (5-10) * 3
// let modulo = 5 / 2

// console.log(a)
// console.log(modulo)

// console.log("***************\n salto de linea \n***************")

// Realacionales

// console.log(8>9)
// console.log(9>8)
// console.log(8 >= 9)
// console.log(7 > 7)
// console.log(7<7)
// console.log(7 <= 7)

/*
 un = es asignacion de variable
 dos == es comparacion de valores
 tres === es comparacion de tipo de dato y valor
*/ 

// console.log(7 == 7)
// console.log("7" == 7)
// console.log(0 == false)

// console.log(7 === 7)
// console.log("7" === 7)
// console.log(0 === false)

// console.log("***************\n salto de linea \n***************")

// console.log(7 != 7)
// console.log("7" != 7)
// console.log(0 != false)

// console.log(7 !== 7)
// console.log("7" !== 7)
// console.log(0 !== false)

// console.log("***************\n salto de linea \n***************")

// Incremento Decremento

// let i = 1

// i = i + 2

// i++
// i++
// i--
// i++
// i++
// i--
// i++

// console.log(i)

// console.log("***************\n salto de linea \n***************")

/* logicos

!  - Not : Niega, es decir lo que es verdadero lo vuelve falso y vuceversa
|| - Or  : Cuando tenga 2 o mas condiciones, con que una se cumpla, es decir que sea verdadera,
El OR validara
&& - And: Cuando tenga 2 0 mas condiciones, todas tienen que cumplirse es decir ser verdaderas,
para que AND se valide

*/

// console.log("not")
// console.log(!true)
// console.log(!false)
// console.log("or")
// console.log((9 === 9)||("9" === 9)) 
// console.log((9 === "9")||("9" === 9)) 
// console.log("and")
// console.log((9 === 9)&&(8 == "8")) 
// console.log(!(9 === "9") && !("9" === 9)) 


//Clase 14 - Condicionales / Estructuras de control

// if - else

// let edad = 35

// if(edad >= 18){
//     console.log("eres mayor de edad")
// }else{
//     console.log("eres menor de edad")
    
// }

/*

Dejame dormir 0hs - 7hs
Buenos dias 8hs a 13hs
Buenas tardes 14hs a 19hs
Buenas noches 20hs a 23hs

*/

// let hora = 25

//Concatenacion de if else

// if(hora>= 0 && hora <=7){
//     console.log("Dejame Dormir")
// }else if(hora >= 8 && hora <= 13){
//     console.log("Buenos dias")
// }else if(hora >= 14 && hora <= 19){
//     console.log("Buenas Tardes") 
// }else if(hora >= 20 && hora <= 23){
//     console.log("Buenas noches")
// }else{
//     console.log("La hora introducida no es valida")
// }

// //Operador Ternario:     (condicion) ? verdadero : falsa

// console.log("operador ternario")

// edad = 24

// let eresMayor = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad"

// console.log(eresMayor)

//Operador Switch

/*

domingo - 0
lunes - 1
martes - 2
miercoles - 3
jueves - 4
viernes - 5
sabado - 6

*/

// let diap = 2

// switch (diap) {
//     case 0:
//         console.log("Es el dia Domingo")
//         break
//     case 1:
//         console.log("Es el dia Lunes")
//         break
//     case 2:
//         console.log("Es el dia Martes")
//         break
//     case 3:
//         console.log("Es el dia Miercoles")
//         break
//     case 4:
//         console.log("Es el dia Jueves")
//         break
//     case 5:
//         console.log("Es el dia Viernes")
//         break
//     case 6:
//         console.log("Es el dia Sabado")
//         break
//     default:
//         console.log("No es un dia valido")
//         break
// }

//clase 15 - Ciclos/loops  [Estructuras de repeticion]
/*
let contador = 0

while (contador < 10
){
    contador++
    console.log("while"+contador)
}


do{
    console.log("do while" + contador)
    contador++
}while(contador < 10)
*/

// for (inicializacion de variable; condicion; incremento o decremento){codigo del bucle}
/*
console.log("***************\n For \n***************")

for (let i = 0; i < 10; i++) {
    console.log("for" + i);      
}

let numeros = [10,20,30,40,50,60,70,80,90]

for(let i = 0; i < numeros.length;i++){
    console.log(numeros[i])
}


console.log("***************\n For in \n***************")

const valentin = {
    nombre: "valentin",
    apellido: "serassio",
    edad: 35,
    saludar: function(){
        console.log(`mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años`)
    }
}

for (const propiedad in valentin) {
    console.log(`key: ${propiedad}, value: ${valentin[propiedad]}`)
}

console.log("***************\n For of \n***************")

for (const elemento of numeros) {
    console.log(elemento)
}
*/

//clase 16 - Manejo de Errores
/*
try {
    console.log("En el Try se agrega el codigo a evaluar")
    noexiste;
    console.log("segundo mensaje del try")
} catch (error) {
    console.log("catch, captura cualquier error surgido o lanzado en el try")
    console.log(error)
}finally{
    console.log("El bloque finally se ejecutara siempre al final de un bloque try-catch")
}

console.log("***************\n Try catch fianlly Personalizado \n***************")

try{
    let numero = "10"
    if(typeof numero !== typeof 1){
        throw new Error("El caracter introducido no es un numero")
    }
    console.log(numero * numero)

}catch(error){
    console.log(`Se produjo el siguiente error: ${error}`)
}
*/

//clase 17 - break & continue
/*
const numero = [1,2,3,4,5,6,7,8,9,10]

for (let i = 0; i < numero.length; i++){
    if(i === 5){
        break
    }
    console.log(numero[i])
}

for (let i = 0; i < numero.length; i++){
    if(i === 5){
        continue
    }
    console.log(numero[i])
}
*/

//clase 18 - Destructuracion
/*
const numeros = [1,2,3]

//sin destructuracion

let uno = numeros[0],
    dos = numeros[1],
    tres = numeros[2]

console.log(uno,dos,tres)

//con destructuracion

const [one,two,three] = numeros

//Destructuracion de un objeto

let persona = {
    nombre: "Jon",
    apellido: "Mircha",
    edad: 35
}

//destructuracion

let {nombre,apellido,edad} = persona
console.log(nombre,apellido,edad)

*/

//clase 19 - Objectos literales
/*
let nombre = "Kenai",
    edad   = 7

const perro = {
    nombre: nombre,
    edad: edad,
    ladrar: function(){
        console.log("guau guauuu!!!")
    }
}

console.log(perro)
perro.ladrar()

const dog = {
    nombre,
    edad,
    raza: "callejero",
    ladrar(){
        console.log("guau guau guau")
    }
}

dog.ladrar()
*/

//Clase 20 - Parametros REST & Operador Spread

function sumar (a,b, ...c){
    let resultado = a + b
    c.forEach(function(i){
        resultado += i
    })

    return resultado
}

console.log(sumar(1,2,3,4))

const arr1 = [1,2,3,4,5],
      arr2 = [6,7,8,9,0]

console.log(arr1,arr2)
const arr3 = [...arr1, ...arr2]
console.log(arr3)
