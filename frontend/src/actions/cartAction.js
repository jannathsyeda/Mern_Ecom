import {CART_ADD_ITEM} from '../Constants/CartConstant'
import axios from 'axios'

export const addCart=(id,qty)=>async(dispatch,getState)=>{
    const {data}=await axios.get(`/api/products/${id}`)
    dispatch({
        type:CART_ADD_ITEM,
        payload:{
            product:data._id,
            name:data.name,
            image:data.image,
            price:data.price,
            countInStock:data.countInStock,
            qty

        }
    })
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
}