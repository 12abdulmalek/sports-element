import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';

const Menubar = () => {
    return (
      
         <div className='primary' style={{background:"black"}}>
                <Navbar bg="dark" className='container'  expand={false}>
  <Container fluid>
  <Navbar.Toggle style={{ color:"white" , background:"white" }}  aria-controls="offcanvasNavbar" />
  <Navbar.Offcanvas 
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="start"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">Link</Nav.Link>
          
        </Nav>
      
      </Offcanvas.Body>
    </Navbar.Offcanvas>
    {/* <Navbar.Brand style={{ color:"white" }}  href="#">Navbar Offcanvas</Navbar.Brand>
     */}
    <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
  </Container>
</Navbar>
         </div>
    
    );
};

export default Menubar;