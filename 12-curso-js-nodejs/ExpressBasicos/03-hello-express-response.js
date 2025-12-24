import express from "express"

const app = express() //Debemos definir la constante app con la funcion express

app.get("/",(req,res)=>{
    //res.end("<h1>Hola mundo desde Express.js con el método send</h1>")
    res.send("<h1>Hola mundo desde Express.js con el método send</h1>")
})

app.get("/json",(req,res)=>{
    res.json({
        name:"jon",
        edad: 39,
        youtube: "Jonmircha"
    })
})

app.get("/archivo",(req,res)=>{
    res.sendFile(resolve("index.html"))
})

app.get("/plantilla",(req,res)=>{
    res.render("plantilla")
})

app.get("/jonmircha",(req,res)=>{
    //res.send("<h1>Bienvenidos a jonmircha.com</h1>")
    res.redirect(301, "https://jonmircha.com")
})


app.listen(3000,()=> console.log("Iniciando Express desde http://localhost:3000"))