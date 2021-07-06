import Navbar from 'react-bootstrap/navbar'
import CartWidget from './CartWidget';
import Brand from './Brand';
import NavDropDown from './NavDropDown';
import Boton from './Boton';

export default function NavBar() {
    return (
        <Navbar bg="success">
            <Brand />
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Inicio <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Ofertas</a>
                    </li>
                    <NavDropDown />
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="" aria-label="Search"></input>
                    <Boton texto='Buscar' />
                </form>
                <CartWidget />
            </div>
        </Navbar>
    )
}