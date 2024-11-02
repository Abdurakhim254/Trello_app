import dotenv from "dotenv"

dotenv.config()


export const application={
    PORT:process.env.PORT,
    host:process.env.host,
    user:process.env.user,
    password:process.env.password,
    database:process.env.database,
    port:process.env.port   
}