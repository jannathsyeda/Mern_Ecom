import React from 'react'
import {Container ,Col,Row}from 'react-bootstrap'
const Footers = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>Copyright &copy; Shop
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footers