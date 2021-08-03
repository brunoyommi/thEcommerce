import React, {useContext} from 'react';
import Navbar from 'react-bootstrap/navbar'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';


export default function NavBar() {
    const listaCategorias = [{ nombre: 'Moda', id: 'MLA1430' }, { nombre: 'Computacion', id: 'MLA1648' }, { nombre: 'Smartphones', id: 'MLA1051' }, { nombre: 'Electrodomésticos', id: 'MLA5726' }];


    const buscar = (form) =>{
        form.preventDefault();
        console.log('Usted ha buscado: ', form.target[0].value);
    }


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
                        {listaCategorias.map((cat, i) => {
                            return (
                                <>
                                    <Nav.Link><Link to={`/products/category/${cat.id}`}>{cat.nombre}</Link></Nav.Link>
                                </>
                            )
                        })}
                    </NavDropdown>
                </ul>
                <form onSubmit={(data)=>{buscar(data)}} className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="" aria-label="Search"></input>
                    <Button type="submit" variant='danger'> Buscar </Button>
                </form>
                <CartWidget></CartWidget>
            </div>
        </Navbar>
    )
}