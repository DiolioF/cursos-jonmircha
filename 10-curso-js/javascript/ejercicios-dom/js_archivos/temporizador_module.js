
function $interfazReloj(){
    const $alarma = document.createDocumentFragment()

    const $contenedorReloj = document.createElement("div")

    const $reloj = document.createElement("p")


    $contenedorReloj.style.setProperty("width","50%")
    $contenedorReloj.style.setProperty("margin","0 auto")
    $reloj.style.setProperty("text-align","center")
    $reloj.style.setProperty("font-size","2rem")


    const funcionIntercal = () => {const intervalo = setInterval(() => {
        let segundos = new Date()
        $reloj.textContent = `${segundos.getHours()}:${segundos.getMinutes()}:${segundos.getSeconds()}`
        $botonera.children[0].setAttribute("disabled","true")
        $botonera.children[1].addEventListener("click",()=>{
            $reloj.textContent = ""
            $botonera.children[0].disabled = false
            clearInterval(intervalo)
        })
    }, 100);}

    const sonido = new Audio('https://www.soundjay.com/clock/sounds/clock-ticking-2.mp3')



    const funcionSonar = () => {
        const tempSonar = setInterval(() => {
            sonido.play()
            $botonera.children[2].disabled = true
            $botonera.children[3].addEventListener("click",()=>{
                $botonera.children[2].disabled = false
                sonido.pause()
                sonido.currentTime = 0
                clearInterval(tempSonar)
            })
        }, 2000);
    }

    const botones = ["iniciar Reloj","Detener Reloj","Iniciar alarma","Detener Alarma"]

    const $botonera = document.createElement("div")

    $botonera.style.setProperty("display","flex")
    $botonera.style.setProperty("justify-content","space-evenly")

    botones.forEach(e=>{
        const $el = document.createElement("button")
        $el.insertAdjacentText("afterbegin",e)
        $botonera.appendChild($el)
    })

    $botonera.children[0].addEventListener("click",()=>{
        funcionIntercal()
    })

    $botonera.children[2].addEventListener("click",()=>{
        funcionSonar()
    })

    $contenedorReloj.prepend($botonera)

    $contenedorReloj.prepend($reloj)

    $alarma.appendChild($contenedorReloj)

    return $alarma
}


export {$interfazReloj}