import React, { useState } from "react";
import { Button, Card, Col, Image, ListGroup, Row } from 'react-bootstrap';
import FormContainer from "../Components/FormContainer";
import CheckoutSteps from "../Components/CheckoutSteps";
import { useDispatch, useSelector } from "react-redux";
import Message from "../Components/Message"; 
import { Link } from "react-router-dom";

const PlaceOrderScreen = () => {

    const cart = useSelector(state => state.cart)
const handlePlaceOrder=()=>{
    console.log('Place Order');
}

  return (
    <>
        <CheckoutSteps step1 step2 step3 step4 />
        <Row>
            <Col md={8}>
                <ListGroup variant='flush'>
                <ListGroup.Item>
                    <h2>Shipping</h2>
                    <p> <strong style={{fontWeight:'bold', color:'#000'}}>Address: </strong>
                    
                    {cart.shippingAddress.address} {cart.shippingAddress.city}
                     {cart.shippingAddress.postalCode} {cart.shippingAddress.country}
                    </p>
                   
                </ListGroup.Item>

                 <ListGroup.Item>
                    <h2>Payment Method</h2>
                    <p><strong style={{fontWeight:'bold', color:'#000'}}>Method: </strong>
                      {cart.paymentMethod} 
                     </p>
                 </ListGroup.Item>

                 <ListGroup.Item>
                    <h2>Order Items</h2>
                     {cart.cartItems.length === 0 ? <Message>Your Cart is Empty</Message>
                     :(
                         <ListGroup variant='flush'>
                             {cart.cartItems.map((item,index) =>(
                                <ListGroup.Item key={index}>
                                  
                                    <Row>
                                       <Col md={1}>
                                         <Image
                                         src={item.image}
                                         alt={item.name}
                                         rounded fluid
                                         />
                                       </Col> 
                                       <Col>
                                       <Link to={`/product/${item.product}`}>
                                        {item.name}
                                       </Link>
                                       
                                       </Col>
                                       <Col md={4}>
                                         {item.qty} x ${item.price} = ${item.qty * item.price}
                                       </Col>
                                    </Row>
                                </ListGroup.Item>
                             ))}
                         </ListGroup>
                     ) 
                    }
                 </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md={4}>
               <Card>
                   <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h2>Order Summary</h2>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>Items</Col>
                                <Col>${cart.itemsPrice}</Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>Shipping</Col>
                                <Col>${cart.shippingPrice}</Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>Tax</Col>
                                <Col>${cart.taxPrice}</Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>Total</Col>
                                <Col>${cart.totalPrice}</Col>
                            </Row>
                        </ListGroup.Item>
                         
                         <ListGroup.Item>
                             {/* {Error && <Message variant="danger">{error}</Message>} */}
                         </ListGroup.Item>
                        <ListGroup.Item>
                            <Button
                            className="btn-block"
                            type="button"
                            disabled={cart.cartItems===0}
                            onClick={handlePlaceOrder}
                            >
                                Place Order
                            </Button>
                        </ListGroup.Item>

                   </ListGroup>
               </Card>
           </Col>
        </Row>
    </>
  )
}

export default PlaceOrderScreen