import mongoose from "mongoose";
import dotenv from "dotenv"
import Product from './Models/productModel.js'
import users from "./data/User.js";
import connectDB from './config/db.js'
import Order from "./Models/orderModel.js";
import User from "./Models/UserModel.js";
import products from "./data/products.js";
import colors from "colors"
dotenv.config()
// console.log(products.map(i=>i))
const importData=async()=>{
    try{
      await connectDB()
          await Order.deleteMany()
          await Product.deleteMany()
          await User.deleteMany()
           const createdUsers=await User.insertMany(users)
            

           const adminUser= createdUsers[0]._id
           const sampleProducts=products.map(product =>{
            return {...product, user:adminUser}
           })
           await Product.insertMany(sampleProducts) 
           console.log("data imported!".green.inverse)
           process.exit()

    }catch(error){
      console.error(`${error}`.red.inverse)
      process.exit(1)
    }
} 

const destroyData=async()=>{
    try{
      await connectDB()

          await Order.deleteMany()
          await Product.deleteMany()
          await User.deleteMany()
           
           console.log("data destroy!".green.inverse)
           process.exit()

    }catch(error){
      console.error(`${error}`.red.inverse)
      process.exit(1)
    }
} 

if(process.argv[2] === '-d'){
    destroyData()
}
else{
    importData()
}