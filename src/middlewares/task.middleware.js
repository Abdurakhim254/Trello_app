export const checktaskMiddleware=async(req,res,next)=>{
    try {
        const {title,orders,description,userId,boardId,columnId}=req.body
        if(!title || !orders || !description){
            throw new Error("Task yaratishga Ma'lumot to'liqmas")
        }
        if((!(typeof(userId)=='number') || !(userId>0))||(!(typeof(boardId)=='number')||!(boardId>0))||(!(typeof(columnId)=='number')||!(columnId>0))){
            throw new Error("Task yaratishga Ma'lumot to'liqmas")
        }
        next()
    } catch (error) {
        res.status(400).send("Task yaratishga Ma'lumot to'liqmas")
    }
}
export const updatetskMiddleware=async(req,res,next)=>{
    try {
        const {title,orders,description}=req.body
        if(!title || !orders || !description){
            throw new Error("Task update qilishga Ma'lumot to'liqmas")
        }
        next()
    } catch (error) {
        res.status(400).send("Task update qilishga Ma'lumot to'liqmas")
    }
}