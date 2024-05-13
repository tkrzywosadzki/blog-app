import { Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    return (

        <Navbar bg="primary" variant="dark" expand="lg" className="mt-4 mb-4 rounded">
        
          <Navbar.Brand as={NavLink} to="/" style={{ fontSize: '20px', marginLeft: '10px' }} >Blog.app</Navbar.Brand>
            <Nav className="ms-auto" style={{marginRight:'10px'}}>
                <Nav.Link as={NavLink} to="/"  >Home</Nav.Link>
                <Nav.Link as={NavLink} to="/about"  >About</Nav.Link>
            </Nav>
        
        </Navbar>
    );
};

export default NavBar;