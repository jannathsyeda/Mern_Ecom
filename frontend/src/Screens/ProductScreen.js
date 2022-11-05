import React from 'react'
import { useParams } from 'react-router-dom';
import products from '../products.js'

const ProductScreen = () => {
  const {id}=useParams()
  const product=products.find((p)=> p._id===id)
  return (<>
  
  </>
   
  )
}

export default ProductScreen