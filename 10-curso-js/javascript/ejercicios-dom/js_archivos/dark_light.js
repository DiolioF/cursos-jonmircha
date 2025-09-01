const d = document

export default function modo(){
    const $imgModo = document.querySelector(".modo img"),
          $head = d.querySelector("head")
    
    d.addEventListener("click", e => {
        if(e.target.matches(".modo") || e.target.matches(".modo img")){
            if($imgModo.getAttribute("src") == "img/moon.svg"){
                $imgModo.setAttribute("src","img/sun.svg")
                $head.insertAdjacentHTML("beforeend",`<style id="modo-noche">*{color: white; background-color: silver}</style>`)
            }else{
                const $night = d.getElementById("modo-noche")
                $imgModo.setAttribute("src","img/moon.svg")
                $head.removeChild($night)
            }
        }
    })
}