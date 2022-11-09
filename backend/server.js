import express from 'express'
import dotenv from 'dotenv'
import connectDB  from './config/db.js'
import products from './data/products.js'
const app=express()
connectDB()
dotenv.config()
console.log(products)
console.log("server conncected")
app.get('/',(req,res)=>{
    res.send("api is running")
})
app.get('/api/product',(req,res)=>{
    res.json(products)
    
})
app.get('/api/product/:id',(req,res)=>{
    const product=find(i=>i._id===req.params.id)
    res.json(product)
    
})
const PORT=process.env.PORT || 5000
app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))

