import React, { useEffect, useState } from 'react';
import { useCartContext } from './Context';
import { Link } from 'react-router-dom';


export default function Checkout() {
    const { setMostrar, idCompra, mostrar, createOrder, cartItems, cartCount, subTotal } = useCartContext();
    const [fragmento, setFragmento] = useState("");
    const x = () => (<div className="card-body">
        <h5>Su carrito está vacío, elija un nuevo producto</h5>
        <Link className="nav-link" to="/products">Continuar comprando</Link>
    </div>)

    const y = () => ( <div>
        <div className="card-header">
            <h1>Complete sus datos</h1>
        </div>
        <form className="checkout-form" onSubmit={(data) => createOrder(data)}>
            <div className="mb-3">
                <label className="form-label ">Nombre y Apellido</label>
                <input type="text" className="form-control " />
            </div>
            <div className="mb-3">
                <label className="form-label">Teléfono</label>
                <input type="tel" className="form-control " />
            </div>
            <div className="mb-3">
                <label className="form-label ">Correo Electrónico</label>
                <input type="email" className="form-control " aria-describedby="emailHelp" />
            </div>
            <button type="submit" className="btn btn-primary purchaseButton">Comprar</button>
        </form>
        <div className="checkout">
            <div className="card-header">
                <h1>CHECKOUT</h1>
                <h3>Total: ${subTotal}</h3>
            </div>

            < ol className="list-group list-group-numbered">
                {cartItems.length > 0 && cartItems.map((item, index) =>
                    <div key={index} className="itemContainer container">

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">{item.title}</div>
                                Precio unitario: ${item.price}
                            </div>
                            <span className="badge bg-primary rounded-pill">{item.qty}</span>
                        </li>
                    </div>)
                }
            </ol>
        </div>
    </div>
    )

    useEffect(() => {
        (cartCount > 0 ) ? setFragmento(y) : setFragmento(x);
        setMostrar(true);
    }, [])

    return (
        <>
            {mostrar ?
                <div>
                   {fragmento}
                </div> :
                <div>
                    <div className="alert d-block alert-success alertConfirmacion col-12" role="alert">
                        <p>Muchas gracias por su compra!</p>
                        <strong>Su número de orden es: {idCompra}</strong>
                    </div>
                    <Link className="nav-link" to="/">Volver al inicio</Link>
                </div>
            }
        </>
    )
}

