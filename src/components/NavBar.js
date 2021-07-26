import Navbar from 'react-bootstrap/navbar'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';


export default function NavBar() {
    return (
        <Navbar bg="success">
            <Navbar.Brand><Link to={`/`}>thEcommerce</Link></Navbar.Brand>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/products">Productos</Link>
                    </li>
                    <NavDropdown title="Categorías ">
                        <Nav.Link><Link to={`/products/category/MLA1430`}>Moda</Link></Nav.Link>
                        <Nav.Link><Link to={`/products/category/MLA1648`}>Computación</Link></Nav.Link>
                        <Nav.Link><Link to={`/products/category/MLA1051`}>Smartphones</Link></Nav.Link>
                        <Nav.Link><Link to={`/products/category/MLA5726`}>Electrodomésticos</Link></Nav.Link>
                    </NavDropdown>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="" aria-label="Search"></input>
                    <Button variant='danger'> Buscar </Button>
                </form>
                <Button className="btn btn-outline-dark my-2 my-sm-0 .bg-gradient-success" type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                </Button>
            </div>
        </Navbar>
    )
}