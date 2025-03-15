//Clase 51 - Maps
/*
let mapa = new Map()

mapa.set("nombre","valentin")
mapa.set("apellido","serassio")
mapa.set("edad",35)


console.log(mapa)
//saber el tamaño del map
console.log(mapa.size)
//saber con true o false si contiene la clave pasada como valor
console.log(mapa.has("correo"))
console.log(mapa.has("edad"))
//devolver el valor de una llave, en caso de no estar devuelve undefined
console.log(mapa.get("patas"))
console.log(mapa.get("edad"))
//para eliminar alguna llave valor usamos .delete() con la llave dentro
mapa.delete("edad")
console.log(mapa)
//Ademas de tener llaves strings, podemos tener llaves con number, null, undefined o cualquier otro tipo de dato
mapa.set(19,"diecinueve")
mapa.set({},{})
console.log(mapa)
//para recorrerlo debemos usar un for of
for(let [key,value] of mapa){
    console.log(`llave ${key}, value ${value}`)
}
//para declarar un mapa completo sin usar .set(llave,valor) tenemos que pasar
//las claves y valores dentro de un array, separando cada llave y valor dentro de [], asi:
const mapa2 = new Map([
["nombre","kenai"],
["edad",7],
["animal","perro"],
[null,"nulo"]
])

console.log(mapa2)
//para sacar las llaves o valores por separado en un Array usamos el motod .keys() o 
// .values() y descomponemos lo que nos arroja dentro de un array

const llavesMapa2 = [...mapa2.keys()]
const valoresMapa2 = [...mapa2.values()]

*/

//clase 52 - WeakSets & WeakMaps
/*
//WeakSets
let ws = new WeakSet();

let obj1 = { name: "Objeto 1" };
let obj2 = { name: "Objeto 2" };

ws.add(obj1);
ws.add(obj2);

console.log(ws.has(obj1)); // true

// Si en algún momento dejamos de referenciar a obj1 en el resto del código...
obj1 = null; 
// El garbage collector puede eliminar ese objeto y, en consecuencia, se eliminará de ws.

//WeakMaps
let wm = new WeakMap();

let keyObj = { id: 1 };
wm.set(keyObj, "Información confidencial");

console.log(wm.get(keyObj)); // "Información confidencial"

// Si keyObj se vuelve inaccesible por el resto del programa...
keyObj = null;
// La asociación en wm puede desaparecer del todo gracias a la recolección de basura.
*/

//Clase 53 - Iterables & Iterators
/*
const iterable = [1,2,3,4,5]


//Accedemos al iterador del iterable
const iterator = iterable[Symbol.iterator]()

console.log(iterable)
console.log(iterator)
//metodo .next() va pasando el iterador hacia su siguiente valor
//devuelve un objeto con dos valores {value: "valor", done: true||false}
console.log(iterator.next())
//console.log(iterator.next())
//console.log(iterator.next())
//console.log(iterator.next())
//console.log(iterator.next())
//console.log(iterator.next())

let next = iterator.next()

while (!next.done){
    console.log(next.value)
    next = iterator.next()
}
*/

//clase 54 - Generators
/*
function* iterable (){
    yield "hola"
    console.log("hola consola")
    yield "hola 2"
    console.log("Seguimos con más instrucciones de nuestro codigo")
    yield "hola 3"
    yield "hola 4"
}

let iterador = iterable()

//console.log(iterador)
//console.log(iterador.next())
//console.log(iterador.next())

//esta es otra forma de iterar sobre el iterador
for(let y of iterador){
    console.log(y)
}

const arr = [...iterable()]
console.log(arr)

function cuadrado(valor){
    setTimeout(()=>{
        console.log({valor, resultado: valor*valor})
    },Math.random()*3000)

    return{valor, resultado: valor * valor}
}

function* generador(){
    console.log("inicia generator")
    yield cuadrado(0)
    yield cuadrado(1)
    yield cuadrado(2)
    yield cuadrado(3)
    yield cuadrado(4)
    yield cuadrado(5)
    console.log("termina generador")

}

let gen = generador()

for(let y of gen){
    console.log(y)
}
*/

//Clase 55 - Proxies
