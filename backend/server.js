import express from 'express'
import dotenv from 'dotenv'
import connectDB  from './config/db.js'
import {notFound,errorHandler} from './middleware/error.js'
import colors from 'colors'
import RouterProduct from './routes/RouterProduct.js'

const app=express()
connectDB()
dotenv.config()
console.log("server conncected")


app.get('/',(req,res)=>{
    res.send("api is running")
})
app.use('/api/products',RouterProduct )


app.use(notFound)

app.use(errorHandler)

const PORT=process.env.PORT || 5000
app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow))

