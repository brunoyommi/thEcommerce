import React from 'react';

export default function Item({title, image, price, i}) {
    return (
        <>
            <div className="itemContainer container">                
                    <div className="productCard card text-white bg-dark">
                    <div className="itemHeader card-header">{title}</div>
                    <div className="card-body">
                      <img className="listImage" src={image}/>
                      <p className="card-text" key={i}>Precio: ${price}</p>
                    </div>
                  </div>                                              
            </div>
        </>
    )
}