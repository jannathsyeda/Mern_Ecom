import {React, useEffect}from 'react'
import {Row,Col} from 'react-bootstrap'
import Product from '../Components/Product'
import { useDispatch, useSelector } from 'react-redux'
import {listProduct} from '../actions/productAction'
import Loader from '../Components/Loader.js'
import Message from '../Components/Message'
const HeaderScreens = () => {
const productsList=useSelector((state)=>state.productList)
const {loading,products,error}=productsList
const dispatch=useDispatch()

useEffect(()=>{
    dispatch(listProduct())
},[dispatch])


  return (
<>
<h1>Latest Products</h1>{loading?( <Loader/> ):error?(<Message variant={'danger'}>{error}</Message>):(<Row>
    {
        products.map((product)=>(
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product}/>
            </Col>
        ))
    }
</Row>)}
<Row>
    {
        products.map((product)=>(
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product}/>
            </Col>
        ))
    }
</Row>
</>  )
}

export default HeaderScreens