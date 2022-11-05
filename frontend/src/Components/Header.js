import React from 'react'
import {
    Container ,Nav ,Navbar  
} from 'react-bootstrap'
import {  BrowserRouter} from 'react-router-dom'
import {LinkContainer} from "react-router-bootstrap"
const Header = () => {
  return <header>
    <Navbar bg="light" expand="lg">
      <Container>
        <BrowserRouter>
        <LinkContainer to="/">
        <Navbar.Brand href='/'>E-shop</Navbar.Brand>
          </LinkContainer>
          </BrowserRouter>
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='ms-auto'>
          <BrowserRouter>
          <LinkContainer to="/cart">
       
               <Nav.Link  >
              <i className='fas fa-shopping-cart'></i>Cart
              </Nav.Link>
              </LinkContainer>
              </BrowserRouter>
              <BrowserRouter>
          <LinkContainer to="/login">
            <Nav.Link ><i className='fas fa-user'></i>Sign In</Nav.Link>
            </LinkContainer>
            </BrowserRouter>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
}

export default Header