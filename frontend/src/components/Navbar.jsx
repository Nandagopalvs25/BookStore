import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import { ACCESS_TOKEN } from '../constants';

const CustomNavbar=()=>

    {
       const navigate=useNavigate()
        if(localStorage.getItem(ACCESS_TOKEN)===null)
          return (
            <Navbar bg="dark"data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Brand onClick={()=>navigate("/")}>BookStore</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link onClick={()=>navigate("/login")}>Login</Nav.Link>
                  <Nav.Link onClick={()=>navigate("/register")}>Register</Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
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
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        )
        else{
        return (
            <Navbar bg="dark"data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Brand onClick={()=>navigate("/")}>BookStore</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link onClick={()=>navigate("/logout")}>Logout</Nav.Link>
                  <Nav.Link onClick={()=>navigate("/cart")}>Cart</Nav.Link>
                  <Nav.Link onClick={()=>navigate("/orders")}>Orders</Nav.Link>
                  
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        )}
    }
 
 
export default CustomNavbar;