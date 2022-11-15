import express from 'express'
import asyncHandler from 'express-async-handler'
const router =express.Router()
import Product from '../Models/productModel.js'

//@desc Fetch all products
//@route GET/api/products
//@access public

router.get('/',asyncHandler(async(req,res)=>{
    const ALLProducts=await Product.find({})

    res.json(ALLProducts)
    
}))
router.get('/:id',asyncHandler(async(req,res)=>{
    const productById=await Product.findById(req.params.id)
    if(productById){
     res.json(productById)   
    }else{
        res.status(404).json({message:"product not found"})
    }
    
    
}))

export default router