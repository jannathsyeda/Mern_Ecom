import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {

  const dispatch=useDispatch()

  const userLogin=useSelector((state)=>state.userLogin)
  const {userInfo}=userLogin

  const logoutHandler=()=>{
    console.log('logout')
  }
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            E-shop
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/cart">
                <i className="fas fa-shopping-cart"></i>Cart
              </Nav.Link>
            {userInfo?(
                 <NavDropdown title={userInfo.name} id='username'>
                 <Link to="profile">
                 <NavDropdown.Item>Profile</NavDropdown.Item>
                 </Link>
                 <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>

                 </NavDropdown>
            ):(
  <Nav.Link as={Link} to="/login">
                <i className="fas fa-user"></i>Sign In
              </Nav.Link>
            )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
