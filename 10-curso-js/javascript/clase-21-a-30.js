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

//Clase 22 - Prototipos

*//*
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
*/

// Funciones Constructoras

//funcion constructora donde asignamos los metodos al prototipo, no a la funcion como tal.
/*
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

//clase 23 - Herencia prototipica
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

class Animal{
    //El constructor es un metodo especial que se ejecuta en el momento de instaciar la clase
    constructor(nombre,genero){
        //Atributos
        this.nombre = nombre
        this.genero = genero 
    }

    sonar(){
        console.log("Hago sonidos porque estoy vivo")
        };
    
    saludar(){
            console.log(`Hola, me llamo ${this.nombre}`)
        }
}

//Herencia

class Perro extends Animal{
    constructor(nombre,genero,tamanio){
        //Con el metodo super() se manda a llamar el constructor de la clase padre
        super(nombre,genero)
        this.tamanio = tamanio
    }

    sonar(){
        console.log("Soy un perro y mi sonido es un ladrido")
    }

    ladrar(){
        console.log("Guauuuu Guauuuu!!!!")
    }

}


const mimi = new Animal("Mimi", "Hembra"),
      scooby = new Perro("Scooby","Macho","gigante")

console.log(mimi)
mimi.sonar()
mimi.saludar()

console.log(scooby)
scooby.sonar()
scooby.ladrar()
scooby.saludar()



