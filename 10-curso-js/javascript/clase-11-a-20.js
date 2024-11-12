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

let a = 5 + (5-10) * 3
let modulo = 5 / 2

console.log(a)
console.log(modulo)

console.log("***************\n salto de linea \n***************")

// Realacionales

console.log(8>9)
console.log(9>8)
console.log(8 >= 9)
console.log(7 > 7)
console.log(7<7)
console.log(7 <= 7)

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

