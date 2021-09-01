import { Navbar,Nav,NavDropdown,Form,FormControl,Button, Container } from 'react-bootstrap'


function NavBar() {
    return (
        <div>
       <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">DevBar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Inicio</Nav.Link>
      <Nav.Link href="#features">Categorias</Nav.Link>
      <Nav.Link href="#pricing">Contactanos</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </div>
    )
}

export default NavBar
