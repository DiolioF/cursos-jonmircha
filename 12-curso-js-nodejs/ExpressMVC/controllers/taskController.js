let tasks = [
    { id: 1, title: "Tarea 1", complete: false},
    {id: 2, title: "Tarea 2", complete: true}
]

const getAllTasks = (req,res) => {
    res.render("index", {title: "Lista de Tareas", tasks})    
}

const getAddTaskForm = (req,res) => {
    res.render("add", {title: "Agregar Tareas", tasks}) 
}

const addTask = (req,res) => {
    let {title} = req.body
    let id = tasks.length + 1
    tasks.push({id, title, complete: false})
    res.redirect("/")
}

const getEditTaskForm = (req,res) => {
    let id = parseInt(req.params.id)
    let taskIndex = tasks.findIndex(task => task.id === id)

    if(!task){
        res.redirect("/")
    }else{
        res.render("edit",{title: "Editar Tarea", task})
    }
}

const editTask = (req,res) => {
    let id = parseInt(req.params.id)
    let taskIndex = tasks.findIndex(task => task.id === id)
    console.log(taskIndex)

    if(taskIndex === -1){
        res.redirect("/")
    }else{
        tasks[taskIndex].title = req.body.title
        res.redirect("/")
    }
}

const completeTask = (req,res) => {
    let id = parseInt(req.params.id)
    let taskIndex = tasks.findIndex(task => task.id === id)

    if (task){
        task.complete = true
    }

    res.redirect("/")
}

const uncompleteTask = (req,res) => {
    let id = parseInt(req.params.id)
    let taskIndex = tasks.findIndex(task => task.id === id)

    if (task){
        task.complete = false
    }

    res.redirect("/")
}

const deleteTask = (req,res) => {

    let id = parseInt(req.params.id)
    tasks = tasks.filter((task) => task.id !== id)
    res.redirect("/")
}

export default {
    getAllTasks,
    getAddTaskForm,
    addTask,
    getEditTaskForm,
    editTask,
    completeTask,
    uncompleteTask,
    deleteTask
}