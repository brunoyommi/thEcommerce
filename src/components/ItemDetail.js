import React from "react";
import ItemCount from './ItemCount';
import { useState } from 'react';

export default function ItemDetail({ item, title, image, price, description, stock }) {
    const [totalItems, setTotalItems] = useState(0);

    const agregarAlCarrito = (unNumero) => {
        setTotalItems(totalItems + unNumero);
    }

    return (
        <>
            <div className="card">
                <div className="row">
                    <aside className="col-sm-5 border-right">
                        <article className="gallery-wrap">
                            <div className="img-big-wrap">
                                <div> <img className="detailImage" alt="" src={image} /></div>
                            </div>
                        </article>
                    </aside>
                    <aside className="col-sm-7">
                        <article className="card-body p-5">
                            <h3 className="title mb-3">{title}</h3>

                            <p className="price-detail-wrap">
                                <span className="price h3 text-warning">
                                    <span className="currency">$</span><span className="num">{price}</span>
                                </span>
                            </p>
                            <dl className="item-property">
                                <dt>Descripcion</dt>
                                <dd><p>{description} </p></dd>
                            </dl>
                            <dl className="item-property">
                                <dt>Unidades disponibles</dt>
                                <dd><p>{stock} </p></dd>
                            </dl>

                            <ItemCount
                                stock={stock}
                                onAdd={agregarAlCarrito}
                                initial={1} />
                            <br></br>
                            <a href="#" className="btn btn-lg btn-primary text-uppercase"> Comprar </a>
                        </article>
                    </aside>
                </div>
            </div>
        </>
    )

}