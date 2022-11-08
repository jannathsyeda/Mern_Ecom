const express = require('express')
const app=express()
const products=require('./data/products.js')
console.log(products)
console.log("server conncected")
app.get('/',(req,res)=>{
    res.send("api is running")
})
app.get('/api/product',(req,res)=>{
    res.json(products)
    
})
app.get('/api/product/:id',(req,res)=>{
    const product=products.find(i=>i._id===req.params.id)
    res.json(product)
    
})
app.listen(5000,console.log('Server running on port 5000'))

