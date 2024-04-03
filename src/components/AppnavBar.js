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
          <Nav className="ms-auto d-flex justify-content-around" id="ads">
            <Nav.Link href="#Home" className="navBarFont" >
              Home
            </Nav.Link>
            <Nav.Link href="#Projects" className="navBarFont">
              Project
            </Nav.Link>
            <Nav.Link href="#Projects" className="navBarFont">
              {/* About */}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default AppNavbar;
