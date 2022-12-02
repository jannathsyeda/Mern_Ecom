import React,{useEffect} from 'react'
import {Link,useParams,useLocation  } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import {Row,Col,ListGroup,Image,From,Button ,Card} from 'react-bootstrap'
import Message from '../Components/Message'
import Loader from '../Components/Loader'
import {addCart}from '../actions/cartAction'
const Cart = () => {
    const {location}=useLocation()
    const { id } = useParams();
    const qty=location.search?Number(location.search.split('=')[1]):1
    console.log("qty,:" ,qty)
    const dispatch=useDispatch()
    useEffect(()=>{
      if(id){
        dispatch(addCart(id,qty))
      }
    },[id,qty,dispatch])
    return (
      <div>CartScreedsn</div>
    )
}

export default Cart