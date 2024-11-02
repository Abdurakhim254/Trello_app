import {client} from "../DB/index.js"
export const getallboards=async()=>{
    try {
        const data=await client.query("Select * from boards ")
        return data.rows
    } catch (error) {
        return "Boardlarni olib kelishda xatolik"
    }
}

export const getboardbyid=async(id)=>{
    try {
        const data=await client.query("Select * from boards where id=$1",[id])
        return data.rows
    } catch (error) {
        return "Boardni topishda xatolik"
    }
} 
export const createboard=async(title,columns)=>{
    try {
        const data=await client.query("Insert into boards(title,columns) Values($1,$2) returning *",[title,columns])
        return data.rows
    } catch (error) {
        return "Board yaratishda xatolik"
    }
}
export const updateboard=async(title,columns,id)=>{
    try {
        const data= await client.query("Update boards set title=$1,columns=$2 where id=$3 returning *",[title,columns,id])
        return data.rows
    } catch (error) {
        return "Boardni update qilishda xatolik"
    }
}
export const deleteboardByid=async(id)=>{
    try {
        await client.query("Delete from boards where id=$1",[id])
        return "Board o'chirildi"
    } catch (error) {
        return "Boardni o'chirishda xatolik"
    }
}