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

//Clase 34