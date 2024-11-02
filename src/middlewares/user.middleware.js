export const registermiddleware=async(req,res,next)=>{
    try {
        const {name,email,password}=req.body
        if(!name || !email || !password){
            throw new Error("Register qilishga Ma'lumot toliqmas")
        }
        next()
    } catch (error) {
        res.status(400).send("Register qilishga Ma'lumot toliqmas")
    }
}
export const loginmiddleware=async(req,res,next)=>{
    try {
        const {email,password}=req.body
        if(!email || !password){
            throw new Error("Login qilishga Ma'lumot to'liqmas")
        }
        next()
    } catch (error) {
        res.status(400).send("Login qilishga Ma'lumot to'liqmas")
    }
}
export const updateusermiddleware=async(req,res,next)=>{
    try {
        const {name,email,password}=req.body
        if(!name || !email || !password){
            throw new Error("Update qilishga Ma'lumot toliqmas")
        }
        next()
    } catch (error) {
        res.status(400).send("Update qilishga Ma'lumot toliqmas")
    }
}