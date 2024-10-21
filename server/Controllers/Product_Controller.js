class Product_controller{
    async add_product(req,res){
        try{
            const {name, agpic, date, property_name,image, ogprice, offprice, location, type, bdroom,bhroom,size}=req.body;

            if(!name||!agpic||!date||!property_name||!image|| !ogprice||!location||!type||!bdroom||!bhroom||!size)
            {
                return res.status(400).json({Error:"Kindly Fill All Required Fields"});
            }
            // const new_product=await.Product.Create(name, agpic, date, property_name, ogprice, offprice, location, type, bdroom,bhroom,size);
            return res.status(201).json({new_product})
            
        }catch(err){
        return res.status(500).json({Error:err.message})
        }
    }

}
module.exports=Product_controller