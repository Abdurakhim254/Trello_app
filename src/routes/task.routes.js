import express from "express"
import {getTasks,gettaskByid,createTask,updateTask,deleteTaskByid} from "../controllers/index.js"
import {checktaskMiddleware,updatetskMiddleware} from '../middlewares/index.js'
export const taskRouter=express.Router()

taskRouter.get("/tasks",getTasks)
taskRouter.get("/tasks/:id",gettaskByid)
taskRouter.post("/tasks",checktaskMiddleware,createTask)
taskRouter.put("/tasks/:id",updatetskMiddleware,updateTask)
taskRouter.delete("/tasks/:id",deleteTaskByid)
