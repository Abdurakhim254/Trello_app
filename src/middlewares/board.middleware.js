export const checkboardMiddleware=async(req,res,next)=>{
    try {
        const {title,columns}=req.body
        if(!title || !columns){
            throw new Error("Board yaratishga Ma'lumot to'liqmas")
        }
        next()
    } catch (error) {
        res.status(400).send("Board yaratishga Ma'lumot to'liqmas")
    }
}
export const updateBoardmiddleware=async(req,res,next)=>{
   try {
        const {title,columns}=req.body
        if(!title || !columns){
            throw new Error("Board update qilishga Ma'lumot to'liqmas")
        }
        next()
   } catch (error) {
        res.status(400).send("Boardni update qilishga Ma'lumot to'liqmas")
   } 
}