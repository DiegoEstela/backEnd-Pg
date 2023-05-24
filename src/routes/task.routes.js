const {Router} = require('express')
const { createTask, deleteTask, getAllTask, getTask, updateTask } = require('../controllers/task.controller') 

const router = Router()


router.get("/task", getAllTask)

router.get("/task/:id", getTask)

router.post("/task", createTask)

router.delete("/task", deleteTask)

router.put("/task", updateTask)

module.exports = router

