

import { React, useEffect, useState } from "react";
// import { axios } from "axios";
import { Link,  useNavigate ,useSearchParams} from "react-router-dom";
import { Col, Row, Image, ListGroup, Card, Button } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
// import { userLogin } from "../actions/userAction";
// import Message from "../Components/Message";
// import Loader from "../Components/Loader";
import FormContainer from "../Components/FormContainer";
import { useDispatch, useSelector } from "react-redux";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate=useNavigate()

  const dispatch=useDispatch()

  const userLogin=useSelector(state=>state.userLogin)
  const {loading ,error,userInfo}= userLogin

  if(userInfo){
    navigate("/login")
  }
  useEffect(()=>{
   
  },[])

  const submitHandler=(e)=>{
 e.preventDefault()
  }


  return (
   

    <FormContainer> 
      <h1>Sign in</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary">
          Sign In
        </Button>
      </Form>

      <Row className="py-3">
        <Col>
        New Customer?{''} 
        
          Register
        
        </Col>

      </Row>
    </FormContainer> 
  
  )
};

export default LoginScreen;
