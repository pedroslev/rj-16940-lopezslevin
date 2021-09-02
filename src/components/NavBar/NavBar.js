import { Navbar,Nav, Container } from 'react-bootstrap'
import CartWidget from '../Cart/CartWidget.js';


function NavBar() {
    return (
        
       <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">DevBar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Inicio</Nav.Link>
      <Nav.Link href="#pricing">Contactanos</Nav.Link>
    </Nav>
    <CartWidget />
    </Container>
  </Navbar>
        
    )
}

export default NavBar
