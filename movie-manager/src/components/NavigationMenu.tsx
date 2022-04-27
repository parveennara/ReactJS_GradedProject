import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClapperboard } from '@fortawesome/free-solid-svg-icons';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavigationMenu = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to={"/"} as={NavLink} className={"me-4"}>
            <span style={{ fontSize: '2.5rem', color: 'goldenrod' }} >
              <FontAwesomeIcon icon={faClapperboard} />
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto fs-5">
              <Nav.Link to={"/"} as={NavLink}>Home</Nav.Link>
              <Nav.Link to={"/movies-in-theaters"} as={NavLink}>Movies in theaters</Nav.Link>
              <Nav.Link to={"/movies-coming"} as={NavLink}>Coming Soon</Nav.Link>
              <Nav.Link to={"/top-rated-india"} as={NavLink}>Top Rated Indian</Nav.Link>
              <Nav.Link to={"/top-rated-movies"} as={NavLink}>Top Rated Movies</Nav.Link>
              <Nav.Link to={"/favourite"} as={NavLink}>Favourites</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
};

export default NavigationMenu;
