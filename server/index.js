const express=require("express")
const cors=require("cors")
const {ConnectDB,PORT}=require("./config/index")
const UserRouter=require("./Routers/Agent_Router")

const app=express()

app.use(express.json())
app.use(cors())
app.use("/api/auth",UserRouter)

ConnectDB()
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
}
)