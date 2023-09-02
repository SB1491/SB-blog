import { Container, Nav, NavDropdown, Navbar, NavbarBrand } from "react-bootstrap";

const Header = () => {
  return (
  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">SB's blog</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/computer">Computer</Nav.Link>
          <Nav.Link href="/linguistics">Linguistics</Nav.Link>
          <Nav.Link href="/drawing">Drawing</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default Header;