import { Navbar,Nav, Container } from 'react-bootstrap'
import CartWidget from '../Cart/CartWidget.js';
import { useCart } from '../../context/CartContext';

function NavBar() {
  const {cart} = useCart();
  console.log(cart.length)
    return (
        
       <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/">DevBar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Menu</Nav.Link>
    </Nav>
    <CartWidget items={cart.length}/>
    </Container>
  </Navbar>
        
    )
}

export default NavBar
