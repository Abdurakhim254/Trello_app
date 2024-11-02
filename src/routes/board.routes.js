import express from "express"
import {getBoards,getBoardByid,createBoard,updateBoard, deleteBoardByid} from "../controllers/index.js"
import {checkboardMiddleware,updateBoardmiddleware} from "../middlewares/index.js"

export const boardRouter=express.Router()


boardRouter.get("/boards",getBoards)
boardRouter.get("/boards/:id",getBoardByid)
boardRouter.post("/boards",checkboardMiddleware,createBoard)
boardRouter.put("/boards/:id",updateBoardmiddleware,updateBoard)
boardRouter.delete("/boards/:id",deleteBoardByid)

