import asyncHandler from 'express-async-handler'
import Product from '../Models/productModel.js'

const getAllProducts=asyncHandler(async(req,res)=>{
    const ALLProducts=await Product.find({})

    res.json(ALLProducts)
   
    
})

const productById=asyncHandler(async(req,res)=>{
    const productById=await Product.findById(req.params.id)
    if(productById){
     res.json(productById)   
    }else{
        res.status(404).json({message:"product not found"})
    }
    
    
})

export {getAllProducts,productById}