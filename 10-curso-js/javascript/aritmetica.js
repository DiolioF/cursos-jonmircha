import saludar from "./constantes"

export function multiplicar(a,b){
    return a * b
}

function sumar(a,b){
    return a + b
}

function restar(a,b){
    return a - b
}

export const aritmetica = {
    sumar,
    restar
}

export function Saludar(){
    console.log("hola putas")
}

export default class saludar{
    constructor(){
        console.log("hola clases en modulos")
    }
}

 