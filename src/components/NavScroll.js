import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavScroll({children}) {
  return (
    <div className='NavScroll'>
        <Navbar bg="dark" expand="lg" fixed='top'>
            <Container fluid>
                <Navbar.Brand href="#" style={{color: "#FFF"}}>TSM</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="#home"  style={{color: "#FFF"}}>Home</Nav.Link>
                    <Nav.Link href="#calculator" style={{color: "#FFF"}}>Calculadora</Nav.Link>
                    <Nav.Link href="#about" style={{color: "#FFF"}}>Sobre</Nav.Link>
                    <Nav.Link href="#contact" style={{color: "#FFF"}}>Contato</Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <Form.Control
                    type="search"
                    placeholder="Pesquisar"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success">Pesquisar</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Container fluid>
            {children}
        </Container>
    </div>
  );
}

export default NavScroll;