import {createServer, get} from "http"

const hostname = "localhost",
      port = 3000,
      options = {
        host: "jonmircha.com",
        port: 80,
        path: "/cursos"
      }

let htmlCode = ""

const httpClient = res => {
    console.log(`El sitio ${options.host} ha respondido ${res.statusCode}. Mensaje: ${res.statusMessage}`)

    res.on("data", data => {
        htmlCode += data
        console.log(data)
    })
}

const httpError = err => {
    console.error(`
        el sitio ${options.host} no ha respondido. Codigo: ${err.code}. Mensaje: ${err.message}
        `)
}

const webServer = (req,res) => {
    res.statusCode = 200
    res.setHeader("Content-Type","text/html; chatset=utf-8")
    res.end(htmlCode)
}