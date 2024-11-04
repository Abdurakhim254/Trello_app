import {createuser,getallusers,getuserbyemail,getuserbyid,updateuser,deleteuser} from "../services/index.js"
import bcrypt from "bcrypt"
export const registerUser=async(req,res)=>{
    try {
        let {name,email,password}=req.body
        const salt=await bcrypt.genSalt(10)
        const hashpassword=await bcrypt.hash(password,salt)
        password=hashpassword
        const data=await createuser(name,email,password)
        delete data[0].password
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send("Registratsiyada xatolik")
    }   
}

export const loginUser=async(req,res)=>{
    try {
        const {email,password}=req.body
        const data=await getuserbyemail(email)
        if(data.length!=1){
            res.status(200).send("Register qilishingiz kerak")
        }
        const pass=await bcrypt.compare(password,data[0].password)
        if(!pass){
            res.status(200).send("Register qilishingiz kerak")
        }
        res.status(200).send("Ro'yxatdan o'tgansiz")
    } catch (error) {
        res.status(400).send("Loginda xatolik")
    }   
}

export const getUsers=async(req,res)=>{
    try {
        const data=await getallusers();
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send("Userlarni olib kelishda xatolik")
    }   
}

export const getUserByid=async(req,res)=>{
    try {
        const id=+req.params.id
        const data=await getuserbyid(id)
        delete data[0].password
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send("Userni olib kelishda xatolik")
    }   
}

export const updateUserByid=async(req,res)=>{
    try {
        let id=+req.params.id
        let {email,name,password}=req.body
        const salt=await bcrypt.genSalt(10)
        const hashpassword=await bcrypt.hash(password,salt)
        password=hashpassword
        const data=await updateuser(name,email,password,id)
        delete data[0].password 
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send("Userni yangilashda xatolik")
    }   
}

export const deleteUserByid=async(req,res)=>{
    try {
        const id=+req.params.id
        const data=await deleteuser(id)
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send("Userni o'chirishda xatolik")
    }   
}
