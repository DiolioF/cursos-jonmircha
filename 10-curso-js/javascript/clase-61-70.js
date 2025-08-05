//Clase 61 - DOM: Introduccion
/*
console.log("Elementos del Documento")

console.log(document)
console.log(document.head)
console.log(document.body)
console.log(document.documentElement)
console.log(document.doctype)
console.log(document.characterSet)
console.log(document.title)
console.log(document.links)
console.log(document.images)
console.log(document.forms)
console.log(document.styleSheets)
console.log(document.scripts)
setTimeout(() => {
    console.log(document.getSelection().toString())
}, 3000); 
*/

//Clase 62 - Dom: Nodos, elementos y selectores
/*
console.log(document.getElementById("menu"))
console.log(document.querySelector("#menu"))
console.log(document.querySelectorAll("a"))
console.log(document.querySelectorAll("a").length)
document.querySelectorAll("a").forEach(el => console.log(el))
console.log(document.querySelector("#menu li"))
console.log(document.querySelectorAll("#menu li"))
*/

//Clase 63 - Dom: Atributos y Data-Attributes
/*
console.log(document.documentElement.lang)
console.log(document.documentElement.getAttribute("lang"))
console.log(document.querySelector(".link-dom").href)
console.log(document.querySelector(".link-dom").getAttribute("href"))

document.documentElement.lang = "en"

console.log(document.documentElement.getAttribute("lang"))

document.documentElement.setAttribute("lang","ES-AR")

console.log(document.documentElement.getAttribute("lang"))

const $linkDOM = document.querySelector(".link-dom")

$linkDOM.setAttribute("target","_blank")
$linkDOM.setAttribute("href","https://youtube.com/jonmircha")
$linkDOM.setAttribute("rel","noopener")

console.log($linkDOM.hasAttribute("rel"))
$linkDOM.removeAttribute("rel")
console.log($linkDOM.hasAttribute("rel"))

//Data-Attributes

console.log($linkDOM.getAttribute("data-description"))
console.log($linkDOM.dataset)
console.log($linkDOM.dataset.description)
$linkDOM.setAttribute("data-description","Modelo de Objeto del Documento")
console.log($linkDOM.dataset.description)
$linkDOM.dataset.description = "Suscribete a mi canal y comparte"
console.log($linkDOM.dataset.description)
console.log($linkDOM.hasAttribute("data-id"))
$linkDOM.removeAttribute("data-id")
console.log($linkDOM.hasAttribute("data-id"))
*/

//Clase 64 - Dom: Estilos y variables CSS
/*
const $linkDOM = document.querySelector(".link-dom")

console.log($linkDOM.style)

console.log($linkDOM.getAttribute("Style"))
console.log($linkDOM.style.backgroundColor)
console.log($linkDOM.style.color)
console.log(getComputedStyle($linkDOM))
console.log(getComputedStyle($linkDOM).getPropertyValue("color"))

$linkDOM.style.setProperty("text-decoration","none")
$linkDOM.style.setProperty("display","block")
$linkDOM.style.width = "50%"
$linkDOM.style.textAlign = "center"
$linkDOM.style.margin = "auto"
$linkDOM.style.padding = "1rem"
$linkDOM.style.borderRadius = ".5rem"

console.log($linkDOM.style)
console.log($linkDOM.getAttribute("style"))
console.log(getComputedStyle($linkDOM))

//Variables CSS - Custom Properties CSS

const $html = document.documentElement,
      $body = document.body

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color")
let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color")

console.log(varDarkColor, varYellowColor)

$body.style.backgroundColor = varDarkColor
$body.style.color = varYellowColor

$html.style.setProperty("--dark-color","#000")

varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color")

$body.style.setProperty("background-Color",varDarkColor)
*/

//Clase 65 - Clases CSS
/*
const $card = document.querySelector(".card")

console.log($card)
console.log($card.className)
console.log($card.classList)
console.log($card.classList.contains("rotate-45"))
$card.classList.add("rotate-45")
console.log($card.classList.contains("rotate-45"))
console.log($card.className)
console.log($card.classList)

$card.classList.remove("rotate-45")

$card.classList.toggle("rotate-45")
$card.classList.replace("rotate-45","rotate-135")
$card.classList.add("opacity-80","sepia")
$card.classList.remove("opacity-80","sepia")
$card.classList.toggle("opacity-80","sepia")
*/
/*
const $whatISDom = document.getElementById("que-es")

console.log($whatISDom)

let text = `
    <p>
    El modelo de Objetos del Documento (Document object Model) es una API para documentos HTML y XML
    </p>
    <p>
    El DOM no es parte de las especificaciones de javascript, es una API para los navegadores
    </p>
`

$whatISDom.textContent = text 
$whatISDom.innerHTML = text
$whatISDom.outerHTML = text
*/


//Clase 67 - Dom traversing
/*
const $cards = document.querySelector(".cards")

console.log($cards)

console.log($cards.children) //HTMLCollection con Elementos
console.log($cards.children[2]) //Seleccionasmos al que nos interese de la coleccion
console.log($cards.parentElement) //nos muestra el padre de la etiqueta seleccionada
console.log($cards.firstElementChild) //Nos selecciona el primer elemento hijo
console.log($cards.lastElementChild) //nos selecciona el ultimo elemento hijo
console.log($cards.previousElementSibling) //Elemento hermano previo
console.log($cards.nextElementSibling) //Elemento hermano proximo
console.log($cards.children[3].closest("section")) //Nos devuelve el elemento mas cercano con esa etiqueta
*/

//Clase 68 - Dom: creando elementos y fragmentos
/*
const $figure = document.createElement("figure"),
      $img = document.createElement("img"),
      $figcaption = document.createElement("figcaption"),
      $figcaptionText = document.createTextNode("FOTO 6"),
      $cards = document.querySelector(".cards"),
      $figure2 = document.createElement("figure")

$img.setAttribute("src","https://placehold.co/200x200")
$img.setAttribute("alt","foto 200x200")

$figure.classList.add("card")

$figcaption.appendChild($figcaptionText)

$figure.appendChild($img)
$figure.appendChild($figcaption)

$cards.appendChild($figure)

$figure2.innerHTML = `
<img src="https://placehold.co/200x200">
<figcaption>Foto 7</figcaption>
`

$figure2.classList.add("card")
$cards.appendChild($figure2)

const estaciones = ["primavera","verano","otoño","invierno"],
    $ul = document.createElement("ul")

document.body.appendChild($ul)

estaciones.forEach(el => {
    const $li = document.createElement("li")
    $li.textContent = el
    $ul.appendChild($li)
})

const continentes = ["Africa","America","Asia","Europa","Oceania"],
    $ul2 = document.createElement("ul")

    document.body.appendChild($ul2)
    $ul2.innerHTML = ""
    continentes.forEach(el => $ul2.innerHTML += `<li>${el}</li>`)

//Fragmentos del dom

const meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]

const $ul3 = document.createElement("ul"),
      $frag = document.createDocumentFragment()

meses.forEach(el => {
    const $li = document.createElement("li")
    $li.textContent = el
    $frag.appendChild($li)
})

$ul3.appendChild($frag)

document.body.appendChild($ul3)
*/

//Clase 69 - DOM: Template HTML
/*
const $cards = document.querySelector(".cards"),
      $template = document.getElementById("template-card").content,
      $fragment = document.createDocumentFragment(),
      cardContent =[
        {title:"foto 1",
         img: "https://placehold.co/200x200"},
         {title:"foto 2",
         img: "https://placehold.co/200x200"},
         {title:"foto 3",
         img: "https://placehold.co/200x200"},
         {title:"foto 4",
         img: "https://placehold.co/200x200"},
         {title:"foto 5",
         img: "https://placehold.co/200x200"},
         {title:"foto 6",
         img: "https://placehold.co/200x200"},
        ]

cardContent.forEach(el=>{
    $template.querySelector("img").setAttribute("src",el.img)
    $template.querySelector("img").setAttribute("alt",el.title)
    $template.querySelector("figcaption").textContent = el.title

    let $clone = document.importNode($template,true)
    $fragment.appendChild($clone)
})

$cards.appendChild($fragment)
*/

//Clase 70 - DOM: Modificiando Elementos (OLD Style)

const $cards = document.querySelector(".cards"),
      $newCard = document.createElement("figure"),
      $cloneCards = $cards.cloneNode(true)

$newCard.innerHTML = `
 <img src="https://placehold.co/200x200" alt="any">
 <figcaption>Any</figcaption>
`

$newCard.classList.add("card")

//Reemplazar uun nodo:
//$cards.replaceChild($newCard,$cards.children[2])
//$cards.insertBefore($newCard,$cards.firstElementChild)
//$cards.removeChild($cards.lastElementChild)

document.body.appendChild($cloneCards)