import { client } from "../DB/create_tables.js";
export const getallusers=async()=>{
    try {
        const res=await client.query("Select * from users")
        return res.rows
    } catch (error) {
        return "Userlarni olib kelishda xatolik mavjud"
    }
}
export const getuserbyid=async(id)=>{
    try{
        const result=await client.query("Select * from users where id=$1",[id])
        return result.rows
    }catch(error){
        return "Xatolik Mavjud"
    }
}

export const getuserbyemail=async(email)=>{
    try{
        const result=await client.query("Select * from users where email=$1",[email])
        return result.rows
    }catch(error){
        return "Xatolik Mavjud"
    }
}

export const createuser=async(name,email,password)=>{
    try{
        const result=await client.query("Insert into users(name,email,password) Values($1,$2,$3)",[name,email,password])
        return "User yaratildi"
    }catch(error){
        return error.message
    }
}
export const updateuser=async(name,email,password,id)=>{
    try {
        await client.query("Update users set name=$1,email=$2,password=$3 where id=$4",[name,email,password,id])
        return "User yangilandi"
    } catch (error) {
        return "Userni yangilashda xatolik"
    }
}

export const deleteuser=async(id)=>{
    try {
        await client.query("Delete  from users where id=$1",[id])
        return "User o'chirildi"
    } catch (error) {
        return "Userni o'chirishda xatolik"
    }
}