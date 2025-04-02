//Clase 61 - DOM: Introduccion
/*

console.log("Elementos del Documento")
console.log(window.document)
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
setTimeout(()=>{
    console.log(document.getSelection().toString())
    //document.writeln("<h2>Hola mundo desde el DOM</h2>")
},4000)
*/

//Clase 62 - DOM: Nodos, elementos y selectores
/*
console.log(document.getElementsByTagName("li"))
console.log(document.getElementsByClassName("card"))
console.log(document.getElementsByName("nombre"))
console.log(document.getElementById("menu"))

//Recibe como parametro un selector valido de css (id,clase,elemento), aca si hay que especificar con . para clases, # para ids
console.log(document.querySelector("#menu"))
//QuerySelector solo va a traer al primer elemento que encuentre
console.log(document.querySelector("a"))
//Para ver todos podemos usar querySelectorAll
console.log(document.querySelectorAll("a"))
//Metodos que podemos utilizar con querySelectorAll():
//Obtener longitud
console.log(document.querySelectorAll("a").length)
//Iterar sobre el nodelist
document.querySelectorAll("a").forEach(e=>console.log(e))
//Extraer solo las posicion que pasemos entre []
console.log(document.querySelectorAll(".card")[1])
//Tambien podemos seleccionar por desendencia
console.log(document.querySelectorAll("#menu li"))
*/
/*
//Clase 63 - Atributos y Data-Attributes
//Atributos Normales
//Con esta notacion podemos obtener el valor de un atributo
console.log(document.documentElement.lang)
//Con el metodo .getAttribute("Atributo") tambien obtenemos el valor de un atributo
console.log(document.documentElement.getAttribute("lang"))
//La unica diferencia es que en algunos casos pueden llegar a devolver valores diferentes
console.log(document.querySelector(".link-dom").href)
console.log(document.querySelector(".link-dom").getAttribute("href"))


//Asi podemos cabiar el valor del atributocon la notacion del .
document.documentElement.lang = "en"
console.log(document.documentElement.lang)
//Con el metodo .setAttribute("atributo","nuevoValor") tambien podemos cambiar el valor del atributo
document.documentElement.setAttribute("lang","es-AR")
console.log(document.documentElement.getAttribute("lang"))

//Guardar elementos del DOM en variables para acortar la escritura
//Podemos usar tanto Const como let para guardarlos
//Por buenas practicas se pone $nombre para hacer ref a que guarda un elemento del dom
const $linkDom = document.querySelector(".link-dom")
console.log($linkDom)
console.log($linkDom.getAttribute("href"))

$linkDom.setAttribute("target","_blank")
$linkDom.setAttribute("rel","noopener")
$linkDom.setAttribute("href","https://www.youtube.com/jonmircha")
//el metodo .hasAttribute("atributo") nos arroja un booleano para saber si contiene el atributo
console.log($linkDom.hasAttribute("rel"))
//el metodo .removeAttribute("atributo") elimina el atributo
$linkDom.removeAttribute("rel")
console.log($linkDom.hasAttribute("rel"))

//Data-attributes
console.log($linkDom.getAttribute("data-description"))
//El .dataset nos arroja un DOMStringMap con todos los elementos data-
console.log($linkDom.dataset)
//para imprimir un unico valor con esta notacion
console.log($linkDom.dataset.description)
//Podemos modificar un valor tanto con .setAttribute 
$linkDom.setAttribute("data-description","Modelo de Objeto del Documento")
console.log($linkDom.dataset.description)
//Modificando con la notacion del .
$linkDom.dataset.description = "Suscribete al canal del buen jon"
console.log($linkDom.dataset.description)
//Tambien podes usar .hasAttribute() y .removeAttribute() con los data-attributes
console.log($linkDom.hasAttribute("data-id"))
$linkDom.removeAttribute("data-id")
console.log($linkDom.hasAttribute("data-id"))
*/

//Clase 64 - DOM: Estilos y Variables CSS
/*
const $linkDom = document.querySelector(".link-dom")
// .style nos devuelve una lista con los estilos de la etiqueta style de un elemento html
console.log($linkDom.style)
// tambien podemos acceder con .getAttribute("style"), pero es menos recomendado
console.log($linkDom.getAttribute("style"))
//Para acceder a los estilos de forma individual usamos .style.propiedad particular
console.log($linkDom.style.backgroundColor)
console.log($linkDom.style.color)
//Para obtener todos los estilos, pero de forma computada, es decir con los valores que le asigna el user-agent(navegador) por defecto usamos getComputedStyle(rutaDom)
console.log(window.getComputedStyle($linkDom))
//Para obtener algun valor en particular usamos getComputedStyle(rutaDom).getPropertyValue("prop")
console.log(getComputedStyle($linkDom).getPropertyValue("color"))
//Para modificar los estilos de alguna propiedad debemos usar el metodo:
// rutaDom.style.setProperty("propiedad","valor-a-setear")
$linkDom.style.setProperty("text-decoration","none")
$linkDom.style.setProperty("display","block")
$linkDom.style.width = "50%"
$linkDom.style.margin = "0px auto"
$linkDom.style.textAlign = "center"
$linkDom.style.padding = "1rem"
$linkDom.style.borderRadius = ".5rem"

console.log($linkDom.style)
console.log($linkDom.getAttribute("style"))
console.log(getComputedStyle($linkDom))

//Variables CSS - Custom Properties CSS

const $html = document.documentElement,
      $body = document.body 

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
    varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color")

console.log(varDarkColor,varYellowColor)

$body.style.backgroundColor = varDarkColor
$body.style.color = varYellowColor

$html.style.setProperty("--dark-color","#000")
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color")
$body.style.backgroundColor = varDarkColor
*/

//Clase 65 - DOM: Clases CSS
/*
const $card = document.querySelector(".card")

console.log($card)
//Devuelve el valor general del atributo class = "clase1 clase2"
console.log($card.className)
//Devuelve una especie de array con las clases guardadas por separado 
console.log($card.classList)
//Consultar si el elemento contiene la clase indicada .classlist.contains("rotate 45")
console.log($card.classList.contains("rotate-45"))
//Añadir una clase al elemento classList.add("nombreClase")
$card.classList.add("rotate-45")
console.log($card.classList)
//removemos una clase con .classList.remove("nombreClase")
$card.classList.remove("rotate-45")
// .classList.toggle("nombreCLASE") actua como un interruptor de una clase, si el elemento tiene la clase se la quita y sino la tiene se la agrega
$card.classList.toggle("rotate-45")
//Para reemplazar una clase css por otra: classList.replace("NOmbreClase","clasereemplazo")
$card.classList.replace("rotate-45","rotate-135")
//Usando esto metodos podemos agregar, quitar, hacer toggle a mas de una clase a la vez
$card.classList.add("opacity-80","sepia")
*/

//Clase 66 - DOM: Texto y HTML

