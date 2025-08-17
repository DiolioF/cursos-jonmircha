//Clase 71 - Modificando Elementos (cool style)

/*
.insertAdjacent...

    .insertAdjacentElement(position, el) //Como appendChild o insertBefore
    .insertAdjacentHTML(position, html) //Como innerHtml
    .insertAdjacentText(position,text)  //Como textContent

    Posicoones:
     beforebegin (hermano anterior)
     afterbegin(primer hijo)
     beforeend (ultimo hijo)
     afterend  (hermano siguiente)
*/
/*
const $cards = document.querySelector(".cards"),
      $newCard = document.createElement("figure")

let   $contentCard = `
      <img src = "https://placehold.co/200x200" alt = "foto any">
      <figcaption></figcaption>
      `

      $newCard.classList.add("card")

      $newCard.insertAdjacentHTML("afterbegin",$contentCard)
      $newCard.querySelector("figcaption").insertAdjacentText("afterbegin","any")
      //$cards.insertAdjacentElement("afterbegin",$newCard)

      $cards.prepend($newCard)
      $cards.before($newCard)
      $cards.append($newCard)
      $cards.after($newCard)
*/

//Clase 72 - DOM - manejadores de Eventos

let holaMundo = () => {
    alert("Hola mundo")
    console.log(event)
}

function saludar(nombre = "@desconocido"){
    alert(`hola ${nombre}`)
}

let $semanticEvent = document.getElementById("evento-semantico")

$semanticEvent.onclick = holaMundo

$semanticEvent.onclick = (e) => {
    alert("Hola mundo manejador de Eventos Semanticos")
    console.log(e) 
}

const $eventoMultiple = document.getElementById("evento-multiple")

$eventoMultiple.addEventListener("click",holaMundo)
$eventoMultiple.addEventListener("click",(e) => {
    alert("Hola mundo Manejador de Eventos Multiple")
    console.log(e)
    console.log(e.type)
    console.log(e.target)
})

//Clase 73 - DOM - Eventos con parametros y remover eventos


//Envolvemos las funciones con parametros en una arrow function
$eventoMultiple.addEventListener("click", () => {
    saludar()
    saludar("valentin")
})

//Eliminar eventos de un elemento

const $removerEvento = document.getElementById("evento-remover")

const removerDobleClick = (e) => {
    alert(`removiendo el evento de tipo ${e.type}`)
    console.log(e)
    //remover
    $removerEvento.removeEventListener("dblclick", removerDobleClick)
    $removerEvento.setAttribute("disabled","true")
}

$removerEvento.addEventListener("dblclick", removerDobleClick)

//Clase 74 - DOM - Flujo de eventos

const $divsEventos = document.querySelectorAll(".eventos-flujos div"),
      $linkEventos = document.querySelector(".eventos-flujos a")

function flujoEventos(e){
    console.log(`Hola te saluda ${this}, el click lo origino ${e.target.className}`)
    //e.stopPropagation() //Metodo para deterner la propagacion
}
/*
$divsEventos.forEach((div) => {
    div.addEventListener("click",flujoEventos,{
        capture: false,
        once: true
)
})
*/
//Clase 75 - DOM: stopPropagation & preventDefault
/*
$divsEventos.forEach((div) => {
    div.addEventListener("click",flujoEventos)
})

//e.stopPropagation() //Metodo para deterner la propagacion

$linkEventos.addEventListener("click",e => {
    alert("hola, soy tu alumno digital")
    e.preventDefault()
})
*/
//Clase 76 - DOM: Delegacion de Eventos
/*
document.addEventListener("click",e => {
    console.log("Click en",e.target)

    if(e.target.matches(".eventos-flujos div")){
        flujoEventos(e)
    }

    if(e.target.matches(".eventos-flujos a")){
        alert("hola, soy tu alumno digital")
        e.preventDefault()
    }

})
//Clase 77 - BOM: Propiedades y Eventos
window.addEventListener('resize', () => {
  console.clear(); // Limpia la consola para no saturarla
  console.log("--- ¡El tamaño cambió! ---");
  console.log("Ancho Interno AHORA:", window.innerWidth);
  console.log("Ancho Externo AHORA:", window.outerWidth);
  console.log("Alto Interno AHORA:", window.innerHeight);
  console.log("Alto Externo AHORA:", window.outerHeight);
});

window.addEventListener("scroll",(e)=>{
    console.clear()                      
    console.log("Evento Scroll")
    console.log(window.scrollX)
    console.log(window.scrollY)
})

window.addEventListener("load", e=>{
    console.log("Evento load de la ventana")
    console.log(window.screenX)
    console.log(window.screenY)
    console.log(e)
})

document.addEventListener("DOMContentLoaded", (e) => {
    console.log("Evento DOMContentLoaded")
    console.log(window.screenX)
    console.log(window.screenY)
    console.log(e)
})

//Clase 78 - BOM: Metodos

const $btnAbrir = document.getElementById("abrir-ventana")
const $btnCerrar = document.getElementById("cerrar-ventana")
const $btnImprimir = document.getElementById("imprimir-ventana")

let ventana

$btnAbrir.addEventListener("click", e => {
    ventana = window.open("https://jonmircha.com/")
})
$btnCerrar.addEventListener("click", e => {
    ventana.close()
})
$btnImprimir.addEventListener("click", e => {
    window.print()
})
*/
//Clase 79 - BOM: Objetos: URL, Historial y Navegador
/*
console.log(location)
console.log(location.origin)
console.log(location.protocol)
console.log(location.host)
console.log(location.hostname)
console.log(location.port)
console.log(location.href)
console.log(location.hash)
console.log(location.pathname)
*/
/*
console.log(history)
history.back()
history.forward()
history.go()
*/

//Objeto navigator:

//console.log(navigator)