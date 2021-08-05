import React from 'react';
import { useCartContext } from './Context';
import { Link } from 'react-router-dom';


export default function Cart() {
    const { removeFromCart, cartItems, clearCart, cartCount, subTotal } = useCartContext();

    return (
        <>
            <div className="home">
                <div style={{ display: "inline-flex" }} className="card-header">
                    <div style={{ marginRight: "800px" }}>
                        <h1>CARRITO</h1>
                    </div>
                    {cartCount > 0 && <button className='btn-danger' type='button' onClick={() => clearCart()}>Vaciar carrito</button>}
                </div>


                {cartItems.length > 0 && cartItems.map((item, index) =>
                    <div key={index} className="itemContainer container">

                        <div className="itemHeader card-header">{item.title} </div>
                        <div className="card-body">
                            <img className="listImage" src={item.thumbnail} alt="" />
                            <p className="card-text">Precio: ${item.price}</p>
                            <h5>X {item.qty}</h5>
                            <button className='btn-danger' type='button' onClick={() => removeFromCart(item)}>Quitar del carrito</button>
                        </div>

                    </div>)}
                {subTotal > 0 &&
                    <div className="confirmar-compra">
                        <h3>Subtotal: ${subTotal}</h3>
                        <Link className="btn btn-lg btn-outline-primary text-uppercase" to={`/checkout`}> CONFIRMAR COMPRA </Link>
                    </div>
                }
                {subTotal === 0 &&
                    <div className="card-body">
                        <h5>Su carrito está vacío, elija un nuevo producto</h5>
                        <Link className="nav-link" to="/products">Continuar comprando</Link>
                    </div>}


            </div>


        </>
    )
}

