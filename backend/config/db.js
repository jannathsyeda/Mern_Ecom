import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'

const connectDB=async()=>{
    try{
        // const conn= await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ku9hx.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,{
         const conn= await mongoose.connect(process.env.MONGO_URI,{
   
        useUnifiedTopology:true,
            useNewUrlParser: true,
            
        })
console.log(`MongoDB Connected:${conn.connection.host}`.cyan.underline)
    }catch(error){
           console.error(`Error:${error.message}`.red.underline.bold)
           process.exit(1)
    }
}

export default connectDB