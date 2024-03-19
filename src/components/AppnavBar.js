import { Container, Nav, Navbar } from "react-bootstrap";
import logoIcon from "../images/LOGOIcon.png";

function AppNavbar() {
  return (
    <Container fluid className="bg-black p-0 m-0 sticky-top">
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="/" className="ms-5">
          <img
            src={logoIcon}
            width="150"
            height="30"
            alt="Logo"
            className="d-line-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="me-2" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto me-5">
            <Nav.Link href="/" className="navBarFont me-3">
              Home
            </Nav.Link>
            <Nav.Link href="projects" className="navBarFont me-3">
              Project
            </Nav.Link>
            <Nav.Link href="tools" className="navBarFont me-3">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default AppNavbar;
