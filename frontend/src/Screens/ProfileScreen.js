import { React, useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { Col, Row, Image, ListGroup, Card, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Message from "../Components/Message";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Components/Loader";
import {
  userDetailsAction,
  userProfileUpdateAction,
} from "../actions/userAction";

const ProfileScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userProfileUpdate = useSelector((state) => state.userUpdateProfile);
  const { success } = userProfileUpdate;

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    } else {
      if (user && !user.name) {
        dispatch(userDetailsAction("profile"));
      } else {
        setName(user ? user.name : "");
        setEmail(user ? user.email : "");
      }
    }
  }, [userInfo, user]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (email != "" && password != "" && name != "" && confirmPassword != "") {
      if (password != confirmPassword) {
        setMessage("password do not match");
      } else {
        dispatch(
          userProfileUpdateAction({ id: user._id, name, email, password })
        );
      }
    }
  };

  return (
    <Row>
      <Col md={3}>
        <h1>User Profile</h1>
        {message && <Message variant={"danger"}>{message}</Message>}
        {error && <Message variant={"danger"}>{error}</Message>}
        {success && <Message variant={"success"}>Profile Updated</Message>}

        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></Form.Control>
          </Form.Group>

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

          <Form.Group>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Confirm password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            ></Form.Control>
          </Form.Group>

          <Button type="submit" variant="primary">
            Update
          </Button>
        </Form>
      </Col>
      <Col md={9}></Col>
    </Row>
  );
};

export default ProfileScreen;
