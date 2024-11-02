import { client } from "../DB/index.js";
export const gettasks=async()=>{
    try {
        const data=await client.query("Select * from tasks")
        return data.rows
    } catch (error) {
        return "Tasklarni olib kelishda xatolik"
    }
}
export const gettaskbyid=async(id)=>{
    try {
        const data=await client.query("Select * from tasks where id=$1",[id])
        return data.rows
    } catch (error) {
        return "Taskni olib kelishda xatolik"
    }
}
export const createtask=async(title,orders,description,userId,boardId,columnId)=>{
    try {
        const data=await client.query("Insert into tasks(title,orders,description,userId,boardId,columnId) Values($1,$2,$3,$4,$5,$6) returning *",[title,orders,description,userId,boardId,columnId])
        return data.rows
    } catch (error) {
        return "Avval Board table va user tablega ma'lumot yozishingiz kerak"
    }
}
export const updatetask=async(title,orders,description,id)=>{
    try {
        const data=await client.query("Update tasks set title=$1,orders=$2,description=$3 where id=$4 returning *",[title,orders,description,id])
        return data.rows
    } catch (error) {
        return error.message
    }
}
export const deletetask=async(id)=>{
    try {
        const data=await client.query("Delete from tasks where id=$1 returning *",[id])
        return data.rows
    } catch (error) {
        return "Taskni o'chirishda xatolik"
    }
}