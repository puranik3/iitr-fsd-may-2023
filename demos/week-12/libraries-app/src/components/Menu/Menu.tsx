import {
    Container,
    Nav,
    Navbar
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faBook } from '@fortawesome/free-solid-svg-icons';

const Menu = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} to="/home">
                    <FontAwesomeIcon icon={faBook} className="me-2" />
                    Home
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/libraries">Libraries</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;
