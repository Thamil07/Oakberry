const express=require("express")
const Product_controller=require("../Controllers/Product_Controller")
const ProductController=new Product_controller();
const router=express.Router()

router.post("product/add_product",ProductController.add_product)

module.exports=router