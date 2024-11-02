import express from "express"
import {application} from "./src/config/index.js"
import {userRouter,taskRouter,boardRouter} from "./src/routes/index.js"
import  {create_tables} from "./src/DB/index.js"
const app=express()

app.use(express.json())

app.use("/users",userRouter)
app.use("/boards",boardRouter)
app.use("/tasks",taskRouter)


app.use("/setup",async(req,res)=>{
	await create_tables()
	res.send("ok")
})

const PORT=application.port

app.listen(PORT,()=>{
	console.log("Server is  running on port "+PORT)
})
