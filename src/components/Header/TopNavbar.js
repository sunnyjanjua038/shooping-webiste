import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink} from 'react-router-dom'
const TopNavbar = () => {

      return (
        <Navbar expand="lg" bg='dark' variant='dark'>
          <Container>
            <NavLink href="/" className='navbar-brand'>Shop Now</NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <NavLink to="/" className='nav-link'>Home</NavLink>
                <NavDropdown title="Catagories" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <NavLink to='/products' className='nav-link'>Products</NavLink>
                <NavLink to='/contact' className='nav-link'>Contact</NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }
    
export default TopNavbar
