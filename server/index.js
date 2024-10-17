const express=require("express")
const cors= require("cors")
const port=5555

const app=express()
app.use(cors())
app.use(express.json())


app.listen(port,()=>{
    console.log(`server is successfully running on this port 5555`);
    
})