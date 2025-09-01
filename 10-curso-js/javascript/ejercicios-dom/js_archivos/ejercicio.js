import {$interfazReloj} from "./temporizador_module.js";
import { shortcuts } from "./teclado.js";
import countdown from "../js_archivos/cuenta_regresiva.js";
import desplazamientoArriba from "../js_archivos/boton_arriba.js";
import modo from "../js_archivos/dark_light.js"



const d = document,
      $boton = document.querySelector(".button"),
      $menu  = document.getElementById("menu"),
      $padre = document.getElementById("padre-secciones")


d.addEventListener("DOMContentLoaded", e => {
    countdown("countdown","May 26, 2026 00:01:00", "Feliz cumpleaños santi")
    desplazamientoArriba()
    modo()
})

    
const alternarMenu = () => {
    $menu.classList.toggle("transicion-burger")
}

const irSeccion = () => {
    $menu.classList.toggle("transicion-burger")
}


$boton.addEventListener("click",alternarMenu)

let seccion = 0

$menu.addEventListener("click", e => {
    if(e.target.matches("div") || e.target.matches("#menu h3")){
        seccion = e.target.className
        $menu.classList.toggle("transicion-burger")
        switch (seccion) {
            case "1":
                $padre.children[0].scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                })
                break;
            case "2":
                $padre.children[1].scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                })
                break;
            case "3":
                $padre.children[2].scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                })
                break;
            case "4":
                $padre.children[3].scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                })
                break;
            case "5":
                $padre.children[4].scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                })
                break;
            default:
                console.log("mal pulsado")
        }
    }
})

//LLamar temportizador despues del h3 "Seccion 1"

const $alarma = $interfazReloj()

const $primerDiv = document.getElementById("div-temp")

$primerDiv.append($alarma)

const tecladoVerificador = (e)=>{
    shortcuts(e);
} 

d.addEventListener("click", e => {
    let verificador;
    verificador = e.target.matches(".eventos-teclado") || e.target.matches(".eventos-teclado div")
    console.log(verificador)
    if(verificador){
        d.addEventListener("keydown", tecladoVerificador)
    }else{
        d.removeEventListener("keydown",tecladoVerificador)
    }
})


