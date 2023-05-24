const pool = require("../db/db.js")

const getAllTask = async(req, res) =>{
    res.send("retrieven a list of task")
}

const getTask = async(req, res) =>{
    res.send("retrieven a single task")
}

const createTask = async(req,res)=>{
    const {title, description} = req.body
    const result = await pool.query("INSERT INTO taskdb (title, description) VALUES ($1, $2)",
    [ title, description])
    console.log(result)
    res.send("creating a task")
}

const deleteTask = async(req,res)=>{
    res.send("deleting a task")
}

const updateTask = async(req,res)=>{
    res.send("updating a task")
}

module.exports = {
    getAllTask,
    getTask,
    createTask,
    deleteTask,
    updateTask
}