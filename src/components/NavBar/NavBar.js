import { Navbar,Nav, Container } from 'react-bootstrap'
import CartWidget from '../Cart/CartWidget.js';


function NavBar() {
    return (
        
       <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/">DevBar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Menu</Nav.Link>
    </Nav>
    <CartWidget />
    </Container>
  </Navbar>
        
    )
}

export default NavBar
