import React from 'react';


import {Container,Button,Nav,Navbar,Offcanvas } from 'react-bootstrap';

import Logo from '../../assets/images/Logo.png'
import ellipse from '../../assets/images/ellipse.svg'
import '../../index.css';
import HeaderTab from './headerTab';


const Header:React.FC = () => {

return( 
   <div style={{minHeight:'72vh'}} className="wrapper">
        <Navbar expand={'md'} className="header position-relative m-0 p-3">
          <Container fluid className='mb-5'>
            <Navbar.Brand href="#" style={{zIndex:999}}  >
                <img src={Logo} alt="App logo" width="100"/>
            </Navbar.Brand>
            <Navbar.Toggle style={{zIndex:999 }} aria-controls={`offcanvasNavbar-expand-md`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="end"
              style={{zIndex:999999 }}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                  Mobile view
                </Offcanvas.Title>
              </Offcanvas.Header>
              {/* 9999 */}
              <Offcanvas.Body className='p-0 d-flex ml-auto nav-canvas' style={{zIndex:9999}}>
                <Nav style={{justifyContent:'end'}} className="flex-grow-1 pe-3 nav-text">
                  <Nav.Link href="#action1">Product</Nav.Link>
                  <Nav.Link href="#action2">Services</Nav.Link>
                  <Nav.Link>About</Nav.Link>
                <Nav.Link >
                    <a className='px-4 py-1 bg-white text-primary rounded text-decoration-none'>
                        Log In
                    </a>
                </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        <div className='h-75'style={{marginTop:'-30px'}} >
            <HeaderTab/>
        </div>
        
        <img src={ellipse}  style={{width:'27.5rem'}} className="position-absolute top-0 end-0"/>
    </div>

   )
}



export default Header;