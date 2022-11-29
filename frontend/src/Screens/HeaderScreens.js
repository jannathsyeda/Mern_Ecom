import {React, useEffect,useState}from 'react'
import {Row,Col} from 'react-bootstrap'
import Product from '../Components/Product'
import { useDispatch, useSelector } from 'react-redux'
import {listProduct} from '../actions/productAction'
const HeaderScreens = () => {

const dispatch=useDispatch()

useEffect(()=>{
    dispatch(listProduct())
},[dispatch])
const products=[]

  return (
<>
<h1>Latest Products</h1>
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