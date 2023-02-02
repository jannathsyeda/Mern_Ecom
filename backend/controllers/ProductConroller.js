import asyncHandler from 'express-async-handler'
import Product from '../Models/productModel.js'

// @des get all products
// @route GET /api/products
// @access public

const getAllProducts=asyncHandler(async(req,res)=>{
    const ALLProducts=await Product.find({})

    res.json(ALLProducts)
   
    
})

// @des get product by id
// @route GET /api/products/:id
// @access public
const productById=asyncHandler(async(req,res)=>{
    const productById=await Product.findById(req.params.id)
    if(productById){
     res.json(productById)   
    }else{
        res.status(404).json({message:"product not found"})
    }
    
    
})

//@des delete product
//@route DELETE /api/products/:id
//@access private/admin
const deleteProduct=asyncHandler(async(req,res)=>{
    const product=await Product.findById(req.params.id)
    if(product){
        await product.remove()
        res.json({message:"product removed"})
    }else{
        res.status(404).json({message:"product not found"})
    }

})

export {getAllProducts,productById,deleteProduct}





