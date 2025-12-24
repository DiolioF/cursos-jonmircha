import {createServer} from "http"

const server = createServer((request,response)=>{
    if(request.url === "/"){
        response.writeHead(200, { "Content-Type" : "text/html; charset=utf-8" })
        response.end("<h1>HOME</h1>")

    }else if(request.url === "/hola"){
        response.writeHead(200, { "Content-Type" : "text/html; charset=utf-8" })
        response.end("<h1>¡Hola mundo!</h1>")
    }else if(request.url === "/kenai"){
        response.writeHead(200, { "Content-Type" : "text/html; charset=utf-8" })
        response.end("<h1>¡Hola soy Kenai!</h1>")
    }else{
        response.writeHead(404, { "Content-Type" : "text/html; charset=utf-8" })
        response.end("<h1>¡NOT FOUND!</h1>")
    }


})

server.listen(3000, "127.0.0.1", () => {
    console.log("Servidor web en ejecucion en http://127.0.0.1:3000")
}) //Por que puerto escuchamos, el segundo parametro es un loopback de mi pc para que no comparta fuera de ella y el 3ro es una callback para indicar que funciono bien