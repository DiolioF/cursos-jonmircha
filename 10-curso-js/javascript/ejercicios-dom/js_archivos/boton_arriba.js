const d = document
export default function desplazamientoArriba(){
    const $arrow = d.querySelector(".arrow")
    d.addEventListener("scroll", () => {
        if(window.scrollY > 800){
            if(!$arrow.classList.contains("hidden"))$arrow.classList.toggle("hidden")
        }else{
            if($arrow.classList.contains("hidden"))$arrow.classList.toggle("hidden")
        }
    })
    d.addEventListener("click", e => {
        if(e.target.matches(".arrow") || e.target.matches(".arrow img")){
             document.getElementById("padre-secciones").children[0].scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                })
        }
    })
}