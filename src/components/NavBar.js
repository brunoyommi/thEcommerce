import Navbar from 'react-bootstrap/navbar'
import CartWidget from './CartWidget';
import Brand from './Brand';
import NavDropDown from './NavDropDown';

export default function NavBar() {
    return (
        <Navbar bg="success" expand="lg">
            <Brand/>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Inicio <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Ofertas</a>
                    </li>
                    <NavDropDown/>                  
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="" aria-label="Search"></input>
                    <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Buscar</button>
                    <CartWidget />
                </form>
            </div>
        </Navbar>
    )
}