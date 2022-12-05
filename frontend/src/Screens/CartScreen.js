import React, { useEffect } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  
  Button,
  Card,
} from "react-bootstrap";
import Message from "../Components/Message";
import Loader from "../Components/Loader";
import { addCart } from "../actions/cartAction";
import Form from 'react-bootstrap/Form';

const CartScreen = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  const qty = searchParams.get("qty");
  console.log("qty:", qty, "id:", id);

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  console.log(cartItems)
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(addCart(id, qty));
    }
  }, [id, qty, dispatch]);
  return (
    <Row>
      <Col md={8}>
        <h1>Shopping cart</h1>
        
        {
        cartItems.length==="0"?(
          <Message>Your cart is empty<Link to='/'>Go Back</Link></Message>
        ):(
          <ListGroup variant="flush">
          {
            cartItems.map((item)=>(
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded/>

                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>${item.price}</Col>
                  <Col md={2}>
                  <Form.Control as='select' value={item.qty} onChange={(e)=>dispatch(addCart(item.product, Number(e.target.value)))
                        }>

                        {  [...Array(item.countInStock).keys()].map((x)=>
                          (
                            <option key={x+1} value={x+1}>
                              {x+1}

                            </option>
                          ))}

                        </Form.Control>
                  </Col>
                </Row>

              </ListGroup.Item>
            ))
          }
          </ListGroup>
        )
        }
      </Col>
      <Col md={2}></Col>
      <Col md={2}></Col>
    </Row>
  );
};

export default CartScreen;
