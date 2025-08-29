const d = document

const extraerNumero = (string) => {
    let number = ""
    const separador = string.split(""),
          expDig = /\d/
    for (let e of separador) {
        if(e == ".") break
        if(expDig.test(e)){
            number = number + e
        }
    }
    number = parseInt(number)
    return number
}




export function shortcuts(e){
    const $circulo = d.querySelector(".eventos-teclado div")
    let valorVertical = getComputedStyle($circulo).getPropertyValue("top"),
        valorHorizontal = getComputedStyle($circulo).getPropertyValue("left"),
        num
    if(e.key == "ArrowDown"){
        e.preventDefault()
        num = extraerNumero(valorVertical)
        num--
        num--
        num--
        if(num > 220)num = 220
        $circulo.style.setProperty("top",`${num}px`)
        
    }

    if(e.key == "ArrowUp"){
        e.preventDefault()
        num = extraerNumero(valorVertical)
        num++
        num++
        num++
        if(num > 220)num = 220
        $circulo.style.setProperty("top",`${num}px`)
    }

    if(e.key == "ArrowLeft"){
        num = extraerNumero(valorHorizontal)
        num--
        num--
        num--
        if(num > 640)num = 640
        $circulo.style.setProperty("left",`${num}px`)
    }

    if(e.key == "ArrowRight"){
        num = extraerNumero(valorHorizontal)
        num++
        num++
        num++
        if(num > 640)num = 640
        $circulo.style.setProperty("left",`${num}px`)
    }



}

//console.log(e.type)
//console.log(e.key)
//console.log(e.keyCode)
//console.log(e.ctrlKey)
//console.log(e.altKey)
//console.log(e.shiftKey)
//console.log(e)