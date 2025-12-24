import {readFileSync, writeFileSync} from "fs"
import { createInterface } from "readline"
import chalk from "chalk"
import { PassThrough } from "stream"

const tasks = []
const DB_FILE = "tasks.txt"

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
})

function displayMenu(){
    console.log(chalk.yellow.bold("🦊🦊🦊🦊🦊To Do APP🦊🦊🦊🦊🦊"))
    console.log("1. Agregar Tarea")
    console.log("2. Listar Tareas")
    console.log("3. Completar Tarea")
    console.log("4. Salir")
}

function loadTasks(){
    try{
        const data = readFileSync(DB_FILE, "utf-8")
        const lines = data.split("\n")
        tasks.length = 0

        lines.forEach( line => {
            if(line.trim() !== ""){
                const [task,completed] = line.split("|")
                tasks.push({task, completed: completed === true})
            }
        })

        console.log(chalk.green.bold("Las tareas se han cargado desde la BD \n"))
    }catch(err){
        console.log(chalk.green.bold("No hay tareas por hacer \n"))
    }   
}

function saveTask(){
    const data = tasks.map(task => `${task.task} | ${task.completed}`).join("\n")
    writeFileSync(DB_FILE,data, "utf-8")

}

function addTask(){
    rl.question("Escribe la tarea: ", (task) =>{
        tasks.push({task, completed: false}) 
        console.log(chalk.green.bold("Tarea agregada con Exito"))
        saveTask
        displayMenu()
        chooseOption()
        console.log(tasks)
    })
}

function listsTasks(){
    console.log(chalk.yellow.bold("\n🦊🦊🦊🦊🦊Tareas🦊🦊🦊🦊🦊"))

    if(tasks.length == 0){
        console.log(chalk.bgGreen("NO hay tareas por hacer 😊"))
    }else{
        tasks.forEach((tsk,idx) =>{
            let status = tsk.completed ? "✅" : "❌"
            console.log(chalk.blueBright(`${idx + 1} - ${status} ${tsk.task}`))
        })}
    displayMenu()
    chooseOption()
}

function completeTask(){
    rl.question(chalk.bgMagentaBright("Digita el numero de la tarea a compeltar: "),(taskNumber) => {
        const index = parseInt(taskNumber) - 1
        if(index >= 0 && index < tasks.length){
            tasks[index].completed = true
            saveTask()
            console.log(chalk.green.bold("Tarea marcada con exito ✅\n\n"))
        }else{
            console.log(chalk.red.bold("Numero de Tarea invalido ❌\n\n"))
        }
        
    })
}


function chooseOption(){
    rl.question("Digita el numero de tu opcion: ", (chioce)=>{
        switch(chioce){
            case "1":
                addTask()
                break;
            case "2":
                listsTasks()
                break;
            case "3":
                completeTask()
                break;
            case "4":
                console.log(chalk.yellow("Adios 🖐️🦊"))
                rl.close()
                break;
            default:
                console.log(chalk.red("Opcion Invalida, Intenta Nuevamente \n"))
                displayMenu()
                chooseOption()
                break
        }
    })
}

loadTasks()
displayMenu()
chooseOption()

