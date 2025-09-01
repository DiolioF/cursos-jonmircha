
const d = document

export default function  countdown(id, limitDate, finalMessage){
    let $countdown = d.getElementById(id),
          countdownDate = new Date(limitDate).getTime()

    let countdownTempo = setInterval(()=>{
        let now = new Date().getTime(),
        limitTime = countdownDate - now,
            days = parseInt(limitTime / (1000 * 60 * 60 * 24)),
            hours = parseInt((limitTime % (1000 * 60 * 60 * 24)) / (1000*60*60)) ,
            minutes = parseInt(((limitTime % (1000 * 60 * 60 * 24)) % (1000*60*60)) / (1000 * 60)),
            seconds = parseInt((((limitTime % (1000 * 60 * 60 * 24)) % (1000*60*60)) % (1000 * 60)) / 1000 )

        $countdown.innerHTML = `<h4 class="cuenta-regresiva">Faltan: ${days} dias ${hours} horas ${minutes} minutos ${seconds} segundos</h4>`
        
        if (limitTime < 0){
            clearInterval(countdownTempo)
            $countdown.innerHTML = `<h4 class="cuenta-regresiva">${finalMessage}<h4>`
        }
    },1000)
}