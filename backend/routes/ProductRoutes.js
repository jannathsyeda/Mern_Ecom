import express from 'express'
const router =express.Router()
import Product from '../Models/productModel'
app.get('/',(req,res)=>{
    res.json(products)
    
})
app.get('/:id',(req,res)=>{
    const product=find(i=>i._id===req.params.id)
    res.json(product)
    
})

export default router