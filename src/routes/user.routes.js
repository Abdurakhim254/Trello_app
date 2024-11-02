import express from "express"
import { registerUser,loginUser,getUsers,getUserByid,updateUserByid,deleteUserByid } from "../controllers/index.js"
import {registermiddleware,loginmiddleware,updateusermiddleware} from "../middlewares/index.js"
export const userRouter=express.Router()

userRouter.post("/register",registermiddleware,registerUser)
userRouter.post("/login",loginmiddleware,loginUser)
userRouter.get("/users",getUsers)
userRouter.get("/users/:id",getUserByid)
userRouter.put("/users/:id",updateusermiddleware,updateUserByid)
userRouter.delete("/users/:id",deleteUserByid)
