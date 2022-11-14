import express from 'express'
import dotenv from 'dotenv'
import connectDB  from './config/db.js'
import colors from 'colors'
import ProductRoutes from './routes/ProductRoutes.js'

const app=express()
connectDB()
dotenv.config()
console.log(products)
console.log("server conncected")
 app.use('/api/proucts',ProductRoutes )

app.get('/',(req,res)=>{
    res.send("api is running")
})

const PORT=process.env.PORT || 5000
app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow))

