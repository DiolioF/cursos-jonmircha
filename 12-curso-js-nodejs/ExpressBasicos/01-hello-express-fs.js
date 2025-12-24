import express from "express"
import {resolve} from "path"

const app = express() //Debemos definir la constante app con la funcion express

app.get("/",(req,res)=>{
    //res.end("<h1>Hola mundo desde Express.js</h1>")
    res.sendFile(resolve("index.html"))
})


app.listen(3000,()=> console.log("Iniciando Express desde http://localhost:3000"))