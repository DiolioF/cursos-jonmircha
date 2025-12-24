import { get } from "https"

const urlSite = {
    hostname: "jonmircha.com",
    port: 443,
    path: "/cursos"
}

get(urlSite, res => {
    console.log(`El sitio ${urlSite.hostname} ha respondido. Codigo: ${res.statusCode}. Mensaje: ${res.statusMessage}.`)
}).on("error", (err)=>{
    console.log(`El sitio ${urlSite.hostname} no ha respondido. Codigo: ${res.Code}. Mensaje: ${res.Message}.`)
})