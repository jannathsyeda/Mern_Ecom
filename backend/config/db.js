import mongoose from 'mongoose'

const connectDB=async()=>{
    try{
        const conn= await mongoose.connect(`mongodb+srv://Jannath:jannath123@cluster0.ku9hx.mongodb.net/E-shop?retryWrites=true&w=majority`,{
            useUnifiedTopology:true,
            useNewUrlParser: true,
            
        })
console.log(`MongoDB Connected:${conn.connection.host}`)
    }catch(error){
           console.error(`Error:${error.message}`)
           process.exit(1)
    }
}

export default connectDB