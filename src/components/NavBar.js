import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/navbar'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import { getFirestore } from "../firebase";


export default function NavBar() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        let catArr = [];
        const firestore = getFirestore();
        const collection = firestore.collection("products");
        const resultado = await collection.get();

        resultado.forEach(documento => {
            let newCategory = documento.data().category_id;
            if (!catArr.includes(newCategory)) {
                catArr = [...catArr, newCategory]
            }
        })
        setCategories(catArr);
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
                        {categories.map((cat, i) => {
                            return (
                                <>
                                    <Nav.Link><Link to={`/products/category/${cat}`}>{cat}</Link></Nav.Link>
                                </>
                            )
                        })}
                    </NavDropdown>
                </ul>
                <CartWidget></CartWidget>
            </div>
        </Navbar>
    )
}