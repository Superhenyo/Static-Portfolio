import { Container, Nav, Navbar } from "react-bootstrap";
import logoIcon from "../images/LOGOIcon.png";

function AppNavbar() {
  return (
    <Container fluid className="p-0 m-0 sticky-top">
      <Navbar collapseOnSelect expand="lg" className="navBarBackground">
        <Navbar.Brand href="/" className="ms-5">
          <img
            src={logoIcon}
            width="150"
            height="30"
            alt="Logo"
            className="d-line-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav ml-5">
          <Nav className="ms-auto d-flex justify-content-around">
            <Nav.Link href="/" className="navBarFont ms-2 me-5">
              Home
            </Nav.Link>
            <Nav.Link href="projects" className="navBarFont ms-2 me-5">
              Project
            </Nav.Link>
            <Nav.Link href="about" className="navBarFont ms-2 me-5">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default AppNavbar;
