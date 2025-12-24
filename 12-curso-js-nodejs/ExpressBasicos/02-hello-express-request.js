import express from "express"

const app = express() //Debemos definir la constante app con la funcion express

app.get("/",(req,res)=>{
    res.end("<h1>Hola mundo desde Express.js</h1>")  
})

app.get("/user/:id-:name-:age",(req,res)=>{
    res.set({"content-type": "text/html; charset=utf-8"})
    res.end(`
        <h1>
            ${req.params.name}, Bienvenidos a Express.js. Tu id es ${req.params.id} y Tienes ${req.params.age} años.
        </h1>
    `)
})

app.get("/search",(req,res)=>{
    res.set({"content-type": "text/html; charset=utf-8"})
    res.end(`
        <h1>
            ${req.query.name}, Bienvenidos a Express.js. Tu id es ${req.query.id} y Tienes ${req.query.age} años.
        </h1>
    `)
})




app.listen(3000,()=> console.log("Iniciando Express desde http://localhost:3000"))