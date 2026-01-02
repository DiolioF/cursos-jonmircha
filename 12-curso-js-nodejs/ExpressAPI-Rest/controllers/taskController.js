let tasks = [
    { id: 1, title: "Tarea 1", complete: false},
    {id: 2, title: "Tarea 2", complete: true}
]

const getAllTasks = (req,res) => {
    res.json({tasks})
}

const addTask = (req,res) => {
    let {title} = req.body
    let id = tasks.length + 1
    tasks.push({id, title, complete: false})
    res.json({err:false,message: "Tarea Agregada"})
}

const getTask = (req,res) => {
    let id = parseInt(req.params.id)
    let taskIndex = tasks.findIndex(task => task.id === id)
    

    if(taskIndex === -1){
        res.status(404).json({err:true,message: "Tarea no encontrada"})
    }else{
        res.json({err:false,task: tasks[taskIndex]})
    }
}

const editTask = (req,res) => {
    let id = parseInt(req.params.id)
    let taskIndex = tasks.findIndex(task => task.id === id)
    

    if(taskIndex === -1){
        res.status(404).json({err:true,message: "Tarea no encontrada"})
    }else{
        tasks[taskIndex].title = req.body.title
        res.json({err:false,message:"Tarea Editada"})
    }
}

const completeTask = (req,res) => {
    let id = parseInt(req.params.id)
    let taskIndex = tasks.findIndex(task => task.id === id)

    if (taskIndex){
        taskIndex.complete = true
        res.json({err:false,message:"Tarea Completada"})
    }else{
        res.status(404).json({err:true,message:"Tarea no encontrada"})
    }
}

const uncompleteTask = (req,res) => {
    let id = parseInt(req.params.id)
    let taskIndex = tasks.findIndex(task => task.id === id)

    if (task){
        task.complete = false
        res.json({err:false,message:"Tarea no Completada"})
    }else{
        res.status(404).json({err:true,message:"Tarea no encontrada"})
    }
}

const deleteTask = (req,res) => {
    let id = parseInt(req.params.id)
    let taskIndex = tasks.findIndex(task=> task.id === id)

    if(taskIndex === -1){
        res.status(404).json({err:true,message:"Tarea no encontrada"})
    }else{
        tasks.splice(taskIndex,1)
        res.json({err: false, message: "Tarea eliminada"})
    }
        
}



export default {
    getAllTasks,
    addTask,
    getTask,
    editTask,
    completeTask,
    uncompleteTask,
    deleteTask
}