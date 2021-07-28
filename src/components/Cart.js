import React from 'react';
import { useCartContext } from './Context';


export default function Cart() {
    const { removeFromCart, cartItems, clearCart, cartCount } = useCartContext();


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



            </div>


        </>
    )
}

