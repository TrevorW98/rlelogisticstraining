import { Container, Navbar, Nav } from 'react-bootstrap';
import logo from '../Assets/Ridgeline-Truck-Decal-3.png';

function Navigator() {
    return (
        <Navbar className='navColor'>
            <Container fluid>
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        width="150"
                        height="45"
                        alt="Ridgeline Engineering"
                    />
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                    <Nav.Link href="#projects">Our Projects</Nav.Link>
                    <Nav.Link href="#estimate">Get an Estimate</Nav.Link>
                    <Nav.Link href="#contact">Contact Us</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navigator;