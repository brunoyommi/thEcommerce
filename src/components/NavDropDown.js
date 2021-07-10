import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';


export default function NavDropDown() {
    return (
        <NavDropdown title="Categorías ">
            <Nav.Link href="#">Moda</Nav.Link>
            <Nav.Link href="#">Electrónica</Nav.Link>
            <Nav.Link href="#">Smartphones</Nav.Link>
            <Nav.Link href="#">Electrodomésticos</Nav.Link>
        </NavDropdown>
        )   
}