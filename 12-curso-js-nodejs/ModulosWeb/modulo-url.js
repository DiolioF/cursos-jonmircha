import { parse } from "url"

const urlString = "https://www.ejemplo.com:8080/ruta?parametro1=valor1&parametro2=valor2"

const parseUrl = parse(urlString,true)

console.log("Procolo: ",parseUrl.protocol)
console.log("Hostname: ",parseUrl.hostname)
console.log("Pathname: ",parseUrl.pathname)
console.log("parametros de consulta: ",parseUrl.query)