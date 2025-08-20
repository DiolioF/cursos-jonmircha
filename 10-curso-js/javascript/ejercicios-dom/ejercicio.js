const $boton = document.querySelector(".button"),
      $menu  = document.getElementById("menu"),
      $padre = document.getElementById("padre-secciones")



    
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