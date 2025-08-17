const $mainTitle = document.getElementById("main-title"),
      $addButton = document.getElementById("add-item-btn")
//console.log($mainTitle, $addButton)

const $descriptions = document.querySelectorAll(".description")
//console.log($descriptions)
//console.log($descriptions[0].textContent)

const $liALL = document.querySelectorAll("li")
//console.log($liALL.length)

const $primerItem = document.querySelector(".item")
const $listaItem = document.querySelectorAll(".item")
const $input = document.querySelector("#text-input")

//console.log($primerItem,$listaItem,$input)


$mainTitle.innerText = "Mi practica DOM"

console.log($mainTitle.textContent)

console.log($descriptions[1].getHTML)

$descriptions[1].innerHTML = `Este Parrafo ahora tiene <b>Negrita</b>`

document.getElementById("main-image").setAttribute("src","https://placehold.co/300x300")
document.getElementById("main-image").setAttribute("alt","Una imagen mas grande")

console.log(document.querySelector("#main-image").getAttribute("src"))

$mainTitle.classList.add("highlight")

$liALL[2].style.backgroundColor = "lightblue"

setTimeout(()=>{
    $mainTitle.classList.remove("highlight")
},2000)

const $newLi = document.createElement("li"),
      text = `Elemento 4`
$newLi.textContent = text
$newLi.classList.add("item")
document.getElementById("item-list").appendChild($newLi)

const $im = document.getElementById("main-image")

console.log($im.getAttribute("src"),$im.getAttribute("alt"))

$im.setAttribute("src","https://placehold.co/250x150")
$im.setAttribute("alt","imagen de ejemplo modificada")

console.log($im.hasAttribute("title"))
$im.removeAttribute("alt")
console.log($im.hasAttribute("alt"))

const $divs = document.querySelectorAll("div")


let $divContainer

$divs.forEach(el=>{
    el.classList.forEach(el1 => {if(el1 == "container"){
        $divContainer = el
    }})
})

$divContainer.setAttribute("data-version","1.0")
$divContainer.setAttribute("data-owner","Valentin")

console.log($divContainer.getAttribute("data-version"))
console.log($divContainer.dataset.owner)

$liALL[0].setAttribute("data-status","pending")
console.log($liALL[0].dataset.status)

$liALL[0].setAttribute("data-status","completed")
console.log($liALL[0].dataset.status)

console.log(getComputedStyle($mainTitle).color)
console.log(getComputedStyle($mainTitle).fontFamily)

const $controlsID = document.getElementById("controls")
$controlsID.style.backgroundColor = "#34495e"
$controlsID.style.padding = "1rem"
$controlsID.style.borderRadius = "8px"


$liALL[0].classList.add("highlight")
$liALL[2].classList.add("highlight")

let primaryColor = getComputedStyle(document.documentElement).getPropertyValue("--primary-color")
let secondaryColor = getComputedStyle(document.documentElement).getPropertyValue("--secondary-color")

const $htmlElement = document.documentElement

$htmlElement.style.setProperty("--primary-color","white")
$htmlElement.style.setProperty("--highlight-bg","lightblue")

console.log($controlsID.classList)
$controlsID.classList.add("card")
$controlsID.classList.add("shadow")

console.log($controlsID.classList.contains("shadow"))

console.log($liALL[0].className)
$liALL[0].classList.remove("highlight")
console.log($liALL[0].className)

console.log($im.classList)
$im.classList.toggle("rounded-corners")
console.log($im.classList)
$im.classList.toggle("rounded-corners")
console.log($im.classList)
$liALL[2].classList.replace("highlight","special-item")
console.log($liALL[2].classList)

let miContenido = "<h3>¡Hola, Mundo!</h3><p>Este es un párrafo de prueba.</p>"

const $contentArea = document.getElementById("content-area")
$contentArea.textContent = miContenido

let miHTML = `
    <h3>Ahora sí!!</h3>
    <p>Este contenido SI se renderiza como html</p>
`

 $contentArea.innerHTML = miHTML

 let nuevoElemento = '<div class="alert"><strong>¡Cuidado!</strong> El párrafo fue reemplazado.</div>'

 const $segParrafo = document.querySelectorAll(".description")[1]

 $segParrafo.outerHTML = nuevoElemento

//Clase 67

const $inputID = document.getElementById("text-input")

console.log($inputID.parentElement.parentElement)

console.log($liALL[1].previousElementSibling)

const $itemListID = document.getElementById("item-list")

console.log($itemListID.children)
console.log($itemListID.firstElementChild)
console.log($itemListID.lastElementChild)

const $buttonID = document.getElementById("add-item-btn")

console.log($buttonID.closest(".container"))

//Clase 68: Creando Elementos y Fragmentos

const $figure = document.createElement("figure"),
      $img = document.createElement("img"),
      $figcaption = document.createElement("figcaption")

$img.setAttribute("src","https://placehold.co/400x400")
$img.setAttribute("alt","patas")

const $nodoDeTxT = document.createTextNode("Paisaje")

$figure.appendChild($img)
$figcaption.appendChild($nodoDeTxT)
$figure.appendChild($figcaption)

const $creationArea = document.getElementById("creation-area")

$creationArea.appendChild($figure)

const planetas = ["Mercurio", "Venus", "Tierra", "Marte"]

const $ulPlanets = document.createElement("ul")

planetas.forEach(el=>{
    let $liPlaneta = document.createElement("li")
    $liPlaneta.textContent = el
    $ulPlanets.appendChild($liPlaneta)
})

$creationArea.appendChild($ulPlanets)

const lunas = ["Luna", "Fobos", "Deimos", "Europa"]

const $ul2 = document.createElement("ul")

const $DOMFragment = document.createDocumentFragment()

lunas.forEach(el => {
    let $li2 = document.createElement("li")
    $li2.textContent = el
    $DOMFragment.appendChild($li2)
})

$ul2.appendChild($DOMFragment)

$creationArea.appendChild($ul2)

const $cardContainer = document.getElementById("card-container")

let  $templateID = document.querySelector("template").content

const $frag = document.createDocumentFragment()

let arrayCards = [
    {
        src: "https://placehold.co/400x400",
        alt: "figura 10",
        title: "figura 10"
    },
    {
        src: "https://placehold.co/300x300",
        alt: "figura 20",
        title: "figura 20"
    },
    {
        src: "https://placehold.co/200x200",
        alt: "figura 30",
        title: "figura 30"
    }
]

arrayCards.forEach(el=>{
    let $clonTemp = document.importNode($templateID,true)
    $clonTemp.firstElementChild.children[0].setAttribute("src",el.src)
    $clonTemp.firstElementChild.children[0].setAttribute("alt",el.alt)
    $clonTemp.firstElementChild.lastElementChild.textContent = el.title
    $frag.appendChild($clonTemp)
})

$cardContainer.appendChild($frag)

const $h2 = document.createElement("h1")
$h2.textContent = "Lista de Items"

const $ul3 = document.getElementById("item-list"),
      $containerUl3 = $ul3.closest("#container")

$ul3.parentElement.insertBefore($h2,$ul3)


const $p = document.createElement("p")
$p.textContent = "Este parrafo ha sido reemplazado"

const $primerParrafo = document.querySelector(".description")
$primerParrafo.parentElement.replaceChild($p,$primerParrafo)


const $clonCompletoUL = $ul3.cloneNode(true)

const tituloClon = document.createElement("h2")
tituloClon.textContent = "lista Clonada"

const $traversingID = document.getElementById("traversing-practice")

$traversingID.appendChild(tituloClon)
$traversingID.appendChild($clonCompletoUL)

$ul3.insertAdjacentHTML("afterbegin","<li>Primer elemento (insertado)</li>")

const $primerElemntInsertado = $ul3.firstElementChild

$primerElemntInsertado.classList.add("item")

$mainTitle.insertAdjacentText("beforeend"," estrellitas")

$mainTitle.insertAdjacentText("afterend","(Esto es un subtitulo)")

const $hr = document.createElement("hr")

document.getElementById("controls").insertAdjacentElement("beforebegin",$hr)



document.querySelector(".container").prepend("hola desde prepend")
document.querySelector(".container").append("adios desde append")

$im.before(" --- imagen principal abajo ---")

$im.after(" --- fin de la imagen ---")

