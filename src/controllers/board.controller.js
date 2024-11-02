import { getallboards,getboardbyid,createboard,updateboard,deleteboardByid } from "../services/index.js"

export const getBoards=async(req,res)=>{
    try {
        const data=await getallboards()
        res.status(200).send(data)
    } catch (error) {
     res.status(400).send("Boardlarni olib kelishda xatolik")   
    }
}

export const getBoardByid=async(req,res)=>{
    try {
        const id=+req.params.id
        const data=await getboardbyid(id)
        res.status(200).send(data)
    } catch (error) {
     res.status(400).send("Boardni olib kelishda xatolik")   
    }
}
export const createBoard=async(req,res)=>{
    try {
        const {title,columns}=req.body
        const data=await createboard(title,columns)
        res.status(200).send(data)
    } catch (error) {
     res.status(400).send("Boardlarni yaratishda xatolik")   
    }
}
export const updateBoard=async(req,res)=>{
    try {
        const id=+req.params.id
        const {title,columns}=req.body
        const data=await updateboard(title,columns,id)
        res.status(200).send(data)
    } catch (error) {
     res.status(400).send("Boardni yangilashda xatolik")   
    }
}

export const deleteBoardByid=async(req,res)=>{
    try {
        const id=req.params.id
        const data=await deleteboardByid(id)
        res.status(200).send(data)
    } catch (error) {
     res.status(400).send("Boardni o'chirishda xatolik")   
    }
}