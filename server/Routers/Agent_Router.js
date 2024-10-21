const express=require("express")
const router=express.Router()
const Agent_Controller=require("../Controllers/Agent_Controller")
const AgentController=new Agent_Controller()


router.post("/add_user",AgentController.add_user)
router.post("/login",AgentController.Login)
module.exports=router