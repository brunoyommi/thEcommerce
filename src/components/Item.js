import React from 'react';
import ItemCount from './ItemCount';
import { useState, useEffect } from 'react';

export default function Item({ title, image, price, i }) {

  const [totalItems, setTotalItems] = useState(0);

  const agregarAlCarrito = (unNumero) => {
    console.log(unNumero);
    setTotalItems(totalItems + unNumero);
  }

  return (
    <>
      {/* <h2>La cantidad de elementos en el carrito es {totalItems}</h2> */}

      <div className="itemContainer container">
        <div className="productCard card text-white bg-dark">
          <div className="itemHeader card-header">{title}</div>
          <div className="card-body">
            <img className="listImage" src={image} />
            <p className="card-text" key={i}>Precio: ${price}</p>
          </div>
        </div>
        <ItemCount
          stock={5}
          onAdd={agregarAlCarrito}
          initial={1} />
      </div>
    </>
  )
}