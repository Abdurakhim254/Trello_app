import {gettasks,gettaskbyid,createtask,updatetask,deletetask} from "../services/index.js"
export const getTasks=async(req,res)=>{
    try {
        const data=await gettasks()
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send("Tasklarni olib kelishda xatolik")
    }
}
export const gettaskByid=async(req,res)=>{
    try {
        const id=+req.params.id
        const data=await gettaskbyid(id)
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send("Tasklarni olib kelishda xatolik")
    }
}
export const createTask=async(req,res)=>{
    try {
        const {title,orders,description,userId,boardId,columnId}=req.body
        const data=await createtask(title,orders,description,userId,boardId,columnId)
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send("Tasklarni olib kelishda xatolik")
    }
}

export const updateTask=async(req,res)=>{
    try {
        const id=+req.params.id
        const {title,orders,description}=req.body
        const data=await updatetask(title,orders,description,id)
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send("Tasklarni olib kelishda xatolik")
    }
}
export const deleteTaskByid=async(req,res)=>{
    try {
        const id=req.params.id
        const data=await deletetask(id)
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send("Tasklarni olib kelishda xatolik")
    }
}