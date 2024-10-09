const express=require("express")
const bodyparser=require("body-parser")
const cors=require("cors")


const app=express()
app.use(express.json())
app.use(bodyparser.json())
app.use(cors())
const port=5000;

app.listen(port,()=>{
    console.log(`Server is successfully running on this port No:${port}`);
    
})